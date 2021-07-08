import _ from 'lodash'
import { ICommentedPost, IAction } from 'model'
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'

function item(
  state: ICommentedPost | null = null,
  action: IAction
): ICommentedPost | null {
  switch (action.type) {
    case HYDRATE: {
      const a = { ...state, ...action.payload.commentedPost.item }
      return _.isEmpty(a) ? null : a
    }
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
