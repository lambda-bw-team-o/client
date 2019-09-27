import React, { useState, useEffect, useRef } from 'react';
import InfoBar from '../components/InfoBar';
import Map from '../components/Map';
import Messages from '../components/Messages';
import Map2 from '../components/Map2';
import Feed from '../components/Feed';
import Controls from '../components/Controls';
import Container from '../styles/Container';
import Theme from '../styles/Theme';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Arrival from '../assets/audio/arrival-audio.mp3';
import axios from '../helpers/axiosWithAuth';
import Score from '../components/Score';
import CombatButton from '../components/CombatButton';
import Players from '../components/Players';
// import Chat from '../components/Chat';

const Game = (props) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerData, setPlayerData] = useState(null)
  const [uuid, setUuid] = useState('')
  const [score, setScore] = useState(0)
  const [health, setHealth] = useState(1)
  const [target, setTarget] = useState({ id: 0, name: ''})
  const [cloaked, setCloaked] = useState(null)
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

  useEffect(() => {
    if (playerData && playerData.uuid) {
      setUuid(playerData.uuid);
    }
    if (playerData && playerData.combat.score) {
      setScore(playerData.combat.score)
    }
    if (playerData && playerData.combat.cloaked !== undefined) {
      setCloaked(playerData.combat.cloaked);
    }
    if (playerData && playerData.combat.health !== undefined) {
      setHealth(playerData.combat.health)
    }
  }, [playerData]);

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

  const handleCloak = (data, error=false) => {
    console.log(data);

    if (!error) {
      setCloaked(!cloaked)
    }
  }

  const handleTarget = (id, name) => {
    setTarget({id, name});
  }

  return (
    <Theme>
      <Container>
        <Row>
          <Column>
            <InfoBar
              toggleMusic={toggleMusic} 
              isPlaying={isPlaying}
              handleSignout={handleSignout}
              health={health}
            />
          </Column>
        </Row>

        <Row>
          <Column width={10}>
            <Map2 backgroundIndex={backgroundIndex} 
                 playerData={playerData} />
          </Column>
          <Column width={2}>
            <Score score={score} />
            <Players playerData={playerData} handleTarget={handleTarget} />
          </Column>
        </Row>

        <Row>
          <Column width={6}>
            <Feed playerData={playerData} />
          </Column>
          <Column width={4}>
            <Controls switchBackground={switchBackground}
                      setPlayerData={setPlayerData}
                      playerData={playerData} />
          </Column>
          <Column width={2}>
            { health <= 0 && <CombatButton action="respawn" name="Respawn" callback={(data) => console.log(data)} />}
            { target.id > 0 && <CombatButton action="attack" target={target.id} name={`Attack: ${target.name}`} callback={(data) => console.log(data)} />}
            { cloaked !== null && <CombatButton action="cloak" name={cloaked ? "Decloak" : "Cloak"} callback={handleCloak} /> }
          </Column>
        </Row>
      </Container>

      <audio ref={audioRef} src={Arrival} loop={true} />
    </Theme>
  )
}

export default Game;
