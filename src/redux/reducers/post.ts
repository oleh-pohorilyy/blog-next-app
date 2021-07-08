import _ from 'lodash'
import { IAction, IPost } from 'model'
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'

function item(state: IPost | null = null, action: IAction): IPost | null {
  switch (action.type) {
    case HYDRATE: {
      const a = { ...state, ...action.payload.post.item }
      return _.isEmpty(a) ? null : a
    }
    case 'POST/SET':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({ item })
