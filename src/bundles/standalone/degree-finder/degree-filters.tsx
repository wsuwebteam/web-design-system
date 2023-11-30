import { useQuery } from "@tanstack/react-query";
import { ChangeEvent } from "react";
import { object, array, parse, string, number, type Output } from "valibot";
import { ActionType, useDegreeFinder, useDegreeFinderDispatch } from "./context";

const taxonomies = ['wsuwp_df_area', 'wsuwp_df_degree_type', 'wsuwp_df_campus'];

const filterTermSchema = object({
    term_id: number(),
    name: string(),
    slug: string(),
    taxonomy: string(),
});

const filterTermsCollectionSchema = object({
    wsuwp_df_area: array(filterTermSchema),
    wsuwp_df_degree_type: array(filterTermSchema),
    wsuwp_df_campus: array(filterTermSchema),
});

type filterTermType = Output<typeof filterTermSchema>;


// const filterTermsCollectionSchema = object(taxonomies.reduce(
//     (acc, curr) => {
//         return {
//             ...acc,
//             [curr]: array(filterTermSchema),
//         };
//     },
//     {}
// ));



function DegreeFilters() {
    console.log('Rendering: Filters');
    // const dispatch = useDegreeFinderDispatch();
    const state = useDegreeFinder();
    const { data, isLoading, error } = useFilterTerms(state.siteUrl);

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
                {error && <p>Error: {error.message}</p>}
                {isLoading && <p>Loading...</p>}

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

    function toggleTermFilter(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;

        if (e.target.checked) {
            if (!selected.includes(value)) {
                selected.push(value);
            }
        } else {
            selected.splice(selected.indexOf(value), 1);
        }
        dispatch({
            type: ActionType.UPDATE_QUERY_PARAM,
            payload: {
                field: groupKey,
                value: selected.join(','),
            },
        });
    }

    return <div>
        <h3>{label}</h3>
        {terms.map((term) =>
            <label key={term.term_id}>
                <input
                    type="checkbox"
                    onChange={toggleTermFilter}
                    value={term.term_id}
                    checked={selected.includes(term.term_id.toString())}
                />
                {term.name}
            </label>
        )}
    </div>
}

function useFilterTerms(siteUrl: string) {
    const requestUrl = new URL('/wp-json/wsu-degree-finder/v1/get-all-terms-by-taxonomies', siteUrl);
    requestUrl.searchParams.append('taxonomies', taxonomies.join(','));

    return useQuery(['filter-terms-query'], async ({ signal }) => {
        const response = await fetch(requestUrl.toString(), { signal });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const json = await response.json();

        return parse(filterTermsCollectionSchema, json);
    }, {
        onError: (err: Error) => err,
    });
}


export default DegreeFilters;
