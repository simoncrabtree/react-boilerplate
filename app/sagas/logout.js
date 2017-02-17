import { call, put } from 'redux-saga/effects'
import { localStorageRemoveItem } from './externalApis'

export default function* logout () {
  // Eventually needs to make an http call to the server first
  yield call(localStorageRemoveItem, 'authToken')
  yield put({type: 'USER_LOGGED_OUT'})
}
