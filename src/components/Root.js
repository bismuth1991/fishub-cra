import React from 'react';
import App from './App';
import AuthTokenProvider from './context/AuthTokenContext';
import AxiosProvider from './context/AxiosContext';
import UserProvider from './context/UserContext';

const Root = () => {
  return (
    <AxiosProvider>
      <AuthTokenProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthTokenProvider>
    </AxiosProvider>
  );
};

export default Root;
