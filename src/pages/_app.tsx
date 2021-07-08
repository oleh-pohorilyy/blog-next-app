import type { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { wrapper } from 'redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.JS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
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
