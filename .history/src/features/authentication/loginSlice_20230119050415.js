import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../services/api'

// Define the async thunk for login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/auth/login', data)
      // const response = await axios.post('/api/login', data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
  'auth/register',
  

// Define the slice for auth
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    error: null,
    user: {},
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.user = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Export the auth slice and the login async thunk
export const { logout } = authSlice.actions
export default authSlice.reducer
