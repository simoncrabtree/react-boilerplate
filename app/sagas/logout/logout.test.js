/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { localStorageRemoveItem } from '../externalApis'
import logout from './index'

describe('logout', () => {
  const it = sagaHelper(logout())

  it('clears the token from localStorage', result => {
    expect(result).toEqual(call(localStorageRemoveItem, 'authToken'))
  })

  it('fires the USER_LOGGED_OUT action', result => {
    expect(result).toEqual(put({type: 'USER_LOGGED_OUT'}))
  })

  it('ends', result => {
    expect(result).toBeUndefined()
  })
})
