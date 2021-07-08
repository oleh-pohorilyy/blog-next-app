import { IAppState } from 'model'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers/root'

const makeStore: MakeStore<Store<IAppState>> = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
}

const wrapper = createWrapper(makeStore, { debug: false })

export { wrapper }
