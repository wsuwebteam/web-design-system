// TODO: This should be broken up into multiple small components
import { ChangeEvent, useRef, useState } from "react";
import { useDegreeFinder, useDegreeFinderDispatch } from "../context";
import { ActionType, ActiveFiltersType, FilterType, SelectedTermType, filterTermType } from "../types";
import { useCookies } from "react-cookie";
import _debounce from 'lodash/debounce';
import ActiveFilters from "./filters.active";

function DegreeFilters() {
	console.log('Rendering: Filters');
	const [activeTermGroupKey, setActiveTermGroupKey] = useState<string | null>(null);
	const state = useDegreeFinder();
	const dispatch = useDegreeFinderDispatch();
	const [cookies] = useCookies(['favoriteDegrees']);
	const filters = state.filters;
	const activeFilters = state.activeFilters;
	const favorites: number[] = cookies.favoriteDegrees || [];
	const searchInputRef = useRef<HTMLInputElement>(null);
	const filterGroups = [
		{
			label: 'Areas of Interest',
			group: 'areas',
			terms: filters?.wsuwp_df_area || [],
		},
		{
			label: 'Degree Type',
			group: 'degree-types',
			terms: filters?.wsuwp_df_degree_type || [],
		},
		{
			label: 'Campus',
			group: 'campuses',
			terms: filters?.wsuwp_df_campus || [],
		}
	];
	const activeFilterGroup = filterGroups.find(group => group.group === activeTermGroupKey);

	if (!state.queryParams.q) {
		clearSearchBox();
	}

	function updateActiveTermGroup(group: string) {
		activeTermGroupKey === group
			? setActiveTermGroupKey(null)
			: setActiveTermGroupKey(group);
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
		setActiveTermGroupKey(null)
		dispatch({ type: ActionType.RESET })
	}

	function toggleFavorites() {
		setActiveTermGroupKey(null)
		activeFilters?.type !== FilterType.FAVORITES ?
			dispatch({
				type: ActionType.VIEW_FAVORITES,
				payload: favorites
			}) : dispatch({ type: ActionType.RESET });
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

	return <>
		<div className="wsu-degree-finder__filter-wrapper wsu-width--full">
			<div className="wsu-degree-finder__filter-decorator-block wsu-decorator--style-block-crimson wsu-hide--tablet-large"></div>
			<div className="wsu-degree-finder__filter-decorator-lines wsu-decorator--style-lines-gray wsu-hide--tablet-large"></div>

			<div className="wsu-degree-finder__filter-controls">
				<span className="wsu-degree-finder__filter-title">Filter by: </span>
				<div className="wsu-degree-finder__filter-list">
					<ul className="wsu-degree-finder__filter-types">
						{filterGroups.map((filterGroup) => {
							return (
								<li key={filterGroup.group}>
									<button onClick={() => updateActiveTermGroup(filterGroup.group)} className="wsu-degree-finder__filter-type wsu-button">{filterGroup.label}</button>
								</li>)
						})}
					</ul>
					<div className="wsu-degree-finder__filter-right">
						<button onClick={toggleFavorites} className="wsu-degree-finder__filter-type wsu-degree-finder__filter-favorites wsu-button"><i className="fa-solid fa-heart"></i> Favorites</button>
						<div className="wsu-degree-finder__filter-search-wrapper">
							<input
								ref={searchInputRef}
								type="search"
								className="wsu-degree-finder__filter-search-field"
								placeholder="search..."
								defaultValue={state.queryParams.q}
								onChange={_debounce(search, 400)}
								onKeyUp={gotoDegrees}
								aria-label="Search through degree list"
								aria-describedby="info" />
							<div id="info" className="wsu-screen-reader-only"> Results will update as you type.</div>
							<label className="wsu-degree-finder__filter-search-submit" tabIndex={0}>
								<i className="fa-solid fa-magnifying-glass fa-xl"></i>
								<span className="wsu-screen-reader-only">Go to search results</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			{activeFilterGroup &&
				<div className="wsu-degree-finder__filter-terms wsu-width--full">
					<TermFiltersGroup
						label={activeFilterGroup.label}
						group={activeFilterGroup.group}
						terms={activeFilterGroup.terms}
						activeFilters={activeFilters}
						onChange={toggleTermFilter}
					/>
				</div>
			}
		</div>
		{activeFilters && <ActiveFilters
			activeFilters={activeFilters}
			deactivateFilter={deactivateFilter}
			clearFilters={clearFilters} />}
	</>
}

function TermFiltersGroup(props: {
	label: string,
	group: string,
	terms: filterTermType[],
	activeFilters: ActiveFiltersType | undefined
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
	console.log('Rendering: Term Filters Group')
	const { group, terms, activeFilters, onChange } = props;
	const selectedTermIds = activeFilters?.selectedTerms?.map(t => t.termId) || [];

	return <ul className="wsu-degree-finder__filter-terms-list wsu-list--columns-2">
		{terms.map((term) =>
			<li key={term.term_id}>
				<label>
					<input
						type="checkbox"
						className="wsu-screen-reader-only"
						data-name={term.name}
						data-group={group}
						onChange={onChange}
						value={term.term_id}
						checked={selectedTermIds.includes(term.term_id.toString())} />
					<i className="fa-solid fa-check"></i>
					<span className="wsu-degree-finder__filter-term-title">{term.name}</span>
				</label>
			</li>
		)}
	</ul>
}

export default DegreeFilters;
