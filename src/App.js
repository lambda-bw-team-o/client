import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Login from './views/Login';
import Registration from './views/Registration';
import Game from './views/Game';
import PrivateRoute from './helpers/PrivateRoute.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' render={Login} />
      <Route exact path='/registration' render={Registration} />
      <PrivateRoute exact path='/game' component={Game} />
    </BrowserRouter>
  );
}

export default App;
