import { Link } from 'react-router-dom';

import './Login.css';

import Logo from '../Logo/Logo';

function Login(props) {
  return (
    <section className="login">
      <div className="login__container">
        <Logo />

        <form className="form" name="login" onSubmit={props.onLoginUser} noValidate>
          <h2 className="form__title">Рады видеть!</h2>

          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={props.formValidation.handleCredentialsChange}
            value={props.formValidation.credentials.email || ''}
            type="email"
            className={`form__text-input${props.formValidation.errors.email ? ' form__text-input_type_error' : ''}`}
            name="email"
            id="email"
            required
          />
          <span
            className={`form__input-error${!props.formValidation.isValid ? ' form__input-error_type_active' : ''}`}
            id="email-error"
          >
            {props.formValidation.errors.email}
          </span>

          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            onChange={props.formValidation.handleCredentialsChange}
            value={props.formValidation.credentials.password || ''}
            type="password"
            className={`form__text-input${props.formValidation.errors.password ? ' form__text-input_type_error' : ''}`}
            name="password"
            minLength="8"
            id="password"
            required
          />
          <span
            className={`form__input-error${!props.formValidation.isValid ? ' form__input-error_type_active' : ''}`}
            id="password-error"
          >
            {props.formValidation.errors.password}
          </span>

          <p
            className={`form__server-message form__server-message_type_padded${
              props.serverMessage ? ' form__server-message_type_active' : ''
            }`}
          >
            {props.serverMessage}
          </p>

          <button className="form__btn-primary" name="primaryButton" disabled={!props.formValidation.isValid}>
            Войти
          </button>

          <p className="form__question">
            Ещё не зарегистрированы?{' '}
            <Link to="/signup" className="form__link">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
