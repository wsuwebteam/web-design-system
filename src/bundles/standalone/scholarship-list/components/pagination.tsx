import _range from 'lodash/range';
import { IScholarshipsResponse } from "../interfaces";


function Pagination({ data, listRef, params, setParams }: {
	data: IScholarshipsResponse,
	listRef?: React.MutableRefObject<HTMLDivElement | null>,
	params: Record<string, string>,
	setParams: (value: Record<string, string>) => void
}) {
	const currentPage = parseInt(params.page);

	function jumpToTop() {
		if (listRef && listRef.current) {
			listRef.current.scrollIntoView({ behavior: 'instant', block: 'center' });
		}
	}

	function PageLink({ pageNumber }: { pageNumber: number }) {
		const isCurrentPage = currentPage === pageNumber;
		const label = isCurrentPage ? 'Current page, page ' + (pageNumber) : 'Go to page ' + pageNumber;

		return <li className="wsu-scholarship-list__pagination-menu-item">
			<button
				className="wsu-scholarship-list__pagination-page"
				aria-label={label}
				aria-current={isCurrentPage}
				onClick={(e) => {
					setParams({ ...params, 'page': (pageNumber).toString() });
					jumpToTop();
				}}>
				{pageNumber}
			</button>
		</li>
	}

	return (
		<div className="wsu-scholarship-list__pagination-container">
			<p className="wsu-scholarship-list__results-per-page">
				<span className="wsu-scholarship-list__select-control wsu-scholarship-list__results-per-page__control">
					<select
						className="wsu-scholarship-list__select-control__input wsu-scholarship-list__results-per-page__input"
						aria-labelledby="wsu-scholarship-list__results-per-page"
						value={params.postsPerPage}
						onChange={e => {
							setParams({ ...params, 'postsPerPage': e.target.value, 'page': '1' });
							jumpToTop();
						}}>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="150">150</option>
						<option value="200">200</option>
					</select>
				</span>
				<span id="wsu-scholarship-list__results-per-page--label">results per page</span>
			</p>
			<nav className="wsu-scholarship-list__pagination" role="navigation" aria-label="Pagination Navigation">
				<ol className="wsu-scholarship-list__pagination-menu">

					{data.numberOfPages <= 10 && _range(1, data.numberOfPages).map((pageNumber) => <PageLink pageNumber={pageNumber} />)}

					{/* 1 2 3 4 ... 17 */}
					{currentPage <= 4 && (<>
						{_range(1, 6).map((pageNumber) => <PageLink pageNumber={pageNumber} />)}
						<li className="wsu-scholarship-list__pagination-menu-item" aria-hidden={true}>&hellip;</li>
						<PageLink pageNumber={data.numberOfPages} />
					</>)}

					{/* 1 ... 13 14 15 16 17 */}
					{currentPage > data.numberOfPages - 4 && (<>
						<PageLink pageNumber={1} />
						<li className="wsu-scholarship-list__pagination-menu-item" aria-hidden={true}>&hellip;</li>
						{_range(data.numberOfPages - 4, data.numberOfPages + 1).map((pageNumber) => <PageLink pageNumber={pageNumber} />)}
					</>)}

					{/* 1 ... 3 4 5 6 7 ... 17*/}
					{currentPage <= data.numberOfPages - 4 && currentPage >= 5 && (<>
						<PageLink pageNumber={1} />
						<li className="wsu-scholarship-list__pagination-menu-item" aria-hidden={true}>&hellip;</li>
						{_range(currentPage - 2, currentPage + 3).map((pageNumber) => <PageLink pageNumber={pageNumber} />)}
						<li className="wsu-scholarship-list__pagination-menu-item" aria-hidden={true}>&hellip;</li>
						<PageLink pageNumber={data.numberOfPages} />
					</>)}

				</ol>
			</nav>
		</div >
	)
}

export default Pagination;
