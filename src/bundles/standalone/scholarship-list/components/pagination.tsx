import { IScholarshipsResponse } from "../interfaces";

function Pagination({ data, listRef, params, setParams }: {
	data: IScholarshipsResponse,
	listRef?: React.MutableRefObject<HTMLDivElement | null>,
	params: Record<string, string>,
	setParams: (value: Record<string, string>) => void
}) {

	function jumpToTop() {
		if (listRef && listRef.current) {
			listRef.current.scrollIntoView({ behavior: 'instant', block: 'center' });
		}
	}

	return (
		<div className="wsu-scholarship-list__pagination-container">
			<p className="wsu-scholarship-list__results-per-page">
				<span className="wsu-scholarship-list__select-control wsu-scholarship-list__results-per-page__control">
					<select
						className="wsu-scholarship-list__select-control__input"
						aria-labelledby="wsu-scholarship-list__results-per-page"
						value={params.postsPerPage}
						onChange={e => {
							setParams({ ...params, 'postsPerPage': e.target.value, 'page': '1' });
							jumpToTop();
						}}>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="150">150</option>
						<option value="200">200</option>
					</select>
				</span>
				<span id="wsu-scholarship-list__results-per-page">results per page</span>
			</p>
			<nav className="wsu-scholarship-list__pagination" role="navigation" aria-label="Pagination Navigation">
				<ol className="wsu-scholarship-list__pagination-menu">
					{[...Array(data.numberOfPages)].map((e, index) =>
						<li key={index} className="wsu-scholarship-list__pagination-menu-item">
							<button
								className="wsu-scholarship-list__pagination-page"
								aria-label={`Goto Page ${index + 1}`}
								aria-current={parseInt(params.page) === index + 1}
								onClick={(e) => {
									setParams({ ...params, 'page': (index + 1).toString() });
									jumpToTop();
								}}>
								{index + 1}
							</button>
						</li>)
					}
				</ol>
			</nav>
		</div>
	)
}

export default Pagination;
