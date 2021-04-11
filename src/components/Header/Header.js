import React from 'react';

import './Header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className={`header${props.darkTheme ? ' header_theme_dark' : ''}`}>
      <div className="header__container">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
