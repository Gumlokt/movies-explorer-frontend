import './Register.css';

import Logo from '../Logo/Logo';
import Form from '../Form/Form';

function Register(props) {
  return (
    <section className="register">
      <div className="register__container">
        <Logo />

        <Form
          formName="register"
          formTitle="Добро пожаловать"
          btnTitle="Зарегистрироваться"
          question="Уже зарегистрированы?"
          linkTo="/signin"
          linkText="Войти"
        />
      </div>
    </section>
  );
}

export default Register;
