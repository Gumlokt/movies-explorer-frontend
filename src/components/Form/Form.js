import React from 'react';
import { Link } from 'react-router-dom';

import './Form.css';

function Form(props) {
  return (
    <form className="form" name={props.formName}>
      <h2 className="form__title">{props.formTitle}</h2>

      <label className={`form__label${props.formName === 'login' ? ' form__label_type_hidden' : ''}`} htmlFor="name">
        Имя
      </label>
      <input
        type="text"
        className={`form__text-input${props.formName === 'login' ? ' form__text-input_type_hidden' : ''}`}
        name="name"
        // placeholder="Введите ваше имя"
        minLength="2"
        maxLength="40"
        id="name"
        required
      />
      <span
        className={`form__input-error${props.formName === 'login' ? ' form__input-error_type_hidden' : ''}`}
        id="name-error"
      >
        Что-то пошло не так...
      </span>

      <label className="form__label" htmlFor="email">
        E-mail
      </label>
      <input
        type="email"
        className="form__text-input"
        name="email"
        // placeholder="Введите ваш Email"
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
        type="password"
        className="form__text-input form__text-input_type_error"
        name="password"
        // placeholder="Введите пароль"
        id="password"
        required
      />
      <span className="form__input-error" id="password-error">
        Что-то пошло не так...
      </span>

      <button
        className={`form__btn-primary${props.formName === 'login' ? ' form__btn-primary_type_padded' : ''}`}
        name="primaryButton"
      >
        {props.btnTitle}
      </button>

      <p className="form__question">
        {props.question}{' '}
        <Link to={props.linkTo} className="form__link">
          {props.linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
