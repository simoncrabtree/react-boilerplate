/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { localStorageGetItem } from './externalApis'

import checkIfLoggedIn from './checkIfLoggedIn'

describe('When a user IS logged in', () => {
  const it = sagaHelper(checkIfLoggedIn())

  it('gets the authToken from localStorage', result => {
    expect(result).toEqual(call(localStorageGetItem, 'authToken'))
    return 'MY_TEST_TOKEN'
  })

  it('fires the USER_LOGGED_IN action', result => {
    expect(result).toEqual(put({type: 'USER_LOGGED_IN'}))
  })

  it('ends', result => {
    expect(result).toBeUndefined()
  })
})

describe('When a user is NOT logged in', () => {
  const it = sagaHelper(checkIfLoggedIn())

  it('gets the authToken from localStorage', result => {
    expect(result).toEqual(call(localStorageGetItem, 'authToken'))
    return null // No authToken in localStorage
  })

  it('does nothing', result => {
    expect(result).toBeUndefined()
  })
})
