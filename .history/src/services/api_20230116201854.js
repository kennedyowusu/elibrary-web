import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
})

// get request
export const get = (url, params) => instance.get(url, { params })

// post request
export const post = (url, data) => instance.post(url, data)

