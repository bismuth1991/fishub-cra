import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {func} from 'prop-types';
import {useAuthState, useAuthActions} from '../context/AuthContext';

const ProtectedRoute = ({component: Component, ...rest}) => {
  const {user} = useAuthState();
  const {dispatch} = useAuthActions();

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Route
      {...rest}
      render={props => {
        dispatch({
          type: 'CUSTOM_ERROR',
          payload: {errors: ['You have to log in first']},
        });

        return !user ? <Redirect to="/login" /> : <Component {...props} />;
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  component: func.isRequired,
};

export default ProtectedRoute;
