import React from 'react';
import NavBar from '../components/NavBar.js';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

const Landing = () => {
  return (
    <Container>
      <NavBar />
      <h1>Team-O</h1>
    </Container>
  )
}

export default Landing;
