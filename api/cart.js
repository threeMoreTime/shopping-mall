import request from "@/utils/request.js"

// 购物车数据列表
export const cartList = (data) => {
	return request({
		url: '/client/user/cart/list',
		method: 'GET'
	},data)
}