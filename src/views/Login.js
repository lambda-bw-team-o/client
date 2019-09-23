import React, { useState } from 'react';
import NavBar from '../components/NavBar.js';

function Login() {
  const [username, setUsername] = useState('')

  // const [credentials, setCredentials] = useState({    
  //   username: '',
  //   password: '',
  // })

  // const handleChange = name => event => {
  //   setCredentials({ ...credentials, [event.target.name]: event.target.value });
  // };

  // <input name='username' value={credentials.username} onChange={handleChange('username')} type="text" />
  // <input name='password' value={credentials.password} onChange={handleChange('password')} type="password" />
  return (
    <div>
      <NavBar />

      <h1>Login</h1>

      <form>
        <div>
          <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div class="input-field col s6">
        </div>

        <button type="submit">Login</button>
        {/* <Link to="/register"><button>Register</button></Link>
        */}
      </form>
    </div>
  )
}

export default Login;
