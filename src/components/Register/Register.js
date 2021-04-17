import { Link } from 'react-router-dom';

import './Register.css';

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
            className={`form__text-input${props.formValidation.errors.name ? ' form__text-input_type_error' : ''}`}
            name="name"
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё\s-]{2,}"
            id="name"
            required
          />
          <span
            className={`form__input-error${!props.formValidation.isValid ? ' form__input-error_type_active' : ''}`}
            id="name-error"
          >
            {props.formValidation.errors.name}
          </span>

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

          <p className={`form__server-message${props.serverMessage ? ' form__server-message_type_active' : ''}`}>
            {props.serverMessage}
          </p>

          <button className="form__btn-primary" name="primaryButton" disabled={!props.formValidation.isValid}>
            Зарегистрироваться
          </button>

          <p className="form__question">
            Уже зарегистрированы?{' '}
            <Link to="/signin" className="form__link">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
