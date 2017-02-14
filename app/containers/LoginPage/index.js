/*
 *
 * LoginPage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { usernameChanged, passwordChanged, login } from './actions'
import ActiveButton from '../../components/ActiveButton'

const LoginPage = ({ title, username, password, usernameChanged, passwordChanged, login, isLoggingIn }) => {
  return (
    <div>
      <h1>{title}</h1>
      <form className='form-horizontal' onSubmit={login(username, password)}>
        <div className='formGroup'>
          <input className='form-control' placeholder='Username' onChange={usernameChanged} />
          <input type='password' className='form-control' placeholder='Password' onChange={passwordChanged} />
        </div>
        <div className='formGroup'>
          <ActiveButton text='Login' activeText='Logging In' isActive={isLoggingIn} />
        </div>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    title: 'LoginPage',
    username: state.login.username,
    password: state.login.password,
    isLoggingIn: state.login.isLoggingIn
  }
}

const mapDispatch = dispatch => {
  return {
    login: (username, password) => e => {
      e.preventDefault()
      dispatch(login(username, password))
    },
    usernameChanged: e => dispatch(usernameChanged(e.target.value)),
    passwordChanged: e => dispatch(passwordChanged(e.target.value))
  }
}

export default connect(mapState, mapDispatch)(LoginPage)
