import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getSignUp, getLogin, getLogout } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const history = useHistory();

  const signup = (userInformation) => {
    setError(null);
    return getSignUp(userInformation)
      .then(user => setUser(user))
      .catch(error => setError(error));
  };

  const login = (userInformation) => {
    setError(null);
    return getLogin(userInformation)
      .then(user => setUser(user))
      .catch(error => setError(error));
  };

  const logout = (user) => {
    setUser(null);
    return getLogout(user)
      .then(history.push('/login'));
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, error }} >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const useSignUp = () =>{
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useCurrentUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

export const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

export const useError = () => {
  const { error } = useContext(AuthContext);
  return error;
};