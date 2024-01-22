
function Message({ className = 'wsu-error--style-alert', errorMessage = '', iconClass = 'circle-exclamation', showIcon = true }: { className?: string, errorMessage: string, iconClass?: string, showIcon?: boolean }) {
	return <div className={`wsu-error ${className}`}>
		{showIcon && <i className={`fa-solid wsu-error__icon fa-${iconClass}`}></i>}
		<p>{errorMessage}</p>
	</div>
}

export default Message;
