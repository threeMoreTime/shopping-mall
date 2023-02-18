/**
 * 前台-用户-提现
 **/
import request from "@/utils/request.js"

// 提现申请
export const tixianshenqing = (data) => {
  return request({
    url: '/client/user/extract/cash',
    method: 'POST',
    data

  })
}

// 提现记录
export const tixianjilu = (params) => {
  return request({
    url: '/client/user/extract/record',
    method: 'get',
    params // Query
  })
}


// // 提现申请相关金额  体现中  已提现
// export const tixianxiangguanjiner = () => {
//   return request({
//     url: '/client/user/extract/getExtractMoneyInfo'

//   })
// }
