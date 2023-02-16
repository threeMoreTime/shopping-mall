import request from "@/utils/request.js"

// 获取轮播图、公告
export const homeIndex = () => {
	return request({
		url: '/client/homepage/index',
		method: 'GET'
	})
}