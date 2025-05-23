import { createContext, useContext, useEffect, useReducer } from 'react';
import { removeEmptyProperties } from './helpers';
import { ActionType, ActiveFiltersType, DegreeFinderActionType, DegreeFinderDispatchType, DegreeFinderStateType, FilterType, SelectedTermType, filterTermType } from './types';
import { useFilterTerms } from './hooks';
import { useCookies } from 'react-cookie';
import Message from './components/message';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const initialDegreeFinderState = {
	siteUrl: '',
	profileRootUrl: '',
	queryParams: {
		count: urlParams.get('count') || '',
		page: urlParams.get('page') || '',
		ids: urlParams.get('ids') || '',
		q: urlParams.get('q') || '',
		areas: urlParams.get('areas') || '',
		'degree-types': urlParams.get('degree-types') || '',
		campuses: urlParams.get('campuses') || '',
		colleges: urlParams.get('colleges') || '',
		departments: urlParams.get('departments') || '',
	},
};

const DegreeFinderContext = createContext<DegreeFinderStateType>({} as DegreeFinderStateType);
const DegreeFinderDispatchContext = createContext<DegreeFinderDispatchType>({} as DegreeFinderDispatchType);

function getSelectedTermsForGroup(selectedTerms: SelectedTermType[], groupName: string, param: string, groupTerms: filterTermType[]) {
	if (param) {
		const termIds = param.split(',');
		selectedTerms = termIds.reduce<SelectedTermType[]>((result, termId) => {
			const term = groupTerms.find((term) => term.term_id === parseInt(termId));
			if (term) {
				result.push({
					termId: termId,
					termName: term.name,
					group: groupName
				});
			}
			return result;
		}, selectedTerms);
	}

	return selectedTerms;
}

function degreeFinderReducer(state: DegreeFinderStateType, action: DegreeFinderActionType) {
	const type = action.type;

	switch (type) {
		case ActionType.INITIALIZE_FILTERS: {

			let activeFilters = undefined;

			if (state.queryParams.q) { // 🤮
				activeFilters = { type: FilterType.SEARCH, searchTerm: state.queryParams.q };
			}
			else if (state.queryParams.ids) { // 🤮🤮
				activeFilters = { type: FilterType.FAVORITES };
			}
			else if (state.queryParams.areas || state.queryParams['degree-types'] || state.queryParams.campuses) { // 🤮🤮🤮
				let selectedTerms: SelectedTermType[] = [];
				activeFilters = { type: FilterType.TERMS, selectedTerms: selectedTerms };

				selectedTerms = getSelectedTermsForGroup(selectedTerms, 'areas', state.queryParams.areas, action.payload.wsuwp_df_area);
				selectedTerms = getSelectedTermsForGroup(selectedTerms, 'degree-types', state.queryParams['degree-types'], action.payload.wsuwp_df_degree_type);
				selectedTerms = getSelectedTermsForGroup(selectedTerms, 'campuses', state.queryParams.campuses, action.payload.wsuwp_df_campus);

				activeFilters.selectedTerms = selectedTerms;
			}

			return {
				...state,
				filters: action.payload,
				activeFilters: activeFilters
			} as DegreeFinderStateType;
		}
		case ActionType.TOGGLE_TERM_FILTER: {
			const newActiveFilters: ActiveFiltersType = { type: FilterType.TERMS, selectedTerms: [] };

			const isSelected = state.activeFilters?.selectedTerms?.some(selectedTerm => selectedTerm.termId === action.payload.termId) || false;

			// if term is already selected, remove it. If not, insert it.
			newActiveFilters.selectedTerms = isSelected ?
				state.activeFilters?.selectedTerms?.filter(selectedTerm => selectedTerm.termId !== action.payload.termId) || []
				: [...(state.activeFilters?.selectedTerms || []), action.payload];

			// collect the ids of the selected terms for the group in question
			const selectTermIdsForGroup = newActiveFilters.selectedTerms.reduce<string[]>((result, selectedTerm) => {
				if (selectedTerm.group === action.payload.group) {
					result.push(selectedTerm.termId);
				}
				return result;
			}, []).join(',');

			return {
				...state,
				queryParams: {
					...state.queryParams,
					q: '',
					ids: '',
					[action.payload.group]: selectTermIdsForGroup,
				},
				activeFilters: newActiveFilters.selectedTerms.length > 0 ? newActiveFilters : undefined
			};
		}
		case ActionType.VIEW_FAVORITES: {
			return {
				...state,
				queryParams: {
					ids: action.payload.length > 0 ? action.payload.join(',') : 'na',
				},
				activeFilters: {
					type: FilterType.FAVORITES
				} as ActiveFiltersType
			}
		}
		case ActionType.SEARCH: {
			return {
				...state,
				queryParams: {
					q: action.payload,
				},
				activeFilters: {
					type: FilterType.SEARCH,
					searchTerm: action.payload
				} as ActiveFiltersType
			}
		}
		case ActionType.RESET: {
			return {
				...state,
				siteUrl: state.siteUrl,
				profileRootUrl: state.profileRootUrl,
				queryParams: {} as Record<string, string>,
				activeFilters: undefined
			}
		}
		default: {
			throw Error('Unknown action: ' + type);
		}
	}
}

export function DegreeFinderProvider({ siteUrl, profileRootUrl, children }: { siteUrl: string, profileRootUrl: string, children: JSX.Element | JSX.Element[] }) {
	initialDegreeFinderState.siteUrl = siteUrl;
	initialDegreeFinderState.profileRootUrl = profileRootUrl;
	const [state, dispatch] = useReducer(degreeFinderReducer, initialDegreeFinderState);
	const { data: filters, isLoading, error } = useFilterTerms(state.siteUrl);
	const [cookies, setCookies] = useCookies(['degreeFinderUrlState']);

	useEffect(() => {
		if (filters) {
			dispatch({ type: ActionType.INITIALIZE_FILTERS, payload: filters });
		}
	}, [filters]);

	useEffect(() => {
		if (state) {
			const newUrlParams = new URLSearchParams(removeEmptyProperties(state.queryParams)).toString();
			if (newUrlParams) {
				history.replaceState(null, '', `?${newUrlParams}`);
			} else {
				history.replaceState(null, '', window.location.href.split('?')[0]);
			}

			setCookies('degreeFinderUrlState', location.href, { maxAge: 3600 }); // TODO: Find a better way. Causes an unnecessary rerender.
		}
	}, [state.queryParams]);

	if (!isLoading && error) { return <Message errorMessage="Something went wrong. Could not load data for degrees." />; }

	return (
		<DegreeFinderContext.Provider value={state}>
			<DegreeFinderDispatchContext.Provider value={dispatch}>
				{children}
			</DegreeFinderDispatchContext.Provider>
		</DegreeFinderContext.Provider>
	);
}

export function useDegreeFinder() {
	return useContext(DegreeFinderContext);
}

export function useDegreeFinderDispatch() {
	return useContext(DegreeFinderDispatchContext);
}


