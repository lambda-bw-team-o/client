import React, { useState, useEffect } from 'react';
import UpArrowKey from '../assets/up-arrow-key.png';
import DownArrowKey from '../assets/down-arrow-key.png';
import LeftArrowKey from '../assets/left-arrow-key.png';
import RightArrowKey from '../assets/right-arrow-key.png';

function Controls() {
  const [pressLeft, setPressLeft] = useState(false)
  const [pressUp, setPressUp] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)

  useEffect(() => {
    window.onkeydown = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      
      if (key == 37) {
        // Move Left
        setPressLeft(true)
      } else if (key == 38) {
        // Move Up
        setPressUp(true)
      } else if (key == 39) {
        // Move Right
        setPressRight(true)
      } else if (key == 40) {
        // Move Down
        setPressDown(true)
      }
    }
    
    window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      
      if (key == 37) {
        // Move Left
        setPressLeft(false)
      } else if (key == 38) {
        // Move Up
        setPressUp(false)
      } else if (key == 39) {
        // Move Right
        setPressRight(false)
      } else if (key == 40) {
        // Move Down
        setPressDown(false)
      }
    }
  }, [])

  return (
    <div>
      <img src={UpArrowKey} width="80px" height="80px" alt="Game Tile" style={{ margin: '10px', backgroundColor: pressUp === true ? 'red' : 'inherit' }}></img>
      <img src={DownArrowKey} width="80px" height="80px" alt="Game Tile" style={{ margin: '10px', backgroundColor: pressDown === true ? 'red' : 'inherit' }}></img>
      <img src={LeftArrowKey} width="80px" height="80px" alt="Game Tile" style={{ margin: '10px', backgroundColor: pressLeft === true ? 'red' : 'inherit' }}></img>
      <img src={RightArrowKey} width="80px" height="80px" alt="Game Tile" style={{ margin: '10px', backgroundColor: pressRight === true ? 'red' : 'inherit' }}></img>
    </div>
  )
}

export default Controls;
