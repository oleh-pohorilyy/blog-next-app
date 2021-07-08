import styled from 'styled-components'

interface ContainerProps {
  height?: string
}

const Container = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  height: ${(props) => props.height ?? 'auto'};
  position: relative;
`

export { Container }
