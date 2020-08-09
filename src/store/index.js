
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@/store/reducers/index'
// import { logger, /* router, */ reduxRouterMiddleware } from './index'

const nextReducer = require('@/store/reducers/index')

export default function configure(initialState) {
  // console.log('initialState', initialState)
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    // reduxRouterMiddleware,
    thunkMiddleware,
    // logger,
    // router,
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('@/store/reducers/index', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
