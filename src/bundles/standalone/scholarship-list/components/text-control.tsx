import { ITextControlProps } from "../interfaces"

function TextControl(props: ITextControlProps) {
	return <div className={`wsu-scholarship-list__text-control ${props.className}`}>
		<input
			type="text"
			className={`wsu-scholarship-list__text-control__input`}
			name={props.name}
			aria-label={props['aria-label']}
			maxLength={props.maxLength}
			placeholder={props.placeholder}
			defaultValue={props.defaultValue}
			onChange={(e) => props.handleChange(e.target.value, props.name)} />
	</div>
}

export default TextControl;
