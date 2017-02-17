/* global fetch, localStorage */
import { call } from 'redux-saga/effects'
import { postToServer } from './externalApis'

const actionsToPostToServer = {
  'SHOPPINGLIST_ITEM_ADD': true,
  'SHOPPINGLIST_ITEM_DELETE': true
}

export default function* (action) {
  if (actionsToPostToServer[action.type]) {
    yield call(postToServer, action)
  }
}
