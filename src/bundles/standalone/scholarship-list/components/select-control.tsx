import { WP_Term } from "wp-types";
import { SelectControlProps } from "../interfaces";

function SelectControl<T extends WP_Term | string>(props: SelectControlProps<T>): JSX.Element {
	return <div className={`wsu-scholarship-list__select-control ${props.className}`}>
		<select
			name={props.name}
			className={`wsu-scholarship-list__select-control__input`}
			value={props.value}
			onChange={(e) => props.handleChange(e.target.value, props.name)}>
			{props.label && <option>{props.label}</option>}
			{props.options?.map(option => props.renderOption(option))}
		</select>
	</div>
}

export default SelectControl;
