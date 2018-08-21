import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger())
    ),
  )
  sagaMiddleware.run(rootSaga)
  const action = type => store.dispatch({ type })
  return store
}