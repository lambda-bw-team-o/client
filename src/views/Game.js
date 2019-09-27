import React, { useState, useEffect, useRef } from 'react';
import InfoBar from '../components/InfoBar';
import Map from '../components/Map';
import Feed from '../components/Feed';
import Controls from '../components/Controls';
import Container from '../styles/Container';
import Theme from '../styles/Theme';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Arrival from '../assets/audio/arrival-audio.mp3';
import axios from '../helpers/axiosWithAuth';

const Game = (props) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerData, setPlayerData] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    axios().get('https://team-o.herokuapp.com/api/adv/init/')
      .then(res => {
        console.log('init', res)
        setPlayerData(res.data)
      }).catch(error => {
        console.error(error);
      })
  }, [])

  function switchBackground() {
    let index =  backgroundIndex + 1
    if (index > 114) index = 0
    if (index < 0) index = 114
    setBackgroundIndex(index)
  }

  function toggleMusic() {
    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  function handleSignout() {
    const yes = window.confirm('Are you sure you want to quit?')
    if (yes) {
      localStorage.removeItem("token")
      props.history.push('/login')
    }
  }

  return (
    <Theme>
      <Container>
        <Row>
          <Column>
            <InfoBar toggleMusic={toggleMusic} 
                     isPlaying={isPlaying}
                     handleSignout={handleSignout} />
          </Column>
        </Row>

        <Row>
          <Column>
            <Map backgroundIndex={backgroundIndex} 
                 playerData={playerData} />
          </Column>
        </Row>

        <Row>
          <Column width={6}>
            <Feed playerData={playerData} />
          </Column>
          <Column width={6}>
            <Controls switchBackground={switchBackground}
                      setPlayerData={setPlayerData}
                      playerData={playerData} />
          </Column>
        </Row>
      </Container>

      <audio ref={audioRef} src={Arrival} loop={true} />
    </Theme>
  )
}

export default Game;
