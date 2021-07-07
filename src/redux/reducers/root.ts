import { combineReducers } from 'redux'

import commentedPostReducer from './commentedPost'
import postsReducer from './posts'

export default combineReducers({
  posts: postsReducer,
  commentedPost: commentedPostReducer,
})
