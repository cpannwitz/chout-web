import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

import { syncErrorCatch } from './Middlewares.rdx'

// create the redux store
const reduxStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(syncErrorCatch, thunkMiddleware)))

  // enable Webpack HotModuleReload in development env or smth else, replacing the reducers on change
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default reduxStore
