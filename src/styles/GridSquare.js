import styled from 'styled-components';

const GridSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.heading ? '' : 
  'border: 3px solid blue;' }
  margin-left: -3px;
  margin-top: -3px;
  min-width: 40px;
  min-height: 40px;
  font-size: 24px;
  background-color: rgba(0, 0, 0, .5);
  ${props => props.heading ? 
  'padding: 3px;' : ''}
`

export default GridSquare;
