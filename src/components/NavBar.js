import React, { useState, useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';
import styled from "styled-components";



const Nav = styled.nav`
display:flex;
flex-direction:row-gap;
color:gold;
justify-content: space-between;
padding:0 30px;
.nav-block{
display:flex;
flex-direction:row;
.nav-link{
  color:white;
  text-decoration:none;
  padding: 0 20px;
&.nav-link:hover{
  color:yellow;
}
}
}

`



const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(true)

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) setLoggedIn(true)
  }, [])


  const logOut = () => {
  localStorage.removeItem("token");
  setLoggedIn(false)
  console.log("loggedout")
  }

  return (
    <Nav>
      <Link to="/" style={{textDecoration:"none",color:"gold"}}><h1>Team-O</h1></Link>
      {(loggedIn) ? 
      
        <ul className="nav-block">
            <NavLink className="nav-link" >About</NavLink>
            <NavLink className="nav-link"  onClick={logOut} to="/">Logout</NavLink>
            
        </ul>
      
       :

        <ul className="nav-block">
        <NavLink className="nav-link" >About</NavLink>
          <NavLink className="nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-link"  to="/registration">Registration</NavLink>
        </ul>
      }
    </Nav>
    )
  }
  
  export default NavBar;