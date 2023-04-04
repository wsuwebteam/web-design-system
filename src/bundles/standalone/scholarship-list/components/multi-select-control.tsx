import { useState } from "react";
import { MultiSelectControlProps } from "../interfaces";

function MultiSelectControl(props: MultiSelectControlProps) {
	const { layout = 'list' } = props;
	const [selectedOptions, setSelectedOptions] = useState<string[]>(() => props.value ? props.value.split(',') : []);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		const isChecked = e.target.checked;

		const newSelectedOptions = isChecked ? insertSelectedOption(value, selectedOptions) : removeSelectedOption(value, selectedOptions);

		props.handleChange(newSelectedOptions.join(','), props.name);
		setSelectedOptions(newSelectedOptions);
	}

	function insertSelectedOption(value: string, selectedOptions: string[]) {
		if (!selectedOptions.includes(value)) {
			return [...selectedOptions, value];
		}

		return selectedOptions;
	}

	function removeSelectedOption(value: string, selectedOptions: string[]) {
		return selectedOptions.filter(option => option !== value);
	}

	if (layout === 'checkboxes') {
		return (
			<div className={`wsu-scholarship-list__multi-checkbox-control ${props.className}`}>
				{props.label && <p className="wsu-scholarship-list__multi-checkbox-control__label">{props.label}</p>}
				<ul className="wsu-scholarship-list__multi-checkbox-control__list">
					{props.options?.map(option => {
						return <li key={option.id} className="wsu-scholarship-list__multi-checkbox-control__list-item">
							<input
								type="checkbox"
								className="wsu-scholarship-list__multi-checkbox-control__input"
								id={option.slug}
								name={option.slug}
								value={option.id}
								checked={selectedOptions.includes(option.id)}
								onChange={(e) => handleChange(e)} />
							<label className="wsu-scholarship-list__multi-checkbox-control__input-label" htmlFor={option.slug}>{option.label}</label>
						</li>
					})}
				</ul>
			</div>
		)
	}

	// default to list layout
	return (
		<div className={`wsu-scholarship-list__multi-select-control ${props.className}`}>
			{props.label && <p className="wsu-scholarship-list__multi-select-control__label">{props.label}</p>}
			<ul className="wsu-scholarship-list__multi-select-control__list">
				{props.options?.map(option => {
					return <li key={option.id} className="wsu-scholarship-list__multi-select-control__list-item">
						<input
							type="checkbox"
							className="wsu-scholarship-list__multi-select-control__input wsu-screen-reader-only"
							id={option.slug}
							name={option.slug}
							value={option.id}
							checked={selectedOptions.includes(option.id)}
							onChange={(e) => handleChange(e)} />
						<label className="wsu-scholarship-list__multi-select-control__input-label" htmlFor={option.slug}>{option.label}</label>
					</li>
				})}
			</ul>
		</div>
	)
}

export default MultiSelectControl;
