import React, {useState, useEffect} from 'react';
import axios from '../helpers/axiosWithAuth';

const Map = ({ playerData }) => {
  const [rooms, setRooms] = useState([])
  const [grid, setGrid] = useState([])
  const [matrix, setMatrix] = useState([])

  useEffect(() => {
    const getRooms = async () => {
      try {
        if (localStorage.getItem('rooms')) {
          setRooms(JSON.parse(localStorage.getItem('rooms')).rooms);
          setGrid(JSON.parse(localStorage.getItem('rooms')).grid);
        } else {
          let { data } = await axios().get('https://team-o.herokuapp.com/api/adv/rooms');
          if (data) {
            localStorage.setItem('rooms', JSON.stringify(data));
            setRooms(data.rooms);
            setGrid(data.grid)
          }
        }
      } catch (error) {
        console.log('err', error)
      }
    }

    getRooms()
  }, []);

  // Create our map when rooms is updated
  useEffect(() => {
    console.log('playerData:', playerData)
    if(rooms.length === 0) {
      return
    }

    const room_matrix = []

    for (let i = 0; i < grid.height + 1; i++) {
      room_matrix.push(new Array(grid.width).fill(0))
    }

    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];
      if (playerData && room.x === playerData.position[0] && room.y === playerData.position[1]) {
        room.here = true;
      } else {
        room.here = false;
      }
      room_matrix[rooms[i].y][rooms[i].x] = room
    }

    // reverse our matrix so it prints correctly
    room_matrix.reverse()
    
    let rows = [];
    room_matrix.forEach((row) => {
      let cols = row.map(room => <span style={{
        // border: "1px solid red",
        backgroundColor: room.here ? "rgba(255, 255, 255, 1)" : (room.safe ? "rgba(144, 238, 144, 0.4)" : "rgba(0, 0, 0, 0.4)"),
        color: room.here ? "black" : "white",
        width: "40px",
        height: "40px",
        display: "inline-block",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 3px",
        position: "relative",
        border: room.safe ? "2px solid lightgreen" : "0"
      }}>
        <span style={{
          display: room.n_to > 0 ? "inline" : "none",
          position: "absolute",
          top: "-12px",
          zIndex: "1",
          width: "2px",
          height: "18px",
          background: "white"
        }}></span>
        {room.id}
        <span style={{
          display: room.e_to > 0 ? "inline" : "none",
          position: "absolute",
          right: "-11px",
          zIndex: "1",
          width: "18px",
          height: "2px",
          background: "white"
        }}></span>
      </span>);

      rows.push(<div class="row" style={{ display: "flex", margin: "3px 0" }}>{cols}</div>)
    });

    setMatrix(rows)

  }, [rooms, playerData]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: '20px' }} className="matrix">
      {
        matrix
      }
    </div>
  )
}

export default Map;
