import React, {useState} from 'react';
import {Link} from '@reach/router';
import AuthErrors from '../auth-form/AuthErrors';
import {useAuthTokenActions} from '../context/AuthTokenContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useAuthTokenActions();

  const handleSubmit = e => {
    e.preventDefault();
    login({
      username: email,
      password,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__header">Login</h2>

      <Link to="sign-up" className="form__redirect-link">
        Need an account?
      </Link>

      <AuthErrors />

      <input
        className="form__input"
        type="text"
        placeholder="Email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className="form__input"
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit" className="form__button">
        Login
      </button>
    </form>
  );
};

export default Login;
