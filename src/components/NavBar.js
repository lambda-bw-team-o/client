import React, { useState, useEffect } from 'react';

import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
display:flex;
flex-direction: row-gap;
color:gold;
justify-content: space-around;
align-items:center;

.activeNavButton {
  border-bottom: 3px gold solid;
}

}
.nav-block{
display:flex;
flex-direction:row;
justify-content:space-around;
.nav-link{
  color:white;
  text-decoration:none;
  margin: 0 20px;
&.nav-link:hover{
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

     
      {(loggedIn) ?
        <ul className="nav-block">
          <NavLink activeClassName="activeNavButton" className="nav-link" to="/game">Game</NavLink>
          <NavLink  activeClassName="activeNavButton" className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link"  onClick={logOut} to="/">Logout</NavLink>
        </ul>
       :
       <>
       <Link to="/" style={{textDecoration:"none",color:"gold",marginLeft:"20px"}}><h2>Team-O</h2></Link>
        <ul className="nav-block">
          <NavLink activeClassName="activeNavButton" className="nav-link"  to="/about">About</NavLink>
          <NavLink activeClassName="activeNavButton" className="nav-link"  to="/register">Signup</NavLink>
          <NavLink activeClassName="activeNavButton" className="nav-link" to="/login">Login</NavLink>
          
        </ul>
        </>
      }
    </Nav>
  )
}
  
export default NavBar;
