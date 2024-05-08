function DegreeLayoutToggle({ layout, onChange }: { layout: string, onChange: (layout: string) => void }) {

	return <div className="wsu-degree-finder__degrees-grid-controls" role="radiogroup" aria-labelledby="degreeControlLabel">
		<h2 className="wsu-screen-reader-only" id="degreeControlLabel">Choose degree list layout:</h2>
		<div className="wsu-degree-finder__degrees-grid-control">
			<button
				onClick={() => onChange('grid')}
				className="wsu-degree-finder__degrees-grid-control-grid"
				role="radio"
				aria-checked={layout === 'grid'}
				aria-label="Change degree list layout to a grid">
				<i className="fa-sharp fa-solid fa-grid fa-2xl"></i>
			</button>
		</div>
		<div className="wsu-degree-finder__degrees-grid-control">
			<button
				onClick={() => onChange('list')}
				className="wsu-degree-finder__degrees-grid-control-list"
				role="radio"
				aria-checked={layout === 'list'}
				aria-label="Change degree list layout to a list">
				<i className="fa-sharp fa-solid fa-list fa-2xl"></i>
			</button>
		</div>
	</div>

}

export default DegreeLayoutToggle;
