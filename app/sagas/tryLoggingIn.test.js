/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import sagaHelper from 'redux-saga-testing'
import tryLoggingIn from './tryLoggingIn'
import { localStorageSetItem } from './externalApis'

describe('try logging in - success', () => {
  const it = sagaHelper(tryLoggingIn())

  it('fires the LOGGING_IN action', result => {
    expect(result).toEqual(put({type: 'LOGGING_IN'}))
  })

  it('waits for 2 seconds', result => {
    expect(result).toEqual(call(delay, 2000))
  })

  it('stores the token in localStorage', result => {
    expect(result).toEqual(call(localStorageSetItem, 'authToken', 'MOCK_TOKEN'))
  })

  it('fires the USER_LOGGED_IN action', result => {
    expect(result).toEqual(put({type: 'USER_LOGGED_IN'}))
  })

  it('ends', result => {
    expect(result).toBeUndefined()
  })
})
