import React from 'react';
import AuthRoute from '../auth/AuthRoute';
import SignUpForm from '../auth/SignUpForm';

const SignUp = () => {
  return (
    <AuthRoute>
      <SignUpForm />
    </AuthRoute>
  );
};

export default SignUp;
