/* global fetch, localStorage */
import { delay, buffers } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel } from 'redux-saga/effects'

export function localStorageSetItem (key, value) {
  localStorage.setItem(key, value)
}

export function localStorageGetItem (key) {
  return localStorage[key]
}

export function localStorageRemoveItem (key) {
  localStorage.removeItem(key)
}

export function postToServer (payload) {
  return fetch('http://localhost:5000/shoppinglist', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function* postActionToServer (evt) {
  while (true) {
    try {
      yield call(postToServer, evt)
      // yield put({ type: 'EVENT_PERSISTED' })
      console.log('Saved!')
      return
    } catch (error) {
      // yield put({ type: 'ERROR_PERSISTING_EVENT' })
      console.error(error)
      yield call(delay, 1000)
      console.log('retrying')
    }
  }
}

const actionsToPostToServer = {
  'SHOPPINGLIST_ITEM_ADD': true,
  'SHOPPINGLIST_ITEM_DELETE': true
}

export function* handleEvent (evt) {
  if (actionsToPostToServer[evt.type]) {
    yield call(postActionToServer, evt)
  }
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
