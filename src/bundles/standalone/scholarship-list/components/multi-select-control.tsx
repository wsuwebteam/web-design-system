import { useState, useEffect, useRef } from "react";
import { IMultiSelectControlProps } from "../interfaces";

function MultiSelectControl(props: IMultiSelectControlProps) {
	const { layout = 'list' } = props;
	const listRef = useRef<HTMLList>(null);
	const [focusedItem, setFocusedItem] = useState<number | null>(null);
	const [selectedOptions, setSelectedOptions] = useState<string[]>(() => props.value ? props.value.split(',') : []);

	function handleChange(value: string, isSelected: boolean, index?: number) {
		const newSelectedOptions = isSelected ? insertSelectedOption(value, selectedOptions) : removeSelectedOption(value, selectedOptions);

		props.handleChange(newSelectedOptions.join(','), props.name);
		setSelectedOptions(newSelectedOptions);

		if (index !== undefined) {
			setFocusedItem(index);
		}
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

	function onListKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
		switch (e.code) {
			case 'ArrowUp':
				setFocusedItem((prev) => prev !== null && prev > 0 ? prev - 1 : 0);
				e.preventDefault();
				e.stopPropagation();
				break;
			case 'ArrowDown':
				setFocusedItem((prev) => prev !== null && prev < props.options.length - 1 ? prev + 1 : props.options.length - 1);
				e.preventDefault();
				e.stopPropagation();
				break;
			case 'Home':
				setFocusedItem(0);
				e.preventDefault();
				e.stopPropagation();
				break;
			case 'End':
				setFocusedItem(props.options.length - 1);
				e.preventDefault();
				e.stopPropagation();
				break;
			case 'Space':
				const option = focusedItem !== null ? props.options[focusedItem] : null;
				if (option) {
					handleChange(option.id, !selectedOptions.includes(option.id));
				}
				e.preventDefault();
				e.stopPropagation();
				break;
		};
	}

	function onListMouseDown(e: React.MouseEvent<HTMLUListElement>) {
		if (listRef && listRef.current && e.target !== listRef.current) {
			listRef.current.dataset.skipFocus = 'true';
		}
	}


	function onListFocus(e: React.FocusEvent<HTMLUListElement>) {
		if (listRef && listRef.current) {
			if (listRef.current.dataset.skipFocus !== 'true') {
				const focusItem = Math.max(props.options.findIndex((option) => selectedOptions.includes(option.id)), 0);
				setFocusedItem(focusItem);
			}

			listRef.current.dataset.skipFocus !== '';
		}
	}

	function onListBlur(e: React.FocusEvent<HTMLUListElement>) {
		setFocusedItem(null);
	}

	useEffect(() => {
		if (listRef && listRef.current && focusedItem !== null) {
			const listBox = listRef.current;
			const selectedOption = document.getElementById(listRef.current.getAttribute('aria-activedescendant'));

			if (selectedOption && listBox.scrollHeight > listBox.clientHeight) {
				const scrollBottom = listBox.clientHeight + listBox.scrollTop;
				const elementBottom = selectedOption.offsetTop + selectedOption.offsetHeight;
				if (elementBottom > scrollBottom) {
					listBox.scrollTop = elementBottom - listBox.clientHeight;
				} else if (selectedOption.offsetTop < listBox.scrollTop) {
					listBox.scrollTop = selectedOption.offsetTop;
				}
			}
		}
	}, [focusedItem])


	if (layout === 'checkboxes') {
		return (
			<div
				className={`wsu-scholarship-list__multi-checkbox-control ${props.className}`}>
				{props.label && <p className="wsu-scholarship-list__multi-checkbox-control__label">{props.label}</p>}
				<ul className="wsu-scholarship-list__multi-checkbox-control__list">
					{props.options?.map((option) => {
						return <li key={option.id} className="wsu-scholarship-list__multi-checkbox-control__list-item">
							<input
								type="checkbox"
								className="wsu-scholarship-list__multi-checkbox-control__input"
								id={option.slug}
								name={option.slug}
								value={option.id}
								checked={selectedOptions.includes(option.id)}
								onChange={(e) => handleChange(e.target.value, e.target.checked)} />
							<label className="wsu-scholarship-list__multi-checkbox-control__input-label" htmlFor={option.slug}>{option.label}</label>
						</li>
					})}
				</ul>
			</div>
		)
	}

	// default to list layout
	return (
		<div
			className={`wsu-scholarship-list__multi-select-control ${props.className}`}>
			{props.label && <p className="wsu-scholarship-list__multi-select-control__label">{props.label}</p>}
			<ul
				ref={listRef}
				className="wsu-scholarship-list__multi-select-control__list"
				role="listbox"
				aria-label={props.ariaLabel}
				aria-multiselectable={true}
				tabIndex={0}
				aria-activedescendant={`${focusedItem !== null ? `${props.name}-${props.options[focusedItem].id}` : ''}`}
				onMouseDown={onListMouseDown}
				onKeyDown={onListKeyDown}
				onFocus={onListFocus}
				onBlur={onListBlur}>
				{props.options?.map((option, index) => {
					const isSelected = selectedOptions.includes(option.id);
					return <li
						key={option.id}
						id={`${props.name}-${option.id}`}
						className={`wsu-scholarship-list__multi-select-control__list-item ${focusedItem !== null && option.id === props.options[focusedItem].id ? "is-focused" : ''}`}
						role="option"
						aria-selected={isSelected}
						onClick={(e) => handleChange(option.id, !isSelected, index)}
					>{option.label}</li>
				})}
			</ul>
		</div>
	)
}

export default MultiSelectControl;
