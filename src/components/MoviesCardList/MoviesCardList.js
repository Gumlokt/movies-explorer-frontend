import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className={`movies-card-list${props.displayedMovies.length ? ' movies-card-list_type_displayed' : ''}`}>
      <ul className="movies-card-list__items">
        {props.displayedMovies.map((movieItem, index) => {
          return (
            <li className="movies-card-list__item" key={index}>
              <MoviesCard
                movieItem={movieItem}
                favouriteMovies={props.favouriteMovies}
                onMovieSave={props.onMovieSave}
                onMovieRemove={props.onMovieRemove}
              />
            </li>
          );
        })}
      </ul>

      {props.displayMoreBtn && (
        <form className="movies-card-list__form">
          <button onClick={props.handleMoreFilmsBtn} className="movies-card-list__btn-more"></button>
        </form>
      )}
    </section>
  );
}

export default MoviesCardList;
