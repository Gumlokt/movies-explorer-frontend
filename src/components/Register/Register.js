import { Link } from 'react-router-dom';

import './Register.css';
import '../Form/Form.css';

import Logo from '../Logo/Logo';

function Register(props) {
  return (
    <section className="register">
      <div className="register__container">
        <Logo />

        <form className="form" name="registration" onSubmit={props.registerUser}>
          <h2 className="form__title">Добро пожаловать</h2>

          <label className="form__label" htmlFor="name">Имя</label>
          <input
            onChange={props.onCredentialsChange}
            value={props.credentials.name}
            type="text"
            className="form__text-input"
            name="name"
            minLength="2"
            maxLength="40"
            id="name"
            required
          />
          <span className="form__input-error" id="name-error">Что-то пошло не так...</span>

          <label className="form__label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={props.onCredentialsChange}
            value={props.credentials.email}
            type="email"
            className="form__text-input"
            name="email"
            id="email"
            required
          />
          <span className="form__input-error" id="email-error">
            Что-то пошло не так...
          </span>

          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            onChange={props.onCredentialsChange}
            value={props.credentials.password}
            type="password"
            className="form__text-input form__text-input_type_error"
            name="password"
            id="password"
            required
          />
          <span className="form__input-error" id="password-error">
            Что-то пошло не так...
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
