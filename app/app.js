import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import appReducer from './appReducer'
import shoppingListReducer from './shoppingListReducer'
import App from './containers/App'

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

const store = createStore(
  combineReducers({
    app: appReducer,
    shoppingList: shoppingListReducer
  }),
  compose(
    routerEnhancer,
    applyMiddleware(routerMiddleware)
  )
)

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
