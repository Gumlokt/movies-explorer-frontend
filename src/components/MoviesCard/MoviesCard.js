import './MoviesCard.css';

function MoviesCard(props) {
  function turnDurationToHumanReadable(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;

    return `${hours}ч ${minutes}м`;
  }

  return (
    <div className="movies-card">
      <button className="movies-card__btn movies-card__btn_type_stored"></button>

      <figure className="movies-card__figure">
        <div className="movies-card__image-box">
          <img
            src={
              props.beatMovie.image && props.beatMovie.image.url
                ? `https://api.nomoreparties.co${props.beatMovie.image.url}`
                : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер'
            }
            className="movies-card__image"
            alt="Постер к фильму"
          />
        </div>

        <figcaption className="movies-card__caption">
          <h4 className="movies-card__title" title={props.beatMovie.nameRU}>
            {props.beatMovie.nameRU}
          </h4>

          <p className="movies-card__duration">{turnDurationToHumanReadable(props.beatMovie.duration)}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default MoviesCard;
