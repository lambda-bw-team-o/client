import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../App.css';
import Column from '../styles/Column';

const Landing = (props) => {
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) props.history.push('/game');
  }, [props.history])

  return (
    <>
      <div className="body">

        <NavBar />

        <div style={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",height:"80vh"}}>
              
          <Link className="go" to="/login">
              EXPLORE
          </Link>

        </div> 

      </div>
     
    </>
  )
}

export default Landing;
