import {usernameChanged, passwordChanged, login} from '../actions'

test('usernameChanged action', () => {
  expect(usernameChanged('Dave')).toEqual({
    type: 'LOGIN_USERNAME_CHANGED',
    value: 'Dave'
  })
})

test('passwordChanged action', () => {
  expect(passwordChanged('Secr3t'))
  .toEqual({
    type: 'LOGIN_PASSWORD_CHANGED',
    value: 'Secr3t'
  })
})

test('login action', () => {
  expect(login('Dave', 'Secr3t')).toEqual({
    type: 'LOGIN',
    username: 'Dave',
    password: 'Secr3t'
  })
})
