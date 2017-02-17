/* eslint-env jest */
import { call } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import handleAction from './index'
import postActionToServer from '../postActionToServer'

describe('handle an action which should be posted to the server', () => {
  const action = {type: 'SHOPPINGLIST_ITEM_ADD'}
  const it = sagaHelper(handleAction(action))

  it('POSTs the action object to the server', result => {
    expect(result).toEqual(call(postActionToServer, action))
  })

  it('ends', result => {
    expect(result).toBeUndefined()
  })
})

describe('handle an action which should NOT be posted to the server', () => {
  const action = {type: 'RANDOM_ACTION'}
  const it = sagaHelper(handleAction(action))

  it('does nothing', result => {
    expect(result).toBeUndefined()
  })
})
