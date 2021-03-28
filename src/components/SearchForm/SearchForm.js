import iconSearch from '../../images/icons/search.svg';
import './SearchForm.css';

function SearchForm(props) {
  return (
    <form className="search-form">
      <div className="search-form__input-container">
        <label className="search-form__input-label" htmlFor="search-input"></label>

        <input type="text" className="search-form__text-input" placeholder="Фильм" id="search-input" />

        <button className="search-form__btn-submit">
          <img src={iconSearch} className="search-form__icon-search" alt="Иконка с изображением лупы" />
        </button>
      </div>

      <label className="search-form__checkbox-label" htmlFor="checkbox">
        <input type="checkbox" className="search-form__checkbox-input" id="checkbox" />
        <span className="search-form__visible-checkbox"></span>Короткометражки
      </label>
    </form>
  );
}

export default SearchForm;
