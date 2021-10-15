import PropTypes from 'prop-types';
import React, { useState } from 'react';
import chapeu from '../images/chapeuchef543.png';
import logo from '../images/LogoLanchinho-logo.png';

const Login = ({ history }) => {
  const [email, setStateEmail] = useState('');
  const [password, setStatePassword] = useState('');

  function handleChange({ target: { value } }) {
    setStateEmail(value);
  }

  function handleChange2({ target: { value } }) {
    setStatePassword(value);
  }

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    const passwordMin = 7;
    const passwordCorrect = password.length >= passwordMin;
    return re.test(email) && passwordCorrect;
  };

  const handleClick = () => {
    const emailStore = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(emailStore));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    history.push('/comidas');
  };

  return (
    <>
      <img className="chapeu-img" src={ chapeu } alt="chapeuchef" />
      <div className="login-box">
        <img className="h2" src={ logo } alt="logo" />
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ handleChange }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ handleChange2 }
          value={ password }
        />
        <button
          className="button-login"
          disabled={ !(validateEmail()) }
          data-testid="login-submit-btn"
          type="submit"
          onClick={ handleClick }
        >
          Entrar
        </button>
      </div>
    </>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
