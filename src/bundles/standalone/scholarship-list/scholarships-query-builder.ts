import { IScholarship } from "./interfaces";

export default class ScholarshipsQueryBuilder {
	private _scholarships: Array<IScholarship>;
	private _filters: Array<Function> = [];
	private _sort = { orderBy: "title", order: "asc" };
	private _pagination = { page: 1, pageSize: 50 };

	constructor(scholarships: Array<IScholarship>) {
		this._scholarships = scholarships;
	}

	addFilter(callback: Function) {
		this._filters.push(callback);
		return this;
	}

	setSort(orderBy: string, order: string) {
		this._sort = { orderBy, order };
		return this;
	}

	setPagination(page: number, pageSize: number) {
		this._pagination = { page, pageSize };
		return this;
	}

	private filter() {
		const combinedFilter = (scholarship: IScholarship) => {
			return this._filters.every((filter) => filter(scholarship));
		};

		this._scholarships = this._scholarships.filter(combinedFilter);
	}

	private sort() {
		this._scholarships = this._scholarships.sort((a, b) => {
			const orderBy = this._sort.orderBy as keyof IScholarship;
			const aValue = a[orderBy];
			const bValue = b[orderBy];

			// force undefined values to the end. Do we want this?
			if (aValue === 0) {
				return 1;
			} else if (bValue === 0) {
				return -1;
			}

			// perform regular sort
			if (aValue < bValue) {
				return this._sort.order === "asc" ? -1 : 1;
			}
			if (aValue > bValue) {
				return this._sort.order === "asc" ? 1 : -1;
			}
			return 0;
		});
	}

	private paginate() {
		const skip = (this._pagination.page - 1) * this._pagination.pageSize;
		const take = this._pagination.pageSize;
		this._scholarships = this._scholarships.slice(skip, skip + take);

		return this;
	}

	build() {
		this.filter();

		const totalCount = this._scholarships.length;
		const numberOfPages = Math.ceil(totalCount / this._pagination.pageSize);

		this.sort();
		this.paginate();

		return {
			scholarships: this._scholarships,
			totalCount,
			numberOfPages,
		};
	}
}
