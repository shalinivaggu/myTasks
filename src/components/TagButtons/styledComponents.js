import styled from 'styled-components'

export const Btn = styled.button`
  border: 1px solid #f3aa4e;
  background-color: ${props => (props.actived ? '#f3aa4e' : 'transparent')};
  color: #ffffff;
  padding: 10px;
  border-radius: 5px 10px;
`
