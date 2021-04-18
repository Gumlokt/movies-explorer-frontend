import React, { useEffect } from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults';

function SavedMovies(props) {
  useEffect(() => {
    props.resetForm();
    props.onFilterMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header darkTheme={true} loggedIn={props.loggedIn} />

      <main className="saved-movies">
        <div className="saved-movies__container">
          <SearchForm
            resetForm={props.resetForm}
            onFilterMoviesList={props.onFilterMoviesList}
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
            onMovieRemove={props.onMovieRemove}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SavedMovies;
