import request from "@/utils/request.js"


export const leftcategory = () => {
	return request({
		url: '/client/category/leftcategory',
		method: 'GET'
	}, )
}