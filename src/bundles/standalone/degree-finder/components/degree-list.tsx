import { degreeCollectionType, degreeType } from "../degrees";

function DegreeList({ degrees, favorites, toggleFavorite }: { degrees: degreeCollectionType, favorites: number[], toggleFavorite: (id: number) => void }) {

    return <div className="wsu-degree-finder__degrees-grid wsu-degree-finder__degrees-grid--layout-list">
        <div id="degreeslist" className="wsu-card-group wsu-card-group--per-row-1">
            {degrees.map((d) => {
                const isFavorited = favorites.includes(d.id);

                return <article key={d.id} className="wsu-card wsu-degree-profile__related-card wsu-card--style-horizontal-25">
                    <div className="wsu-image-frame wsu-image-frame--fixed-ratio">
                        <a href={d.url} tabIndex={-1} aria-hidden="true" dangerouslySetInnerHTML={{ __html: d.image }}></a>
                    </div>
                    <div className="wsu-card__content">
                        <div className="wsu-card__header">
                            <h2 className="wsu-title"><a href={d.url}>{d.title}</a></h2>
                            <span className="fa-layers fa-fw " role="listbox">
                                <span className="wsu-screen-reader-only">{isFavorited ? 'Remove from' : 'Add to'} favorites</span>
                                <span onClick={() => toggleFavorite(d.id)} className="wsu-degree-grid__favorite-controls" role="option" aria-selected={isFavorited} tabIndex={0}>
                                    <i className="fa-solid fa-heart fa-xl wsu-degree-grid__favorite-icon-solid"></i>
                                    <i className="fa-regular fa-heart fa-xl wsu-degree-grid__favorite-icon-regular"></i>
                                </span>
                            </span>
                        </div>
                        {d.excerpt && <p>{d.excerpt}</p>}
                    </div>
                </article>
            })}
        </div>
    </div>
}

export default DegreeList;

