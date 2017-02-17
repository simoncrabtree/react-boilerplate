/* global, localStorage */
import { buffers } from 'redux-saga'
import { call, takeEvery, take, actionChannel } from 'redux-saga/effects'

import checkIfLoggedIn from './checkIfLoggedIn'
import handleAction from './handleAction'
import tryLoggingIn from './tryLoggingIn'
import logout from './logout'

export function* watchForEvents () {
  const requestChan = yield actionChannel('*', buffers.expanding(10))
  while (true) {
    yield call(handleAction, yield take(requestChan))
  }
}

export default function* rootSaga () {
  yield [
    checkIfLoggedIn(),
    watchForEvents(),
    yield takeEvery('LOGIN', tryLoggingIn),
    yield takeEvery('LOGOUT', logout)
  ]
}
