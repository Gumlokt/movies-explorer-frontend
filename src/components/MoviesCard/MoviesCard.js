import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="movies-card">
      <button className="movies-card__btn movies-card__btn_type_stored"></button>

      <figure className="movies-card__figure">
        <div className="movies-card__image-box">
          <img src={props.poster} className="movies-card__image" alt="Постер к фильму" />
        </div>

        <figcaption className="movies-card__caption">
          <h4 className="movies-card__title" title={props.title}>
            {props.title}
          </h4>

          <p className="movies-card__duration">1ч 17м</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default MoviesCard;
