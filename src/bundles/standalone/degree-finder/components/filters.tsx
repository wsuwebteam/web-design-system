import { ChangeEvent, HtmlHTMLAttributes, useRef } from "react";
import { useDegreeFinder, useDegreeFinderDispatch } from "../context";
import { ActionType, ActiveFiltersType, SelectedTermType, filterTermType } from "../types";
import { useCookies } from "react-cookie";
import _debounce from 'lodash/debounce';

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
				/>

			</div>
			<div className="wsu-degree-filter-list">
				<p><i>Filters:</i></p>
				<div className="wsu-degree-filter-list__body">
					<div className="wsu-degree-filter-list__terms">
						{activeFilters?.selectedTerms && activeFilters.selectedTerms.map((term) =>
							<div key={`active-filter-${term.termId}`} className="wsu-degree-filter-list__term">
								<button
									id="term-filter"
									className="wsu-degree-filter-list__term-control"
									onClick={() => deactivateFilter(term)}>
									<span>{term.termName}</span><i className="fa-solid fa-xmark wsu-degree-filter-list__term-control-icon"></i>
								</button>
							</div>
						)}
					</div>
					<div className="wsu-degree-filter-list__clear">
						<button
							className="wsu-button wsu-degree-filter-list__clear-button"
							onClick={() => dispatch({ type: ActionType.RESET })}>
							<i className="fa-solid fa-rotate-right"></i>
							Clear All
						</button>
					</div>
				</div>
			</div>
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
