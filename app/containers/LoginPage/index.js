/*
 *
 * LoginPage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, login } from './actions'

const LoginPage = ({ title, username, password, usernameChanged, passwordChanged, login }) => {
  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={login(username, password)}>
        <input name='username' placeholder='Username' onChange={usernameChanged} />
        <input name='password' placeholder='Password' onChange={passwordChanged} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    title: 'LoginPage',
    username: state.login.username,
    password: state.login.password
  }
}

const mapDispatch = dispatch => {
  return {
    login: (username, password) => e => {
      e.preventDefault()
      dispatch(login(username, password))
      console.log('login', username, password)
    },
    usernameChanged: e => dispatch(usernameChanged(e.target.value)),
    passwordChanged: e => dispatch(passwordChanged(e.target.value))
  }
}

export default connect(mapState, mapDispatch)(LoginPage)
