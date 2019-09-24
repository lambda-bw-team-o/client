import React from 'react';
import NavBar from '../components/NavBar';
import Container from '../styles/Container';
import Theme from '../styles/Theme';

const Landing = () => {
  return (
    <Theme>
      <Container>
        <NavBar />
        <h1>Team-O</h1>
      </Container>
    </Theme>
  )
}

export default Landing;
