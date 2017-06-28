import axios from 'axios'

// get
export const getMethod = ({ url, timeout }) => {
  const method = 'get'
  return axios({ method, url, timeout })
}

// post
export const postMethod = ({ url, data }) => {
  const method = 'post'
  return axios({ method, url, data })
}

// put
export const putMethod = ({ url, data }) => {
  const method = 'put'
  return axios({ method, url, data })
}
