import React, { useState } from 'react';
import NavBar from '../components/NavBar.js';

const Registration = () => {
  const [credentials, setCredentials] = useState({    
    username: '',
    password: '',
  })

  const handleChange = name => event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  return (
    <div>
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
       
      </form>
    </div>
  )
}
  
export default Registration;