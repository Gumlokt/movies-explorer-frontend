import React, { useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';
import { moviesSelector } from '../../utils/MoviesSelector';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults';

function Movies(props) {
  // const [totalCardsInRow, setTotalCardsInRow] = useState(3);
  // const [totalRows, setTotalRows] = useState(0);

  const [beatMovies, setBeatMovies] = useState([]);
  const [term, setTerm] = useState('');
  const [displayPreloader, setDisplayPreloader] = useState(false);
  const [displayEmptySearchResults, setDisplayEmptySearchResults] = useState('');

  function resetForm(event) {
    event.preventDefault();
    setDisplayEmptySearchResults('');
    setTerm('');
    setBeatMovies([]);
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
        const selectedMovies = moviesSelector.select(initialMovies, term);

        // setTotalRows(selectedMovies.length % totalCardsInRow > 0 ? Math.ceil(selectedMovies.length / totalCardsInRow) : selectedMovies.length / totalCardsInRow);

        // console.log(Math.ceil(selectedMovies.length / totalCardsInRow));
        // console.log(totalRows);

        if(selectedMovies.length) {
          setBeatMovies(selectedMovies);
        } else {
          setDisplayEmptySearchResults('Ничего не найдено');
        }
        
        setDisplayPreloader(false);
      })
      .catch((err) => {
        //попадаем сюда если хотя бы один из промисов завершится ошибкой
        console.log(err.message);
        setDisplayEmptySearchResults('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
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
