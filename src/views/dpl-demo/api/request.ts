import Axios from 'axios'
// import { Message } from ''
// import Qs from 'qs'

const request = Axios.create({
  // api的base_url
  baseURL: '/dpl',
  timeout: 5000,
  headers: {
    // 后端json
    'Content-Type': 'application/json;charset=UTF-8',
    // 后端表单
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // 后端表单application/x-www-form-urlencoded的参数转对象
  // transformRequest: [function(data) {
  //   data = Qs.stringify(data)
  //   return data
  // }],
})

// 设置请求头
request.interceptors.request.use(config => {
  // config.headers['token'] = 'token'

  return config
}, error => {
  console.info(error)
})

// 拦截响应response，并做一些错误处理
request.interceptors.response.use((response) => {
  const res = response.data

  // if (res.code !== 10000) {
  //   return
  // }

  return res
}, (err) => {
  // http状态码不为200时-错误处理
  if (err) {
    // Message({
    //   message: err,
    //   type: 'error',
    //   duration: 5 * 1000,
    // })
  }
})

export default request
