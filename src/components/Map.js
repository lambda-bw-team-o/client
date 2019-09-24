import React, { useState, useEffect } from 'react';
import FloorTile from '../assets/health.png';

function Map() {
  const [tiles, setTiles] = useState([[]])

  useEffect(() => {
    let images = []

    for (let i = 0; i < 10; i++) {
      images[i] = []
      for (let j = 0; j < 10; j++) {
        images[i].push(<img src={FloorTile} width="10px" height="10px" alt="Game Tile" style={{ margin: '10px' }}></img>)
      }
      images[i].push(<br/>)
    }

    setTiles(images)
  }, [])

  return (
    <>
      {tiles}
    </>
  )
}

export default Map;
