import React from 'react';
import ProtectedRoute from '../auth/ProtectedRoute';

const TackleBox = () => {
  return (
    <ProtectedRoute>
      <h1>Tackle Box Page</h1>
    </ProtectedRoute>
  );
};

export default TackleBox;
