import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
import Type from './Type';
// import subsbcribeToChannel from '../helpers/Pusher';
import Pusher from 'pusher-js';
import axios from '../helpers/axiosWithAuth';

function Feed(props) {
  const [data, setData] = useState([""])
  const [uuid, setUuid] = useState('')
  console.log('feed props:', props)
  
  // console.log('Feed.playerData', props.playerData)

  useEffect(() => {
    const pusher = new Pusher('6d34b01fb0271f6ffac1', {
      cluster: 'us3',
    });
    
    if (props.playerData) {
      setUuid(props.playerData.uuid);
      addInitData(
        props.playerData.name,
        props.playerData.title,
        props.playerData.description,
        props.playerData.players,
      )

      const channel = pusher.subscribe(`p-channel-${props.playerData.uuid}`)
      channel.bind('broadcast', data => {
        addData(data.message)
      });
      pusher.connection.bind( 'error', function( err ) {
        if( err.error.data.code === 4004 ) {
          console.log('>>> detected limit error');
        }
      });
      // TODO listen for combat,..
    }
    return () => {
      pusher.unsubscribe(`p-channel-${uuid}`)
    }
  }, [props.playerData])

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
    setData(oldData => oldData.concat(message))
  }

  const handleSay = async () => {
    try {
      const message = await axios().post('https://team-o.herokuapp.com/api/adv/say', { 'message': 'Hu.. hullo?' });
      console.log(message)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px' }}>
        <DataFeed>
          {data}
          <Type strings={data} speed={40} />
        </DataFeed>
      </Column>
      <button onClick={handleSay}>Test</button>
    </Row>
  )
}

export default Feed;
