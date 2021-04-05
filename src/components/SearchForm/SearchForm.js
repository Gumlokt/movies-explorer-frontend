import React, { useRef, useEffect } from 'react';

import './SearchForm.css';

import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

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

      <FilterCheckbox />

      <Preloader isOpen={displayPreloader} />
    </form>
  );
}

export default SearchForm;
