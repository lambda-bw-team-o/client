import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import UpArrowKey from '../assets/images/interface/up-arrow-key.png';
import DownArrowKey from '../assets/images/interface/down-arrow-key.png';
import LeftArrowKey from '../assets/images/interface/left-arrow-key.png';
import RightArrowKey from '../assets/images/interface/right-arrow-key.png';
import UpArrowKeyClicked from '../assets/images/interface/up-arrow-key-clicked.png';
import DownArrowKeyClicked from '../assets/images/interface/down-arrow-key-clicked.png';
import LeftArrowKeyClicked from '../assets/images/interface/left-arrow-key-clicked.png';
import RightArrowKeyClicked from '../assets/images/interface/right-arrow-key-clicked.png';
import axios from '../helpers/axiosWithAuth';

function Controls(props) {
  const [pressLeft, setPressLeft] = useState(false)
  const [pressUp, setPressUp] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)
  const switchBackground = props.switchBackground

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
        axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'w' })
          .then((res) => {
            console.log('res', res)
          }).catch((err) => {
            console.error(err)
          })
        switchBackground()
        props.setPlayerCoord([props.playerCoord[0] - 1, props.playerCoord[1]])
      } else if (key === 38) {
        // Move Up
        setPressUp(false)
        axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'n' })
          .then((res) => {
            console.log('res', res)
          }).catch((err) => {
            console.error(err)
          })
        switchBackground()
        props.setPlayerCoord([props.playerCoord[0], props.playerCoord[1] - 1])
      } else if (key === 39) {
        // Move Right
        setPressRight(false)
        axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'e' })
          .then((res) => {
            console.log('res', res)
          }).catch((err) => {
            console.error(err)
          })
        switchBackground()
        props.setPlayerCoord([props.playerCoord[0] + 1, props.playerCoord[1]])
      } else if (key === 40) {
        // Move Down
        setPressDown(false)
        axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 's' })
          .then((res) => {
            console.log('res', res)
          }).catch((err) => {
            console.error(err)
          })
        switchBackground()
        props.setPlayerCoord([props.playerCoord[0], props.playerCoord[1] + 1])
      }
    }
  }, [switchBackground])

  const handleLeftArrow = () => {
    setPressLeft(true)
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'w' })
      .then((res) => {
        console.log('res', res)
      }).catch((err) => {
        console.error(err)
      })
    props.switchBackground()
    props.setPlayerCoord([props.playerCoord[0] - 1, props.playerCoord[1]])
    setTimeout(() => {
      setPressLeft(false)
    }, 100)
  }
  const handleUpArrow = () => {
    setPressUp(true)
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'n' })
      .then((res) => {
        console.log('res', res)
      }).catch((err) => {
        console.error(err)
      })
    props.switchBackground()
    props.setPlayerCoord([props.playerCoord[0], props.playerCoord[1] - 1])
    setTimeout(() => {
      setPressUp(false)
    }, 100)
  }
  const handleRightArrow = () => {
    setPressRight(true)
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'e' })
      .then((res) => {
        console.log('res', res)
      }).catch((err) => {
        console.error(err)
      })
    props.switchBackground()
    props.setPlayerCoord([props.playerCoord[0] + 1, props.playerCoord[1]])
    setTimeout(() => {
      setPressRight(false)
    }, 100)
  }
  const handleDownArrow = () => {
    setPressDown(true)
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 's' })
      .then((res) => {
        console.log('res', res)
      }).catch((err) => {
        console.error(err)
      })
    props.switchBackground()
    props.setPlayerCoord([props.playerCoord[0], props.playerCoord[1] + 1])
    setTimeout(() => {
      setPressDown(false)
    }, 100)
  }
  
  return (
    <>
      <Row>
        <Column width={4}></Column>
        <Column width={4}>
          <img src={pressUp ? UpArrowKeyClicked : UpArrowKey} width="80px" height="80px" alt="Game Tile"
               onClick={handleUpArrow}
               style={{ margin: '10px' }}></img>
        </Column>
        <Column width={4}></Column>
      </Row>
      <Row>
        <Column width={4}>
          <img src={pressLeft ? LeftArrowKeyClicked : LeftArrowKey} width="80px" height="80px" alt="Game Tile" 
               onClick={handleLeftArrow}
               style={{ margin: '10px' }}></img>
        </Column>
        <Column width={4}>
          <img src={pressDown ? DownArrowKeyClicked : DownArrowKey} width="80px" height="80px" alt="Game Tile"
               onClick={handleDownArrow}
               style={{ margin: '10px' }}></img>
        </Column>
        <Column width={4}>
          <img src={pressRight ? RightArrowKeyClicked : RightArrowKey} width="80px" height="80px" alt="Game Tile" 
               onClick={handleRightArrow}
               style={{ margin: '10px' }}></img>
        </Column>
      </Row>
    </>
  )
}

export default Controls;
