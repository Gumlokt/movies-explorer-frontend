import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';

import Header from '../Header/Header';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const history = useHistory();
  const [profileEditing, setProfileEditing] = React.useState(false);
  
  function startEditing() {
    setProfileEditing(true);
  }

  function stopEditing() {
    setProfileEditing(false);
  }

  function profileEdited(event) {
    return true;
  }

  function signOut(event) {
    event.preventDefault();
    history.push('/');
  }

  useEffect(() => {
    // props.formValidation.credentials.name = currentUser.name;
    // props.formValidation.credentials.email = currentUser.email;
    console.log(props.formValidation.credentials);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header darkTheme={true} loggedIn={props.loggedIn} />

      <main className="profile">
        <form className="profile__form">
          <h3 className="profile__title">Привет, {currentUser.name}</h3>

          <ul className="profile__items">
            <li className="profile__item">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>

              <input
                onFocus={startEditing}
                onBlur={stopEditing}
                onChange={props.formValidation.handleCredentialsChange}
                value={props.formValidation.credentials.name || ''}
                type="text"
                className={`profile__input${profileEditing ? ' profile__input_mode_editing' : ''}`}
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                id="name"
                required
              />
            </li>

            <li className="profile__item">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>

              <input
                onFocus={startEditing}
                onBlur={stopEditing}
                onChange={props.formValidation.handleCredentialsChange}
                value={props.formValidation.credentials.email || ''}
                type="email"
                className={`profile__input${profileEditing ? ' profile__input_mode_editing' : ''}`}
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </li>
          </ul>

          <button
            className={`profile__btn${profileEdited ? ' profile__btn_action_save' : ' profile__btn_action_edit'}`}
          ></button>

          <button onClick={signOut} className="profile__btn profile__btn_action_exit"></button>
        </form>
      </main>
    </>
  );
}

export default Profile;
