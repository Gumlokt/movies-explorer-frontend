import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import Logo from '../Logo/Logo';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />

        <nav className="menu">
          <ul className="menu__items">
            <li className="menu__item">
              <Link to="/signup" className="menu__link">
                Регистрация
              </Link>
            </li>

            <li className="menu__item">
              <Link to="/signin" className="menu__link menu__link_theme_btn-success">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
