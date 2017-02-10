import React from 'react'
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import appReducer from './appReducer'
import shoppingListReducer from './shoppingListReducer'
import App from './containers/App'

ReactDOM.render(
  <Provider store={createStore(combineReducers({
    app: appReducer,
    shoppingList: shoppingListReducer
  }))}>
    <App />
  </Provider>,
  document.getElementById('app')
)
