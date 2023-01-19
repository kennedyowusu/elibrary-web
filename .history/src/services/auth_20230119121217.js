import axios from 'axios'

const BASE = 'http://192.168.1.102:8000'

const register = (name, email, password) => {
  return axios.post(BASE + 'signup', {
    name,
    email,
    password,
  })
}

const login = async (email, password) => {
  const response = await axios
  .post(BASE + 'signin', {
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
  const response = await axios.post(BASE + 'signout')
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

export default AuthService
