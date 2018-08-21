import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import environment from '../../environment/environment'
import { LOGIN_REQUEST, loginSuccess, loginFail } from '../modules/session'

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginRequestWorker)
}

function* loginRequestWorker(action) {
  try {
    const response = yield call(loginRequestFetcher, action.payload)
    const token = response.data.token
    if (token) {
      yield put(loginSuccess(token))
    }
  } catch (error) {
    yield put(loginFail(error))
  }
}

loginRequestFetcher = async (payload) => {
  return await axios.get(environment.development.base_url + environment.development.login,
    {
      params: {
        email: payload.email,
        password: payload.password,
      },
    }
  )
}