import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import UpArrowKey from '../assets/images/interface/up-arrow-key.png';
import DownArrowKey from '../assets/images/interface/down-arrow-key.png';
import LeftArrowKey from '../assets/images/interface/left-arrow-key.png';
import RightArrowKey from '../assets/images/interface/right-arrow-key.png';

function Controls() {
  const [pressLeft, setPressLeft] = useState(false)
  const [pressUp, setPressUp] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)

  useEffect(() => {
    window.onkeydown = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      
      if (key === 37) {
        // Move Left
        setPressLeft(true)
      } else if (key === 38) {
        // Move Up
        setPressUp(true)
      } else if (key === 39) {
        // Move Right
        setPressRight(true)
      } else if (key === 40) {
        // Move Down
        setPressDown(true)
      }
    }
    
    window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      
      if (key === 37) {
        // Move Left
        setPressLeft(false)
      } else if (key === 38) {
        // Move Up
        setPressUp(false)
      } else if (key === 39) {
        // Move Right
        setPressRight(false)
      } else if (key === 40) {
        // Move Down
        setPressDown(false)
      }
    }
  }, [])
  
  const handleLeftArrow = () => {
    setPressLeft(true)
    setTimeout(() => {
      setPressLeft(false)
    }, 100)
  }
  const handleUpArrow = () => {
    setPressUp(true)
    setTimeout(() => {
      setPressUp(false)
    }, 100)
  }
  const handleRightArrow = () => {
    setPressRight(true)
    setTimeout(() => {
      setPressRight(false)
    }, 100)
  }
  const handleDownArrow = () => {
    setPressDown(true)
    setTimeout(() => {
      setPressDown(false)
    }, 100)
  }

  return (
    <>
      <Row>
        <Column width={4}></Column>
        <Column width={4}>
          <img src={UpArrowKey} width="80px" height="80px" alt="Game Tile"
              onClick={handleUpArrow}
              style={{ margin: '10px', backgroundColor: pressUp === true ? 'red' : 'inherit' }}></img>
        </Column>
        <Column width={4}></Column>
      </Row>
      <Row>
        <Column width={4}>
          <img src={LeftArrowKey} width="80px" height="80px" alt="Game Tile" 
              onClick={handleLeftArrow}
              style={{ margin: '10px', backgroundColor: pressLeft === true ? 'red' : 'inherit' }}></img>
        </Column>
        <Column width={4}>
          <img src={DownArrowKey} width="80px" height="80px" alt="Game Tile"
            onClick={handleDownArrow}
            style={{ margin: '10px', backgroundColor: pressDown === true ? 'red' : 'inherit' }}></img>
        </Column>
        <Column width={4}>
          <img src={RightArrowKey} width="80px" height="80px" alt="Game Tile" 
              onClick={handleRightArrow}
              style={{ margin: '10px', backgroundColor: pressRight === true ? 'red' : 'inherit' }}></img>
        </Column>
      </Row>
    </>
  )
}

export default Controls;
