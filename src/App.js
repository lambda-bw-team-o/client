import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Landing from './views/Landing';
import Login from './views/Login';
import Registration from './views/Registration';
import Game from './views/Game';
import PrivateRoute from './helpers/PrivateRoute.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Registration} />
        <PrivateRoute exact path='/game' component={Game} />
        <Redirect to='/game' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
