import React, { useEffect } from 'react';
import styled from "styled-components";
import NavBar from '../components/NavBar';
import Row from '../styles/Row';
import Column from '../styles/Column';

const Block = styled.div`
  max-width: 550px;
  /* padding: 64px 15px 24px; */
  margin: 0 auto;

  .checker {
    font-weight: bold;
    font-family: monospace;
    font-size: 10px;
    text-align:center;
  }
  .control {
    margin: 0 0 24px;
    a {
        margin-left:40%;
    }
    .outer {
      height:150px;
      /* padding: 14px 16px; */
      border: 0;
      background: transparent;
      color: #fff;
      font-family: monospace, serif;
      letter-spacing: 0.05em;
      font-size: 16px;      
    }
  }
  
.block-cube {
  position: relative;
  margin: 20px;

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
    font-family: monospace, serif;
    letter-spacing: 0.05em;
    font-size: 16px;
    color: white;
    padding-left:8px;
    a{
        font-size:20px;
        text-decoration:none;
        color: white;
        &:hover {
        color:gold;
      }
    }
  }
  .text {
    position: relative;
    z-index: 2;
  }  
    
  .bg-top,
  .bg-right,
  .bg {
    background: rgba(255, 255, 255, 0.5);
  }    
}
`;

const About = (props) => {
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) props.history.push('/game');
  }, [props.history])
  
  return (
    <Row>
      <Column>
        <NavBar/>

        <h1 style={{textAlign:"center",color:"white"}}>About</h1>

        <div style={{textAlign:"center",color:"white",margin:"0 auto",width:"80%",maxWidth:"700px"}}>
          <p style={{textAlign:"center",color:"white"}}>
            This is a celebration of space exploration. We salute explorers who dream of the final frontier.
          </p>

          <p style={{ textAlign: "center", color: "white" }}>
            As a player you navigate around an expansive procedurally generated map. Each map can have hundreds of locations. Images within the game are real photos from NASA.
          </p>
        </div>

        <Block> 
          <Row>
            <Column>
              <h2 style={{textAlign:"center",color:"white"}}>Developers</h2>
            </Column>
          </Row>

          <Row>
            <Column width={6}>
              <div className='control block-cube block-input'>
                <div className="outer"></div>
              
                <div className='bg-top'>
                  <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                  <div className='bg-inner'>  </div>
                </div>
                <div className='bg'>
                  <div className='bg-inner'>
                    <h3>Andy Bettisworth</h3>
                    <h4>Github<a href="https://github.com/wurde"> >></a></h4>
                  </div>
                </div>
              </div>
            </Column>
      
            <Column width={6}>
              <div className='control block-cube block-input'>
                <div className="outer" ></div>

                <div className='bg-top'>
                  <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                  <div className='bg-inner'></div>
                </div>

                <div className='bg'>
                  <div className='bg-inner'>
                    <h3>Arron Marshall</h3>
                    <h4>Github<a href="https://github.com/arronm"> >></a></h4>
                  </div>
                </div>
              </div>
            </Column>
          </Row>

          <Row>
            <Column width={6}>
              <div className='control block-cube block-input'>
                <div className="outer" ></div>

                <div className='bg-top'>
                  <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                  <div className='bg-inner'></div>
                </div>

                <div className='bg'>
                  <div className='bg-inner'>
                    <h3>Josh Timmons</h3>
                    <h4>Github<a href="https://github.com/josh182014"> >></a></h4>                    
                  </div>
                </div>
              </div>
            </Column>

            <Column width={6}>
              <div className='control block-cube block-input'>
                <div className="outer" ></div>

                <div className='bg-top'>
                  <div className='bg-inner'></div>
                </div>
                <div className='bg-right'>
                  <div className='bg-inner'></div>
                </div>

                <div className='bg'>
                  <div className='bg-inner'>
                    <h3>Rogelio Caballero </h3>
                    <h4>Github<a  href="https://github.com/rogercp"> >></a></h4>
                  </div>
                </div>
              </div>
            </Column>
          </Row>
        </Block>
   
        <p style={{textAlign:"center"}}>
          <a style={{textDecoration:"none",color:"white"}}href="https://github.com/lambda-bw-team-o"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="60px" height="60px" alt="GitHub Logo"/></a>
          <h4><a style={{textDecoration:"none",color:"white"}}href="https://github.com/lambda-bw-team-o">Open Source on GitHub</a></h4>
        </p>
      </Column>
    </Row>
  )
}

  
export default About;
