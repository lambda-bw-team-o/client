import React, { useState, useEffect } from 'react';
import Row from '../styles/Row';
import Column from '../styles/Column';
import GridSquare from '../styles/GridSquare';
import BlankSquare from '../styles/BlankSquare';
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

  // <div style = {{ backgroundImage: `url(${require(`../assets/images/backgrounds/${props.backgroundIndex}.jpg`)})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }
  return (
    <div>
      <Row style={{ justifyContent: 'center', paddingTop: '15px' }}>
        <Column width={0.5}><BlankSquare blank={true}></BlankSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>1</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>2</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>3</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>4</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>5</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>6</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>7</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>8</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>9</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>10</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>11</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>12</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>13</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>14</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>15</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>16</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>17</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>18</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>19</GridSquare></Column>
        <Column width={0.5}><GridSquare heading={true}>20</GridSquare></Column>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Column width={0.5}><GridSquare heading={true}>A</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>B</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>C</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>D</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>E</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>F</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>G</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>H</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>I</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>J</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>K</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>L</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>M</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>N</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>O</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>P</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>Q</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>R</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>T</GridSquare></Column>
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
        <Column width={0.5}><GridSquare heading={true}>U</GridSquare></Column>
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
