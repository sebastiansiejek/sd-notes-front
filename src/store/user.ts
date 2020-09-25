import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { notification } from 'antd'

const slice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logoutSuccess: (state) => {
      state.user = null
      localStorage.removeItem('user')
    }
  }
})

export default slice.reducer

const { loginSuccess, logoutSuccess } = slice.actions

export const login = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(loginSuccess({ token }))
  } catch (e) {
    return console.error(e.message)
  }
}

export const logout = () => async (dispatch: Dispatch) => {
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

export const isLogin = () => localStorage.getItem('user')
