import React, { useState, useEffect }from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
import Type from './Type';
import axios from '../helpers/axiosWithAuth';
// import subsbcribeToChannel from '../helpers/Pusher';

import Pusher from 'pusher-js';



function Feed(props) {
  const [data, setData] = useState([""])
  const [message,setMessages] = useState("")
  const [messageFeed,setMessageFeed] =useState([])
  const [player,setPlayer] = useState("")
  
  useEffect(() => {
    axios().get('https://team-o.herokuapp.com/api/adv/init/')
      .then(res => {
        console.log('init', res)
        addInitData(
          res.data.name,
          res.data.title,
          res.data.description,
          res.data.players,
          )

          const socket = new Pusher('6d34b01fb0271f6ffac1', {
            cluster: 'us3',
            });
  
          if(res.data.players.length > 0){
          setMessages(
             `${res.data.name} has entered the game`
          )
          }
         
          const channel = socket.subscribe(`p-channel${res.data.uuid}`)
          channel.bind('message', data => {
            
        })
      }).catch(error => {
        console.error(error);
      })

    
  }, [])



  // say = message => {
    

  //   return axios
  //     .post(
  //       mudAddress + "https://team-o.herokuapp.com/api/adv/say/",
  //       { message, room: currentRoom.id.toString() },
  //     )
  //     .then(data => {
  //       messageFeed.push({ message, player });
  //       return true;
  //     })
  //     .catch(err => {
  //       throw err;
  //     });
  // };



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
          {message}
          <Type strings={data} speed={40} />
        </DataFeed>
      </Column>
    </Row>
  )
}

export default Feed;
