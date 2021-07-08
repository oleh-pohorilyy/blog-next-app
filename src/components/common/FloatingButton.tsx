import styled from 'styled-components'

const StyledFloatingButton = styled.div`
  font-size: 35px;
  font-family: 'Roboto', sans-serif;
  line-height: 50px;
  text-align: center;
  user-select: none;
  background-color: #ffffff;
  color: #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: #d5d5d5;
  }

  &:active {
    background-color: #a5a5a5;
  }
`

interface FloatingButtonProps {
  char: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ char }) => {
  return <StyledFloatingButton>{char}</StyledFloatingButton>
}

export { FloatingButton }
