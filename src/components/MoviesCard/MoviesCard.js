import { useLocation } from 'react-router-dom';

import { convertDuration } from '../../utils/convertDuration';

import './MoviesCard.css';

function MoviesCard(props) {
  const location = useLocation();

  function handleBtnRemoveClick() {
    props.onMovieRemove(props.movieItem);
    console.log('delete movie from favourite...');
  }

  function handleBtnClick() {
    props.onMovieSave(props.movieItem);
    // console.log(props.movieItem);
    // console.log(location.pathname);
  }

  return (
    <div className="movies-card">
      {location.pathname === '/saved-movies' ? (
        <button className="movies-card__btn movies-card__btn_type_remove" onClick={handleBtnRemoveClick}></button>
      ) : (
        <button
          className={`movies-card__btn${
            props.favouriteMovies.some((item) => {
              return item.movieId === props.movieItem.id;
            })
              ? ' movies-card__btn_type_stored'
              : ' movies-card__btn_type_save'
          }`}
          onClick={handleBtnClick}
        ></button>
      )}

      <figure className="movies-card__figure">
        <div className="movies-card__image-box">
          <a
            className="movies-card__link"
            href={props.movieItem.trailerLink ? props.movieItem.trailerLink : 'https://www.kinopoisk.ru/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                props.movieItem.image && props.movieItem.image.url
                  ? `https://api.nomoreparties.co${props.movieItem.image.url}`
                  : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер'
              }
              className="movies-card__image"
              alt="Постер к фильму"
            />
          </a>
        </div>

        <figcaption className="movies-card__caption">
          <h4 className="movies-card__title" title={`Название на английском: ${props.movieItem.nameEN}`}>
            {props.movieItem.nameRU}
          </h4>

          <p className="movies-card__duration">{convertDuration(props.movieItem.duration)}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default MoviesCard;
