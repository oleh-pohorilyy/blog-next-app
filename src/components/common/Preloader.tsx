import styled, { keyframes } from 'styled-components'

const fill = keyframes`
0%{
  width: 0%;
}

50% {
  width: 100%;
}

100%{
  width: 0%;
}
`

const Bar = styled.div`
  height: 5px;
  background-color: #00ffaa;
  animation: ${fill} 2s ease-in-out infinite;
`

export const Preloader: React.FC = () => {
  return <Bar />
}
