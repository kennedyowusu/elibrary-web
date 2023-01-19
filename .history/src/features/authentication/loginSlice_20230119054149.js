import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../services/api'

// Define the async thunk for login
export const loginUser = createAsyncThunk(
  'login',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/login', data)
      // const response = await axios.post('/api/login', data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
  'register',
  async (data, thunkAPI) => {
    try {
      const response = await instance.post('/register', data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const initialState = {
  isLoading: false,
  token: null,
  error: null,
  error: null,
  errorMessage: null,
};

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

    saveUserToken: (state, action) => {
      state.token = action.payload
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
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.token = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Export the auth slice and the login async thunk
export const { logout } = authSlice.actions
export default authSlice.reducer
