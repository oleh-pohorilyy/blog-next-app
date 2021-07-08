import styled from 'styled-components'

import { Container } from './Container'

const ScrollContainer = styled(Container)`
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari and Opera */
  }
`

export { ScrollContainer }
