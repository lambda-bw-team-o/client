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

  // console.log('Controls.playerData', props.playerData)

  useEffect(() => {
    window.onkeydown = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      
      if (key === 37) {
        setPressLeft(true)
      } else if (key === 38) {
        setPressUp(true)
      } else if (key === 39) {
        setPressRight(true)
      } else if (key === 40) {
        setPressDown(true)
      }
    }
    
    window.onkeyup = (e) => {
      const key = e.keyCode ? e.keyCode : e.which;
      
      if (key === 37) {
        setPressLeft(false)
        moveWest()
      } else if (key === 38) {
        setPressUp(false)
        moveNorth()
      } else if (key === 39) {
        setPressRight(false)
        moveEast()
      } else if (key === 40) {
        setPressDown(false)
        moveSouth()
      }
    }
  }, [])

  const handleLeftArrow = () => {
    setPressLeft(true)
    moveWest()
    setTimeout(() => {
      setPressLeft(false)
    }, 100)
  }
  const handleUpArrow = () => {
    setPressUp(true)
    moveNorth()
    setTimeout(() => {
      setPressUp(false)
    }, 100)
  }
  const handleRightArrow = () => {
    setPressRight(true)
    moveEast()
    setTimeout(() => {
      setPressRight(false)
    }, 100)
  }
  const handleDownArrow = () => {
    setPressDown(true)
    moveSouth()
    setTimeout(() => {
      setPressDown(false)
    }, 100)
  }

  function moveNorth() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'n' })
    .then((res) => {
      // TODO Set setPlayerData
      // 
      // playerData =
      //   combat: { protected: true, health: 5, cloaked: false }
      //   description: "Iobo is a hyperborean super planet, with drifting snowstorms"
      //   name: "test5"
      //   players: []
      //   position: (2)[12, 10]
      //   title: "Iobo"
      //   uuid: "97316957-dc29-4359-a405-09803e7d26d3"
      // 
      // res = 
      //   combat: { protected: true, health: 5, cloaked: false }
      //   description: "Iobo is a hyperborean super planet, with drifting snowstorms"
      //   error_msg: "You cannot move that way."
      //   name: "test5"
      //   players: []
      //   position: (2)[12, 10]
      //   title: "Iobo"

      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
  }
  
  function moveEast() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'e' })
    .then((res) => {
      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
  }
  
  function moveSouth() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 's' })
    .then((res) => {
      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
  }
  
  function moveWest() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'w' })
    .then((res) => {
      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
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
