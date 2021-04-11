import React from 'react';
import { useHistory } from 'react-router-dom';

import './Profile.css';

function Profile(props) {
  const history = useHistory();
  // const userData = { name: 'Игорь', email: 'user@mail.dom' }; // should be get from api
  const [inputsDisabled, setInputsDisabled] = React.useState(true);

  const [userName, setUserName] = React.useState('Игорь');
  const [userEmail, setUserEmail] = React.useState('user@mail.dom');

  function handleForm(event) {
    event.preventDefault();

    if (inputsDisabled) {
      setInputsDisabled(false);
    } else {
      setInputsDisabled(true);
    }
  }

  function handleChangeName(e) {
    setUserName(e.target.value);
  }

  function handleChangeEmail(e) {
    setUserEmail(e.target.value);
  }

  function signOut(event) {
    event.preventDefault();
    history.push('/');
  }

  return (
    <main className="profile">
      <form className="profile__form">
        <h3 className="profile__title">Привет, {userName}</h3>

        <ul className="profile__items">
          <li className="profile__item">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>

            <input
              onChange={handleChangeName}
              type="text"
              className="profile__input"
              name="name"
              value={userName}
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              id="name"
              disabled={inputsDisabled}
              required
            />
          </li>

          <li className="profile__item">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>

            <input
              onChange={handleChangeEmail}
              type="email"
              className="profile__input"
              name="email"
              value={userEmail}
              placeholder="Email"
              id="email"
              disabled={inputsDisabled}
              required
            />
          </li>
        </ul>

        <button
          className={`profile__btn${inputsDisabled ? ' profile__btn_action_edit' : ' profile__btn_action_save'}`}
          onClick={handleForm}
        ></button>

        <button onClick={signOut} className="profile__btn profile__btn_action_exit"></button>
      </form>
    </main>
  );
}

export default Profile;
