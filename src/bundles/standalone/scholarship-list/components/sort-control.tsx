function SortControl({ className, label, ariaLabel, defaultDirection = 'asc', metaKey, params, setParams }: {
	className: string,
	label: string,
	ariaLabel?: string,
	defaultDirection?: string,
	metaKey: string,
	params: Record<string, string>,
	setParams: (value: Record<string, string>) => void
}) {

	function toggleValue(currentValue: string) {
		return currentValue === 'asc' ? 'desc' : 'asc';
	}

	function handleClick() {
		const orderBy = metaKey;
		const order = metaKey === params.orderBy ? toggleValue(params.order) : defaultDirection;

		setParams({
			...params,
			orderBy,
			order
		});
	}

	return (
		<button
			aria-label={ariaLabel}
			className={`${className} ${params.orderBy === metaKey ? `is-active ${params.order}` : ''}`}
			onClick={handleClick}>
			{label}
		</button>
	);

}

export default SortControl;
