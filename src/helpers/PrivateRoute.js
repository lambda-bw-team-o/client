/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, exact: is_exact, path }) => {
  let token = localStorage.getItem("token")

  if (is_exact) {
    return (
      <Route exact path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/login" />} />
    )
  } else {
    return (
      <Route path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/login" />} />
    )
  }
}

/**
 * Export route component
 */

export default PrivateRoute;
