import request from "@/utils/request.js"

// 获取轮播图、公告
export const homeIndex = () => {
	return request({
		url: '/client/homepage/index',
		method: 'GET'
	})
}

// 首页商品列表
export const productType = (data) => {
	return request({
		url: `/client/project/list`,
		method: 'GET'
	},data)
}



// 首页搜索
export const indexSearch = (keyword) => {
	return request({
		url: '/client/homepage/index/search/' + keyword,
		method: 'GET'
	})
}
