import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
import Pusher from 'pusher-js';
// import Type from './Type';
// import subsbcribeToChannel from '../helpers/Pusher';
import Chat from './Chat';
import axios from '../helpers/axiosWithAuth';

function Feed(props) {
  const [data, setData] = useState([""])
  const [uuid, setUuid] = useState('');
  const [oldRoomTitle, setOldRoomTitle] = useState('')


  useEffect(() => {
    const pusher = new Pusher('6d34b01fb0271f6ffac1', {
      cluster: 'us3',
    });
    
    if (props.playerData) {
      setUuid(props.playerData.uuid);

      const channel = pusher.subscribe(`p-channel-${props.playerData.uuid}`)
      channel.bind('broadcast', res => {
        console.log(data)
        setData(oldData => [
          ...oldData,
          <p key={`messages-${data.length + 2}`}>{res.message}</p>
        ])
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

  useEffect(() => {
    axios().get('https://team-o.herokuapp.com/api/adv/init/')
    .then(res => {
      const messages = []
      
      setOldRoomTitle(res.data.title)
      
      messages.push(<p key='messages-0'>All systems ready captain <b>{res.data.name}</b>!</p>)
      messages.push(<p key='messages-1'>Our current location is <b>{res.data.title}</b>.</p>)
      messages.push(<p key='messages-2'>{res.data.description}</p>)
      if (res.data.players && res.data.players.length > 0) {
        let players = res.data.players.map(p => p.name)
        messages.push(<p key='messages-3'>We've detected {players.length} other ships in this area. Their call signs are: <b>{players.join(', ')}</b></p>)
      }
      
      setData(messages)
    }).catch(error => {
      console.error(error);
    })
    
    // TODO listen for messages
    // const channel = subsbcribeToChannel(`p-channel-${props.playerData.uuid}`)
    // channel.bind('message', data => {
      //   addData(data)
      // });
    }, [])
    
    useEffect(() => {
    const messages = []

    if (props.playerData && oldRoomTitle !== props.playerData.title) {
      messages.push(<p key={`messages-${data.length + 1}`}>Our current location is <b>{props.playerData.title}</b>.</p>)
      messages.push(<p key={`messages-${data.length + 2}`}>{props.playerData.description}</p>)
      if (props.playerData.players && props.playerData.players.length > 0) {
        let players = props.playerData.players.map(p => p.name)
        messages.push(<p key={`messages-${data.length + 3}`}>We've detected {players.length} other ships in this area. Their call signs are: <b>{players.join(', ')}</b></p>)
      }
      setOldRoomTitle(props.playerData.title)
    }
    
    setData(data.concat(messages))
  }, [props.playerData])

  // <Type strings={data} speed={40} />
  return (
    <Row>
      <Column style={{ backgroundColor: '#333', height: '200px' }}>
        <DataFeed>
          {data}
        </DataFeed>
        <Chat />
      </Column>
    </Row>
  )
}

export default Feed;