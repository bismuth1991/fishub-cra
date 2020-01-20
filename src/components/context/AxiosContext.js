import React, {createContext, useContext} from 'react';
import {node} from 'prop-types';
import axios from 'axios';

const StateContext = createContext();

export const useAxios = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAxios must be used within <AxiosProvider>');
  }
  return context;
};

const AxiosProvider = ({children}) => {
  const wrappedAxios = config =>
    axios({
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      baseURL: 'http://127.0.0.1:8000',
      withCredentials: true,
      ...config,
    });

  return (
    <StateContext.Provider value={wrappedAxios}>
      {children}
    </StateContext.Provider>
  );
};

AxiosProvider.propTypes = {
  children: node.isRequired,
};

export default AxiosProvider;
