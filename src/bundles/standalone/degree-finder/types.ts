import { Dispatch } from "react";
import { object, array, string, number, Output } from "valibot";


// context state types
export enum ActionType {
    TOGGLE_TERM_FILTER = 'TOGGLE_TERM_FILTER',
    INITIALIZE_FILTERS = 'INITIALIZE_FILTERS',
    VIEW_FAVORITES = 'VIEW_FAVORITES',
    SEARCH = 'SEARCH',
    RESET = 'RESET',
}

export type DegreeFinderActionType = {
    type: ActionType.TOGGLE_TERM_FILTER,
    payload: SelectedTermType
    } | {
    type: ActionType.INITIALIZE_FILTERS,
    payload: filterTermCollectionType
    } | {
	type: ActionType.VIEW_FAVORITES,
    payload: number[]
	} | {
    type: ActionType.SEARCH,
    payload: string
	} | {
    type: ActionType.RESET,
};

export type DegreeFinderDispatchType = Dispatch<DegreeFinderActionType>;

export type DegreeFinderStateType = {
    siteUrl: string,
    profileRootUrl: string,
    queryParams: Record<string, string>,
    filters?: filterTermCollectionType,
    activeFilters?: ActiveFiltersType,
};

export enum FilterType {
    SEARCH = 'SEARCH',
    FAVORITES = 'FAVORITES',
    TERMS = 'TERMS',
}

export type SelectedTermType = {
    termId: string,
    termName: string,
    group: string
}

export type ActiveFiltersType = {
    type: FilterType,
	searchTerm?: string,
    selectedTerms?: Array<SelectedTermType>
} | undefined;


// term filter types
export const filterTermSchema = object({
    term_id: number(),
    name: string(),
    slug: string(),
    taxonomy: string(),
});

export const filterTermsCollectionSchema = object({
    wsuwp_df_area: array(filterTermSchema),
    wsuwp_df_degree_type: array(filterTermSchema),
    wsuwp_df_campus: array(filterTermSchema),
});

export type filterTermType = Output<typeof filterTermSchema>;
export type filterTermCollectionType = Output<typeof filterTermsCollectionSchema>;


// degree types
export const degreeSchema = object({
    id: number(),
    title: string(),
    url: string(),
    image: object(
		{
			medium: string(),
			mediumLarge: string(),
			large: string(),
			full: string(),
		}
	),
    // focalPoint: object({
    //     x: number(),
    //     y: number(),
    // }),
    excerpt: string(),
});

export const degreeCollectionSchema = array(degreeSchema);

export type degreeType = Output<typeof degreeSchema>;
export type degreeCollectionType = Output<typeof degreeCollectionSchema>;
