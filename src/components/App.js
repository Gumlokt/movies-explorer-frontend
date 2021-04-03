// import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import Register from './Register/Register';
import Login from './Login/Login';

import Movies from './Movies/Movies';
import Profile from './Profile/Profile';

import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/movies">
          <Header darkTheme={true} />
          <Movies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header darkTheme={true} />
          <Profile />
        </Route>

        <Route path="/page-not-found">
          <PageNotFound />
        </Route>

        <Route path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
