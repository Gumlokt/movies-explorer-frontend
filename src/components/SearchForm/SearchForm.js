import React, { useRef, useEffect } from 'react';

import './SearchForm.css';

import Preloader from '../Preloader/Preloader';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const textInput = useRef(null);

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
          minLength="2"
          placeholder="Фильм"
          id="search-input"
          required
        />

        <button className="search-form__btn-reset" onClick={props.resetForm}></button>
        <button className="search-form__btn-submit" onClick={props.fetchMoviesList}></button>
      </div>

      <FilterCheckbox />

      <Preloader isOpen={props.displayPreloader} />
    </form>
  );
}

export default SearchForm;
