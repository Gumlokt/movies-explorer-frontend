import { Link } from 'react-router-dom';

import './Register.css';
import '../Form/Form.css';

import Logo from '../Logo/Logo';

function Register(props) {
  return (
    <section className="register">
      <div className="register__container">
        <Logo />

        <form className="form" name="registration" onSubmit={props.registerUser} noValidate>
          <h2 className="form__title">Добро пожаловать</h2>

          <label className="form__label" htmlFor="name">
            Имя
          </label>
          <input
            onChange={props.formValidation.handleCredentialsChange}
            value={props.formValidation.credentials.name || ''}
            type="text"
            className="form__text-input"
            name="name"
            minLength="2"
            maxLength="30"
            id="name"
            required
          />
          <span className="form__input-error" id="name-error">
            {props.formValidation.errors.name}
          </span>

          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={props.formValidation.handleCredentialsChange}
            value={props.formValidation.credentials.email || ''}
            type="email"
            className="form__text-input"
            name="email"
            id="email"
            required
          />
          <span className="form__input-error" id="email-error">
            {props.formValidation.errors.email}
          </span>

          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            onChange={props.formValidation.handleCredentialsChange}
            value={props.formValidation.credentials.password || ''}
            type="password"
            className="form__text-input form__text-input_type_error"
            name="password"
            minLength="8"
            id="password"
            required
          />
          <span className="form__input-error" id="password-error">
            {props.formValidation.errors.password}
          </span>

          <button
            className="form__btn-primary"
            name="primaryButton"
          >
            Зарегистрироваться
          </button>

          <p className="form__question">
            Уже зарегистрированы?{' '}
            <Link to="/signin" className="form__link">Войти</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
