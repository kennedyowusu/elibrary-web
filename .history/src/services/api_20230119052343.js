import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.1.102:8000',
})

// get request
export const get = (url, params) => instance.get(url, { params })

// get request with no params
export const getNoParams = (url) => instance.get(url)

// get single item
export const getSingle = (url, id) => instance.get(`${url}/${id}`)

// post request
export const post = (url, data) => instance.post(url, data)

// put request
export const put = (url, data) => instance.put(url, data)

// delete request
export const remove = (url) => instance.delete(url)

// remove single item
export const removeSingle = (url, id) => instance.delete(`${url}/${id}`)

// export the instance
export default instance;