import React, { useState, useContext, useEffect } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

import Header from '../Header/Header';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const [inputEditing, setInputEditing] = useState(false); // just for css animations
  const [saveBtnDisabled, setSaveBtnDisabled] = useState(true);

  // just for css animations
  function startInputEditing() {
    setInputEditing(true);
  }

  // just for css animations
  function stopInputEditing() {
    setInputEditing(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateUser({
      name: props.formValidation.credentials.name,
      email: props.formValidation.credentials.email,
    });

    setSaveBtnDisabled(true);
  }

  useEffect(() => {
    if (
      props.formValidation.isValid &&
      (currentUser.name !== props.formValidation.credentials.name ||
        currentUser.email !== props.formValidation.credentials.email)
    ) {
      setSaveBtnDisabled(false);
    } else {
      setSaveBtnDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.formValidation.credentials.name, props.formValidation.credentials.email]);

  return (
    <>
      <Header darkTheme={true} loggedIn={props.loggedIn} />

      <main className="profile">
        <form className="profile__form" name="profile" onSubmit={handleSubmit}>
          <h3 className="profile__title">Привет, {currentUser.name}</h3>

          <ul className="profile__items">
            <li className="profile__item">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>

              <input
                onFocus={startInputEditing}
                onBlur={stopInputEditing}
                onChange={props.formValidation.handleCredentialsChange}
                value={props.formValidation.credentials.name || ''}
                type="text"
                className={`profile__input${inputEditing ? ' profile__input_mode_editing' : ''}`}
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                pattern="^[A-Za-zА-Яа-яЁё\s-]{2,}"
                id="name"
                required
              />

              <span
                className={`profile__input-error${
                  !props.formValidation.isValid ? ' profile__input-error_type_active' : ''
                }`}
                id="name-error"
              >
                {props.formValidation.errors.name}
              </span>
            </li>

            <li className="profile__item">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>

              <input
                onFocus={startInputEditing}
                onBlur={stopInputEditing}
                onChange={props.formValidation.handleCredentialsChange}
                value={props.formValidation.credentials.email || ''}
                type="email"
                className={`profile__input${inputEditing ? ' profile__input_mode_editing' : ''}`}
                name="email"
                placeholder="Email"
                id="email"
                required
              />

              <span
                className={`profile__input-error${
                  !props.formValidation.isValid ? ' profile__input-error_type_active' : ''
                }`}
                id="email-error"
              >
                {props.formValidation.errors.email}
              </span>
            </li>
          </ul>

          <button
            onClick={handleSubmit}
            className={`profile__btn profile__btn_action_save`}
            disabled={saveBtnDisabled}
          ></button>

          <button onClick={props.onLogout} className="profile__btn profile__btn_action_exit"></button>
        </form>
      </main>
    </>
  );
}

export default Profile;
