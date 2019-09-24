import React from 'react';
import InfoBar from '../components/InfoBar';
import Map from '../components/Map';
import Feed from '../components/Feed';
import Controls from '../components/Controls';
import Container from '../styles/Container';
import Theme from '../styles/Theme';
import Row from '../styles/Row';
import Column from '../styles/Column';

const Game = () => {
  return (
    <Theme>
      <Container>
        <Row>
          <Column><InfoBar /></Column>
        </Row>

        <Row>
          <Column>
            <Map />
          </Column>
        </Row>

        <Row>
          <Column width={6}><Feed /></Column>
          <Column width={6}><Controls /></Column>
        </Row>
      </Container>
    </Theme>
  )
}

export default Game;
