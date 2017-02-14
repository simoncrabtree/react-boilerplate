/*
 *
 * AppRoot
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import LoginPage from '../LoginPage'
import LoggedInApp from '../LoggedInApp'

const AppRoot = ({ title, isLoggedIn }) =>
  <div>
    {!isLoggedIn ? <LoginPage /> : <LoggedInApp /> }
  </div>

const mapState = state => {
  console.log(state)
  return {
    isLoggedIn: state.app.isLoggedIn
  }
}

export default connect(mapState)(AppRoot)
