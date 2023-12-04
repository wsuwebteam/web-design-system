import { useCookies } from "react-cookie";
import DegreeList from "./degrees.list";
import DegreeGrid from "./degrees.grid";
import DegreeLayoutToggle from "./degrees.layout-toggle";
import { useDegrees } from "../hooks";


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
			{isLoading && <p>loading...</p>}
			{error && <p>Something went wrong. Degrees could not be retrieved.</p>}
			{!isLoading && data && data.length === 0 && <p>No degrees could be found.</p>}
			{!isLoading && data && data.length > 0 && <>
				{layout === "list" ?
					<DegreeList degrees={data} favorites={favorites} toggleFavorite={toggleFavorite} />
					: <DegreeGrid degrees={data} favorites={favorites} toggleFavorite={toggleFavorite} />}
			</>}
		</>
	);
}


export default Degrees;
