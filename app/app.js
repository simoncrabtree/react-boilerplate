import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// Needed for redux-saga es6 generator support
import 'babel-polyfill'

import appReducer from './appReducer'
import loginReducer from './loginReducer'
import shoppingListReducer from './shoppingListReducer'
import { routes } from './Routes'
import rootSaga from './sagas'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import { routerForBrowser, RouterProvider } from 'redux-little-router'

import AppRoot from './containers/AppRoot'

const {
  routerEnhancer,
  routerMiddleware
} = routerForBrowser({ routes })

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    app: appReducer,
    login: loginReducer,
    shoppingList: shoppingListReducer
  }),
  compose(
    routerEnhancer,
    applyMiddleware(routerMiddleware),
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

const wrap = store => Root =>
  <Provider store={store}>
    <RouterProvider store={store}>
      <Root />
    </RouterProvider>
  </Provider>

render(
  wrap(store)(AppRoot),
  document.getElementById('app')
)
