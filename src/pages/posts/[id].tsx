import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Container, Preloader } from 'common'
import { IAppState, IPost } from 'model'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import { postActions } from 'redux/actions'
import { wrapper } from 'redux/store'
import { getPost } from 'redux/thunks/posts'
import { MainLayout } from 'src/layouts'

interface PostProps {
  postId: string
}

const Post: NextPage<PostProps> = ({ postId }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const post = useSelector<IAppState, IPost | null>((state) => {
    return state.post.item
  })

  useEffect(() => {
    if (post == null) {
      dispatch(getPost(postId))
    }

    return () => {
      dispatch(postActions.reset())
    }
  }, [])

  return (
    <MainLayout>
      <Container>
        {post == null ? (
          <Preloader />
        ) : (
          <>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <Button onClick={() => router.push('/')}>Back</Button>
          </>
        )}
      </Container>
    </MainLayout>
  )
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = wrapper.getInitialPageProps(
  (store) => async (ctx: PostNextPageContext) => {
    if (!ctx.req) {
      return { postId: ctx.query.id }
    }
    const action = getPost(ctx.query.id)
    await action(store.dispatch, store.getState, null)
  }
)

export default Post
