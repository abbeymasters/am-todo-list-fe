import React, { useState } from 'react';
import { useSignUp, useError, useCurrentUser } from '../../hooks/AuthProvider';
import { Link, Redirect } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = useSignUp();
  const user = useCurrentUser();
  const error = useError();

  if(user) return <Redirect to = '/' />;

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSignUpSubmit = event => {
    event.preventDefault();
    signup({ email, password });
  };


  return (
    <div className="signup-section">
      <h1>Welcome to Your To-Do List!</h1>
      <form onSubmit={handleSignUpSubmit}>
        <input className="login-input" type="text" name="email" value={email} onChange={handleChange} placeholder="email" />
        <input className="login-input" type="password" name="password" value={password} onChange={handleChange} placeholder="password" />
        <button className="signup-button">SIGN UP</button>
      </form>
      <h4>Already have an account? <Link to='/login'>Login</Link></h4>
      {error && (<section> <h4>{error.message}</h4></section>)}
    </div>
  );
};
export default SignUp;