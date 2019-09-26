import React, { useState, useEffect }from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Type from './Type';

function Feed(props) {
  const [data, setData] = useState([""])

  const playerName = props.playerName
  const playerRoomTitle = props.playerRoomTitle
  const playerRoomDescription = props.playerRoomDescription
  const roomPlayers = props.roomPlayers
  
  useEffect(() => {
    const initData = []

    if (playerName) {
      initData.push(`All systems ready captain! <b>${playerName}</b>!`)
    }
    if (playerRoomTitle) {
      initData.push(`Our current location is <b>${playerRoomTitle}</b>`)
    }
    if (playerRoomDescription) {
      initData.push(playerRoomDescription)
    }
    if (roomPlayers && props.roomPlayers.length > 0) {
      initData.push(`We've detected {props.roomPlayers.length} other ships in this area. Their call signs are: <b>${props.roomPlayers.join(', ')}</b>`)
    } 

    setData(initData)
  }, [])

  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px', paddingTop: '5px', paddingLeft: '5px' }}>
        <Type strings={data} speed={40} />
      </Column>
    </Row>
  )
}

export default Feed;
