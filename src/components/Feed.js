import React, { useState, useEffect }from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
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
      initData.push(<p>All systems ready captain <b>{playerName}</b>!</p>)
    }
    if (playerRoomTitle) {
      initData.push(<p>Our current location is <b>{playerRoomTitle}</b>.</p>)
    }
    if (playerRoomDescription) {
      initData.push(<p>{playerRoomDescription}.</p>)
    }
    if (roomPlayers && props.roomPlayers.length > 0) {
      initData.push(<p>We've detected {props.roomPlayers.length} other ships in this area. Their call signs are: <b>{props.roomPlayers.join(', ')}</b></p>)
    }

    setData(initData)
  }, [playerName])

  // setData(data.concat(<p>Test {data.length + 1}</p>))
  
  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px' }}>
        <DataFeed>
          {data}
          <Type strings={data} speed={40} />
        </DataFeed>
      </Column>
    </Row>
  )
}

export default Feed;
