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
  initialState,
  reducers: {

    saveUserToken: (state) => {
      state.token = localStorage.getItem('token')
    },

    removeUserToken: (state) => {
      state.token = localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, { 
        payload: { token, user, error, errorMessage }
      }) => {
        state.isLoading = false
        state.user = action.payload

        if (error) {
          state.error = error
          state.errorMessage = errorMessage
          return
        } else {
          state.error = null
          

        // Save the token to local storage
        localStorage.setItem('token', action.payload.token)

        // Save the token to the state
        state.token = action.payload.token
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
