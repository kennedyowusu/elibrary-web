import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authentication/authSlice'
import messageReducer from '../features/authentication/messageSlice'

const reducer = {
  auth: authReducer,
  message: messageReducer,
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
})
