import { ActiveFiltersType, SelectedTermType } from "../types";


function ActiveFilters({ activeFilters, deactivateFilter, clearFilters }: { activeFilters: ActiveFiltersType, deactivateFilter: (term: SelectedTermType) => void, clearFilters: () => void }) {
	console.log('RENDERING ACTIVE FILTERS', activeFilters)
	return <div className="wsu-degree-filter-list">
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
					onClick={clearFilters}>
					<i className="fa-solid fa-rotate-right"></i>
					Clear All
				</button>
			</div>
		</div>
	</div>
}

export default ActiveFilters;
