import React, { useState } from 'react';
import styled from "styled-components";
import NavBar from '../components/NavBar';

import { Link } from 'react-router-dom'

import axios from 'axios';

const Form = styled.div`
 width: 300px;
  padding: 64px 15px 24px;
  margin: 0 auto;
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


const Registration = (props) => {
  const [credentials, setCredentials] = useState({    
    username: '',
    password1: '',
    password2:''

  })
  const[passwordParams, setPasswordParams]= useState({
    passwordTooShort:"",
    passwordNotUnique:"",
    passwordsDontMatch:"",
    username:""
  })

  const handleChange = name => event => {
    setCredentials({ ...credentials, [name]: event.target.value });
  };

  const handleSubmit = () => {
    let parcel = credentials;
    console.log(parcel.password1.length)
    if(parcel.password1 === parcel.password2 && 
      parcel.password1.length > 8 && 
      parcel.password2.length > 8
      
      ){
      axios.post('https://team-o.herokuapp.com/api/registration/', parcel)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.key);
        props.history.push('/game')
      })
      .catch(error => {
        setPasswordParams({
          passwordNotUnique:"Try something a little harder to guess.",
      })
      })
    }else if (parcel.password1.length < 8 || parcel.password2.length < 8){
      setPasswordParams({
        passwordTooShort:"Err password too short! needs to be at least 8 characters",
    })
    }
    else if (parcel.password1 !== parcel.password2){
      setPasswordParams({
        passwordsDontMatch:"Passwords Dont Match",
    })
    }

  }
       
  return (
    <>
        <NavBar />
          <Form  >
          <div className='control'>
            <h1 style={{color:"white"}}>
              Register
            </h1>
          </div>
          <div className='control block-cube block-input'>
            <input autocomplete="off" name='username'  placeholder="username" required id="username" value={credentials.username} onChange={handleChange("username")} type="text"/>
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
          <p style={{color:"white"}}>{passwordParams.username}</p>
          <div className='control block-cube block-input'>
            <input  autocomplete="off" name='password1'  placeholder="password" required id="password"  value={credentials.password1} onChange={handleChange("password1")} type='password'/>
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
          {(credentials.password1.length > 8) ? "":<p style={{color:"white"}}>{passwordParams.passwordTooShort}</p>}
          <div className='control block-cube block-input'>
            <input autocomplete="off" name='password2'  placeholder="password-verification" required id="password"  value={credentials.password2} onChange={handleChange("password2")} type='password' />
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
          {(credentials.password2.length > 8) ? "":<p style={{color:"white"}}>{passwordParams.passwordTooShort}</p>}
          <div style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
          <button  onClick={handleSubmit} className='btn block-cube block-cube-hover' type='button'>
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
              Register
            </div>
            </button>
            <div>
            {(credentials.password1 !== credentials.password2) ? <p style={{color:"white"}}>{passwordParams.passwordsDontMatch}</p>: ""}
            <p style={{color:"white"}}>{passwordParams.passwordNotUnique}</p>
            <Link to="/login" style={{color:"white",textDecoration:"none",padding:"30px"}} lassName='btn block-cube block-cube-hover' type='button'>
            <div className='text'>
             Already have an account? Login
            </div>
            </Link>
            </div>
          </div>
          
          </Form>
      </>
  )
}
  
export default Registration;
