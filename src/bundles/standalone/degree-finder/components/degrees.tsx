import { useQuery } from "@tanstack/react-query";
import { parse } from "valibot";
import { removeEmptyProperties } from "../helpers";
import { useDegreeFinder } from "../context";
import { useCookies } from "react-cookie";
import { degreeCollectionSchema } from "../types";
import DegreeList from "./degrees.list";
import DegreeGrid from "./degrees.grid";
import DegreeLayoutToggle from "./degrees.layout-toggle";


function Degrees() {
    console.log('Rendering: List');
    // const state = useDegreeFinder();
    // const { data, isLoading, error } = useDegrees(state.siteUrl, state.queryParams);
    const { data, isLoading, error } = useDegrees();
    const [cookies, setCookies] = useCookies(['degreeLayout', 'favoriteDegrees']);
    const layout = cookies.degreeLayout || 'grid';
    const favorites: number[] = cookies.favoriteDegrees || [];

    function updateLayout(layout: string) {
        setCookies('degreeLayout', layout);
    }

    function toggleFavorite(degreeId: number) {
        const newFavorites = favorites.includes(degreeId) ? favorites.filter(id => id !== degreeId) : [...favorites, degreeId];
        setCookies('favoriteDegrees', newFavorites);
    }

    return (
        <>
            <DegreeLayoutToggle layout={layout} onChange={updateLayout} />
            {isLoading && <p>loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.length > 0 ? <>
                {layout === "list" ?
                    <DegreeList degrees={data} favorites={favorites} toggleFavorite={toggleFavorite} />
                    : <DegreeGrid degrees={data} favorites={favorites} toggleFavorite={toggleFavorite} />}
            </> : <p>FIX ME --- No degrees found.</p>}
        </>
    );
}

// function useDegrees(siteUrl: string, params: Record<string, string>) {
function useDegrees() {
    const state = useDegreeFinder();
    const requestUrl = new URL('/wp-json/wsu-degree-finder/v1/get-degrees', state.siteUrl);
    requestUrl.search = new URLSearchParams(removeEmptyProperties(state.queryParams)).toString();

    return useQuery(['degrees-query', requestUrl.search], async ({ signal }) => {
        const response = await fetch(requestUrl.toString(), { signal });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const json = await response.json();

        return parse(degreeCollectionSchema, json);
    }, {
        onError: (err: Error) => err,
    });
}

export default Degrees;
