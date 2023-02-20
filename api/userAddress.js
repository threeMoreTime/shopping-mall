import request from "@/utils/request.js"

// 地址列表
export const list = (data) => {
	return request({
		url: '/client/user/address/list',
		method: 'GET'
	},data)
}
// 地址详情
export const detail = (id) => {
	return request({
		method: 'GET',
		url: `/client/user/address/detail/${id}`,
	});
};

// 删除地址
export const del = (id) => {
	return request({
		method: 'GET',
		url: `/client/user/address/del/${id}`,
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

// 设置默认地址
export const set = (id) => {
	return request({
		method: 'GET',
		url: `/client/user/address/default/set/${id}`,
	});
}

