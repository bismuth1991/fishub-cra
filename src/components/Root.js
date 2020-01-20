import React from 'react';
import App from './App';
import AuthProvider from './context/AuthContext';
import AxiosProvider from './context/AxiosContext';

const Root = () => {
  return (
    <AxiosProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AxiosProvider>
  );
};

export default Root;
