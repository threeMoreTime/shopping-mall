import request from "@/utils/request.js"

// 获取商品分类
export const leftcategory = () => {
	return request({
		url: '/client/category/leftcategory',
		method: 'GET'
	})
}

// 商品列表
export const products = (data) => {
	return request({
		url: '/client/category/products',
		method: 'GET'
	},data)
}