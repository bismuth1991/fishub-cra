import React from 'react';
import {Redirect} from '@reach/router';
import {useAuthState} from '../context/AuthContext';
import AuthErrorBoundary from './AuthErrorBoundary';

const ProtectedRoute = ({children}) => {
  const {isLoading, user} = useAuthState();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return (
      <AuthErrorBoundary>
        <Redirect to="login" />
      </AuthErrorBoundary>
    );
  }

  return children;
};

export default ProtectedRoute;
