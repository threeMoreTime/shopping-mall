import request from "@/utils/request.js"

// 是否有店铺
export const isShop = () => {
	return request({
		url: '/client/shop/info/myShop',
		method: 'GET'
	})
}

// 店铺管理
export const shopManage = (data) => {
	return request({
		url: `/client/shop/info/list/${data.isShow}`,
		method: 'GET'
	},data)
}

export const statistics = () => {
	return request({
		url: '/client/shop/info/statistics',
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
		url: '/client/shop/info/save',
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
// 商品收藏
export const collect = (data) => {
	return request({
		url: '/client/user/product/like',
		method: 'POST'
	},data)
}
// 店铺分类
export const findAllCategory = () => {
	return request({
		url: '/client/shop/info/findAllCategory',
		method: 'GET'
	})
}
// 规格参数
export const isSpecType = (id,specType) => {
	return request({
		url: `/client/category/product/isSpecType/${id}/${specType}`,
		method: 'POST'
	})
}
// 商品类目
export const Commodity = () => {
	return request({
		url: '/client/category/findAllCategory',
		method: 'GET'
	})
}
// 查询当前商品是否被收藏
export const getLikeById = (id) => {
	return request({
		url: `/client/user/product/getById/${id}`,
		method: 'GET'
	})
}

// 未通过原因
export const getByProductId = (id) => {
	return request({
		url: `/client/product/audit/getByProductId/${id}`,
		method: 'GET'
	})
}

