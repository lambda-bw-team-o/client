import styled from 'styled-components';

const GridSquare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -3px;
  margin-top: -3px;
  min-width: 40px;
  min-height: 40px;
  font-size: 24px;
  background-color: rgba(0, 0, 0, .5);

  ${props => props.heading ? '' : 
  'border: 3px solid blue;' }
  ${props => props.heading ? 
  'padding: 3px;' : ''}
  ${props => props.heading ? '' :
  'box-shadow: 0 0 8px blue;'}
`

export default GridSquare;
