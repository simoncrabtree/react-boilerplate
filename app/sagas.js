/* global fetch, localStorage */
import { delay, buffers } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel } from 'redux-saga/effects'

export function* watchForEvents () {
  // 1- Create a channel for request actions
  const requestChan = yield actionChannel('*', buffers.expanding(10))
  while (true) {
    // 2- take from the channel
    const evt = yield take(requestChan)
    if (actionsToPostToServer[evt.type]) {
      yield call(postActionToServer, evt)
    }
  }
}

export function* tryLoggingIn (action) {
  yield put({type: 'LOGGING_IN'})
  yield delay(2000)
  localStorage.setItem('authToken', 'MOCK_TOKEN')
  yield put({type: 'USER_LOGGED_IN'})
}

export function* listenForLogin () {
  yield takeEvery('LOGIN', tryLoggingIn)
}

export function* checkIfLoggedIn () {
  if (localStorage.authToken) yield put({type: 'USER_LOGGED_IN'})
}

export function* logout () {
  yield delay(1000)
  localStorage.removeItem('authToken')
  yield put({type: 'USER_LOGGED_OUT'})
}

export function* listenForLogout () {
  yield takeEvery('LOGOUT', logout)
}

export default function* rootSaga () {
  yield [
    checkIfLoggedIn(),
    watchForEvents(),
    listenForLogin(),
    listenForLogout()
  ]
}
