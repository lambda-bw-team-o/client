import styled from 'styled-components';

function calc_width(n) {
  if (n) {
    n = (n / 12) * 100
    if (n < 0) n = 0
    if (n > 100) n = 100
    return `${n}%`
  } else {
    return '100%'
  }
}

function calc_spacing(n) {
  if (n <= 0) return
  return `padding: ${n * 4}px;`
}

const Column = styled.div`
  flex: 0 0 ${props => calc_width(props.width)};
  max-width: ${props => calc_width(props.width)};
  ${props => calc_spacing(props.spacing)}
`

export default Column;
