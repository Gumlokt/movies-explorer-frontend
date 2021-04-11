import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { moviesSelector } from '../../utils/MoviesSelector';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptySearchResults from '../EmptySearchResults/EmptySearchResults';

function Movies(props) {
  const location = useLocation();

  const cardsOnDesktop = 12;
  const cardsOnTablet = 8;
  const cardsOnPhone = 5;
  const addCardsOnDesktop = 3;
  const addCardsOnTablet = 2;

  const [cardsToDisplayByDefault, setCardsToDisplayByDefault] = useState(cardsOnDesktop); // 12 - число фильмов для отображения в зависимости от разрешения экрана (энд поинты: 12шт. при >=1025px+;  5шт при <=480px-; 8шт. - во всех остальных разрешениях)
  const [cardsToAddOnClickMoreBtn, setCardsToAddOnClickMoreBtn] = useState(addCardsOnDesktop); // 3 - число фильмов, которые добавляются к уже отрендеренным при нажатии на кнопку "Ещё" (добавляется карточек: по 3шт. при >=1025px+; по 2шт. - во всех остальных разрешениях)

  const [initialMovies, setInitialMovies] = useState([]); // все фильмы полученные из BeatfilmMoviesApi
  const [favouriteMovies, setFavouriteMovies] = useState([]); // все избранные фильмы, который хранятся на moviehunter.ru

  const [filteredMovies, setFilteredMovies] = useState([]); // число отфильтрованных фильмов в соответствии с поисковым запросом юзера (допустимые значения - от 0 до infinity)
  const [displayedMovies, setDisplayedMovies] = useState([]); // число отрендеренных фильмов из числа отфильтрованных, изначально равно cardsToDisplayByDefault, при этом не может превышать filteredMovies (допустимые значения - от 1 до filteredMovies)

  const [term, setTerm] = useState(''); // поисковый запрос юзера
  const [short, setShort] = useState(false); // флаг (чекбокс) "короткометражки"

  const [displayPreloader, setDisplayPreloader] = useState(false); // показть/скрыть прелоадер
  const [displayEmptySearchResults, setDisplayEmptySearchResults] = useState(''); // показать/скрыть инфо контейнер с сообщениями юзеру

  /**
   * Helper function to setting the required number of movies to be rendered from among the filtered ones.
   * @param {Array} selectedMovies - Filtered movies according to the user's request.
   * @returns {void}
   */
  function moviesDispatcher(selectedMovies) {
    setFilteredMovies(selectedMovies);

    if (!selectedMovies.length) {
      setDisplayEmptySearchResults('Ничего не найдено');
    } else if (selectedMovies.length > cardsToDisplayByDefault) {
      setDisplayedMovies(selectedMovies.slice(0, cardsToDisplayByDefault)); // если фильмов отфильтрованы больше, чем можно показать, то тогда сюда нужно slice-ить карточки от массива отфильтрованых фильмов
    } else {
      setDisplayedMovies(selectedMovies);
    }

    setDisplayPreloader(false);
  }

  /**
   * Function to get movies from BeatfilmMoviesApi.
   * @param {Object} event - Browser's event - click submit button.
   * @returns {void}
   */
  function fetchMoviesList(event) {
    if (event) {
      event.preventDefault();
    }

    setDisplayedMovies([]);

    if (!term) {
      setDisplayEmptySearchResults('Нужно ввести ключевое слово');
      return;
    }

    setDisplayPreloader(true);

    if (location.pathname === '/saved-movies') {
      moviesDispatcher(moviesSelector.select(favouriteMovies, term, short));
    } else if (initialMovies.length) {
      moviesDispatcher(moviesSelector.select(initialMovies, term, short));
    } else {
      Promise.all([
        //в Promise.all передаем массив промисов которые нужно выполнить - в данном случае получаем все фильмы с сервиса beatfilm-movies
        moviesApi.getInitialMovies(),
      ])
        .then((values) => {
          //попадаем сюда когда массив промисов будут выполнен
          const [allBeatfilmMovies] = values;

          localStorage.setItem('initialMovies', JSON.stringify(allBeatfilmMovies)); // сохраняем весь список полученных фильмов в localStorage
          setInitialMovies(allBeatfilmMovies); // и в стейт переменную

          // отбираем фильмы согласно поисковому запросу пользователя - т.е. по введенной фразе и флагу "короткометражки"
          return moviesSelector.select(allBeatfilmMovies, term, short);
        })
        .then((selectedMovies) => {
          moviesDispatcher(selectedMovies);
        })
        .catch((err) => {
          //попадаем сюда если хотя бы один из промисов завершится ошибкой
          console.log(`catch block: ${err.message}`);

          setDisplayEmptySearchResults(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          );

          setDisplayPreloader(false);
        });
    }
  }

  // /**
  //  * Function to get movies from moviehunter.ru.
  //  * @param {Object} event - Browser's event - click submit button.
  //  * @returns {void}
  //  */
  // function fetchFavouriteMoviesList(event) {
  //   if (event) {
  //     event.preventDefault();
  //   }

  //   console.log(location.pathname);
  // }
  /**
   * Function to reset search form.
   * @param {Object} event - Browser's event - click reset button.
   * @returns {void}
   */
  function resetForm(event) {
    event.preventDefault();
    setDisplayEmptySearchResults('');
    setTerm('');
    setDisplayedMovies([]);

    console.log(location.pathname);
  }

  /**
   * Function to tracking changes of the input value.
   * @param {Object} event - Browser's event - change input value.
   * @returns {void}
   */
  function handleChangeTerm(event) {
    setTerm(event.target.value);
    setDisplayEmptySearchResults('');
  }

  /**
   * Function to set/unset checkbox.
   * @returns {void}
   */
  function handleShort() {
    setShort(!short);
  }

  /**
   * Function to render additional cards at the page.
   * @param {Object} event - Browser's event - click submit button.
   * @returns {void}
   */
  function handleMoreFilmsBtn(event) {
    event.preventDefault();

    let cardsToDisplay = displayedMovies.length + cardsToAddOnClickMoreBtn;

    if (cardsToDisplay >= filteredMovies.length) {
      setDisplayedMovies(filteredMovies);
    } else {
      setDisplayedMovies(filteredMovies.slice(0, cardsToDisplay));
    }
  }

  /**
   * Function to save the selected movie to favorites.
   * @param {Object} movie - Browser's event - click save button.
   * @returns {void}
   */
  function handleMovieSave(movie) {
    const movieToSave = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };

    mainApi
      .addMovie(movieToSave)
      .then((addedMovie) => {
        console.log(addedMovie);
      })
      .catch((err) => console.log(err));
  }

  /**
   * Function to remove the selected movie from favorites.
   * @param {Object} movie - Browser's event - click remove button.
   * @returns {void}
   */
  function handleMovieRemove(movie) {
    mainApi
      .removeMovie(movie._id)
      .then((removedMovie) => {
        console.log(removedMovie);
        // !!!! нужно доделать !!!!
      })
      .catch((err) => console.log(err));
  }

  /**
   * Function to track screen resolution.
   * @returns {void}
   */
  useEffect(() => {
    function keepTrackScreenWidth() {
      setTimeout(() => {
        setCardsToAddOnClickMoreBtn(addCardsOnTablet);
        setCardsToDisplayByDefault(cardsOnTablet);

        if (window.screen.width > 1024) {
          setCardsToDisplayByDefault(cardsOnDesktop);
          setCardsToAddOnClickMoreBtn(addCardsOnDesktop);
        }

        if (window.screen.width <= 480) {
          setCardsToDisplayByDefault(cardsOnPhone);
        }

        if (location.pathname === '/saved-movies') {
          setCardsToDisplayByDefault(Infinity);
        }
      }, 500);
    }

    keepTrackScreenWidth();

    window.addEventListener('resize', keepTrackScreenWidth);

    return () => {
      window.removeEventListener('resize', keepTrackScreenWidth);
    };
  }, [location]);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cardsToDisplayByDefault]);

  /**
   * Function to read initialMovies from localStorage once at app start.
   * @returns {void}
   */
  useEffect(() => {
    const allBeatfilmMovies = JSON.parse(localStorage.getItem('initialMovies'));

    if (allBeatfilmMovies && allBeatfilmMovies.length) {
      setInitialMovies(allBeatfilmMovies);
    }

    setDisplayedMovies([]);
  }, []);

  /**
   * Function to get favouriteMovies from moviehunter.ru once at app start.
   * @returns {void}
   */
  useEffect(() => {
    Promise.all([mainApi.getFavouriteMovies()])
      .then((values) => {
        const [allFavouriteMovies] = values;
        setFavouriteMovies(allFavouriteMovies);
      })
      .catch((err) => {
        console.log(`catch block: ${err.message}`);
      });
  }, []);

  return (
    <main className="movies">
      <div className="movies__container">
        <SearchForm
          resetForm={resetForm}
          fetchMoviesList={fetchMoviesList}
          displayPreloader={displayPreloader}
          term={term}
          short={short}
          handleChangeTerm={handleChangeTerm}
          handleShort={handleShort}
        />

        <EmptySearchResults message={displayEmptySearchResults} />

        <MoviesCardList
          favouriteMovies={favouriteMovies}
          displayedMovies={displayedMovies}
          displayMoreBtn={filteredMovies.length > displayedMovies.length && location.pathname !== '/saved-movies'} // кнопка "Ещё" будет отображается только на странице /movies и до тех пор, пока число отфильтрованных фильмов по запросу юзера будет превышать число отрендеренных
          handleMoreFilmsBtn={handleMoreFilmsBtn}
          onMovieSave={handleMovieSave}
          onMovieRemove={handleMovieRemove}
        />
      </div>
    </main>
  );
}

export default Movies;
