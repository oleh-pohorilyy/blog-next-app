import { Header, Surface } from 'common'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const Main = styled.main`
  flex-grow: 1;
  overflow: hidden;
`

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Surface>
        <Header>Next Blog</Header>
      </Surface>

      <Main>{children}</Main>
    </>
  )
}
