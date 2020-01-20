import React from 'react';
import {isRedirect} from '@reach/router';
import {node} from 'prop-types';
import {ActionsContext as AuthActionsContext} from '../context/AuthContext';

class AuthErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  // eslint-disable-next-line
  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  // eslint-disable-next-line
  componentDidCatch(error, errorInfo) {
    const {dispatch} = this.context;

    if (isRedirect(error)) {
      dispatch({
        type: 'CUSTOM_ERROR',
        payload: {errors: ['You must login first']},
      });
      throw error;
    }
  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

AuthErrorBoundary.contextType = AuthActionsContext;

AuthErrorBoundary.propTypes = {
  children: node.isRequired,
};

export default AuthErrorBoundary;
