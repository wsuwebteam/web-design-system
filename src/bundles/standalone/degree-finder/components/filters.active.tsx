import { ActiveFiltersType, FilterType, SelectedTermType } from "../types";


function ActiveFilters({ activeFilters, deactivateFilter, clearFilters }: { activeFilters: ActiveFiltersType, deactivateFilter: (term: SelectedTermType) => void, clearFilters: () => void }) {
	if (!activeFilters) return;

	const data = { label: <></>, resetText: '' };

	switch (activeFilters.type) {
		case FilterType.TERMS:
			data.label = <i>Filters:</i>;
			data.resetText = 'Clear All';
			break;
		case FilterType.SEARCH:
			data.label = <i>Showing search results for: <b>"{activeFilters.searchTerm}"</b></i>;
			data.resetText = 'Clear Search';
			break;
		case FilterType.FAVORITES:
			data.label = <b>Showing your favorite degrees</b>;
			data.resetText = 'Clear';
			break;
		default:
			return;
	}

	return <div className="wsu-degree-filter-list">
		{activeFilters.type === FilterType.TERMS && <p className="wsu-degree-filter-list__label">{data.label}</p>}
		<div className="wsu-degree-filter-list__body">
			<div className="wsu-degree-filter-list__terms">
				{activeFilters.type !== FilterType.TERMS
					&& <p className="wsu-degree-filter-list__alt-label">{data.label}</p>}

				{activeFilters.type === FilterType.TERMS
					&& activeFilters.selectedTerms
					&& activeFilters.selectedTerms.map((term) =>
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
					{data.resetText}
				</button>
			</div>
		</div>
	</div>
}

export default ActiveFilters;
