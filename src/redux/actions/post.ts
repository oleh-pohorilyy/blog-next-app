import { IPost } from 'model'

function set(payload: IPost) {
  return {
    type: 'POST/SET',
    payload,
  } as const
}

function reset() {
  return {
    type: 'POST/SET',
    payload: null,
  } as const
}

const postActions = {
  set,
  reset,
}

export { postActions }
