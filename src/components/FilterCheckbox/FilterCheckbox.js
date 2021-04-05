import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className="checkbox" htmlFor="checkbox">
      <input type="checkbox" className="checkbox__input" id="checkbox" />
      <span className="checkbox__visible"></span>Короткометражки
    </label>
  );
}

export default FilterCheckbox;
