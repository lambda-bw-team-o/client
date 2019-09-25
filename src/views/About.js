import React, { useEffect } from 'react';
import styled from "styled-components";
import NavBar from '../components/NavBar';

const Block = styled.div`
  max-width: 350px;
  /* padding: 64px 15px 24px; */
  margin: 0 auto;

  .checker{
    font-weight: bold;
    font-family: monospace;
    font-size: 10px;
    text-align:center;
  }
  .control {
    margin: 0 0 24px;
    a{
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
  }, [])
  
  return (
    <>
      <NavBar/>
        <h1 style={{textAlign:"center",color:"white"}}>About</h1>
        <div style={{textAlign:"center",color:"white",margin:"0 auto",width:"80%",maxWidth:"700px"}} >
        <div style={{}}>
        <h2 style={{textAlign:"center",color:"white"}}>How To Play</h2>
        <p style={{textAlign:"center",color:"white"}}> LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Why do we use it
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </div>
      </div>
      <Block> 

    <div>
      <h2 style={{textAlign:"center",color:"white"}}>Developers</h2>
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
              <h4>Github<a href="google.com"> >></a></h4>
              
              </div>

            </div>
        </div>
    
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
              <h4>Github<a href="google.com"> >></a></h4>

              </div>
            </div>
          </div>

          </div>

        <div>

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
              <h4>Github<a href="google.com"> >></a></h4>
              
              </div>
            </div>
        </div>

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
              <h4>Github<a  href="google.com"> >></a></h4>
              </div>
            </div>
        </div>

      </div>
    </Block>
   
        <p style={{textAlign:"center"}}>
        <a style={{textDecoration:"none",color:"white"}}href="https://github.com/lambda-bw-team-o"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="60px" height="60px" alt="GitHub Logo"/></a>
        <h4><a style={{textDecoration:"none",color:"white"}}href="https://github.com/lambda-bw-team-o">Open Source on GitHub</a></h4>
      </p> 
   </>            
  )
}
  
export default About;
