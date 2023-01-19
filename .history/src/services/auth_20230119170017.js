import axios from 'axios'

const BASE_URL = 'http://192.168.1.102:8000/api'

const register = (name, email, password) => {
  return axios.post(BASE_URL, {
    name,
    email,
    password,
  })
}

const login = async (email, password) => {
  const response = await axios
  .post(BASE_URL, {
    email,
    password,
    })
  if (response.data.email) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = async () => {
  localStorage.removeItem('user')
  const response = await axios.post(BASE_URL )
  return response.data
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

export default AuthService;
