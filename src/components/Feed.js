import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
import Type from './Type';
import subsbcribeToChannel from '../helpers/Pusher';

function Feed(props) {
  const [data, setData] = useState([""])
  
  // console.log('Feed.playerData', props.playerData)

  // useEffect(() => {
  //   addInitData(
  //     props.playerData.name,
  //     props.playerData.title,
  //     props.playerData.description,
  //     props.playerData.players,
  //   )

  //   const channel = subsbcribeToChannel(`p-channel-${props.playerData.uuid}`)
  //   channel.bind('message', data => {
  //     addData(data)
  //   });
  //   // TODO listen for combat,..
  // }, [])

  const addInitData = (name, title, description, players) => {
    const init = []
    
    init.push(<p key='init-0'>All systems ready captain <b>{name}</b>!</p>)
    init.push(<p key='init-1'>Our current location is <b>{title}</b>.</p>)
    init.push(<p key='init-2'>{description}</p>)
    if (players && players.length > 0) {
      players = players.map(p => p.name)
      init.push(<p key='init-3'>We've detected {players.length} other ships in this area. Their call signs are: <b>{players.join(', ')}</b></p>)
    }
    addData(init)
  }
  
  const addData = (message) => {
    setData(data.concat(message))
  }
  
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
