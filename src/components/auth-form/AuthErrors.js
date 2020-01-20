import React from 'react';
import {useAuthTokenState} from '../context/AuthTokenContext';

const AuthErrors = () => {
  const {errors} = useAuthTokenState();

  return (
    <ul>
      <li>
        {errors.map((error, index) => (
          /* eslint-disable react/no-array-index-key */
          <p key={index} className="text-fishub-error">
            {error}
          </p>
        ))}
      </li>
    </ul>
  );
};

export default AuthErrors;
