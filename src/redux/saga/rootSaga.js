import { all, fork } from 'redux-saga/effects'
import { watchLoginRequest } from '../saga/loginSaga'

export default function* rootSaga() {
  yield all([
    fork(watchLoginRequest),
  ])
}