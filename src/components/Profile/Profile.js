import React from 'react';

import './Profile.css';

function Profile(props) {
  const userData = { name: 'Игорь', email: 'user@mail.dom' }; // should be get from api

  function signOut() {
    console.log('toren removed...');
  }

  return (
    <main className="profile">
      <form className="profile__form">
        <h3 className="profile__title">Привет, {userData.name}</h3>

        <ul className="profile__items">
          <li className="profile__item">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>

            <input
              type="text"
              className="profile__input"
              name="name"
              value={userData.name}
              id="name"
              disabled
              required
            />
          </li>

          <li className="profile__item">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>

            <input
              type="email"
              className="profile__input"
              name="email"
              value={userData.email}
              id="email"
              disabled
              required
            />
          </li>
        </ul>

        <button className="profile__btn profile__btn_action_edit"></button>

        <button onClick={signOut} className="profile__btn profile__btn_action_exit"></button>
      </form>
    </main>
  );
}

export default Profile;
