import React from 'react';
import {Redirect} from '@reach/router';
import {useAuthState} from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
  const {isLoading, user} = useAuthState();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return <Redirect to="login" noThrow />;
  }

  return children;
};

export default ProtectedRoute;
