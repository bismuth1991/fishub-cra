import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuthActions} from '../context/AuthContext';
import AuthErrors from './AuthErrors';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signup} = useAuthActions();

  const handleSubmit = e => {
    e.preventDefault();
    signup({name: username, email, password});
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__header">Sign Up</h2>

      <Link to="/login" className="form__redirect-link">
        Have an account?
      </Link>

      <AuthErrors />

      <input
        className="form__input"
        type="text"
        placeholder="Username"
        id="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

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
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
