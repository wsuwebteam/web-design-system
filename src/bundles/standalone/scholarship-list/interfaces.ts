export interface IScholarship {
    id: string;
    title: string;
    permalink: string;
    displayAmount: string;
    displayDeadline: string;
    applyLink: string;
    data: Array<string>;
}

export interface IScholarshipsResponse {
    numberOfPages: number;
    showingCount: number;
    totalCount: number;
    scholarships: Array<IScholarship>;
}

export interface TextControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
    handleChange: (value: string, field?: string) => void
}

export interface SelectControlProps<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: Array<T>;
    handleChange: (value: string, field?: string) => void
    renderOption: (option: T) => JSX.Element;
}

export interface MultiSelectOption {
    id: string;
    slug: string;
    label: string;
}

export interface MultiSelectControlProps {
    label?: string;
    name: string;
    className: string;
    layout?: 'list' | 'checkboxes';
    value: string;
    options: MultiSelectOption[];
    handleChange: (value: string, field?: string) => void;
}
