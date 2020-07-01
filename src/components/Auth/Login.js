import React, { useState } from 'react';
import { useLogin, useError, useCurrentUser } from '../../hooks/AuthProvider';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useCurrentUser();
  const login = useLogin();
  const error = useError();

  if(user) return <Redirect to = '/' />;

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault(); 
    login({
      email, 
      password 
    }); 
  };

  return (
    <div className="login-section">
      <h1>Welcome to Your To-Do List!</h1>
      <form onSubmit={handleLoginSubmit}>
        <input className="login-input" type="text" name="email" value={email} onChange={handleChange} placeholder="email" />
        <input className="login-input" type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
        <button className="login-button">LOGIN</button>
      </form>
      <h4>Don't have an account? <Link to='/signup'>Sign Up</Link></h4>
      {error && (<section><h4>{error.message}</h4></section>)}
    </div>
  );
};
export default Login;