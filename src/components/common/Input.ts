import styled from 'styled-components'

const Input = styled.input`
  background: transparent;
  width: 100%;
  color: inherit;
  font: inherit;
  border: 0;
  border-bottom: 1px solid;
  outline: none;
  padding: 8px;
  transition: background-color 0.2s;
  resize: none;

  &:focus {
    background-color: #555555;
  }
`

export { Input }
