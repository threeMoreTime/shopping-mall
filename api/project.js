import request from "@/utils/request.js"

// 获取用户项目信息
export const findPjUserInfo = () => {
	return request({
		method: 'GET',
		url: 'client/project/tree/findPjUserInfo',
	});
};

// 兑换券兑换树积分
export const exchangeIntegral = (data) => {
	return request({
		method: 'POST',
		url: 'client/project/tree/exchangeIntegral',
	},data);
};

// 获取兑换黄金区的黄金商品列表
export const findGoldProducts = (data) => {
	return request({
		method: 'GET',
		url: '/client/project/tree/findGoldProducts',
	},data);
};