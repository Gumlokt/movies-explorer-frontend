import React, { useRef, useEffect } from 'react';

import './SearchForm.css';

import Preloader from '../Preloader/Preloader';

function SearchForm(props) {
  const [displayPreloader, setDisplayPreloader] = React.useState(false);
  const textInput = useRef(null);

  function fetchMoviesList(event) {
    event.preventDefault();
    // here will be code to get movies list
    setDisplayPreloader(true);
  }

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        console.log('Close');
        setDisplayPreloader(false);
      }
    };

    textInput.current.focus();

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <label className="search-form__input-label" htmlFor="search-input"></label>

        <input ref={textInput} type="text" className="search-form__text-input" placeholder="Фильм" id="search-input" />

        <button className="search-form__btn-submit" onClick={fetchMoviesList}></button>
      </div>

      <label className="search-form__checkbox-label" htmlFor="checkbox">
        <input type="checkbox" className="search-form__checkbox-input" id="checkbox" />
        <span className="search-form__visible-checkbox"></span>Короткометражки
      </label>

      <Preloader isOpen={displayPreloader} />
    </form>
  );
}

export default SearchForm;
