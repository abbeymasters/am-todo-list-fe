import React from 'react';
import './Header.css';
import { useLogout } from '../hooks/AuthProvider';

const Header = ({ username }) => {
  
  const logout = useLogout();

  return (
    <div className="header">
      <h2>Hi, {username}!</h2>
      <h1>Get Stuff Done</h1>
      <button className="headerButton" onClick={logout}>Logout</button>
    </div>
  )
};

export default Header;
