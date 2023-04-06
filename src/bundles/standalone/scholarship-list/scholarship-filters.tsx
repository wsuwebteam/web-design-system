import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { WP_Term } from 'wp-types';
import _debounce from 'lodash/debounce';
import { IMultiSelectOption } from './interfaces';
import { TextControl, SelectControl, MultiSelectControl } from './components';

const API_PATH = "/wp-json/wsu-scholarships/v1/get-filters";

function ScholarshipFilters({ siteUrl, params, setParams }: {
	siteUrl?: string,
	params: Record<string, string>,
	setParams: (value: Record<string, string>) => void
}) {
	const [showFilters, setShowFilters] = useState(false);
	const { data, isLoading, error } = useQuery(['scholarships-filters'], ({ signal }) => fetchFilters(signal), {
		onSuccess: transformFilters
	});

	async function fetchFilters(signal: AbortSignal | undefined) {
		const result = await fetch(`${siteUrl}${API_PATH}`, { signal });

		if (!result.ok) {
			throw new Error(result.statusText);
		}

		const json = await result.json();
		return json;
	}

	function transformFilters(data: any) {
		function wpTermsToMultiSelectOptions(terms: WP_Term[]): IMultiSelectOption[] {
			return terms.map((term: WP_Term) => {
				return {
					id: term.term_id.toString(),
					slug: term.slug,
					label: term.name,
				} as IMultiSelectOption;
			});
		}

		// transform the scholarships filters to a multi select options
		data.requirements = data.requirements.map((requirement: { key: string, label: string }) => {
			return {
				id: requirement.key,
				slug: requirement.key,
				label: requirement.label,
			} as IMultiSelectOption;
		});

		data.majors = wpTermsToMultiSelectOptions(data.majors);
		data.identities = wpTermsToMultiSelectOptions(data.identities);
		data.ethnicities = wpTermsToMultiSelectOptions(data.ethnicities);

		// add custom options
		data.fromWSU = [
			{
				id: 'from-wsu',
				slug: 'from-wsu',
				label: 'from WSU',
			} as IMultiSelectOption,
			{
				id: 'outside-wsu',
				slug: 'outside-wsu',
				label: 'from outside WSU',
			} as IMultiSelectOption,
		];

		return data;
	}

	function handleChange(value: string, field?: string) {
		if (field) {
			setParams({ ...params, [field]: value });
		}
	}

	return (
		<>
			{data && (
				<>
					<div className="wsu-scholarship-list__filters">
						<div className="wsu-scholarship-list__default-filters">
							<SelectControl<WP_Term>
								label="- Current grade level -"
								name="grade"
								className="wsu-scholarship-list__text-control--grade-level"
								value={params.grade}
								options={data.gradeLevels}
								handleChange={handleChange}
								renderOption={(option) => <option key={option.term_id} value={option.term_id}>{option.name}</option>}
							/>
							<TextControl
								name="gpa"
								className="wsu-scholarship-list__text-control--gpa"
								maxLength={4}
								placeholder="G.P.A"
								defaultValue={params.gpa}
								handleChange={_debounce(handleChange, 400)}
							/>
							<SelectControl<WP_Term>
								label="- Citizenship -"
								name="citizenship"
								className="wsu-scholarship-list__text-control--citizenship"
								value={params.citizenship}
								options={data.citizenship}
								handleChange={handleChange}
								renderOption={(option) => <option key={option.term_id} value={option.term_id}>{option.name}</option>}
							/>
							<SelectControl<string>
								label="- Residency -"
								name="state"
								className="wsu-scholarship-list__text-control--state"
								value={params.state}
								options={data.states}
								handleChange={handleChange}
								renderOption={(option) => <option key={option} value={option}>{option}</option>}
							/>
						</div>

						<button
							className={`wsu-scholarship-list__filters-toggle ${showFilters && 'is-showing'}`}
							onClick={() => setShowFilters(!showFilters)}
							aria-expanded={showFilters}
							aria-controls="wsu-scholarship-list__more-filters">
							{!showFilters ? "Show" : "Hide"} filters
							<span className="wsu-scholarship-list__filters-toggle__icon" aria-hidden="true">+</span>
						</button>

						{showFilters && <div id="wsu-scholarship-list__more-filters" className="wsu-scholarship-list__more-filters">
							<p className="wsu-scholarship-list__more-filters-label">Only show scholarships:</p>

							<div className="wsu-scholarship-list__multi-select-controls">
								<MultiSelectControl
									label="with"
									ariaLabel="Requirements"
									name="requirements"
									className="wsu-scholarship-list__text-control--requirements"
									value={params.requirements}
									options={data.requirements}
									handleChange={handleChange}
								/>

								<MultiSelectControl
									label="for the following majors"
									ariaLabel="Majors"
									name="majors"
									className="wsu-scholarship-list__text-control--majors"
									value={params.majors}
									options={data.majors}
									handleChange={handleChange}
								/>

								<MultiSelectControl
									label="for people who identify as"
									ariaLabel="Gender Identities"
									name="identities"
									className="wsu-scholarship-list__text-control--identities"
									value={params.identities}
									options={data.identities}
									handleChange={handleChange}
								/>

								<MultiSelectControl
									label="for people who are"
									ariaLabel="Ethnicities"
									name="ethnicities"
									className="wsu-scholarship-list__text-control--ethnicities"
									value={params.ethnicities}
									options={data.ethnicities}
									handleChange={handleChange}
								/>
							</div>
							<MultiSelectControl
								name="fromWSU"
								className=""
								layout="checkboxes"
								value={params.fromWSU}
								options={data.fromWSU}
								handleChange={handleChange}
							/>
						</div>}
					</div>
				</>)}
		</>
	);
}

export default ScholarshipFilters;
