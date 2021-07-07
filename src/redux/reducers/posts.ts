import { IPost, IAction } from 'model'
import { combineReducers } from 'redux'

function items(state: Array<IPost> = [], action: IAction): Array<IPost> {
  switch (action.type) {
    case 'POSTS/SET':
      return action.payload
    default:
      return state
  }
}

function isFetching(state = false, action: IAction) {
  switch (action.type) {
    case 'POSTS/TOGGLE_IS_FETCHING':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ items, isFetching })
