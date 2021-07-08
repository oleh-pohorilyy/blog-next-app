import styled from 'styled-components'

const Button = styled.div`
  display: inline-block;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  padding: 8px 16px;

  &:hover {
    background-color: #d5d5d5;
  }

  &:active {
    background-color: #a5a5a5;
  }
`

export { Button }
