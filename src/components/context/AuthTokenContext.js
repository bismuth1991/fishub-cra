import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import {node} from 'prop-types';
import {useAxios} from './AxiosContext';
import useInterval from '../../utils/useInterval';

const StateContext = createContext();
const ActionsContext = createContext();

export const useAuthTokenState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      'useAuthTokenState must be used within <AuthTokenProvider>',
    );
  }
  return context;
};

export const useAuthTokenActions = () => {
  const context = useContext(ActionsContext);
  if (context === undefined) {
    throw new Error(
      'useAuthTokenActions must be used within <AuthTokenProvider>',
    );
  }
  return context;
};

const initialState = {
  accessToken: '',
  accessTokenExpiresAt: Infinity,
  errors: [],
};

const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'KEEP_LOGIN_SUCCESS':
    case 'SIGN_UP_SUCCESS':
    case 'LOGIN_SUCCESS':
    case 'KEEP_LOGIN_ERROR':
    case 'SIGN_UP_ERROR':
    case 'LOGIN_ERROR':
    case 'LOGOUT_ERROR':
      return {
        ...state,
        ...payload,
      };
    case 'LOGOUT_SUCCESS':
      return initialState;
    default:
      throw new Error('[AuthTokenContext] Unknown action type');
  }
};

const AuthTokenProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const axios = useAxios();

  const signUp = ({username, email, password}) => {
    axios
      .post('/api/sign-up', {username, email, password})
      .then(res => {
        dispatch({
          type: 'SIGN_UP_SUCCESS',
          payload: {
            accessToken: res.data.access_token,
            lastLogin: Date.now(),
          },
        });
      })
      .catch(e =>
        dispatch({
          type: 'SIGN_UP_ERROR',
          payload: {errors: e.response.data.client_error},
        }),
      );
  };

  const login = ({username, password}) => {
    axios({
      method: 'POST',
      url: '/api/login',
      data: {
        username,
        password,
      },
    })
      .then(res => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            accessToken: res.data.access_token,
            tokenExpiresAt: Date.now() + res.data.expires_in * 1000,
          },
        });
      })
      .catch(e =>
        dispatch({
          type: 'LOGIN_ERROR',
          payload: {errors: e.response.data.client_error},
        }),
      );
  };

  const keepLogin = () => {
    axios({
      method: 'POST',
      url: '/api/keep-login',
    })
      .then(res => {
        dispatch({
          type: 'KEEP_LOGIN_SUCCESS',
          payload: {
            accessToken: res.data.access_token,
            tokenExpiresAt: Date.now() + res.data.expires_in * 1000,
          },
        });
      })
      .catch(() => {
        dispatch({
          type: 'KEEP_LOGIN_ERROR',
          payload: {},
        });
      });
  };

  const logout = accessToken => {
    axios({
      method: 'POST',
      url: '/api/logout',
      headers: {
        AuthTokenorization: `Bearer ${accessToken}`,
      },
    })
      .then(() => {
        dispatch({type: 'LOGOUT_SUCCESS'});
      })
      .catch(() => {
        dispatch({
          type: 'LOGOUT_ERROR',
          payload: {},
        });
      });
  };

  const actions = useMemo(() => ({signUp, login, logout}), []);

  useEffect(() => {
    if (!state.accessToken || state.tokenExpiresAt - Date.now() < 60000) {
      keepLogin();
    }
  }, []);

  useInterval(() => {
    if (state.accessToken) {
      keepLogin();
    }
  }, 840);

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};

AuthTokenProvider.propTypes = {
  children: node.isRequired,
};

export default AuthTokenProvider;
