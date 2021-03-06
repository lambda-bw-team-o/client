import React, { useState, useEffect }from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import DataFeed from '../styles/DataFeed';
import Type from './Type';
import axios from '../helpers/axiosWithAuth';
// import subsbcribeToChannel from '../helpers/Pusher';

function Feed() {
  const [data, setData] = useState([""])
  
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
      }).catch(error => {
        console.error(error);
        const fakeInitData = JSON.parse('{"uuid": "649a2994-b84c-4ad0-95f6-92fb0d04634e", "name": "fooosicle", "title": "Stiy", "description": "Stiy is an irradiated planet, with roaring nuclear wind", "players": ["testuser", "wurde", "test1", "arronm", "test2", "test22", "test24", "test26", "test23", "test30", "test50", "joe", "carol", "bob", "jac", "rogeret", "rogino", "foosicle", "dgdfgdfg", "test12345", "sdgsc", "rogerno", "sdfcsedfgwe", "gdsgvcxs", "sdagegxvedr", "Taz"]}')
        addInitData(
          fakeInitData.name,
          fakeInitData.title,
          fakeInitData.description,
          fakeInitData.players,
        )
      })

    // const channel = subsbcribeToChannel(`p-channel-${fakeInitData.uuid}`)
    // channel.bind('message', data => {
    //   addData(data)
    // });
  }, [])

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
