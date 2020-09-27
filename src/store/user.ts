import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { notification } from 'antd'
import store from 'store'
import { getUserToken } from 'utils/utils'

export const initialState = {
  token: getUserToken()
}

const slice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload
      localStorage.setItem('userToken', JSON.stringify(action.payload))
    },
    logoutSuccess: (state) => {
      state.token = null
      localStorage.removeItem('userToken')
    }
  }
})

export default slice.reducer

export const login = (token: string) => async (dispatch: Dispatch) => {
  const { loginSuccess } = slice.actions

  try {
    dispatch(loginSuccess({ token }))
  } catch (e) {
    return console.error(e.message)
  }
}

export const logout = () => async (dispatch: Dispatch) => {
  const { logoutSuccess } = slice.actions

  if (isLogin()) {
    dispatch(logoutSuccess())
    notification['success']({
      message: 'Logged out'
    })
  }

  if (!isLogin()) {
    notification['error']({
      message: 'You have not been logged in'
    })
  }
}

export const isLogin = () =>
  store.getState().user.token || localStorage.getItem('userToken')
