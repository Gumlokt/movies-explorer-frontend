import React from 'react';
import { Link } from 'react-router-dom';

import iconUser from '../../images/icons/user.svg';
import './Navigation.css';

function Navigation(props) {
  const loggedIn = true;
  // const [loggedIn, setLoggedIn] = React.useState(true); // this will be completed in the nearest future
  const [displayTabletMenuAppearance, setTabletMenuAppearance] = React.useState(false);

  function handleMenuAppearance() {
    setTabletMenuAppearance(!displayTabletMenuAppearance);
  }

  return (
    <nav className={`navigation${displayTabletMenuAppearance ? ' navigation_mode_tablet' : ''}`}>
      {loggedIn ? (
        <div className={`navigation__wrapper${displayTabletMenuAppearance ? ' navigation__wrapper_mode_tablet' : ''}`}>
          <button
            onClick={handleMenuAppearance}
            className={`menu-btn${displayTabletMenuAppearance ? ' menu-btn__mode_tablet' : ''}`}
          >
            <div
              className={`menu-btn__stripe ${displayTabletMenuAppearance ? 'menu-btn__stripe_mode_lowered' : ''}`}
            ></div>
            <div
              className={`menu-btn__stripe ${displayTabletMenuAppearance ? 'menu-btn__stripe_mode_hidden' : ''}`}
            ></div>
            <div
              className={`menu-btn__stripe ${displayTabletMenuAppearance ? 'menu-btn__stripe_mode_rised' : ''}`}
            ></div>
          </button>

          <ul
            className={`navigation__items${
              displayTabletMenuAppearance ? ' navigation__items_mode_tablet' : ' navigation__items_type_hidden'
            }`}
          >
            <li className="navigation__item">
              <Link
                to="/"
                className={`navigation__link${displayTabletMenuAppearance ? ' navigation__link_mode_tablet' : ''}`}
              >
                Главная
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/movies"
                className={`navigation__link${displayTabletMenuAppearance ? ' navigation__link_mode_tablet' : ''}`}
              >
                Фильмы
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/saved-movies"
                className={`navigation__link${displayTabletMenuAppearance ? ' navigation__link_mode_tablet' : ''}`}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>

          {displayTabletMenuAppearance ? (
            <div className="user">
              <a href="/profile" className="user__link">
                Аккаунт
              </a>
              <img src={iconUser} className="user__icon" alt="Иконка с изображением пользователя" />
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
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
      )}
    </nav>
  );
}

export default Navigation;
