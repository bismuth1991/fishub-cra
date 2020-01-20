import React from 'react';
import {useAuthState} from '../context/AuthContext';

const AuthErrors = () => {
  const {errors} = useAuthState();

  return (
    <ul className="text-lg mt-1">
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
