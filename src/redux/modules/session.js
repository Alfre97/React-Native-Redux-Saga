import { createAction, handleActions } from 'redux-actions'

//ACTIONS

export const LOGIN_REQUEST = 'react-native-workshop/login/login_request'
export const LOGIN_SUCCESS = 'react-native-workshop/login/login_success'
export const LOGIN_FAIL = 'react-native-workshop/login/login_fail'

//REDUCER

const initialState = {
  fetching: false,
  token: undefined,
  error: null,
}

const reducer = handleActions(
  {
    [LOGIN_REQUEST](state, action) {
      return {
        ...state,
        fetching: true,
        error: null,
      }
    },
    [LOGIN_SUCCESS](state, action) {
      const { token } = action.payload
      return {
        ...state,
        fetching: false,
        token: token,
      }
    },
    [LOGIN_FAIL](state, action) {
      const { error } = action.payload
      return {
        ...state,
        fetching: false,
        token: null,
        error: error,
      }
    },
  },
  initialState,
)

export default reducer

//ACTIONS CREATORS

export const loginRequest = (email, password) => {
  return createAction(LOGIN_REQUEST)({
    email,
    password
  })
}

export const loginSuccess = (token) => {
  return createAction(LOGIN_SUCCESS)({
    token,
  })
}

export const loginFail = (error) => {
  return createAction(LOGIN_FAIL)({
    error,
  })
}