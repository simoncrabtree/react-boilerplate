/* eslint-env jest */
import appReducer from './index'

test('appReducer initial state', () => {
  const newState = appReducer(undefined, {})
  expect(newState).toEqual({
    isLoggedIn: false
  })
})

test('appReducer USER_LOGGED_IN', () => {
  const action = {
    type: 'USER_LOGGED_IN'
  }
  const newState = appReducer(undefined, action)

  expect(newState).toEqual({
    isLoggedIn: true
  })
})
