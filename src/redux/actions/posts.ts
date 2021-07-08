import { IPost } from 'model'

function set(payload: Array<IPost>) {
  return {
    type: 'POSTS/SET',
    payload,
  } as const
}

function reset() {
  return {
    type: 'POSTS/SET',
    payload: [],
  } as const
}

const postsActions = {
  set,
  reset,
}

export { postsActions }
