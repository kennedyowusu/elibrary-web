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
)

const authSlice = createSlice({
 