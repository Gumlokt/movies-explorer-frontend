import React, { useRef, useEffect } from 'react';

import './SearchForm.css';

import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const textInput = useRef(null);

  function resetForm(event) {
    textInput.current.focus();
    props.resetForm(event);
  }

  function handleShort(event) {
    textInput.current.focus();
    props.handleShort(event);
  }

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <label className="search-form__input-label" htmlFor="search-input"></label>

        <input
          onChange={props.handleChangeTerm}
          ref={textInput}
          type="text"
          className="search-form__text-input"
          name="term"
          value={props.term}
          minLength="1"
          placeholder="Фильм"
          id="search-input"
          required
        />

        <button type="reset" className="search-form__btn-reset" onClick={resetForm}></button>
        <button className="search-form__btn-submit" onClick={props.filterMoviesList}></button>
      </div>

      <FilterCheckbox short={props.short} handleShort={handleShort} />

      <Preloader isOpen={props.displayPreloader} />
    </form>
  );
}

export default SearchForm;
