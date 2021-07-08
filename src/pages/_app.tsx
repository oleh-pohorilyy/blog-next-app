import { ToastContainer } from 'react-toastify'

import type { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from 'redux/store'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*, *::after, *::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #131313;
  color: #ffffff;
}

#__next {
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }: AppContext) => {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
        },
        pathname: ctx.pathname,
      }
    }
)

export default wrapper.withRedux(MyApp)
