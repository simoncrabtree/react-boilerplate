import { takeEvery } from 'redux-saga/effects'
import { localStorageRemoveItem } from './externalApis'

function* logout () {
  yield delay(1000)
  yield call(localStorageRemoveItem, 'authToken')
  yield put({type: 'USER_LOGGED_OUT'})
}

export default function* listenForLogout () {
  yield takeEvery('LOGOUT', logout)
}
