import { createSlice, Dispatch } from '@reduxjs/toolkit'

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
    logoutSuccess: (state, action) => {
      state.user = null
    }
  }
})

export default slice.reducer

const { loginSuccess } = slice.actions
export const login = (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(loginSuccess({ token }))
  } catch (e) {
    return console.error(e.message)
  }
}

export const isLogin = () => localStorage.getItem('user')
