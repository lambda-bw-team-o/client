import React, { useState } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Heart from '../assets/images/interface/health.png';
import PlayBtn from '../assets/images/interface/play-btn.png';
import PauseBtn from '../assets/images/interface/pause-btn.png';
import SignoutBtn from '../assets/images/interface/signout.png';

function InfoBar(props) {
  const [health, setHealth] = useState(5)
  let healthIndicator = []

  for (let i = 0; i < health; i++) {
    healthIndicator.push(<img key={i} src={Heart} width="30px" height="30px" alt="Health" style={{ margin: '10px' }}></img>)
  }

  return (
    <Row>
      <Column width={10} style={{ display: 'flex', alignItems: 'flex-end' }}>
        {healthIndicator}
      </Column>

      <Column width={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <button onClick={props.toggleMusic} style={{ backgroundColor: 'inherit', border: 'inherit', outline: 'none', cursor: 'pointer' }}>
          <img src={props.isPlaying ? PauseBtn : PlayBtn} width="30px" height="30px" alt="Play Button" />
        </button>

        <button onClick={props.handleSignout} style={{ backgroundColor: 'inherit', border: 'inherit', outline: 'none', cursor: 'pointer' }}>
          <img src={SignoutBtn} width="30px" height="30px" alt="Signout Button" />
        </button>
      </Column>
    </Row>
  )
}

export default InfoBar;
