import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { localStorageSetItem } from './externalApis'

export default function* tryLoggingIn (action) {
  yield put({type: 'LOGGING_IN'})
  yield call(delay, 2000)
  yield call(localStorageSetItem, 'authToken', 'MOCK_TOKEN')
  yield put({type: 'USER_LOGGED_IN'})
}
