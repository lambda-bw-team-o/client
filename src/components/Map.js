import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import GridSquare from '../styles/GridSquare';
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
      <Row style={{ justifyContent: 'center', padding: '10px' }}>
        <Column width={0.5}>a</Column>
        <Column width={0.5}>b</Column>
        <Column width={0.5}>c</Column>
        <Column width={0.5}>d</Column>
        <Column width={0.5}>e</Column>
        <Column width={0.5}>f</Column>
        <Column width={0.5}>g</Column>
        <Column width={0.5}>h</Column>
        <Column width={0.5}>i</Column>
        <Column width={0.5}>j</Column>
        <Column width={0.5}>k</Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center', paddingBottom: '15px' }}>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
        <Column width={0.5}><GridSquare></GridSquare></Column>
      </Row>
    </div>
  )
}

export default Map;
