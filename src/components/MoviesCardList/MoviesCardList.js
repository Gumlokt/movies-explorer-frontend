import movie01 from '../../images/samples/movie-01.png';
import movie02 from '../../images/samples/movie-02.png';
import movie03 from '../../images/samples/movie-03.png';
import movie04 from '../../images/samples/movie-04.png';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {/* grid items */}
      <ul className="movies-card-list__items">
        <li className="movies-card-list__item">
          <MoviesCard poster={movie01} title={`The Expanse`} />
        </li>

        <li className="movies-card-list__item">
          <MoviesCard poster={movie02} title={`Киноальманах «100 лет дизайна»`} />
        </li>

        <li className="movies-card-list__item">
          <MoviesCard poster={movie03} title={`Gimme Danger: История Игги и The Stoooooges`} />
        </li>

        <li className="movies-card-list__item">
          <MoviesCard poster={movie04} title={`33 слова о дизайне (some lorem ipsum text)`} />
        </li>
      </ul>

      <form className="movies-card-list__form">
        <button className="movies-card-list__btn-more"></button>
      </form>
    </section>
  );
}

export default MoviesCardList;
