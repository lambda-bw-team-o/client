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

        <Row>
          <Column>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim arcu vel mauris tincidunt semper. Nullam interdum libero eget pellentesque varius. Etiam sit amet nisi scelerisque, interdum ligula at, elementum purus. Cras elit purus, sagittis ut commodo eu, pharetra vitae tellus. Integer in lectus egestas, sodales lacus sit amet, hendrerit eros. Aliquam egestas, ante quis hendrerit tristique, augue leo convallis ligula, id tincidunt sem tortor vitae elit. Cras vitae condimentum nunc, non ultricies lectus. Praesent suscipit auctor cursus. Aenean eget imperdiet odio, a sollicitudin nisi. Cras interdum sagittis elit a dictum. In pretium, neque sed eleifend porttitor, metus turpis laoreet nunc, eget ullamcorper ex ligula ac ligula. Duis ac tempor metus. Pellentesque id augue in est tempus euismod eget sed mi. Ut mollis bibendum eleifend. Vestibulum massa mi, tempus quis interdum quis, fermentum id felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </Column>
        </Row>

        <Row>
          <Column width={12}>
            <p>Vivamus non maximus diam. Suspendisse maximus lacus orci, eu laoreet magna faucibus hendrerit. Nullam rhoncus metus eu consequat facilisis. Sed cursus egestas leo et sollicitudin. Nam blandit rhoncus metus quis sollicitudin. Aliquam placerat blandit ligula, vel vulputate enim blandit ut. Aenean laoreet purus velit, vitae varius libero auctor et. Donec ullamcorper ligula sed justo consectetur ullamcorper. Suspendisse pulvinar ipsum pretium ipsum tempor consectetur. Duis tristique, eros ac mattis bibendum, tellus orci laoreet nunc, a viverra ante tellus sit amet mauris. Cras finibus velit ac dui consectetur dapibus. Sed nec pretium mauris. Nullam sodales dolor dui, imperdiet convallis mi porttitor a. Vivamus consectetur ullamcorper interdum.</p>
          </Column>
        </Row>

        <Row>
          <Column width={3} spacing={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo192.png" width="60px" height="60px" alt="Avatar" style={{ borderRadius: '50%', margin: '10px' }}></img>
            Andy Bettisworth
          </Column>
          <Column width={3} spacing={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo192.png" width="60px" height="60px" alt="Avatar" style={{ borderRadius: '50%', margin: '10px' }}></img>
            Arron Marshall
          </Column>
          <Column width={3} spacing={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo192.png" width="60px" height="60px" alt="Avatar" style={{ borderRadius: '50%', margin: '10px' }}></img>
            Josh Timmons
          </Column>
          <Column width={3} spacing={2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/logo192.png" width="60px" height="60px" alt="Avatar" style={{ borderRadius: '50%', margin: '10px' }}></img>
            Rogelio Caballero
          </Column>
        </Row>

        <Row>
          <Column width={12} style={{ backgroundColor: '#909090', display: 'flex', padding: '10px', marginTop: '10px'}}>
            <img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="60px" height="60px" alt="GitHub Logo"/>
            <p style={{color: '#000', marginLeft: '10px'}}>
              <a href="https://github.com/lambda-bw-team-o">Open Source on GitHub</a>
            </p>
          </Column>
        </Row>
      </Container>
    </Theme>
  )
}

export default Landing;
