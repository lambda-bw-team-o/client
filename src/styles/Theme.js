import styled from 'styled-components';

const Theme = styled.div`
  height: 100%;
  background-color: #212121;
  color: #FFF;
  background-image: url(${(props) => require(`../assets/images/backgrounds/${props.backgroundIndex}.jpg`) });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  *, ::after, ::before {
    box-sizing: border-box;
  }

  a {
    color: #0000FF;
  }
`

export default Theme;
