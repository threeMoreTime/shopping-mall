import request from "@/utils/request.js"

// 获取用户项目信息
export const findPjUserInfo = () => {
	return request({
		method: 'GET',
		url: 'client/project/tree/findPjUserInfo',
	});
};