import note, { initialState as noteState } from './note'
import user, { initialState as userState } from './user'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

export interface IStore {
  user: typeof userState
  note: typeof noteState
}

export const rootReducer = combineReducers({
  user,
  note
})

export default configureStore({
  reducer: rootReducer
})
