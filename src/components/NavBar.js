import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: .5rem 1rem;
  background-color: #f8f9fa;
`

const NavbarBrand = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1.25rem;
`

const NavbarList = styled.ul`
  list-style: none;
`

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) setLoggedIn(true)
  }, [])

  return (
    <NavbarStyle>
      <NavbarBrand href="#">Team-O</NavbarBrand>

      {(loggedIn) ? '' :
        <NavbarList>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/registration">Registration</NavLink></li>
        </NavbarList>
      }
    </NavbarStyle>
  )
}

export default NavBar;
