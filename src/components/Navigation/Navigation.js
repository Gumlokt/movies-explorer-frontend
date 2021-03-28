import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {
  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item">
          <Link to="/movies" className="navigation__link">
            Movies
          </Link>
        </li>

        <li className="navigation__item">
          <Link to="/signup" className="navigation__link">
            Регистрация
          </Link>
        </li>

        <li className="navigation__item">
          <Link to="/signin" className="navigation__link navigation__link_type_btn-success">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
