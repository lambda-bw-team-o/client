import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: .5rem 1rem;
  border: 5px solid #909090;
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
      <NavbarBrand href="/">
        <img src="/logo192.png" width="60px" height="60px" alt="Logo"></img>
      </NavbarBrand>

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
