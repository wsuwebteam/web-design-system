import { useState } from "react";
import { default as ScholarshipFilters } from './scholarship-filters';
import { default as ScholarshipTable } from './scholarship-table';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const paramDefaults: Record<string, string> = {
	grade: urlParams.get("grade") || "",
	gpa: urlParams.get("gpa") || "",
	citizenship: urlParams.get("citizenship") || "",
	state: urlParams.get("state") || "",
	requirements: '',
	majors: '',
	identities: '',
	ethnicities: '',
	fromWSU: '',
	postsPerPage: '50',
	orderBy: 'title',
	order: 'asc',
	page: '1'
};

function ScholarshipList({ siteUrl }: { siteUrl?: string }) {
	const [params, setParams] = useState<Record<string, string>>(paramDefaults);

	return (
		<>
			<div className="wsu-scholarship-list">
				<ScholarshipFilters
					siteUrl={siteUrl}
					params={params}
					setParams={setParams} />

				<ScholarshipTable
					siteUrl={siteUrl}
					params={params}
					setParams={setParams} />
			</div>
		</>
	);
}

export default ScholarshipList;
