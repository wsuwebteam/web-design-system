import { ChangeEvent } from "react";
import { useDegreeFinder, useDegreeFinderDispatch } from "../context";
import { ActionType, ActiveFiltersType, filterTermType } from "../types";

function DegreeFilters() {
	console.log('Rendering: Filters');
	// const dispatch = useDegreeFinderDispatch();
	const state = useDegreeFinder();
	const filters = state.filters;
	const activeFilters = state.activeFilters;

	// function toggleTermFilter(e: ChangeEvent<HTMLInputElement>) {
	//     dispatch({
	//         type: ActionType.SET_FIELD,
	//         payload: {

	//             value: e.target.value
	//         },
	//     });
	// }

	return (
		<>
			<div>
				<TermFiltersGroup
					label="Area of Interest"
					groupKey="areas"
					terms={filters?.wsuwp_df_area || []}
					activeFilters={activeFilters}
				// onChange={toggleTermFilter}
				/>
				<TermFiltersGroup
					label="Degree Type"
					groupKey="degree-types"
					terms={filters?.wsuwp_df_degree_type || []}
					activeFilters={activeFilters}
				// onChange={toggleTermFilter}
				/>
				<TermFiltersGroup
					label="Campus"
					groupKey="campuses"
					terms={filters?.wsuwp_df_campus || []}
					activeFilters={activeFilters}
				// onChange={toggleTermFilter}
				/>

			</div>
			<div className="wsu-degree-filter-list">
				<p><i>Filters:</i></p>
				<div className="wsu-degree-filter-list__body">
					<div className="wsu-degree-filter-list__terms">
						{activeFilters?.selectedTerms && activeFilters.selectedTerms.map((term) =>
							<>
								<div className="wsu-degree-filter-list__term">
									<button id="term-filter" className="wsu-degree-filter-list__term-control">
										<span>{term.termName}</span><i className="fa-solid fa-xmark wsu-degree-filter-list__term-control-icon"></i>
									</button>
								</div>
							</>
						)}
					</div>
					<div className="wsu-degree-filter-list__clear">
						<button className="wsu-button wsu-degree-filter-list__clear-button">
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
	groupKey: string,
	terms: filterTermType[],
	activeFilters: ActiveFiltersType | undefined
	// onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
	// const { label, groupKey, terms, onChange } = props;

	console.log('Rendering: Term Filters Group')

	const { label, groupKey, terms, activeFilters } = props;
	const dispatch = useDegreeFinderDispatch();
	const selected = activeFilters?.selectedTerms?.map(t => t.termId) || [];

	function toggleTermFilter(e: ChangeEvent<HTMLInputElement>) {
		const termName = e.target.dataset.name || '';
		const termId = e.target.value;

		dispatch({
			type: ActionType.TOGGLE_TERM_FILTER,
			payload: {
				termId: termId,
				termName: termName,
				group: groupKey,
			}
		});
	}

	return <div>
		<h3>{label}</h3>
		{terms.map((term) =>
			<label key={term.term_id}>
				<input
					type="checkbox"
					data-name={term.name}
					onChange={toggleTermFilter}
					value={term.term_id}
					checked={selected.includes(term.term_id.toString())}
				/>
				{term.name}
			</label>
		)}
	</div>
}

export default DegreeFilters;
