import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../hooks/AuthProvider';
import PrivateRoute from '../PrivateRoute';
import Home from './Home';
import Login from './Auth/Login';
import SignUp from './Auth/Signup';

const App = () => {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
