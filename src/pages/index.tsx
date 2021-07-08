import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState, IPost } from 'model'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { wrapper } from 'redux/store'
import { getPosts } from 'redux/thunks/posts'
import { MainLayout } from 'src/layouts'

const LatestPosts: NextPage = () => {
  const dispatch = useDispatch()
  const posts = useSelector<IAppState, Array<IPost>>((state) => {
    return state.posts.items
  })

  useEffect(() => {
    if (posts.length != 0) return
    dispatch(getPosts())
  }, [posts, dispatch])

  return (
    <MainLayout>
      {posts.map((e) => (
        <Link href="/posts/[id]" as={`/posts/${e.id}`} key={e.id}>
          <div style={{ marginBottom: '20px', background: '#999999' }}>
            <div>{e.title}</div>
            <div>{e.body}</div>
          </div>
        </Link>
      ))}
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
