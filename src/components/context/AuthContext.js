import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import {node} from 'prop-types';
import {useAxios} from './AxiosContext';
import useInterval from '../../utils/useInterval';

export const StateContext = createContext();
export const ActionsContext = createContext();

export const useAuthState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within <AuthProvider>');
  }
  return context;
};

export const useAuthActions = () => {
  const context = useContext(ActionsContext);
  if (context === undefined) {
    throw new Error('useAuthActions must be used within <AuthProvider>');
  }
  return context;
};

const initialState = {
  accessToken: '',
  accessTokenExpiresAt: Infinity,
  user: '',
  email: '',
  errors: [],
  isLoading: true,
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
    case 'CUSTOM_ERROR':
      return {
        ...state,
        ...payload,
        isLoading: false,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...initialState,
        isLoading: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        errors: [],
      };
    default:
      throw new Error('[AuthContext] Unknown action type');
  }
};

const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const axios = useAxios();

  const getUser = useCallback(
    async accessToken => {
      return axios({
        method: 'GET',
        url: '/api/user',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    [axios],
  );

  const actions = useMemo(() => {
    const signUp = async ({name, email, password}) => {
      try {
        const accessToken = await axios({
          method: 'POST',
          url: '/api/sign-up',
          data: {name, email, password},
        });

        const user = await getUser(accessToken.data.access_token);

        dispatch({
          type: 'SIGN_UP_SUCCESS',
          payload: {
            accessToken: accessToken.data.access_token,
            tokenExpiresAt: Date.now() + accessToken.data.expires_in * 1000,
            user: user.data.name,
            email: user.data.email,
          },
        });
      } catch (e) {
        dispatch({
          type: 'SIGN_UP_ERROR',
          payload: {errors: e.response.data.client_error},
        });
      }
    };

    const login = async ({username, password}) => {
      try {
        const accessToken = await axios({
          method: 'POST',
          url: '/api/login',
          data: {
            username,
            password,
          },
        });

        const user = await getUser(accessToken.data.access_token);

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            accessToken: accessToken.data.access_token,
            tokenExpiresAt: Date.now() + accessToken.data.expires_in * 1000,
            user: user.data.name,
            email: user.data.email,
          },
        });
      } catch (e) {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: {errors: e.response.data.client_error},
        });
      }
    };

    const logout = accessToken => {
      axios({
        method: 'POST',
        url: '/api/logout',
        headers: {
          Authorization: `Bearer ${accessToken}`,
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

    return {login, signUp, logout, dispatch};
  }, [axios, getUser]);

  const keepLogin = useCallback(async () => {
    try {
      const authTokenResponse = await axios({
        method: 'POST',
        url: '/api/keep-login',
      });

      const user = await axios({
        method: 'GET',
        url: '/api/user',
        headers: {
          Authorization: `Bearer ${authTokenResponse.data.access_token}`,
        },
      });

      dispatch({
        type: 'KEEP_LOGIN_SUCCESS',
        payload: {
          accessToken: authTokenResponse.data.access_token,
          tokenExpiresAt: Date.now() + authTokenResponse.data.expires_in * 1000,
          user: user.data.name,
          email: user.data.email,
        },
      });
    } catch (_) {
      dispatch({
        type: 'KEEP_LOGIN_ERROR',
        payload: {},
      });
    }
  }, [axios]);

  useEffect(() => {
    if (!state.accessToken || state.tokenExpiresAt - Date.now() < 60000) {
      keepLogin();
    }
  }, [keepLogin, state.accessToken, state.tokenExpiresAt]);

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

AuthProvider.propTypes = {
  children: node.isRequired,
};

export default AuthProvider;
