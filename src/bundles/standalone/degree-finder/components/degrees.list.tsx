import { degreeCollectionType, degreeType } from "../types";
import { useInView } from "react-intersection-observer";

function DegreeList({ degrees, favorites, toggleFavorite }: { degrees: degreeCollectionType, favorites: number[], toggleFavorite: (id: number) => void }) {

	return <div className="wsu-degree-finder__degrees-grid wsu-degree-finder__degrees-grid--layout-list">
		<div id="degreeslist" className="wsu-card-group wsu-card-group--per-row-1">
			{degrees.map((d) => {
				const isFavorited = favorites.includes(d.id);
				return <Degree key={d.id} degree={d} isFavorited={isFavorited} toggleFavorite={toggleFavorite} />;
			})}
		</div>
	</div>

}

function Degree({ degree, isFavorited, toggleFavorite }: { degree: degreeType, isFavorited: boolean, toggleFavorite: (id: number) => void }) {

	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '400px 0px',
	});

	return <article ref={ref} className="wsu-card wsu-degree-profile__related-card wsu-card--style-horizontal-25">
		{inView && <>
			<div className="wsu-image-frame wsu-image-frame--fixed-ratio">
				<a href={degree.url} tabIndex={-1} aria-hidden="true" dangerouslySetInnerHTML={{ __html: degree.image }}></a>
			</div>
		</>
		}
		<div className="wsu-card__content">
			<div className="wsu-card__header">
				<h2 className="wsu-title"><a href={degree.url}>{degree.title}</a></h2>
				{inView && <>
					<span className="fa-layers fa-fw " role="listbox">
						<span className="wsu-screen-reader-only">{isFavorited ? 'Remove from' : 'Add to'} favorites</span>
						<span onClick={() => toggleFavorite(degree.id)} className="wsu-degree-grid__favorite-controls" role="option" aria-selected={isFavorited} tabIndex={0}>
							<i className="fa-solid fa-heart fa-xl wsu-degree-grid__favorite-icon-solid"></i>
							<i className="fa-regular fa-heart fa-xl wsu-degree-grid__favorite-icon-regular"></i>
						</span>
					</span>
				</>}
			</div>
			{degree.excerpt && <p>{degree.excerpt}</p>}
		</div>
	</article>

}

export default DegreeList;

