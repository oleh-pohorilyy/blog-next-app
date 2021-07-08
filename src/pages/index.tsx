import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Post,
  ScrollContainer,
  Container,
  FloatingButton,
  UnstyledLink,
  Preloader,
} from 'common'
import { IAppState, IPost } from 'model'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { postsActions } from 'redux/actions'
import { wrapper } from 'redux/store'
import { getPosts } from 'redux/thunks/posts'
import { MainLayout } from 'src/layouts'

const LatestPosts: NextPage = () => {
  const dispatch = useDispatch()
  const posts = useSelector<IAppState, Array<IPost>>((state) => {
    return state.posts.items
  })

  useEffect(() => {
    if (posts.length == 0) {
      dispatch(getPosts())
    }

    return () => {
      dispatch(postsActions.reset())
    }
  }, [])

  return (
    <MainLayout>
      <Container height="100%">
        <ScrollContainer>
          {posts.length == 0 ? (
            <Preloader />
          ) : (
            <>
              {posts.map((post) => (
                <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
                  <UnstyledLink>
                    <Post title={post.title} body={post.body} cutLength={40} />
                  </UnstyledLink>
                </Link>
              ))}
            </>
          )}
        </ScrollContainer>

        <Link href="/posts/new">
          <a>
            <FloatingButton char={'+'} />
          </a>
        </Link>
      </Container>
    </MainLayout>
  )
}

LatestPosts.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (ctx: NextPageContext) => {
    if (!ctx.req) return
    await getPosts()(store.dispatch, store.getState, null)
  }
)

export default LatestPosts
