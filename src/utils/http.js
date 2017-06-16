import axios from 'axios'

// 通用get方法
export const getMethod = ({
  url,
  timeout
}) => {
  let method = 'get'
  return axios({ method, url, timeout })
}

// 通用post方法
export const postMethod = ({
  url,
  data
}) => {
  let method = 'post'
  return axios({ method, url, data })
}

// 通用put方法
export const putMethod = ({
  url,
  data
}) => {
  let method = 'put'
  return axios({ method, url, data })
}
