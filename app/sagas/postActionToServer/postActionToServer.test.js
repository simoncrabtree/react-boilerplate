/* eslint-env jest */
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import postActionToServer from './index'
import { doPost } from '../externalApis'
describe('post action to the server', () => {
  const action = {type: 'SHOPPINGLIST_ITEM_ADD'}
  const it = sagaHelper(postActionToServer(action))

  it('POSTs the action object to the server', result => {
    expect(result).toEqual(call(doPost, action))
  })

  it('fires the EVENT_PERSISTED action', result => {
    expect(result).toEqual(put({type: 'EVENT_PERSISTED'}))
  })

  it('ends', result => {
    expect(result).toBeUndefined()
  })
})
