import React from 'react';
import { Link } from 'react-router-dom';

import iconUser from '../../images/icons/user.svg';
import './Navigation.css';

function Navigation(props) {
  // const [loggedIn, setLoggedIn] = React.useState(true); // this will be completed in the nearest future
  // const loggedIn = false; // !!!! A T T E N T I O N !!!! set this value to true to change navigation items in the <Header> component
  const [displayTabletMenuAppearance, setTabletMenuAppearance] = React.useState(false);

  function handleMenuAppearance() {
    setTabletMenuAppearance(!displayTabletMenuAppearance);
  }

  function closeTabletMenu() {
    setTabletMenuAppearance(false);
  }

  return (
    <nav className={`navigation${displayTabletMenuAppearance ? ' navigation_mode_tablet' : ''}`}>
      {props.loggedIn ? (
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
            <li
              className={`navigation__item${
                displayTabletMenuAppearance ? ' navigation__item_mode_tablet' : ' navigation__item_type_hidden'
              }`}
            >
              <Link
                to="/"
                className={`navigation__link${displayTabletMenuAppearance ? ' navigation__link_mode_tablet' : ''}`}
                onClick={closeTabletMenu}
              >
                Главная
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/movies"
                className={`navigation__link${displayTabletMenuAppearance ? ' navigation__link_mode_tablet' : ''}`}
                onClick={closeTabletMenu}
              >
                Фильмы
              </Link>
            </li>

            <li className="navigation__item">
              <Link
                to="/saved-movies"
                className={`navigation__link${displayTabletMenuAppearance ? ' navigation__link_mode_tablet' : ''}`}
                onClick={closeTabletMenu}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>

          <div className={`user${displayTabletMenuAppearance ? ' user_mode_tablet' : ' user_type_hidden'}`}>
            <Link to="/profile" className="user__link" onClick={closeTabletMenu}>
              Аккаунт
            </Link>

            <img src={iconUser} className="user__icon" alt="Иконка с изображением пользователя" />
          </div>
        </div>
      ) : (
        <ul className="navigation__items">
          <li className="navigation__item">
            <Link to="/signup" className="navigation__link">
              Регистрация
            </Link>
          </li>

          <li className="navigation__item">
            <Link to="/signin" className="navigation__link navigation__link_type_btn-success"></Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
