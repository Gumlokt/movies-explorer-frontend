import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults';

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <div className="saved-movies__container">
        <SearchForm
          resetForm={props.resetForm}
          filterMoviesList={props.filterMoviesList}
          displayPreloader={props.displayPreloader}
          term={props.term}
          short={props.short}
          handleChangeTerm={props.handleChangeTerm}
          handleShort={props.handleShort}
        />

        <EmptySearchResults message={props.message} />

        <MoviesCardList
          favouriteMovies={props.favouriteMovies}
          displayedMovies={props.displayedMovies}
          displayMoreBtn={props.displayMoreBtn}
          handleMoreFilmsBtn={props.handleMoreFilmsBtn}
          onMovieRemove={props.onMovieRemove}
        />
      </div>
    </main>
  );
}

export default SavedMovies;
