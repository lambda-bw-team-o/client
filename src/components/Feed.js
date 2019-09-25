import React from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Text from '../styles/Text';

function Feed(props) {
  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px', paddingTop: '5px', paddingLeft: '5px' }}>
        {props.playerName ? <p>All systems ready captain <Text.BoldWhite>{props.playerName}</Text.BoldWhite>!</p> : ''}
        {props.playerRoomTitle ? <p>Our current location is <Text.BoldWhite>{props.playerRoomTitle}</Text.BoldWhite></p> : ''}
        {props.playerRoomDescription ? <p>{props.playerRoomDescription}</p> : ''}
        {props.roomPlayers && props.roomPlayers.length > 0 ? <p>We've detected {props.roomPlayers.length} other ships in this area. Their call signs are: <Text.BoldWhite>{props.roomPlayers.join(', ')}</Text.BoldWhite></p> : ''}
      </Column>
    </Row>
  )
}

export default Feed;
