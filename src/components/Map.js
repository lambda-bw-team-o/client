import React, { useState, useEffect } from 'react';
import FloorTile from '../assets/images/interface/health.png';

function Map(props) {
  const [tiles, setTiles] = useState([[]])

  useEffect(() => {
    let images = []

    for (let i = 0; i < 10; i++) {
      images[i] = []
      for (let j = 0; j < 10; j++) {
        images[i].push(<img src={FloorTile} width="25px" height="25px" alt="Game Tile" style={{ margin: '10px' }}></img>)
      }
      images[i].push(<br/>)
    }

    setTiles(images)
  }, [])

  return (
    <div style={{ backgroundImage: `url(${require(`../assets/images/backgrounds/${props.backgroundIndex}.jpg`)})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
      {tiles}
    </div>
  )
}

export default Map;
