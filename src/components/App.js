import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import beatMoviesFromApi from '../utils/beatfilm-movies.json';
import beatMoviesSaved from '../utils/beatfilm-movies-saved.json';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import Register from './Register/Register';
import Login from './Login/Login';

import Movies from './Movies/Movies';
import Profile from './Profile/Profile';

import PageNotFound from './PageNotFound/PageNotFound';
import Popup from './Popup/Popup';

function App() {
  const [isInformerPopupOpen, setInformerPopupOpen] = useState(false);
  const [messageToUser, setMessageToUser] = useState(
    'Some lorem ipsum text... Some lorem ipsum text... Some lorem ipsum text...',
  );

  function closeInformerPopup() {
    setInformerPopupOpen(false);
    setMessageToUser('');
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/movies">
          <Header darkTheme={true} />
          <Movies beatMovies={beatMoviesFromApi} displayMoreBtn={true} />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header darkTheme={true} />
          <Movies beatMovies={beatMoviesSaved} />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header darkTheme={true} />
          <Profile />
        </Route>

        <Route path="/page-not-found">
          <PageNotFound />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Popup isOpen={isInformerPopupOpen} message={messageToUser} onClose={closeInformerPopup} />
    </>
  );
}

export default App;
