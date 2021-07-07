import { ICommentedPost, IPost } from 'model'

function createPost(payload: { title: string; body: string }) {
  return {
    type: 'POST/CREATE',
    payload,
  } as const
}

function setCommentedPost(payload: ICommentedPost) {
  return {
    type: 'POST/SET',
    payload,
  } as const
}

function togglePostIsFetching(payload: boolean) {
  return {
    type: 'POST/TOGGLE_IS_FETCHING',
    payload,
  } as const
}

function setPosts(payload: Array<IPost>) {
  return {
    type: 'POSTS/SET',
    payload,
  } as const
}

function togglePostsIsFetching(payload: boolean) {
  return {
    type: 'POSTS/TOGGLE_IS_FETCHING',
    payload,
  } as const
}

const postsActions = {
  createPost,
  setCommentedPost,
  setPosts,
  togglePostsIsFetching,
  togglePostIsFetching,
}

export { postsActions }
