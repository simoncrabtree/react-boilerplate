import { call, put } from 'redux-saga/effects'
import { localStorageGetItem } from './externalApis'

export default function* checkIfLoggedIn () {
  const token = yield call(localStorageGetItem, 'authToken')
  if (token) yield put({type: 'USER_LOGGED_IN'})
}
