import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="header__nav">
        <img src={logo} alt="Логотип" className="header__logo" />

        <div className="header__bar">
          <Link to="/register" className="header__link">
            Регистрация
          </Link>
          <button className="header__button">Вход</button>
        </div>
      </div>

      <div className="header__content">
        <h1 className="header__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>

      <ul className="nav">
        <li className="nav__item">
          <a href="/" className="nav__link">
            О проекте
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Технологии
          </a>
        </li>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Студент
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
