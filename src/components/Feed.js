import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
import Type from './Type';
import subsbcribeToChannel from '../helpers/Pusher';
import axios from '../helpers/axiosWithAuth';

function Feed(props) {
  const [data, setData] = useState([""])
  const [oldRoomTitle, setOldRoomTitle] = useState('')

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
      </Column>
    </Row>
  )
}

export default Feed;
