import React from 'react';
import {string} from 'prop-types';
import {
  useAuthTokenActions,
  useAuthTokenState,
} from '../context/AuthTokenContext';
import {useUserState} from '../context/UserContext';
import NavLink from './NavLink';

const AuthenticatedUserNav = ({user}) => {
  const {logout} = useAuthTokenActions();
  const {accessToken} = useAuthTokenState();

  const handleSubmit = e => {
    e.preventDefault();
    logout(accessToken);
  };

  return (
    <ul className="flex">
      <li className="text-fishub-brand">
        <i className="far fa-user mr-1" />
        {user}
      </li>
      <li className="ml-4">
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="text-fishub-brand opacity-80 hover:opacity-100"
          >
            Logout
          </button>
        </form>
      </li>
    </ul>
  );
};

AuthenticatedUserNav.propTypes = {
  user: string.isRequired,
};

const GuessNav = () => {
  return (
    <ul className="flex">
      <li className="mr-4">
        <NavLink to="login">Login</NavLink>
      </li>
      <li>
        <NavLink to="sign-up">Sign Up</NavLink>
      </li>
    </ul>
  );
};

const AuthNavBar = () => {
  const {isLoading, user} = useUserState();

  if (isLoading) {
    return (
      <p className="flex justify-end px-6 py-3 bg-fishub-nav-auth text-fishub-nav-auth">
        Loading...
      </p>
    );
  }

  return (
    <nav className="flex justify-end px-6 py-3 bg-fishub-nav-auth">
      {user ? <AuthenticatedUserNav user={user} /> : <GuessNav />}
    </nav>
  );
};

export default AuthNavBar;
