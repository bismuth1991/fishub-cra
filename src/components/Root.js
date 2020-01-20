import React from 'react';
import App from './App';
import AuthTokenProvider from './context/AuthTokenContext';
import AxiosProvider from './context/AxiosContext';

const Root = () => {
  return (
    <AxiosProvider>
      <AuthTokenProvider>
        <App />
      </AuthTokenProvider>
    </AxiosProvider>
  );
};

export default Root;
