import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import {
	IScholarship,
	IScholarshipsResponse,
	IScholarshipsQueryResult,
} from "./interfaces";
import { TableSortControl, Pagination } from "./components";
import WSULogo from "./logo.svg";
import ScholarshipsQueryBuilder from "./scholarships-query-builder";

const API_PATH = "/wp-json/wsu-scholarships/v1/get-scholarships";

function ScholarshipTable({
	siteUrl,
	params,
	setParams,
}: {
	siteUrl?: string;
	params: Record<string, string>;
	setParams: (value: Record<string, string>) => void;
}) {
	const APIEndpoint = `${siteUrl}${API_PATH}`;
	const tableTop = useRef<null | HTMLDivElement>(null);
	const { isLoading, isRefetching, error, data } = useQuery<
		IScholarshipsResponse,
		Error
	>(
		["scholarships", APIEndpoint],
		({ signal }) => fetchScholarships(signal),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	);

	const {
		scholarships,
		totalCount,
		numberOfPages,
	}: IScholarshipsQueryResult =
		!isLoading && data
			? new ScholarshipsQueryBuilder(data.scholarships)
					.setSort(params.orderBy, params.order)
					.setPagination(
						parseInt(params.page),
						parseInt(params.postsPerPage)
					)
					.addFilter((s: IScholarship) => {
						if (params.grade && s.grade.length) {
							return s.grade.includes(parseInt(params.grade));
						}
						return true;
					})
					.addFilter((s: IScholarship) => {
						if (params.citizenship && s.citizenship.length) {
							return s.citizenship.includes(
								parseInt(params.citizenship)
							);
						}
						return true;
					})
					.addFilter((s: IScholarship) => {
						if (params.state && s.state) {
							return s.state === params.state;
						}
						return true;
					})
					.addFilter((s: IScholarship) => {
						if (params.gpa && s.gpa) {
							const userGPA = parseFloat(params.gpa);
							const minGPA = parseFloat(
								s.gpa.split("-")[0].trim()
							);
							const maxGPA = parseFloat(
								s.gpa.split("-")[1]?.trim() ?? "6.0" // I guess 6.0 is possible? 🤷‍♂️
							);

							return minGPA <= userGPA && userGPA <= maxGPA;
						}
						return true;
					})
					.addFilter((s: IScholarship) => {
						if (params.majors) {
							const majors = params.majors
								.split(",")
								.map((m) => parseInt(m));
							return majors.some((m) => s.major.includes(m));
						}
						return true;
					})
					.addFilter((s: IScholarship) => {
						if (params.requirements) {
							const requirements = params.requirements.split(",");
							return requirements.some((m) =>
								s.requirements.includes(m)
							);
						}
						return true;
					})
					.addFilter((s: IScholarship) => {
						if (params.fromWSU) {
							if (params.fromWSU === "from-wsu") {
								return s.data.includes("tag-wsu");
							} else if (params.fromWSU === "outside-wsu") {
								return !s.data.includes("tag-wsu");
							}
						}
						return true;
					})
					.build()
			: ({} as IScholarshipsQueryResult);

	async function fetchScholarships(
		signal: AbortSignal | undefined
	): Promise<IScholarshipsResponse> {
		const result = await fetch(APIEndpoint, { signal });

		if (!result.ok) {
			throw new Error(
				"Something went wrong. Failed to find scholarships"
			);
		}
		const json = await result.json();
		return json;
	}

	return (
		<>
			<div ref={tableTop} className="wsu-scholarship-list__meta">
				<p className="wsu-scholarship-list__meta-icon">
					<WSULogo className="wsu-scholarship-list__coug-head" />=
					scholarships awarded by Washington State University.
				</p>

				<p className="wsu-scholarship-list__meta-data">
					{data && (
						<span className="wsu-scholarship-list__meta-count">{`${totalCount} scholarships found`}</span>
					)}
					<span id="wsu-scholarship-list__results-per-page-top">
						Results per page
					</span>
					<span className="wsu-scholarship-list__select-control wsu-scholarship-list__results-per-page__control wsu-scholarship-list__results-per-page__control--top">
						<select
							className="wsu-scholarship-list__select-control__input wsu-scholarship-list__results-per-page__input"
							aria-labelledby="wsu-scholarship-list__results-per-page--top"
							value={params.postsPerPage}
							onChange={(e) => {
								setParams({
									...params,
									postsPerPage: e.target.value,
									page: "1",
								});
							}}
						>
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="50">50</option>
							<option value="100">100</option>
							<option value="150">150</option>
							<option value="200">200</option>
						</select>
					</span>
				</p>
			</div>

			<div className="wsu-scholarship-list__table-container">
				<table className="wsu-scholarship-list__table wsu-table--style-striped">
					<thead>
						<tr>
							<TableSortControl
								className="wsu-scholarship-list__sort-control"
								label="Scholarship"
								ariaLabel="Order by scholarship"
								metaKey="title"
								params={params}
								setParams={setParams}
							/>
							<TableSortControl
								className="wsu-scholarship-list__sort-control"
								label="Amount"
								ariaLabel="Order by amount"
								defaultDirection="desc"
								metaKey="amount"
								params={params}
								setParams={setParams}
							/>
							<TableSortControl
								className="wsu-scholarship-list__sort-control"
								label="Deadline"
								ariaLabel="Order by deadline"
								defaultDirection="desc"
								metaKey="deadline"
								params={params}
								setParams={setParams}
							/>
							<th>
								<span className="wsu-screen-reader-only">
									Application
								</span>
							</th>
						</tr>
					</thead>
					<tbody className={isRefetching ? "is-loading" : ""}>
						{!isLoading && data && (
							<>
								{scholarships.map((s: IScholarship) => (
									<tr key={s.id}>
										<td>
											{s.data.includes("tag-wsu") && (
												<WSULogo className="wsu-scholarship-list__coug-head" />
											)}
											<a
												href={s.permalink}
												dangerouslySetInnerHTML={{
													__html: s.title,
												}}
											></a>
										</td>
										<td>{s.displayAmount}</td>
										<td>{s.displayDeadline}</td>
										<td>
											{s.applyLink && (
												<a
													className="wsu-scholarship-list__apply-link"
													href={s.applyLink}
												>
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

			{!isLoading && !isRefetching && data && numberOfPages > 1 && (
				<Pagination
					numberOfPages={numberOfPages}
					listRef={tableTop}
					params={params}
					setParams={setParams}
				/>
			)}

			{(isLoading || isRefetching) && (
				<div className="wsu-scholarship-list__loading"></div>
			)}
			{error && (
				<p className="wsu-scholarship-list__message">{error.message}</p>
			)}
			{!isRefetching && data && scholarships.length === 0 && (
				<p className="wsu-scholarship-list__message">
					Sorry, no scholarships were found.
				</p>
			)}
		</>
	);
}

export default ScholarshipTable;
