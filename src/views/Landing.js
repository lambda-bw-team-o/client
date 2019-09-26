import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../App.css';
import Column from '../styles/Column';

const Landing = () => {
  return (
    <>
      <div className="body">

      {/* <div className="leftHalf" ></div>

      <div className="rightHalf"></div> */}
          
          
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
