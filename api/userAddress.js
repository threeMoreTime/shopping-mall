import request from "@/utils/request.js"

// 地址列表
export const list = () => {
	return request({
		url: '/client/user/address/list',
		method: 'GET'
	})
}
// 地址详情
export const detail = (id) => {
	return request({
		method: 'GET',
    url: `/client/user/address/detail/${id}`,
	});
};

// 保存地址
export const edit = (data) => {
	return request({
		url: '/client/user/address/edit',
		method: 'POST'
	}, data)
}

// 获取默认地址
export const defaultAddress = () => {
	return request({
		url: '/client/user/address/default',
		method: 'GET'
	})
}

