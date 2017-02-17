/* global fetch, localStorage */
import { delay, buffers } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel } from 'redux-saga/effects'

import listenForLogout from './listenForLogout'

export function localStorageSetItem (key, value) {
  localStorage.setItem(key, value)
}

export function localStorageGetItem (key) {
  return localStorage[key]
}

export function localStorageRemoveItem (key) {
  localStorage.removeItem(key)
}

export function* watchForEvents () {
  const requestChan = yield actionChannel('*', buffers.expanding(10))
  while (true) {
    yield call(handleEvent, yield take(requestChan))
  }
}

export function* tryLoggingIn (action) {
  yield put({type: 'LOGGING_IN'})
  yield call(delay, 2000)
  yield call(localStorageSetItem, 'authToken', 'MOCK_TOKEN')
  yield put({type: 'USER_LOGGED_IN'})
}

export function* listenForLogin () {
  yield takeEvery('LOGIN', tryLoggingIn)
}

export function* checkIfLoggedIn () {
  const token = yield call(localStorageGetItem, 'authToken')
  if (token) yield put({type: 'USER_LOGGED_IN'})
}

export function* logout () {
  yield delay(1000)
  yield call(localStorageRemoveItem, 'authToken')
  yield put({type: 'USER_LOGGED_OUT'})
}

export default function* rootSaga () {
  yield [
    checkIfLoggedIn(),
    watchForEvents(),
    listenForLogin(),
    listenForLogout()
  ]
}
