import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList beatMovies={props.beatMovies} displayMoreBtn={props.displayMoreBtn} />
      </div>
    </main>
  );
}

export default Movies;
