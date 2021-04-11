import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Logo.css';

function Logo(props) {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Логотип" className="logo__image" />
    </Link>
  );
}

export default Logo;
