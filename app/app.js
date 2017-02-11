import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// Needed for redux-saga es6 generator support
import 'babel-polyfill'

import appReducer from './appReducer'
import shoppingListReducer from './shoppingListReducer'
import App from './containers/App'
import rootSaga from './sagas'

import { routerForBrowser, RouterProvider  } from 'redux-little-router';

const routes = {
  '/': {
    title: 'Home',
  },
  '/home': {
    title: 'Home'
  },
  '/shopping': {
    title: 'Shopping List'
  },
  '/cupboard': {
    title: 'Cupboard'
  },
}

const {
  routerEnhancer,
  routerMiddleware  
} = routerForBrowser({ routes })

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    app: appReducer,
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
  wrap(store)(App),
  document.getElementById('app')
)
