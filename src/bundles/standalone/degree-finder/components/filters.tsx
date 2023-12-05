import { ChangeEvent, useRef } from "react";
import { useDegreeFinder, useDegreeFinderDispatch } from "../context";
import { ActionType, ActiveFiltersType, SelectedTermType, filterTermType } from "../types";
import { useCookies } from "react-cookie";
import _debounce from 'lodash/debounce';
import ActiveFilters from "./filters.active";

function DegreeFilters() {
	console.log('Rendering: Filters');
	const state = useDegreeFinder();
	const dispatch = useDegreeFinderDispatch();
	const [cookies] = useCookies(['favoriteDegrees']);
	const filters = state.filters;
	const activeFilters = state.activeFilters;
	const favorites: number[] = cookies.favoriteDegrees || [];
	const searchInputRef = useRef<HTMLInputElement>(null);

	if (!state.queryParams.q) {
		clearSearchBox();
	}

	function toggleTermFilter(e: ChangeEvent<HTMLInputElement>) {
		const termName = e.target.dataset.name || '';
		const group = e.target.dataset.group || '';
		const termId = e.target.value;

		dispatch({
			type: ActionType.TOGGLE_TERM_FILTER,
			payload: {
				termId: termId,
				termName: termName,
				group: group,
			}
		});
	}

	function deactivateFilter(term: SelectedTermType) {
		dispatch({
			type: ActionType.TOGGLE_TERM_FILTER,
			payload: term
		});
	}

	function clearFilters() {
		dispatch({ type: ActionType.RESET })
	}

	function viewFavorites() {
		dispatch({
			type: ActionType.VIEW_FAVORITES,
			payload: favorites
		});
	}

	function search(e: ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: ActionType.SEARCH,
			payload: e.target.value.trim()
		});
	}

	function clearSearchBox() {
		if (searchInputRef.current) {
			searchInputRef.current.value = '';
		}
	}

	function gotoDegrees(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') {
			e.preventDefault();
			const degreesContainer = document.getElementById('degrees');
			const offset = 200;

			if (!degreesContainer) {
				return;
			}

			degreesContainer.focus({
				preventScroll: true,
			});

			window.scrollTo({
				behavior: 'smooth',
				top:
					degreesContainer.getBoundingClientRect().top -
					document.body.getBoundingClientRect().top -
					offset,
			});
		}
	}

	return (
		<>
			<div>
				<TermFiltersGroup
					label="Area of Interest"
					group="areas"
					terms={filters?.wsuwp_df_area || []}
					activeFilters={activeFilters}
					onChange={toggleTermFilter}
				/>
				<TermFiltersGroup
					label="Degree Type"
					group="degree-types"
					terms={filters?.wsuwp_df_degree_type || []}
					activeFilters={activeFilters}
					onChange={toggleTermFilter}
				/>
				<TermFiltersGroup
					label="Campus"
					group="campuses"
					terms={filters?.wsuwp_df_campus || []}
					activeFilters={activeFilters}
					onChange={toggleTermFilter}
				/>

				<button onClick={viewFavorites}>Favorites</button>

				<input
					ref={searchInputRef}
					type="text"
					placeholder="search..."
					defaultValue={state.queryParams.q}
					onChange={_debounce(search, 400)}
					onKeyUp={gotoDegrees}
				/>
			</div>
			{activeFilters && <ActiveFilters
				activeFilters={activeFilters}
				deactivateFilter={deactivateFilter}
				clearFilters={clearFilters} />}
		</>
	);
}

function TermFiltersGroup(props: {
	label: string,
	group: string,
	terms: filterTermType[],
	activeFilters: ActiveFiltersType | undefined
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
	console.log('Rendering: Term Filters Group')
	const { label, group, terms, activeFilters, onChange } = props;
	const selectedTermIds = activeFilters?.selectedTerms?.map(t => t.termId) || [];

	return <div>
		<h3>{label}</h3>
		{terms.map((term) =>
			<label key={term.term_id}>
				<input
					type="checkbox"
					data-name={term.name}
					data-group={group}
					onChange={onChange}
					value={term.term_id}
					checked={selectedTermIds.includes(term.term_id.toString())}
				/>
				{term.name}
			</label>
		)}
	</div>
}

export default DegreeFilters;
