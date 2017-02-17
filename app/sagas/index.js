/* global fetch, localStorage */
import { delay, buffers } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel } from 'redux-saga/effects'

import listenForLogout from './listenForLogout'
import checkIfLoggedIn from './checkIfLoggedIn'
import handleAction from './handleAction'
import tryLoggingIn from './tryLoggingIn'

export function* watchForEvents () {
  const requestChan = yield actionChannel('*', buffers.expanding(10))
  while (true) {
    yield call(handleAction, yield take(requestChan))
  }
}

export function* listenForLogin () {     
  yield takeEvery('LOGIN', tryLoggingIn) 
}                                        

export default function* rootSaga () {
  yield [
    checkIfLoggedIn(),
    watchForEvents(),
    listenForLogin(),
    listenForLogout()
  ]
}
