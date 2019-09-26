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
import subsbcribeToChannel from '../helpers/Pusher';
import axios from 'axios';

const Game = (props) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerName, setPlayerName] = useState(null)
  const [playerRoomTitle, setPlayerRoomTitle] = useState(null)
  const [playerRoomDescription, setPlayerRoomDescription] = useState(null)
  const [roomPlayers, setRoomPlayers] = useState(null)
  const [playerCoord, setPlayerCoord] = useState([11,11])
  const [channel, setChannel] = useState(null)
  const audioRef = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem("token")

    // axios.get('https://team-o.herokuapp.com/api/adv/initialize', {
    //   headers: { "Authorization": `Bearer ${token}`}
    // }).then(res => {
    //   console.log('init', res)
    //   setPlayerName(res.data.name)
    //   setPlayerRoomTitle(res.data.title)
    //   setPlayerRoomDescription(res.data.description)
    //   setRoomPlayers(res.data.players)
    // }).catch(error => {
    //   console.error(error);
    // })

    const fakeInitData = JSON.parse('{"uuid": "649a2994-b84c-4ad0-95f6-92fb0d04634e", "name": "fooosicle", "title": "Stiy", "description": "Stiy is an irradiated planet, with roaring nuclear wind", "players": ["testuser", "wurde", "test1", "arronm", "test2", "test22", "test24", "test26", "test23", "test30", "test50", "joe", "carol", "bob", "jac", "rogeret", "rogino", "foosicle", "dgdfgdfg", "test12345", "sdgsc", "rogerno", "sdfcsedfgwe", "gdsgvcxs", "sdagegxvedr", "Taz"]}')
    setPlayerName(fakeInitData.name)
    setPlayerRoomTitle(fakeInitData.title)
    setPlayerRoomDescription(fakeInitData.description)
    setRoomPlayers(fakeInitData.players)

    setChannel(subsbcribeToChannel(`p-channel-${fakeInitData.uuid}`))
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
                 playerCoord={playerCoord} />
          </Column>
        </Row>

        <Row>
          <Column width={6}>
            <Feed playerName={playerName} 
                  playerRoomTitle={playerRoomTitle}
                  playerRoomDescription={playerRoomDescription} 
                  roomPlayers={roomPlayers} />
          </Column>
          <Column width={6}>
            <Controls switchBackground={switchBackground} 
                      setPlayerCoord={setPlayerCoord} 
                      playerCoord={playerCoord} />
          </Column>
        </Row>
      </Container>

      <audio ref={audioRef} src={Arrival} loop={true} />
    </Theme>
  )
}

export default Game;
