import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Main.css';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main-content">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
