import React, { useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { moviesSelector } from '../../utils/MoviesSelector';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults';

function Movies(props) {
  const [beatMovies, setBeatMovies] = useState([]);
  const [term, setTerm] = useState('');
  const [displayPreloader, setDisplayPreloader] = useState(false);
  const [displayEmptySearchResults, setDisplayEmptySearchResults] = useState('');

  function resetForm(event) {
    event.preventDefault();
    setDisplayEmptySearchResults('');
    setTerm('');
  }

  function fetchMoviesList(event) {
    event.preventDefault();
    if (!term) {
      setDisplayEmptySearchResults('Нужно ввести ключевое слово');
      return;
    }

    setDisplayPreloader(true);

    Promise.all([
      //в Promise.all передаем массив промисов которые нужно выполнить
      moviesApi.getInitialMovies(),
    ])
      .then((values) => {
        //попадаем сюда когда массив промисов будут выполнены
        const [initialMovies] = values;

        // отбираем фильмы согласно поисковому запросу пользователя
        setBeatMovies(moviesSelector.select(initialMovies, term));

        setDisplayPreloader(false);
      })
      .catch((err) => {
        //попадаем сюда если хотя бы один из промисов завершится ошибкой
        console.log(err.message);
        setDisplayPreloader(false);
      });
  }

  function handleChangeTerm(e) {
    setTerm(e.target.value);
    setDisplayEmptySearchResults('');
  }

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          resetForm={resetForm}
          fetchMoviesList={fetchMoviesList}
          displayPreloader={displayPreloader}
          term={term}
          handleChangeTerm={handleChangeTerm}
        />

        <div>{term}</div>

        {displayEmptySearchResults ? (
          <EmptySearchResults message={displayEmptySearchResults} />
        ) : (
          <MoviesCardList beatMovies={beatMovies} displayMoreBtn={props.displayMoreBtn} />
        )}
      </div>
    </main>
  );
}

export default Movies;
