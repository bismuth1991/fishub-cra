import React from 'react';
import App from './App';
import AuthTokenProvider from './context/AuthTokenContext';

const Root = () => {
  return (
    <AuthTokenProvider>
      <App />
    </AuthTokenProvider>
  );
};

export default Root;
