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

function resetCommentedPost() {
  return {
    type: 'POST/SET',
    payload: null,
  } as const
}

function setPosts(payload: Array<IPost>) {
  return {
    type: 'POSTS/SET',
    payload,
  } as const
}

function resetPosts() {
  return {
    type: 'POSTS/SET',
    payload: [],
  } as const
}

const postsActions = {
  createPost,
  setCommentedPost,
  resetCommentedPost,
  setPosts,
  resetPosts,
}

export { postsActions }
