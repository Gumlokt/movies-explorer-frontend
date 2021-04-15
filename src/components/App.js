import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../contexts/CurrentUserContext';
import * as auth from '../utils/auth.js';

import { mainApi } from '../utils/MainApi';
import { moviesApi } from '../utils/MoviesApi';
import { moviesSelector } from '../utils/MoviesSelector';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import Register from './Register/Register';
import Login from './Login/Login';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

import Movies from './Movies/Movies';
import Profile from './Profile/Profile';

import PageNotFound from './PageNotFound/PageNotFound';
import Popup from './Popup/Popup';
import SavedMovies from './SavedMovies/SavedMovies';

import useFormWithValidation from '../hooks/useFormWithValidation';

function App() {
  const formValidation = useFormWithValidation();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [userEmail, setUserEmail] = useState('');
  const [currentUser, setCurrentUser] = useState({ name: '', email: '', });

  // const [credentials, setCredentials] = useState({ name: '', email: '', password: '' });

  // function handleUser(user) {
  //   setCurrentUser(user);
  // }

  // function handleLoggedIn(trueOrFalse) {
  //   setLoggedIn(trueOrFalse);
  //   if (!trueOrFalse) {
  //     handleUser({ name: '', email: '' });
  //     setUserEmail('');
  //   }
  // }

  function handleRegister(e) {
    e.preventDefault();
    console.log(formValidation.credentials);

    auth
      .register(formValidation.credentials)
      .then((data) => {
        if (!data) {
          // openInformerPopup('Что-то пошло не так!');
          console.log('Что-то пошло не так!');
          return;
        }

        if (data.error) {
          // openInformerPopup(data.error);
          console.log(data.error);
          return;
        } else {
          // openInformerPopup('Регистрация успешна!', true);
          console.log('Регистрация успешна!', true);
          // history.push('/sing-in');
          return;
        }
      })
      .catch((err) => console.log(err));
  }


  const location = useLocation();

  const savedMoviesRoute = '/saved-movies'; // для роута /saved-movies логика работы немного отличается от логики работы /movies

  const [isInformerPopupOpen, setInformerPopupOpen] = useState(false);
  const [messageToUser, setMessageToUser] = useState(
    'Some lorem ipsum text... Some lorem ipsum text... Some lorem ipsum text...',
  );

  function closeInformerPopup() {
    setInformerPopupOpen(false);
    setMessageToUser('');
  }

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
  function dispatchMoviesDisplaying(selectedMovies) {
    setFilteredMovies(selectedMovies);

    if (!selectedMovies.length) {
      setDisplayEmptySearchResults('Ничего не найдено');
    } else if (selectedMovies.length > cardsToDisplayByDefault && location.pathname !== savedMoviesRoute) {
      setDisplayedMovies(selectedMovies.slice(0, cardsToDisplayByDefault)); // если фильмов отфильтрованы больше, чем можно показать, то тогда сюда нужно slice-ить карточки от массива отфильтрованых фильмов
    } else {
      setDisplayedMovies(selectedMovies);
    }

    setDisplayPreloader(false);
  }

  /**
   * Function to run filtering movies from BeatfilmMoviesApi.
   * @param {Object} event - Browser's event - click submit button.
   * @returns {void}
   */
  function filterBeatfilmMoviesList(event) {
    if (event) {
      event.preventDefault();
    }

    setDisplayedMovies([]);

    if (!term) {
      setDisplayEmptySearchResults('Нужно ввести ключевое слово');
      return;
    }

    
    if (initialMovies.length) {
      dispatchMoviesDisplaying(moviesSelector.select(initialMovies, term, short));
    } else {
      setDisplayPreloader(true);

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
          dispatchMoviesDisplaying(selectedMovies);
          setDisplayPreloader(false);
        })
        .catch((err) => {
          //попадаем сюда если хотя бы один из промисов завершится ошибкой
          console.log(err.message);

          setDisplayEmptySearchResults(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          );

          setDisplayPreloader(false);
        });
    }
  }

  /**
   * Function to run filtering favourite movies.
   * @param {Object} event - Browser's event - click submit button.
   * @returns {void}
   */
   function filterFavouriteMoviesList(event) {
    if (event) {
      event.preventDefault();
    }

    setDisplayedMovies([]);

    if (!term) {
      setDisplayEmptySearchResults('Нужно ввести ключевое слово');
      return;
    }

    if (favouriteMovies.length) {
      dispatchMoviesDisplaying(moviesSelector.select(favouriteMovies, term, short));
    } else {
      setDisplayPreloader(true);

      Promise.all([mainApi.getFavouriteMovies()])
        .then((values) => {
          const [allFavouriteMovies] = values;
          // setInitialMovies(allFavouriteMovies);
          setFavouriteMovies(allFavouriteMovies);

          return moviesSelector.select(allFavouriteMovies, term, short);
        })
        .then((selectedMovies) => {
          dispatchMoviesDisplaying(selectedMovies);
          setDisplayPreloader(false);
        })
        .catch((err) => {
          //попадаем сюда если хотя бы один из промисов завершится ошибкой
          console.log(err.message);

          setDisplayEmptySearchResults(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          );

          setDisplayPreloader(false);
        });
    }
}

  /**
   * Function to reset search form.
   * @param {Object} event - Browser's event - click reset button.
   * @returns {void}
   */
  function resetForm(event) {
    if (event) {
      event.preventDefault();
    }

    setDisplayEmptySearchResults('');
    setTerm('');

    if (location.pathname === savedMoviesRoute) {
      dispatchMoviesDisplaying(favouriteMovies);
    } else {
      dispatchMoviesDisplaying(initialMovies);
    }
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
      country: movie.country || 'Unknown country',
      director: movie.director || 'Unknown director',
      duration: movie.duration || 0,
      year: movie.year || 'Our epoch',
      description: movie.description || 'No description...',
      image: (movie.image && movie.image.url)
        ? `https://api.nomoreparties.co${movie.image.url}`
        : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер',
      trailer: movie.trailerLink || 'https://youtube.com/',
      thumbnail: (movie.image && movie.image.url) 
        ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` 
        : 'https://via.placeholder.com/180x100/778899/FFFFFF?text=Постер',
      movieId: movie.id,
      nameRU: movie.nameRU || 'Название не известно',
      nameEN: movie.nameEN || 'Unknown name',
    };

    mainApi
      .addMovie(movieToSave)
      .then((addedMovie) => {
        setFavouriteMovies([addedMovie, ...favouriteMovies]);
      })
      .catch((err) => console.log(err));
  }

  /**
   * Function to remove the selected movie from favorites.
   * @param {Object} movie - Browser's event - click remove button.
   * @returns {void}
   */
  function handleMovieRemove(movieId) {
    const movieToRemove = favouriteMovies.find((item) => {
      return item.movieId === movieId;
    });

    mainApi
      .removeMovie(movieToRemove._id)
      .then((removedMovie) => {
        return favouriteMovies.filter((item) => {
          return item.movieId !== removedMovie.data.movieId;
        });
      })
      .then((updatedFavouriteMovies) => {
        setFavouriteMovies(updatedFavouriteMovies);

        if (location.pathname === savedMoviesRoute) {
          if (term) {
            dispatchMoviesDisplaying(moviesSelector.select(updatedFavouriteMovies, term, short));
          } else {
            dispatchMoviesDisplaying(updatedFavouriteMovies);
          }
        }
      })
      .catch((err) => console.log(err));
  }

  /**
   * Function to get all initialMovies from localStorage and favouriteMovies from api once at app start and also track screen resolution.
   * @returns {void}
   */
  useEffect(() => {
    setDisplayEmptySearchResults('');

    if (localStorage.getItem('initialMovies')) {
      const allBeatfilmMovies = JSON.parse(localStorage.getItem('initialMovies'));

      if (allBeatfilmMovies && allBeatfilmMovies.length) {
        setInitialMovies(allBeatfilmMovies);
        if (location.pathname !== savedMoviesRoute) {
          dispatchMoviesDisplaying(allBeatfilmMovies);
        }
      }
    }

    Promise.all([mainApi.getFavouriteMovies()])
      .then((values) => {
        const [allFavouriteMovies] = values;
        setFavouriteMovies(allFavouriteMovies);

        if (location.pathname === savedMoviesRoute) {
          dispatchMoviesDisplaying(allFavouriteMovies);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });


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
      }, 500);
    }

    keepTrackScreenWidth();

    window.addEventListener('resize', keepTrackScreenWidth);

    return () => {
      window.removeEventListener('resize', keepTrackScreenWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register
            // credentials={formValidation.credentials}
            // onCredentialsChange={formValidation.handleCredentialsChange}
            registerUser={handleRegister}
            formValidation={formValidation}
          />
        </Route>


        <CurrentUserContext.Provider value={currentUser}>
        <ProtectedRoute
        />
        </CurrentUserContext.Provider>


        <Route path="/movies">
          <Header darkTheme={true} />
          <Movies
            resetForm={resetForm}
            onFilterMoviesList={filterBeatfilmMoviesList}
            displayPreloader={displayPreloader}
            term={term}
            short={short}
            handleChangeTerm={handleChangeTerm}
            handleShort={handleShort}
            message={displayEmptySearchResults}
            favouriteMovies={favouriteMovies}
            displayedMovies={displayedMovies}
            displayMoreBtn={filteredMovies.length > displayedMovies.length} // кнопка "Ещё" будет отображаться только на странице /movies и до тех пор, пока число отфильтрованных фильмов по запросу юзера будет превышать число отрендеренных
            handleMoreFilmsBtn={handleMoreFilmsBtn}
            onMovieSave={handleMovieSave}
            onMovieRemove={handleMovieRemove}
          />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header darkTheme={true} />
          <SavedMovies
            resetForm={resetForm}
            onFilterMoviesList={filterFavouriteMoviesList}
            displayPreloader={displayPreloader}
            term={term}
            short={short}
            handleChangeTerm={handleChangeTerm}
            handleShort={handleShort}
            message={displayEmptySearchResults}
            favouriteMovies={favouriteMovies}
            displayedMovies={displayedMovies}
            displayMoreBtn={false} // кнопка "Ещё" отображается только на странице /movies
            onMovieRemove={handleMovieRemove}
          />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header darkTheme={true} />
          <Profile />
        </Route>

        <Route path="/page-not-found">
          <PageNotFound />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Popup isOpen={isInformerPopupOpen} message={messageToUser} onClose={closeInformerPopup} />
    </>
  );
}

export default App;
