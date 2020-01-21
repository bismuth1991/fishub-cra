import React, {useEffect} from 'react';
import {Redirect, Route, useHistory} from 'react-router-dom';
import {func} from 'prop-types';
import {useAuthState, useAuthActions} from '../context/AuthContext';

const AuthRoute = ({component: Component, ...rest}) => {
  const {user, isLoading} = useAuthState();
  const {dispatch} = useAuthActions();

  const history = useHistory();

  useEffect(() => {
    if (history.action === 'PUSH') {
      dispatch({type: 'CLEAR_ERROR'});
    }
  }, [dispatch, history.action]);

  if (isLoading) {
    return null;
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Route
      {...rest}
      /* eslint-disable */
      render={props =>
        user ? <Redirect to="/baits" /> : <Component {...props} />
      }
      /* eslint-enable */
    />
  );
};

AuthRoute.propTypes = {
  component: func.isRequired,
};

export default AuthRoute;
