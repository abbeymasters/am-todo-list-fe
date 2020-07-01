import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useCurrentUser } from './hooks/AuthProvider';

const PrivateRoute = (props) => {
  const user = useCurrentUser();

  if(!user) {
    return <Redirect to="/login" />;
  }
  
  return <Route {...props} />;
};

export default PrivateRoute;