import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Header.css';

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
    </header>
  );
}

export default Header;
