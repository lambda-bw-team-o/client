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

      function buildGrid(data) {
        const room_matrix = []
        for (let i = 0; i < data.grid.height; i++) {
          room_matrix.push(new Array(data.grid.width))
        }
        const rooms = data.rooms
        for (let i = 0; i < rooms.length; i++) {
          room_matrix[rooms[i].x][rooms[i].y] = rooms[i]
        }
        props.setRoomMatrix(room_matrix)

        let rows = []
        for (let i = 0; i < data.grid.height + 1; i++) {
          if (i === 0) {
            /**
             * Build top row
             */

            let columns = []

            for (let j = 0; j < data.grid.width + 1; j++) {
              if (j === 0) {
                columns.push(<Column key={`${j},${i}`} width={0.5}><BlankSquare key={`blank-${j},${i}`} blank={true}></BlankSquare></Column>)
              } else {
                columns.push(<Column key={`${j},${i}`} width={0.5}><GridSquare key={`grid-${j},${i}`} heading={true}>{j}</GridSquare></Column>)
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
                columns.push(<Column key={`${j},${i}`} width={0.5}><GridSquare heading={true}>{String.fromCodePoint(65 + i - 1)}</GridSquare></Column>)
              } else {
                // <GridSquare>{room_matrix[j-1][i-1] ? `${j},${i} = ${room_matrix[j - 1][i - 1].x + 1},${room_matrix[j - 1][i - 1].y + 1}` : ''}</GridSquare>
                columns.push(
                  <Column key={`${j},${i}`} width={0.5}>
                    <GridSquare>{room_matrix[j - 1][i - 1] ? room_matrix[j - 1][i - 1].id : ''}</GridSquare>
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
                columns.push(<Column key={`${j},${i}`} width={0.5}><GridSquare heading={true}>{String.fromCodePoint(65 + i - 1)}</GridSquare></Column>)
              } else {
                /**
                 * Display user's current location
                 */

                if (props.playerData &&
                  props.playerData.position[0] === j &&
                  props.playerData.position[1] === i) {
                  columns.push(
                    <Column key={`${j},${i}`} width={0.5}>
                      <GridSquare isHere={true}>{room_matrix[j - 1][i - 1] ? room_matrix[j - 1][i - 1].id : ''}</GridSquare>
                    </Column>
                  )
                } else {
                  // <GridSquare>{`${j},${i}`}</GridSquare>
                  // <GridSquare>{room_matrix[j - 1][i - 1] ? `${room_matrix[j - 1][i - 1].x + 1},${room_matrix[j - 1][i - 1].y + 1}` : ''}</GridSquare>

                  columns.push(
                    <Column key={`${j},${i}`} width={0.5}>
                      <GridSquare>{room_matrix[j - 1][i - 1] ? room_matrix[j - 1][i - 1].id : ''}</GridSquare>
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
  }, [props.playerData])

  return (
    <div>
      {isloading ? 'Loading...' : grid}
    </div>
  )
}

export default Map;
