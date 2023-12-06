import { useInView } from "react-intersection-observer";
import { degreeCollectionType, degreeType } from "../types";

function DegreeGrid({ degrees, favorites, toggleFavorite }: { degrees: degreeCollectionType, favorites: number[], toggleFavorite: (id: number) => void }) {

	return <div className="wsu-degree-finder__degrees-grid" aria-live="assertive" aria-atomic="true">
		<div className="wsu-card-group wsu-card-group--per-row-3">
			{degrees.map((d) => {
				const isFavorited = favorites.includes(d.id);
				return <Degree key={`grid-item-${d.id}`} degree={d} isFavorited={isFavorited} toggleFavorite={toggleFavorite} />;
			})}
		</div>
	</div>

}

function Degree({ degree, isFavorited, toggleFavorite }: { degree: degreeType, isFavorited: boolean, toggleFavorite: (id: number) => void }) {

	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '200px 0px',
	});

	return <article ref={ref} className="wsu-card wsu-degree-profile__related-card">
		{inView && <>
			<div className="wsu-image-frame wsu-image-frame--fixed-ratio">
				<a href={degree.url} tabIndex={-1} aria-hidden="true" dangerouslySetInnerHTML={{ __html: degree.image }}></a>
			</div>
		</>
		}
		<div className="wsu-card__content">
			<h2 className="wsu-title"><a href={degree.url}>{degree.title}</a></h2>
			{inView && <>
				<span className="fa-layers fa-fw wsu-degree-grid__favorite-container" role="listbox" tabIndex={0}>
					<span className="wsu-screen-reader-only">{isFavorited ? 'Remove from' : 'Add to'} favorites</span>
					<span onClick={() => toggleFavorite(degree.id)} className="wsu-degree-grid__favorite-controls" role="option" aria-selected={isFavorited}>
						<i className="fa-solid fa-heart fa-xl wsu-degree-grid__favorite-icon-solid"></i>
						<i className="fa-regular fa-heart fa-xl wsu-degree-grid__favorite-icon-regular"></i>
					</span>
				</span>
			</>}
		</div>
	</article>

}

export default DegreeGrid;

