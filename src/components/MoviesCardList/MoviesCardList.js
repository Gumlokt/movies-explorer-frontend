import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__items">
        {props.beatMovies.map((item, index) => {
          return (
            <li className="movies-card-list__item" key={index}>
              <MoviesCard beatMovie={item} />
            </li>
          );
        })}
      </ul>

      {props.displayMoreBtn && (
        <form className="movies-card-list__form">
          <button className="movies-card-list__btn-more"></button>
        </form>
      )}
    </section>
  );
}

export default MoviesCardList;
