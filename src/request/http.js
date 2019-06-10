/**
 * axios封装
 */
import axios from 'axios'
// import store from '../store'

// 环境切换
// 简单处理，不判断开发环境和生产环境
// axios.defaults.baseURL = '/api'

// 设置请求超时时间
axios.defaults.timeout = 5000

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;'

// 请求拦截
// axios.interceptors.request.use(
//   config => {
//     const token = store.state.token
//     token && (config.headers.Authorization = token)
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   }
// )

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      return Promise.reject(error.response)
    }
  }
)

// get请求
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

// post请求
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
