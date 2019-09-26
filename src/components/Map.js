import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import GridSquare from '../styles/GridSquare';
import BlankSquare from '../styles/BlankSquare';
import axios from '../helpers/axiosWithAuth';

function Map(props) {
  const [grid, setGrid] = useState([])
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedRooms = localStorage.getItem('rooms')

    if (storedRooms) {
      const data = JSON.parse(storedRooms)
      buildGrid(data)
    } else {
      axios().get('https://team-o.herokuapp.com/api/adv/rooms')
        .then(res => {
          localStorage.setItem('rooms', JSON.stringify(res.data));
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        })
    }
  }, [])

  useEffect(() => {
    console.log(`Move to ${props.playerCoord}`)
  }, [props.playerCoord])

  function buildGrid(data) {
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
            columns.push(<Column key={`${i}-${j}`} width={0.5}><BlankSquare key={`blank-${i}-${j}`} blank={true}></BlankSquare></Column>)
          } else {
            columns.push(<Column key={`${i}-${j}`} width={0.5}><GridSquare key={`grid-${i}-${j}`} heading={true}>{j}</GridSquare></Column>)
          }
        }

        rows.push(
          <Row key={`row-${i}`} style={{ justifyContent: 'center', paddingTop: '15px' }}>
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
            columns.push(
              <Column key={`${i}-${j}`} width={0.5}>
                <GridSquare>{room_matrix[i - 1][j - 1] ? room_matrix[i - 1][j - 1].id : ''}</GridSquare>
              </Column>
            )
          }
        }

        rows.push(
          <Row key={`row-${i}`} style={{ justifyContent: 'center', paddingBottom: '15px' }}>
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
            /**
             * Display user's current location
             */

            if (room_matrix[i - 1][j - 1] && room_matrix[i - 1][j - 1].id === 1) { // TODO update check to use player reference
              columns.push(
                <Column key={`${i}-${j}`} width={0.5}>
                  <GridSquare isHere={true}>{room_matrix[i - 1][j - 1] ? room_matrix[i - 1][j - 1].id : ''}</GridSquare>
                </Column>
              )
            } else {
              columns.push(
                <Column key={`${i}-${j}`} width={0.5}>
                  <GridSquare>{room_matrix[i - 1][j - 1] ? room_matrix[i - 1][j - 1].id : ''}</GridSquare>
                </Column>
              )
            }
          }
        }

        rows.push(
          <Row key={`row-${i}`} style={{ justifyContent: 'center' }}>
            {columns}
          </Row>
        )
      }
    }

    setGrid(rows)
    setIsLoading(false)
  }

  return (
    <div>
      {isloading ? 'Loading...' : grid}
    </div>
  )
}

export default Map;
