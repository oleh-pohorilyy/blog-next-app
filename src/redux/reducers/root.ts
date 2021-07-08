import { combineReducers } from 'redux'

import postReducer from './post'
import postsReducer from './posts'

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
})
