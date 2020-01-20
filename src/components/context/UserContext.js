import React, {createContext, useContext, useReducer, useEffect} from 'react';
import {node} from 'prop-types';
import {useAxios} from './AxiosContext';
import {useAuthTokenState} from './AuthTokenContext';

const StateContext = createContext();

export const useUserState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within <UserProvider>');
  }
  return context;
};

const initialState = {
  user: '',
  email: '',
  isLoading: true,
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error('[UserContext] Unknown action type');
  }
};

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {accessToken} = useAuthTokenState();
  const axios = useAxios();

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/user',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => {
        dispatch({
          type: 'GET_USER_SUCCESS',
          payload: {
            user: res.data.name,
            email: res.data.email,
            isLoading: false,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'GET_USER_ERROR',
          payload: {isLoading: false},
        });
      });
  }, [accessToken, axios]);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

UserProvider.propTypes = {
  children: node.isRequired,
};

export default UserProvider;
