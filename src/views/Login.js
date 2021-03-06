import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'
import axios from 'axios';

const FormStyle = styled.div`
 width: 300px;
  padding: 64px 15px 24px;
  margin: 0 auto;
  .checker{
    font-weight: bold;
    font-family: monospace;
    font-size: 10px;
    text-align:center;
  }
  h1{
    font-weight: bold;
    font-family: monospace;
    text-align:center;
  }
  }
  
  .control {
    margin: 0 0 24px;
    input {
      width: 89%;
      padding: 14px 16px;
      border: 0;
      background: transparent;
      color: #fff;
      font-family: monospace, serif;
      letter-spacing: 0.05em;
      font-size: 16px;
      &:hover,
      &:focus {
        outline: none;
        border: 0;
      }
    }
  }
  .btn {
    width: 100%;
    display: block;
    padding: 14px 16px;
    background: transparent;
    outline: none;
    border: 0;
    color: #fff;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-family: monospace;
    font-size: 16px;
  }

  .block-cube {
  position: relative;
  .bg-top {
    position: absolute;
    height: 10px;
    background: rgb(2,0,36);
    background: gold;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    .bg-inner{
      bottom: 0;
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgb(2,0,36);
    background: gold;
  }
  .bg-right {
    position: absolute;
    background: rgb(2,0,36);
    background: gold;
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    .bg-inner {
      left: 0;
    }
  }
  .bg {
    .bg-inner {
      transition: all 0.2s ease-in-out;
    }
  }
  .bg-inner {
    background: #212121;
    position: absolute;
    left: 2px;
    top: 2px;
    right: 2px;
    bottom: 2px;
  }
  .text {
    position: relative;
    z-index: 2;
  }  
  &.block-input {
    input {
      position: relative;
      z-index: 2;
      &:focus ~ .bg-right .bg-inner,
      &:focus ~ .bg-top .bg-inner,
      &:focus ~ .bg-inner .bg-inner {
        top: 100%;
        background: rgba(255, 255, 255, 0.5)
      }    
    }
    .bg-top,
    .bg-right,
    .bg {
      background: rgba(255, 255, 255, 0.5);
      transition: background 0.2s ease-in-out;
    }
    .bg-right,
    .bg-top {
      .bg-inner {
        transition: all 0.2s ease-in-out;
      }
    }
    &:focus,
    &:hover {
        .bg-top,
        .bg-right,
        .bg {
          background: rgba(255, 255, 255, 0.8);
          }
    }
  }
  // State hover, focus
  &.block-cube-hover:focus,
  &.block-cube-hover:hover {
    .bg {
      .bg-inner {
        top: 100%;
      }
    }
  }
}
`;
function Login(props) {
  const [credentials, setCredentials] = useState({    
    username: '',
    password: '',
  })
  
  const[passwordParams, setPasswordParams]= useState({
   userOrPassWrong:""
  })

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) props.history.push('/game');
  }, [props.history])

  const handleChange = name => event => {
    setCredentials({ ...credentials, [name]: event.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let parcel = credentials;

    axios.post('https://team-o.herokuapp.com/api/login/', parcel)
      .then(res => {
        localStorage.setItem("login", JSON.stringify(res))
        localStorage.setItem('token', res.data.key);
        props.history.push('/game');
      })
      .catch(error => {
       setPasswordParams({userOrPassWrong:"User-Name or password not found."})
      })
  }

  return (
    <>
      <NavBar />

      <FormStyle>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className='control'>
            <h1 style={{ color: "white" }}>
              Sign In
            </h1>
          </div>

          <div className='control block-cube block-input'>
            <input autoComplete="off" placeholder='Username'
              value={credentials.username} onChange={handleChange("username")} type='text' />

            <div className='bg-top'>
              <div className='bg-inner'></div>
            </div>
            <div className='bg-right'>
              <div className='bg-inner'></div>
            </div>
            <div className='bg'>
              <div className='bg-inner'></div>
            </div>
          </div>

          <div className='control block-cube block-input'>
            <input autoComplete="off" name='password' placeholder='Password'
              value={credentials.password} onChange={handleChange("password")} type='password' />

            <div className='bg-top'>
              <div className='bg-inner'></div>
            </div>
            <div className='bg-right'>
              <div className='bg-inner'></div>
            </div>
            <div className='bg'>
              <div className='bg-inner'></div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <button className='btn block-cube block-cube-hover' 
                    type='submit' style={{ cursor: 'pointer' }}>
              <div className='bg-top'>
                <div className='bg-inner'></div>
              </div>
              <div className='bg-right'>
                <div className='bg-inner'></div>
              </div>
              <div className='bg'>
                <div className='bg-inner'></div>
              </div>
              <div className='text'>
                Log In
              </div>
            </button>
          </div>

          <Link to="/register" style={{ color: "white", textDecoration: "none", padding: "30px" }}
                className='btn block-cube block-cube-hover' type='button'>
            <div className='text'>
              Don't have Account? Register
            </div>
          </Link>
        </form>
      </FormStyle>
    </>
  )
}

export default Login;
