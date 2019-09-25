import React from 'react';
import NavBar from '../components/NavBar';
import Container from '../styles/Container';
import Row from '../styles/Row';
import Column from '../styles/Column';
import Theme from '../styles/Theme';

const Landing = () => {
  return (
    <Theme>
      <Container>
        <NavBar />

        <h1>Team-O</h1>

        
          <Column width={12} style={{ backgroundColor: '#909090', display: 'flex', padding: '10px', marginTop: '10px'}}>
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="60px" height="60px" alt="GitHub Logo"/>
            <p style={{color: '#000', marginLeft: '10px'}}>
              <a href="https://github.com/lambda-bw-team-o">Open Source on GitHub</a>
            </p>
          </Column>
      </Container>
    </Theme>
  )
}

export default Landing;
