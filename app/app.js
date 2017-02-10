import React from 'react'
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import appReducer from './appReducer'
import App from './containers/App'

ReactDOM.render(
  <Provider store={createStore(combineReducers({
    app: appReducer
  }))}>
    <App />
  </Provider>,
  document.getElementById('app')
)
