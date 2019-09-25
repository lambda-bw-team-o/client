import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../App.css';

const Landing = () => {
  return (
    <>
      <div className="body">

      <div className="leftHalf" ></div>

      <div className="rightHalf"></div>
          
          <div>
            <NavBar />

            <div style={{ display: "flex",
            justifyContent: "center",
              alignTtems: "center",
              marginTop:"203px"}}>
             
              <Link className="go" to="/login">
                          EXPLORE
                  </Link>

            </div> 

          </div>
      </div>


</>
  )
}

export default Landing;
