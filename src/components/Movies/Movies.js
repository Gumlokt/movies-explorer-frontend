import React, { useEffect } from 'react';

import './Movies.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults';

function Movies(props) {
  useEffect(() => {
    props.resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header darkTheme={true} loggedIn={props.loggedIn} />

      <main className="movies">
        <div className="movies__container">
          <SearchForm
            resetForm={props.resetForm}
            onFilterMoviesList={props.onFilterMoviesList}
            displayPreloader={props.displayPreloader}
            term={props.term}
            short={props.short}
            searchBtnDisabled={props.searchBtnDisabled}
            handleChangeTerm={props.handleChangeTerm}
            handleShort={props.handleShort}
          />

          <EmptySearchResults message={props.message} />

          <MoviesCardList
            favouriteMovies={props.favouriteMovies}
            displayedMovies={props.displayedMovies}
            displayMoreBtn={props.displayMoreBtn}
            handleMoreFilmsBtn={props.handleMoreFilmsBtn}
            onMovieSave={props.onMovieSave}
            onMovieRemove={props.onMovieRemove}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Movies;
