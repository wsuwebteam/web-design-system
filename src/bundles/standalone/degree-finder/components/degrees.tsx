import { useCookies } from "react-cookie";
import DegreeList from "./degrees.list";
import DegreeGrid from "./degrees.grid";
import DegreeLayoutToggle from "./degrees.layout-toggle";
import { useDegrees } from "../hooks";
import Message from "./message";


function Degrees() {
	const { data, isLoading, error } = useDegrees();
	const [cookies, setCookies] = useCookies(['degreeLayout', 'favoriteDegrees']);
	const layout = cookies.degreeLayout || 'grid';
	const favorites: number[] = cookies.favoriteDegrees || [];

	function updateLayout(layout: string) {
		setCookies('degreeLayout', layout);
	}

	function toggleFavorite(degreeId: number) {
		const newFavorites = favorites.includes(degreeId) ? favorites.filter(id => id !== degreeId) : [...favorites, degreeId];
		setCookies('favoriteDegrees', newFavorites);
	}

	return (
		<>
			<DegreeLayoutToggle layout={layout} onChange={updateLayout} />
			<div id="degrees" tabIndex={-1} className="wsu-degree-finder__degrees-container">
				{isLoading && <p>loading...</p>}
				{!isLoading && error && <Message errorMessage="Something went wrong. Degrees could not be retrieved." />}
				{!isLoading && data && data.length === 0 && <Message className="wsu-error--style-info" iconClass="circle-question" errorMessage="No degrees could be found for the provided parameters." />}
				{!isLoading && data && data.length > 0 && <>
					{layout === "list" ?
						<DegreeList degrees={data} favorites={favorites} toggleFavorite={toggleFavorite} />
						: <DegreeGrid degrees={data} favorites={favorites} toggleFavorite={toggleFavorite} />}
				</>}
			</div>
		</>
	);
}


export default Degrees;
