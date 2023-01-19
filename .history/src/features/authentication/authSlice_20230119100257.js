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

    saveUser: (state,) => {
      state.user = localStorage.getItem('user')
      console.log(state.user)
    },

    logoutUser: (state) => {
      state.token = localStorage.removeItem('token')
      state.user = localStorage.removeItem('user')
    }
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
        state.error = null

        console.log(payload);
      })
      .addCase(loginUser.fulfilled, (state, { 
        payload: { token, user, error, errorMessage }
      }) => {
        state.isLoading = false

        if (error) {
          state.error = error
          state.errorMessage = errorMessage
          return
        } else {
          state.error = null
          state.errorMessage = null 
          state.user = user

          localStorage.setItem('token', token)

          // Save the token to the state
          state.token = token
        }

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
export const { saveUserToken, saveUser, logoutUser } = authSlice.actions
export default authSlice.reducer
