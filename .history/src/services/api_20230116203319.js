import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000',
})

// get request
export const get = (url, params) => instance.get(url, { params })

// get request with no params
export const getNoParams = (url) => instance.get(url)

// 

// post request
export const post = (url, data) => instance.post(url, data)

// put request
export const put = (url, data) => instance.put(url, data)

// delete request
export const remove = (url) => instance.delete(url)

// export the instance
export default instance;