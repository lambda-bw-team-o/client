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
      console.log('MoveNorth', res)
      props.setPlayerData({...props.playerData,
        position: res.data.position,
        title: res.data.title,
        description: res.data.description,
        players: res.data.players,
        combat: res.data.combat,
      })
      
      // TODO handle res.error_msg
      // Maybe show in Feed and flash controls red.
      
      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
  }
  
  function moveEast() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'e' })
    .then((res) => {
      console.log('MoveEast', res)
      props.setPlayerData({
        ...props.playerData,
        position: [res.data.position[0] + 1, res.data.position[1]],
        position: res.data.position,
        title: res.data.title,
        description: res.data.description,
        players: res.data.players,
        combat: res.data.combat,
      })

      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
  }
  
  function moveSouth() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 's' })
    .then((res) => {
      console.log('MoveSouth', res)
      props.setPlayerData({
        ...props.playerData,
        position: res.data.position,
        title: res.data.title,
        description: res.data.description,
        players: res.data.players,
        combat: res.data.combat,
      })

      // TODO pass index of image to switchBackground to dynamically pull image.
      props.switchBackground()
    }).catch((err) => {
      console.error(err)
    })
  }
  
  function moveWest() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'w' })
    .then((res) => {
      console.log('MoveWest', res)
      props.setPlayerData({
        ...props.playerData,
        position: res.data.position,
        title: res.data.title,
        description: res.data.description,
        players: res.data.players,
        combat: res.data.combat,
      })

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
               style={{ margin: '10px', borderRadius: '12px', background: 'white', cursor: 'pointer' }}></img>
        </Column>
        <Column width={4}></Column>
      </Row>
      <Row>
        <Column width={4}>
          <img src={pressLeft ? LeftArrowKeyClicked : LeftArrowKey} width="80px" height="80px" alt="Game Tile" 
               onClick={handleLeftArrow}
               style={{ margin: '10px', borderRadius: '12px', background: 'white', cursor: 'pointer' }}></img>
        </Column>
        <Column width={4}>
          <img src={pressDown ? DownArrowKeyClicked : DownArrowKey} width="80px" height="80px" alt="Game Tile"
               onClick={handleDownArrow}
               style={{ margin: '10px', borderRadius: '12px', background: 'white', cursor: 'pointer' }}></img>
        </Column>
        <Column width={4}>
          <img src={pressRight ? RightArrowKeyClicked : RightArrowKey} width="80px" height="80px" alt="Game Tile" 
               onClick={handleRightArrow}
               style={{ margin: '10px', borderRadius: '12px', background: 'white', cursor: 'pointer' }}></img>
        </Column>
      </Row>
    </>
  )
}

export default Controls;
