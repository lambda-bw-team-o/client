import React, { useState, useEffect }from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Text from '../styles/Text';
import Type from './Type';

function Feed(props) {
  const [data, setData] = useState([
    `All systems ready captain <b>{props.playerName}</b>!`,
    `Our current location is <b>{props.playerRoomTitle}</b>.`,
    `<b>{props.playerRoomDescription}</b>`
  ])
  
  useEffect(() => {
    let initData = []
    
    // if (props.playerName) initData.push(`All systems ready captain! <b>${props.playerName}</b>!`)
    // if (props.playerRoomTitle) initData.push('Our current location is <Text.BoldWhite>{props.playerRoomTitle}</Text.BoldWhite>
    // if (props.playerRoomDescription ? initData.push(props.playerRoomDescription)
    // if (props.roomPlayers && props.roomPlayers.length > 0 ? <p id="#text-4">We've detected {props.roomPlayers.length} other ships in this area. Their call signs are: <Text.BoldWhite>{props.roomPlayers.join(', ')}</Text.BoldWhite></p> 

    setData(initData)
  }, [])

  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px', paddingTop: '5px', paddingLeft: '5px' }}>
        <p><Type strings={data} speed={40} /></p>
      </Column>
    </Row>
  )
}

export default Feed;
