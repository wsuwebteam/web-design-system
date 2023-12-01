import { useQuery } from "@tanstack/react-query";
import { ChangeEvent } from "react";
import { object, array, parse, string, number, Output } from "valibot";
import { useDegreeFinder, useDegreeFinderDispatch } from "../context";
import { useFilterTerms } from "../hooks";
import { ActionType, filterTermType } from "../types";

function DegreeFilters() {
    console.log('Rendering: Filters');
    // const dispatch = useDegreeFinderDispatch();
    const state = useDegreeFinder();
    const data = state.filters;
    // const appliedFilters = data ? getAppliedFilters(state, data) : [];

    // function getAppliedFilters(state, filters) {
    //     console.log(state, filters);
    // }

    // function toggleTermFilter(e: ChangeEvent<HTMLInputElement>) {
    //     dispatch({
    //         type: ActionType.SET_FIELD,
    //         payload: {
    //             field: e.target.dataset.group || '',
    //             value: e.target.value
    //         },
    //     });
    // }

    return (
        <>
            <div>
                {/* {error && <p>Error: {error.message}</p>}
                {isLoading && <p>Loading...</p>} */}

                <TermFiltersGroup
                    label="Area of Interest"
                    groupKey="areas"
                    terms={data?.wsuwp_df_area || []}
                // onChange={toggleTermFilter}
                />
                <TermFiltersGroup
                    label="Degree Type"
                    groupKey="degree-types"
                    terms={data?.wsuwp_df_degree_type || []}
                // onChange={toggleTermFilter}
                />
                <TermFiltersGroup
                    label="Campus"
                    groupKey="campuses"
                    terms={data?.wsuwp_df_campus || []}
                // onChange={toggleTermFilter}
                />

            </div>
            <div className="wsu-degree-filter-list">
                <p><i>Filters:</i></p>
                <div className="wsu-degree-filter-list__body">
                    <div className="wsu-degree-filter-list__terms">
                        {/* {% for term in filterTerms %} */}
                        <div className="wsu-degree-filter-list__term">
                            <button id="term-filter" className="wsu-degree-filter-list__term-control">
                                <span>term</span><i className="fa-solid fa-xmark wsu-degree-filter-list__term-control-icon"></i>
                            </button>
                        </div>
                        {/* {% endfor %} */}
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
    // onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
    // const { label, groupKey, terms, onChange } = props;

    console.log('Rendering: Term Filters Group')

    const { label, groupKey, terms } = props;
    const state = useDegreeFinder();
    const dispatch = useDegreeFinderDispatch();
    const selected = state.queryParams[groupKey] ? state.queryParams[groupKey].split(',') : [];
    // const selected = state.selectedFilters.reduce<string[]>((result, selectedFilter) => {
    //     if (selectedFilter.group === groupKey) {
    //         result.push(selectedFilter.termId);
    //     }
    //     return result;
    // }, []);


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
