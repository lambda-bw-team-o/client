import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import GridSquare from '../styles/GridSquare';
import BlankSquare from '../styles/BlankSquare';
import axios from 'axios';

function Map(props) {
  const [grid, setGrid] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedData = localStorage.getItem('data')

    if (storedData) {
      const data = JSON.parse(storedData)
      console.log('data', data)

      let rows = []
      for (let i = 0; i < data.grid.height + 1; i++) {
        if (i === 0) {
          /**
           * Build top row
           */

          let columns = []
          
          for (let j = 0; j < data.grid.width + 1; j++) {
            if (j === 0) {
              columns.push(<Column width={0.5}><BlankSquare blank={true}></BlankSquare></Column>)
            } else {
              columns.push(<Column width={0.5}><GridSquare heading={true}>{j}</GridSquare></Column>)
            }
          }
          
          rows.push(
            <Row style={{ justifyContent: 'center', paddingTop: '15px' }}>
              {columns}
            </Row>
          )
        } else if (i === data.grid.height) {
          /**
           * Build last row
           */

          let columns = []
          
          for (let j = 0; j < data.grid.width + 1; j++) {
            if (j === 0) {
              columns.push(<Column width={0.5}><GridSquare heading={true}>{String.fromCodePoint(65 + i - 1)}</GridSquare></Column>)
            } else {
              columns.push(<Column width={0.5}><GridSquare></GridSquare></Column>)
            }
          }
          
          rows.push(
            <Row style={{ justifyContent: 'center', paddingBottom: '15px' }}>
              {columns}
            </Row>
          )
        } else {
          /**
           * Build middle rows
           */

          let columns = []
          
          for (let j = 0; j < data.grid.width + 1; j++) {
            if (j === 0) {
              columns.push(<Column width={0.5}><GridSquare heading={true}>{String.fromCodePoint(65 + i - 1)}</GridSquare></Column>)
            } else {
              columns.push(<Column width={0.5}><GridSquare></GridSquare></Column>)
            }
          }

          rows.push(
            <Row style={{ justifyContent: 'center' }}>
              {columns}
            </Row>
          )
        }        
      }
      setGrid(rows)

      // TODO loop over rooms
        // TODO assign room to it's matrix address x,y

      // for (let i = 0; i < 10; i++) {
      //   images[i] = []
      //   for (let j = 0; j < 10; j++) {
      //     images[i].push(<img src={FloorTile} width="25px" height="25px" alt="Game Tile" style={{ margin: '10px' }}></img>)
      //   }
      //   images[i].push(<br/>)
      // }
    } else {
      axios.get('https://team-o.herokuapp.com/api/adv/rooms', { headers: { "Authorization": `Bearer ${token}` } })
        .then(res => {
          localStorage.setItem('data', JSON.stringify(res.data))
        })
        .catch(error => {
          console.error(error);
        })
    }
  }, [])

  // <div style = {{ backgroundImage: `url(${require(`../assets/images/backgrounds/${props.backgroundIndex}.jpg`)})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }
  return (
    <div>
      {grid}
    </div>
  )
}

export default Map;
