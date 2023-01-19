import axios from 'axios'

const API_URL = 'http://localhost:3000/api/auth/'

const register = (email, email, password) => {
  return axios.post(API_URL + 'signup', {
    email,
    email,
    password,
  })
}

const login = (email, password) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.email) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
  return axios.post(API_URL + 'signout').then((response) => {
    return response.data
  })
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
