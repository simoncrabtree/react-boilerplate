import { delay } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel, takeLatest } from 'redux-saga/effects'

const postToServer = (payload) => {
  return fetch('http://localhost:5000/shoppinglist', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function* persistEvent (evt) {
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

export function* watchRequests () {
  // 1- Create a channel for request actions
  const requestChan = yield actionChannel('SHOPPINGLIST_ITEM_ADD')
  while (true) {
    // 2- take from the channel
    const evt = yield take(requestChan)
    console.log('event', evt)
    // 3- Note that we're using a blocking call
    yield call(persistEvent, evt)
  }
}

export default function* rootSaga () {
  yield [
    watchRequests()
  ]
}
