/* global fetch, localStorage */
import { delay, buffers } from 'redux-saga'
import { call, put, takeEvery, take, actionChannel } from 'redux-saga/effects'
import { doPost } from './externalApis'

export default function* postActionToServer (action) {
  while (true) {
    try {
      yield call(doPost, action)
      yield put({ type: 'EVENT_PERSISTED' })
      return
    } catch (error) {
      // yield put({ type: 'ERROR_PERSISTING_EVENT' })
      console.error(error)
      yield call(delay, 1000)
      console.log('retrying')
    }
  }
}
