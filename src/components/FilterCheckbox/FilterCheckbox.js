import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <label className="checkbox" htmlFor="checkbox">
      <input type="checkbox" name="short" className="checkbox__input" checked={props.short} onChange={props.handleShort} id="checkbox" />
      <span className="checkbox__visible"></span>Короткометражки
    </label>
  );
}

export default FilterCheckbox;
