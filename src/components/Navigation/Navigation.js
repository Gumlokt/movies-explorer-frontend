import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [displayMenuBtn, setDisplayMenuBtn] = React.useState(false);

  function handleMenuBar() {
    setDisplayMenuBtn(!displayMenuBtn);
  }

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <button onClick={handleMenuBar} className={`menu-btn`}>
            <div className={`menu-btn__stripe ${displayMenuBtn ? 'menu-btn__stripe_mode_lowered' : ''}`}></div>
            <div className={`menu-btn__stripe ${displayMenuBtn ? 'menu-btn__stripe_mode_hidden' : ''}`}></div>
            <div className={`menu-btn__stripe ${displayMenuBtn ? 'menu-btn__stripe_mode_rised' : ''}`}></div>
          </button>

          <ul className="navigation__items navigation__items_type_hideable">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                Главная
              </Link>
            </li>

            <li className="navigation__item">
              <Link to="/movies" className="navigation__link">
                Фильмы
              </Link>
            </li>

            <li className="navigation__item">
              <Link to="/saved-movies" className="navigation__link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <ul className="navigation__items">
          {/* <li className="navigation__item">
            <Link to="/movies" className="navigation__link">
              Movies
            </Link>
          </li> */}

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
