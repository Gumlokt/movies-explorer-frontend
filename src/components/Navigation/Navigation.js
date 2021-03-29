import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {
  const [displayMenuBtn, setDisplayMenuBtn] = React.useState(false);

  function handleMenuBar() {
    setDisplayMenuBtn(!displayMenuBtn);
  }

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

      <button onClick={handleMenuBar} className={`menu-btn`}>
        <div className={`menu-btn__stripe ${
            displayMenuBtn ? 'menu-btn__stripe_mode_lowered' : ''
          }`}
        ></div>
        <div className={`menu-btn__stripe ${
            displayMenuBtn ? 'menu-btn__stripe_mode_hidden' : ''
          }`}
        ></div>
        <div className={`menu-btn__stripe ${
            displayMenuBtn ? 'menu-btn__stripe_mode_rised' : ''
          }`}
        ></div>
      </button>
    </nav>
  );
}

export default Navigation;
