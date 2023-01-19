import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../services/api'

export const registerUser = createAsyncThunk(
 'auth/register',
 async (data, thunkAPI) => {
  try {
   const response = await instance.post('/auth/register', data)
   return response.data
  } catch (error) {
   return thunkAPI.rejectWithValue(error.response.data)
  }
 }
);

const initialState = {
 isLoading: false,
 token: null,
};

const authSlice = createSlice({
 name: 'auth',
 initialState: {
  isLoading: false,
  isAuthenticated: false,
  error: null,
  user: {},
 },
 reducers: {