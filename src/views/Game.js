import React, { useState, useEffect, useRef } from 'react';
import InfoBar from '../components/InfoBar';
import Map from '../components/Map';
import Feed from '../components/Feed';
import Controls from '../components/Controls';
import Container from '../styles/Container';
import Theme from '../styles/Theme';
import Row from '../styles/Row';
import Column from '../styles/Column';
import NavBar from '../components/NavBar';
import Arrival from '../assets/audio/arrival-audio.mp3';
import axios from 'axios';

const Game = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerName, setPlayerName] = useState(null)
  const [playerRoomTitle, setPlayerRoomTitle] = useState(null)
  const [playerRoomDescription, setPlayerRoomDescription] = useState(null)
  const [roomPlayers, setRoomPlayers] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem("token")

    setPlayerName('Andy')
    setPlayerRoomTitle('Alsa 178')
    setPlayerRoomDescription('An uninhabited planet. A species of dog is indigenous to this planet.')
    setRoomPlayers(["arronm", "Taz", "joe"])

    // axios.get('https://team-o.herokuapp.com/api/adv/init', { headers: { "Authorization": `Bearer ${token}` } })
    //   .then(res => {
    //     console.log('init', res)
    //   })
    //   .catch(error => {
    //     console.error('init', error);
    //   })
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

  return (
    <>
      <Theme>
        <Container>
          <Row>
            <Column><InfoBar toggleMusic={toggleMusic} isPlaying={isPlaying} /></Column>
          </Row>

          <Row>
            <Column>
              <Map backgroundIndex={backgroundIndex} />
            </Column>
          </Row>

          <Row>
            <Column width={6}>
              <Feed playerName={playerName} 
                    playerRoomTitle={playerRoomTitle}
                    playerRoomDescription={playerRoomDescription} 
                    roomPlayers={roomPlayers} />
            </Column>
            <Column width={6}><Controls switchBackground={switchBackground} /></Column>
          </Row>
        </Container>
      </Theme>

      <audio ref={audioRef} src={Arrival} loop={true} />
    </>
  )
}

export default Game;
