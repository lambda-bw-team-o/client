import React, { useState } from 'react';
import Heart from '../assets/images/health.png';

function InfoBar() {
  const [health, setHealth] = useState(5)
  let healthIndicator = []

  for (let i = 0; i < health; i++) {
    healthIndicator.push(<img src={Heart} width="60px" height="60px" alt="Health" style={{ margin: '10px' }}></img>)
  }

  return (
    <div>
      {healthIndicator}
    </div>
  )
}

export default InfoBar;
