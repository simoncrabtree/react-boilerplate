import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const postToServer = (payload) => {
  return fetch('http://localhost:5000/shoppinglist', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function* saveShoppingList() {
  try {
    yield call(postToServer, {items: [1,2,3]})
    yield put({ type: 'SAVED_SHOPPINGLIST' })
    console.log('Saved!')
  } catch (error) {
    yield put({ type: 'ERROR_SAVING_SHOPPINGLIST' })
    console.error(error)
  }
}

export function* onShoppingListSave() {
  yield takeLatest('SHOPPINGLIST_SAVE', saveShoppingList)
}

export default function* rootSaga() {
  yield [
    onShoppingListSave()
  ]
}
