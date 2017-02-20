import { call, put } from 'redux-saga/effects'
import { httpGet } from '../externalApis'

export default function* () {
  try {
    const recipePage = yield call(httpGet, 'recipes')
    yield put({type: 'GET_RECIPE_PAGE_SUCCEEDED', recipePage})
  } catch (err) {
    yield put({type: 'GET_RECIPE_PAGE_FAILED'})
  }
}
