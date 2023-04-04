function TableSortControl({ className, label, ariaLabel, defaultDirection = 'asc', metaKey, params, setParams }: {
	className: string,
	label: string,
	ariaLabel?: string,
	defaultDirection?: string,
	metaKey: string,
	params: Record<string, string>,
	setParams: (value: Record<string, string>) => void
}) {

	const headerSort: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> = metaKey === params.orderBy ? {
		'aria-sort': params.order === 'desc' ? 'descending' : 'ascending',
	} : {};

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
		<th {...headerSort}>
			<button
				className={`${className} ${params.orderBy === metaKey ? `is-active ${params.order}` : ''}`}
				onClick={handleClick}>
				{label}
			</button>
		</th>
	);

}

export default TableSortControl;
