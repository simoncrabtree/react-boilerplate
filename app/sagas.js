import { delay, buffers } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel, takeLatest } from 'redux-saga/effects'

const postToServer = (payload) => {
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
  console.log('tryLoggingIn', action)
  yield delay(2000)
  yield put({type: 'USER_LOGGED_IN'})
}

export function* listenForLogin () {
  yield takeEvery('LOGIN', tryLoggingIn)
}

export default function* rootSaga () {
  yield [
    watchForEvents(),
    listenForLogin()
  ]
}
