import request from "@/utils/request.js"

// 是否有店铺
export const isShop = () => {
	return request({
		url: '/client/shop/info/myShop',
		method: 'GET'
	})
}

// 店铺管理
export const shopManage = (query) => {
	return request({
		url: `/client/shop/info/list/${query}`,
		method: 'GET'
	})
}

// 数据统计
export const dataStatistics = () => {
	return request({
		url: '/client/shop/info/dataStatistics',
		method: 'GET'
	})
}

// 申请店铺
export const saveOrUpdate = (data) => {
	return request({
		url: '/client/shop/info/saveOrUpdate',
		method: 'POST'
	},data)
}

// 发布商品/保存仓库
export const publish = (data) => {
	return request({
		url: '/client/category/product/publish',
		method: 'POST'
	},data)
}

// id查询详情
export const getById = (id) => {
	return request({
		url: `/client/category/product/getById/${id}`,
		method: 'GET'
	})
}

// 商品上架
export const upOrDown = (data) => {
	return request({
		url: `/client/category/product/upOrDown/${data.id}/${data.isShow}`,
		method: 'POST'
	})
}
// 商品删除
export const deleById = (id) => {
	return request({
		url: `/client/category/product/delete/${id}`,
		method: 'GET'
	})
}