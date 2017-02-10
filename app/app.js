import React from 'react'
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = {appTitle: 'Hello Redux'}, action) => state
const store = createStore(reducer)

import App from './containers/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

