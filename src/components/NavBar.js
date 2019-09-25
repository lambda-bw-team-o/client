import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
display:flex;
flex-direction:row-gap;
color:gold;
justify-content: space-between;
padding:0 30px;
align-items:center;

.activeNavButton {
  border-bottom: 3px gold solid;
}

.nav-block {
  display:flex;
  flex-direction:row;

  .nav-link{
    color:white;
    text-decoration:none;
    margin: 0 20px;
    &.nav-link:hover {
      color:yellow;
    }
  }
}
`

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) setLoggedIn(true)
  }, [])

  const logOut = () => {
    let token = localStorage.getItem("token")
    localStorage.removeItem("token");
    if (token) setLoggedIn(false)
  }

  return (
    <Nav>
      <Link to="/" style={{textDecoration:"none",color:"gold"}}><h1>Team-O</h1></Link>
      {(loggedIn) ?
        <ul className="nav-block">
          <NavLink activeClassName="activeNavButton" className="nav-link" to="/game">Game</NavLink>
            <NavLink  activeClassName="activeNavButton" className="nav-link" >About</NavLink>
            <NavLink className="nav-link"  onClick={logOut} to="/">Logout</NavLink>
        </ul>
       :
        <ul className="nav-block">
        <NavLink activeClassName="activeNavButton" className="nav-link" >About</NavLink>
          <NavLink activeClassName="activeNavButton" className="nav-link" to="/login">Login</NavLink>
          <NavLink activeClassName="activeNavButton" className="nav-link"  to="/register">Registration</NavLink>
        </ul>
      }
    </Nav>
  )
}
  
export default NavBar;
