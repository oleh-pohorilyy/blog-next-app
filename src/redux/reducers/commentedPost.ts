import { ICommentedPost, IAction } from 'model'
import { combineReducers } from 'redux'

function item(
  state: ICommentedPost | null = null,
  action: IAction
): ICommentedPost | null {
  switch (action.type) {
    case 'POST/SET':
      return action.payload
    default:
      return state
  }
}

function isFetching(state = false, action: IAction): boolean {
  switch (action.type) {
    case 'POST/TOGGLE_IS_FETCHING':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ item, isFetching })
