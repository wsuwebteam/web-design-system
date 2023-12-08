import { useQuery } from "@tanstack/react-query";
import { parse } from "valibot";
import { useDegreeFinder } from "./context";
import { degreeCollectionSchema, filterTermsCollectionSchema } from "./types";
import { removeEmptyProperties } from "./helpers";

export function useFilterTerms(siteUrl: string) {
    const taxonomies = ['wsuwp_df_area', 'wsuwp_df_degree_type', 'wsuwp_df_campus'];
    const requestUrl = new URL('/wp-json/wsu-degree-finder/v1/get-all-terms-by-taxonomies', siteUrl);
    requestUrl.searchParams.append('taxonomies', taxonomies.join(','));

    return useQuery(['filter-terms-query'], async ({ signal }) => {
		try{
			const response = await fetch(requestUrl.toString(), { signal });

			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const json = await response.json();

			return parse(filterTermsCollectionSchema, json);
		} catch(ex){
			if(ex instanceof Error && ex.name !== 'AbortError'){
				throw ex;
			}
		}
    }, {
        onError: (err: Error) => err,
    });
}


export function useDegrees() {
    const state = useDegreeFinder();
    const requestUrl = new URL('/wp-json/wsu-degree-finder/v1/get-degrees', state.siteUrl);
    requestUrl.search = new URLSearchParams(removeEmptyProperties(state.queryParams)).toString();

    return useQuery(['degrees-query', requestUrl.search], async ({ signal }) => {
		try{
			const response = await fetch(requestUrl.toString(), { signal });

			if (!response.ok) {
				throw new Error(response.statusText);
			}

			const json = await response.json();

			return parse(degreeCollectionSchema, json);
		} catch(ex){
			if(ex instanceof Error && ex.name !== 'AbortError'){
				throw ex;
			}
		}
    }, {
        onError: (err: Error) => err,
    });
}
