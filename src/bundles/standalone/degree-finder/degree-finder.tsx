import { default as DegreeFilters } from './components/filters';
import Degrees from "./components/degrees";

function DegreeFinder() {
	return (
		<div className="wsu-degree-finder__content">
			<DegreeFilters></DegreeFilters>
			<Degrees></Degrees>
		</div>
	);
}

export default DegreeFinder;
