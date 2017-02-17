/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import sagaHelper from 'redux-saga-testing'
import tryLoggingIn from './tryLoggingIn'
import { localStorageSetItem, doPost } from './externalApis'
import handleAction from './handleAction'
import postActionToServer from './postActionToServer'

describe('post action to server', () => {
  const action = {type: 'MY_TEST_ACTION', stuff: 'Other Params'} 
  const it = sagaHelper(postActionToServer(action))

  it('calls the Http POST with the action as its argument', result => {
    expect(result).toEqual(call(doPost, action))
  })

  it('fires the EVENT_PERSISTED Action', result => {
    expect(result).toEqual(put({type: 'EVENT_PERSISTED'}))
  })

  it('finishes', result => {
    expect(result).toBeUndefined()
  })
})
