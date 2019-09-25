import React, { useState, useRef } from 'react';
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

const Game = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

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
      <NavBar/>

      <Theme>
        <Container>
          <Row>
            <Column><InfoBar toggleMusic={toggleMusic} isPlaying={isPlaying} /></Column>
          </Row>

          <Row>
            <Column>
              <Map />
            </Column>
          </Row>

          <Row>
            <Column width={6}><Feed /></Column>
            <Column width={6}><Controls /></Column>
          </Row>
        </Container>
      </Theme>

      <audio ref={audioRef} src={Arrival} loop={true} />
    </>
  )
}

export default Game;
