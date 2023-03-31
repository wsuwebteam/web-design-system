import { useState, useEffect, useRef } from "react";
import { useQuery } from '@tanstack/react-query';
import { IScholarship, IScholarshipsResponse } from "./interfaces";
import { SortControl, Pagination } from './components';;
import WSULogo from "./logo.svg";

const API_PATH = "/wp-json/wsu-scholarships/v1/get-scholarships";

function ScholarshipTable({ siteUrl, params, setParams }: {
	siteUrl?: string,
	params: Record<string, string>,
	setParams: (value: Record<string, string>) => void
}) {

	const tableTop = useRef<null | HTMLDivElement>(null)
	const [APIEndpoint, setAPIEndpoint] = useState<string>(getAPIEndpoint);
	const { isLoading, isRefetching, error, data } = useQuery<IScholarshipsResponse, Error>(
		['scholarships', APIEndpoint],
		({ signal }) => fetchScholarships(signal),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: false
		}
	);

	useEffect(() => {
		setAPIEndpoint(getAPIEndpoint);
	}, [params]);

	async function fetchScholarships(signal: AbortSignal | undefined): Promise<IScholarshipsResponse> {
		const result = await fetch(APIEndpoint, { signal });

		if (!result.ok) {
			throw new Error('Something went wrong. Failed to find scholarships');
		}
		const json = await result.json();
		return json;
	}

	function getAPIEndpoint() {
		const queryStrings = new URLSearchParams(params);
		return `${siteUrl}${API_PATH}?${queryStrings.toString()}`;
	}

	return (
		<>
			<div ref={tableTop} className="wsu-scholarship-list__meta">
				<p className="wsu-scholarship-list__meta-icon">
					<WSULogo className="wsu-scholarship-list__coug-head" />=
					scholarships awarded by Washington State University.
				</p>
				<p className="wsu-scholarship-list__meta-count">
					{data && `${data.totalCount} scholarships found`}
				</p>
			</div>

			<div className="wsu-scholarship-list__table-container">
				<table className="wsu-scholarship-list__table wsu-table--style-striped">
					<thead>
						<tr>
							<th>
								<SortControl
									className="wsu-scholarship-list__sort-control"
									label="Scholarship"
									ariaLabel="Order by scholarship"
									metaKey="title"
									params={params}
									setParams={setParams}
								/>
							</th>
							<th>
								<SortControl
									className="wsu-scholarship-list__sort-control"
									label="Amount"
									ariaLabel="Order by amount"
									defaultDirection="desc"
									metaKey="scholarship_amount"
									params={params}
									setParams={setParams}
								/>
							</th>
							<th>
								<SortControl
									className="wsu-scholarship-list__sort-control"
									label="Deadline"
									ariaLabel="Order by deadline"
									defaultDirection="desc"
									metaKey="scholarship_deadline"
									params={params}
									setParams={setParams}
								/>
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody className={isRefetching ? 'is-loading' : ''}>
						{!isLoading && data && (
							<>
								{data.scholarships.map((s: IScholarship) => (
									<tr key={s.id}>
										<td>
											{s.data.includes("tag-wsu") && (
												<WSULogo className="wsu-scholarship-list__coug-head" />
											)}
											<a
												href={s.permalink}
												dangerouslySetInnerHTML={{ __html: s.title }}
											></a>
										</td>
										<td>{s.displayAmount}</td>
										<td>{s.displayDeadline}</td>
										<td>
											{s.applyLink && (
												<a
													className="wsu-scholarship-list__apply-link"
													href={s.applyLink}>
													Apply
												</a>
											)}
										</td>
									</tr>
								))}
							</>
						)}
					</tbody>
				</table>
			</div>

			{!isLoading && !isRefetching && data && data.numberOfPages > 1 && <Pagination
				data={data}
				listRef={tableTop}
				params={params}
				setParams={setParams} />
			}

			{(isLoading || isRefetching) && <div className="wsu-scholarship-list__loading"></div>}
			{error && <p className="wsu-scholarship-list__message">{error.message}</p>}
			{!isRefetching && data && data.scholarships.length === 0 && <p className="wsu-scholarship-list__message">Sorry, no scholarships were found.</p>}
		</>
	);
}

export default ScholarshipTable;
