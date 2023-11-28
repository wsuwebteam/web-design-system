import { useQuery } from "@tanstack/react-query";
import { object, array, parse, string, number, flatten, ValiError } from "valibot";
import { WP_Term } from 'wp-types';
// import React, { useState } from "react";
import { default as DegreeFilters } from './degree-filters';
import { useReducer, useState } from "react";
import { removeEmptyProperties } from "./helpers";
import { useDegreeFinder } from "./context";
import DegreeList from "./degree-list";
// import { default as ScholarshipTable } from './scholarship-table';

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// const paramDefaults: Record<string, string> = {
// 	grade: urlParams.get("grade") || "",
// 	gpa: urlParams.get("gpa") || "",
// 	citizenship: urlParams.get("citizenship") || "",
// 	state: urlParams.get("state") || "",
// 	requirements: '',
// 	majors: '',
// 	identities: '',
// 	ethnicities: '',
// 	fromWSU: '',
// 	postsPerPage: '50',
// 	orderBy: 'title',
// 	order: 'asc',
// 	page: '1'
// };

// const termsCollectionValidator = object({
// 	wsuwp_df_area: array(object<WP_Term>({})),
// });


// interface degreeQueryParams {
// 	count?: number;
// 	page?: number;
// 	ids?: number[];
// 	s?: string;
// 	areas?: number[];
// 	'degree-types'?: number[];
// 	campuses?: number[];
// 	colleges?: number[];
// 	departments?: number[];
// };

// const x: degreeQueryParams = {
// 	"degree-types": [1, 2, 3],
// 	count: 5,
// 	s: 'Agr',
// }

// const degreeSchema = object({
// 	id: number(),
// 	title: string(),
// 	url: string(),
// 	image: string(),
// 	focalPoint: object({
// 		x: number(),
// 		y: number(),
// 	}),
// 	excerpt: string(),
// });

// const degreeCollectionSchema = array(degreeSchema);


function DegreeFinder({ siteUrl }: { siteUrl: string }) {
	console.log('Rendering: Degree List');
	// const [params, dispatch] = useReducer(reducer, degreeQueryParams);

	return (
		<>
			<div className="wsu-degree-list">
				<p>Testing</p>
				<DegreeFilters siteUrl={siteUrl}></DegreeFilters>
				<DegreeList siteUrl={siteUrl}></DegreeList>
				{/* <ScholarshipFilters
					siteUrl={siteUrl}
					params={params}
					setParams={setParams} />

				<ScholarshipTable
					siteUrl={siteUrl}
					params={params}
					setParams={setParams} /> */}
			</div>
		</>
	);
}


// function DegreeList({ siteUrl }: { siteUrl: string }) {
// 	console.log('Rendering: List');
// 	const state = useDegreeFinder();
// 	const { data, isLoading, error } = useDegrees(siteUrl, state);

// 	console.log(data);

// 	if (isLoading) {
// 		return <p>LOADING</p>;
// 	}

// 	if (error) {
// 		return <p>Error: {error.message}</p>;
// 	}

// 	return (
// 		<>
// 			{data.map((degree) => <div key={degree.id}>{degree.title}</div>)}
// 		</>
// 	);
// }


// function useDegrees(siteUrl: string, params: Record<string, string>) {
// 	const requestUrl = new URL('/wp-json/wsu-degree-finder/v1/get-degrees', siteUrl);
// 	requestUrl.search = new URLSearchParams(removeEmptyProperties(params)).toString();

// 	return useQuery(['degrees-query', requestUrl.search], async ({ signal }) => {
// 		const response = await fetch(requestUrl.toString(), { signal });

// 		if (!response.ok) {
// 			throw new Error(response.statusText);
// 		}

// 		const json = await response.json();

// 		return parse(degreeCollectionSchema, json);
// 	}, {
// 		onError: (err: Error) => err,
// 	});

// }

export default DegreeFinder;
