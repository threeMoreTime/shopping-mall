import request from "@/utils/request.js"


// 用户兑换券记录明细
export const yuehuanjuan = (params) => {
  return request({
    url: '/client/user/vouchers/list',
    method: 'get',
    params // Query
  })
}


// 用户管理积分记录明细
export const guanlijifen = (params) => {
  return request({
    url: '/client/user/manageIntegral/list',
    method: 'get',
    params // Query
  })
}


// 用户购物积分记录明细
export const gouwujifen = (params) => {
  return request({
    url: '/client/user/integral/list',
    method: 'get',
    params // Query
  })
}


// 用户能量值记录明细
export const nengliangzhi = (params) => {
  return request({
    url: '/client/user/energy/list',
    method: 'get',
    params // Query
  })
}


// 用户仓单记录明细
export const cangdan = (params) => {
  return request({
    url: '/client/user/cang/list',
    method: 'get',
    params // Query
  })
}
