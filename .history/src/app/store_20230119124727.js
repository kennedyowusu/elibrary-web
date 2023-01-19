import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../'
import messageReducer from './slices/message'

const reducer = {
  auth: authReducer,
  message: messageReducer,
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
})
