import './Login.css';

import Logo from '../Logo/Logo';
import Form from '../Form/Form';

function Login(props) {
  return (
    <section className="login">
      <div className="login__container">
        <Logo />

        <Form
          formName="login"
          formTitle="Рады видеть!"
          btnTitle="Войти"
          question="Ещё не зарегистрированы?"
          linkTo="/signup"
          linkText="Регистрация"
        />
      </div>
    </section>
  );
}

export default Login;
