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

      const room_matrix = []
      for (let i = 0; i < data.grid.height; i++) {
        room_matrix.push(new Array(data.grid.width))
      }
      const rooms = data.rooms
      for (let i = 0; i < rooms.length; i++) {
        room_matrix[rooms[i].x][rooms[i].y] = rooms[i]
      }

      let rows = []
      for (let i = 0; i < data.grid.height + 1; i++) {
        if (i === 0) {
          /**
           * Build top row
           */

          let columns = []
          
          for (let j = 0; j < data.grid.width + 1; j++) {
            if (j === 0) {
              columns.push(<Column key={`${i}-${j}`} width={0.5}><BlankSquare blank={true}></BlankSquare></Column>)
            } else {
              columns.push(<Column key={`${i}-${j}`} width={0.5}><GridSquare heading={true}>{j}</GridSquare></Column>)
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
              columns.push(<Column key={`${i}-${j}`} width={0.5}><GridSquare heading={true}>{String.fromCodePoint(65 + i - 1)}</GridSquare></Column>)
            } else {
              console.log(`${i}-${j}`)
              columns.push(
                <Column key={`${i}-${j}`} width={0.5}>
                  <GridSquare>{room_matrix[i-1][j-1] ? room_matrix[i-1][j-1].id : ''}</GridSquare>
                </Column>
              )
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
              columns.push(<Column key={`${i}-${j}`} width={0.5}><GridSquare heading={true}>{String.fromCodePoint(65 + i - 1)}</GridSquare></Column>)
            } else {
              console.log(`${i}-${j}`)
              columns.push(
                <Column key={`${i}-${j}`} width={0.5}>
                  <GridSquare>{room_matrix[i-1][j-1] ? room_matrix[i-1][j-1].id : ''}</GridSquare>
                </Column>
              )
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
