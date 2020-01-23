import React from 'react';
import {string} from 'prop-types';
import {NavLink} from 'react-router-dom';
import {useAuthActions, useAuthState} from '../context/AuthContext';

const AuthenticatedUserNav = ({user}) => {
  const {logout} = useAuthActions();
  const {accessToken} = useAuthState();

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
        <NavLink
          to="/login"
          className="nav-link"
          activeClassName="nav-link--active"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sign-up"
          className="nav-link"
          activeClassName="nav-link--active"
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

const AuthNavBar = () => {
  const {hasFetchedUser, user} = useAuthState();

  if (!hasFetchedUser) {
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
