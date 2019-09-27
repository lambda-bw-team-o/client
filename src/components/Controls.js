import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import UpArrowKey from '../assets/images/interface/up-arrow-key-white.png';
import DownArrowKey from '../assets/images/interface/down-arrow-key-white.png';
import LeftArrowKey from '../assets/images/interface/left-arrow-key-white.png';
import RightArrowKey from '../assets/images/interface/right-arrow-key-white.png';
import UpArrowKeyClicked from '../assets/images/interface/up-arrow-key-white-clicked.png';
import DownArrowKeyClicked from '../assets/images/interface/down-arrow-key-white-clicked.png';
import LeftArrowKeyClicked from '../assets/images/interface/left-arrow-key-white-clicked.png';
import RightArrowKeyClicked from '../assets/images/interface/right-arrow-key-white-clicked.png';
import axios from '../helpers/axiosWithAuth';

function Controls(props) {
  const [pressLeft, setPressLeft] = useState(false)
  const [pressUp, setPressUp] = useState(false)
  const [pressRight, setPressRight] = useState(false)
  const [pressDown, setPressDown] = useState(false)

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
  }, [props.playerData])

  function moveNorth() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'n' })
      .then((res) => {
        if (res.error_msg) {
          console.log('MoveNorth', res.error_msg)
        } else {
          console.log('MoveNorth', `${props.playerData.position} to ${res.data.position}`)
          axios().get('https://team-o.herokuapp.com/api/adv/init/')
            .then(res => {
              let room = props.roomMatrix[res.data.position[0]][res.data.position[1]]
              console.log('init', res, room)
              props.setPlayerData(res.data)
              props.switchBackground(room.id)
            }).catch(error => {
              console.error(error);
            })
        }
      }).catch((err) => {
        console.error(err)
      })
  }

  function moveEast() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'e' })
      .then((res) => {
        if (res.error_msg) {
          console.log('MoveEast', res.error_msg)
        } else {
          console.log('MoveEast', `${props.playerData.position} to ${res.data.position}`)
          axios().get('https://team-o.herokuapp.com/api/adv/init/')
            .then(res => {
              let room = props.roomMatrix[res.data.position[0]][res.data.position[1]]
              console.log('init', res, room)
              props.setPlayerData(res.data)
              props.switchBackground(room.id)
            }).catch(error => {
              console.error(error);
            })
        }
      }).catch((err) => {
        console.error(err)
      })
  }

  function moveSouth() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 's' })
      .then((res) => {
        if (res.error_msg) {
          console.log('MoveSouth', res.error_msg)
        } else {
          console.log('MoveSouth', `${props.playerData.position} to ${res.data.position}`)
          axios().get('https://team-o.herokuapp.com/api/adv/init/')
            .then(res => {
              let room = props.roomMatrix[res.data.position[0]][res.data.position[1]]
              console.log('init', res, room)
              props.setPlayerData(res.data)
              props.switchBackground(room.id)
            }).catch(error => {
              console.error(error);
            })
        }
      }).catch((err) => {
        console.error(err)
      })
  }

  function moveWest() {
    axios().post("https://team-o.herokuapp.com/api/adv/move", { direction: 'w' })
      .then((res) => {
        if (res.error_msg) {
          console.log('MoveWest', res.error_msg)
        } else {
          console.log('MoveWest', `${props.playerData.position} to ${res.data.position}`)
          axios().get('https://team-o.herokuapp.com/api/adv/init/')
            .then(res => {
              let room = props.roomMatrix[res.data.position[0]][res.data.position[1]]
              console.log('init', res, room)
              props.setPlayerData(res.data)
              props.switchBackground(room.id)
            }).catch(error => {
              console.error(error);
            })
        }
      }).catch((err) => {
        console.error(err)
      })
  }  

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

  return (
    <>
      <Row>
        <Column width={4}></Column>
        <Column width={4}>
          <img src={pressUp ? UpArrowKeyClicked : UpArrowKey} width="80px" height="80px" alt="Game Control"
               onClick={handleUpArrow}
               style={{ margin: '10px', cursor: 'pointer' }}></img>
        </Column>
        <Column width={4}></Column>
      </Row>

      <Row>
        <Column width={4}>
          <img src={pressLeft ? LeftArrowKeyClicked : LeftArrowKey} width="80px" height="80px" alt="Game Control" 
               onClick={handleLeftArrow}
               style={{ margin: '10px', cursor: 'pointer' }}></img>
        </Column>
        <Column width={4}>
          <img src={pressDown ? DownArrowKeyClicked : DownArrowKey} width="80px" height="80px" alt="Game Control"
               onClick={handleDownArrow}
               style={{ margin: '10px', cursor: 'pointer' }}></img>
        </Column>
        <Column width={4}>
          <img src={pressRight ? RightArrowKeyClicked : RightArrowKey} width="80px" height="80px" alt="Game Control" 
               onClick={handleRightArrow}
               style={{ margin: '10px', cursor: 'pointer' }}></img>
        </Column>
      </Row>
    </>
  )
}

export default Controls;
