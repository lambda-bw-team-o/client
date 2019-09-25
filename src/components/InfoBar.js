import React, { useState } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Heart from '../assets/images/interface/health.png';
import PlayBtn from '../assets/images/interface/play-btn.png';
import PauseBtn from '../assets/images/interface/pause-btn.png';

function InfoBar(props) {
  const [health, setHealth] = useState(5)
  let healthIndicator = []

  for (let i = 0; i < health; i++) {
    healthIndicator.push(<img src={Heart} width="60px" height="60px" alt="Health" style={{ margin: '10px' }}></img>)
  }

  return (
    <Row>
      <Column width={10}>
        {healthIndicator}
      </Column>

      <Column width={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={props.toggleMusic} style={{ backgroundColor: 'inherit', border: 'inherit', outline: 'none' }}>
          <img src={props.isPlaying ? PauseBtn : PlayBtn} width="60px" height="60px" alt="Play Button" />
        </button>
      </Column>
    </Row>
  )
}

export default InfoBar;
