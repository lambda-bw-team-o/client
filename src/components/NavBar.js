import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) setLoggedIn(true)
  }, [])

  return (
    <nav>
      <h1>Team-O</h1>

      {(loggedIn) ? '' :
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/registration">Registration</NavLink></li>
        </ul>
      }
    </nav>
    )
  }
  
  export default NavBar;