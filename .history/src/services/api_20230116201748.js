import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
})

// Add a request interceptor
instance.interceptors.request.use(
 
)
