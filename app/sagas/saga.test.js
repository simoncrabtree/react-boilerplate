/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import sagaHelper from 'redux-saga-testing'
import { tryLoggingIn, handleEvent, localStorageSetItem, postActionToServer } from './index'

describe('try logging in - success', () => {
  const it = sagaHelper(tryLoggingIn())

  it('should fire the LOGGING_IN action', result => {
    expect(result).toEqual(put({type: 'LOGGING_IN'}))
  })

  it('should wait for 2 seconds', result => {
    expect(result).toEqual(call(delay, 2000))
  })

  it('should store the token in localStorage', result => {
    expect(result).toEqual(call(localStorageSetItem, 'authToken', 'MOCK_TOKEN'))
  })

  it('should fire the USER_LOGGED_IN action', result => {
    expect(result).toEqual(put({type: 'USER_LOGGED_IN'}))
  })
})

describe('handle an action which should be posted to the server', () => {
  const action = {type: 'SHOPPINGLIST_ITEM_ADD'} 
  const it = sagaHelper(handleEvent(action))

  it('is POSTed to the server', result => {
    expect(result).toEqual(call(postActionToServer, action))
  })
})

describe('handle an action which should NOT be posted to the server', () => {
  const action = {type: 'RANDOM_ACTION'} 
  const it = sagaHelper(handleEvent(action))

  it('is not POSTed to the server', result => {
    expect(result).toBeUndefined()
  })
})
