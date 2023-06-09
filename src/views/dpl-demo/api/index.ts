import request from './request'

// post-demo
// export function login(data) {
//   return request({
//     url: '/login',
//     method: 'post',
//     data
//   })
// }
// get-demo
// export function getInfo(token) {
//   return request({
//     url: '/info',
//     method: 'get',
//     params: { token }
//   })
// }
// baseURL-demo
// export function login(data) {
//   return request({
//     url: '/api/1.0/manager/login',
//     method: 'post',
//     data,
//     baseURL: '/mock'
//   })
// }
//
// upload-文件流-demo
// export function uploadNew(data) {
//   return request({
//     url: '/upload/new',
// 		 method: 'post',
//     data,
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     transformRequest: [function(data) {
//       return data
//     }]
//   })
// }

export function invoiceSignQueryInvoiceSignList() {
  // test
  let paramData: any = {
    'page': 1,
    'pageSize': 100,
    'signDateBegin': '2023-04-30',
    'signDateEnd': '2023-05-30',
    'customerId': '1888472711388',
    'sortName': 'create_date',
    'sortOrder': 'desc',
    'signStatus': '1',
  }

  // release
  paramData = {
    'page': 1,
    'pageSize': 100,
    'signDateBegin': '2023-04-30',
    'signDateEnd': '2023-05-30',
    'customerId': '8156385560790159',
    'sortName': 'create_date',
    'sortOrder': 'desc',
    'signStatus': '1',
  }

  return request({
    url: '/invoice/sign/queryInvoiceSignList',
    method: 'post',
    data: paramData,
  })
}
