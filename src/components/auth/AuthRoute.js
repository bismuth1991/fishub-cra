import React from 'react';
import {Redirect} from '@reach/router';
import {useAuthState} from '../context/AuthContext';

const AuthRoute = ({children}) => {
  const {isLoading, user} = useAuthState();

  if (isLoading) {
    return null;
  }

  if (user) {
    return <Redirect to="baits" noThrow />;
  }

  return children;
};

export default AuthRoute;
