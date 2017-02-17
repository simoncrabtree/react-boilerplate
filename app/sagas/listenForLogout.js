import { takeEvery } from 'redux-saga/effects'

export function* listenForLogout () {
  yield takeEvery('LOGOUT', logout)
}
