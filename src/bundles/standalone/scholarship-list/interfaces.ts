export interface IScholarship {
	id: number;
	title: string;
	permalink: string;
	displayAmount: string;
	displayDeadline: string;
	applyLink: string;
	amount: number;
	deadline: number;
	gpa: string;
	grade: Array<number>;
	citizenship: Array<number>;
	major: Array<number>;
	state: string;
	requirements: Array<string>;
	data: Array<string>;
}

// export interface IScholarship {
//     id: string;
//     title: string;
//     permalink: string;
//     displayAmount: string;
//     displayDeadline: string;
//     applyLink: string;
//     data: Array<string>;
// }

export interface IScholarshipsQueryResult {
	numberOfPages: number;
	totalCount: number;
	scholarships: Array<IScholarship>;
}

export interface IScholarshipsResponse {
	numberOfPages: number;
	showingCount: number;
	totalCount: number;
	scholarships: Array<IScholarship>;
}

export interface ITextControlProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	handleChange: (value: string, field?: string) => void;
}

export interface ISelectControlProps<T>
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	options: Array<T>;
	handleChange: (value: string, field?: string) => void;
	renderOption: (option: T) => JSX.Element;
}

export interface IMultiSelectOption {
	id: string;
	slug: string;
	label: string;
}

export interface IMultiSelectControlProps {
	label?: string;
	ariaLabel?: string;
	name: string;
	className: string;
	layout?: "list" | "checkboxes";
	value: string;
	options: IMultiSelectOption[];
	handleChange: (value: string, field?: string) => void;
}
