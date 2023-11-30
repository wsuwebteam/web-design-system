import { useQuery } from "@tanstack/react-query";
import { object, array, parse, string, number, flatten, ValiError, Output } from "valibot";
import { WP_Term } from 'wp-types';
// import React, { useState } from "react";
import { default as DegreeFilters } from './degree-filters';
import { useReducer, useState } from "react";
import { removeEmptyProperties } from "./helpers";
import { useDegreeFinder } from "./context";
import { useCookies } from "react-cookie";
import DegreeList from "./components/degree-list";
import DegreeGrid from "./components/degree-grid";
import DegreeLayoutToggle from "./components/degree-layout-toggle";

const degreeSchema = object({
    id: number(),
    title: string(),
    url: string(),
    image: string(),
    focalPoint: object({
        x: number(),
        y: number(),
    }),
    excerpt: string(),
});

const degreeCollectionSchema = array(degreeSchema);

export type degreeType = Output<typeof degreeSchema>;
export type degreeCollectionType = Output<typeof degreeCollectionSchema>;

function Degrees({ siteUrl }: { siteUrl: string }) {
    console.log('Rendering: List');
    const params = useDegreeFinder();
    const { data, isLoading, error } = useDegrees(siteUrl, params);
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

function useDegrees(siteUrl: string, params: Record<string, string>) {
    const requestUrl = new URL('/wp-json/wsu-degree-finder/v1/get-degrees', siteUrl);
    requestUrl.search = new URLSearchParams(removeEmptyProperties(params)).toString();

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
