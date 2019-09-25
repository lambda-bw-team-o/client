import React from 'react';
import NavBar from '../components/NavBar';
import LandingPage from '../assets/landing-pic.jpg';
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
              <button className="go">
                          EXPLORE
              </button>
            </div> 

          </div>
      </div>


</>
  )
}

export default Landing;
