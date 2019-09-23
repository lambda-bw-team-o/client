import React, { useState } from 'react';
import NavBar from '../components/NavBar.js';
import styled from "styled-components";
import Container from '../styles/Container';

function Login() {
  const [credentials, setCredentials] = useState({    
    username: '',
    password: '',
  })

  const StyledForm = styled.div`
 
`;
  const handleChange = name => event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  return (
    <Container>
      <NavBar />

      <h1>Logins

      </h1>

      <form>
        <div>
        <input name='username' value={credentials.username} onChange={handleChange('username')} type="text" />
        
        </div>

        <div>
        <input name='password' value={credentials.password} onChange={handleChange('password')} type="password" />
        </div>

        <button type="submit">Login</button>
        {/* <Link to="/register"><button>Register</button></Link>
        */}
      </form>
    </Container>
  )
}

export default Login;
