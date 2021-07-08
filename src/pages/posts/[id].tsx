import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState, ICommentedPost } from 'model'
import { NextPage, NextPageContext } from 'next'
import { wrapper } from 'redux/store'
import { getPost } from 'redux/thunks/posts'
import { MainLayout } from 'src/layouts'

interface PostProps {
  postId: string
}

const Post: NextPage<PostProps> = ({ postId }) => {
  const dispatch = useDispatch()
  const post = useSelector<IAppState, ICommentedPost | null>((state) => {
    return state.commentedPost.item
  })

  useEffect(() => {
    if (post != null) return
    dispatch(getPost(postId))
  }, [dispatch, post, postId])

  if (post == null) return <>Loading...</>
  return (
    <MainLayout>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
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
