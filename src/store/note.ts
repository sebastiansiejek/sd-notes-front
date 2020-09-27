import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { INotes } from 'types/types'

export const initialState = {
  notes: [] as INotes
}

const slice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload
    }
  }
})

export default slice.reducer

export const setNotes = (payload: INotes) => async (dispatch: Dispatch) => {
  const { setNotes } = slice.actions

  try {
    dispatch(setNotes(payload))
  } catch (e) {
    return console.error(e.message)
  }
}
