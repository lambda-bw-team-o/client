import React from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';

function Feed(props) {
  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px', paddingTop: '5px', paddingLeft: '5px' }}>
        <h3 style={{ marginTop: '0px' }}>Feed</h3>

        {props.playerName ? <p>All systems ready captain {props.playerName}!</p> : ''}
        {props.playerRoomTitle ? <p>Our current location is {props.playerRoomTitle}</p> : ''}
        {props.playerRoomDescription ? <p>{props.playerRoomDescription}</p> : ''}
      </Column>
    </Row>
  )
}

export default Feed;
