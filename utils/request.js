import { userStore } from "../store/index.js"
import {info} from "@/api/user.js"
const httpTokenRequest = (opts = {}, data = {}) => {
	if (!opts.url) {
		console.error('!url');
		return false;
	}
	const url = 'http://192.168.1.27:8860' + opts.url;
	// 在pinia仓库里面获取token
	const token = userStore().token;
	const method = opts.method || 'GET';
	const header = {
		token,
		'X-Requested-With': 'XMLHttpRequest',
		"Accept": "application/json",
		'Content-Type': 'application/json; charset=UTF-8'
	}
	// 如果请求方式为GET删除Accept请求头
	if (method === 'GET') {
		Reflect.deleteProperty(header, 'Accept')
	}
	// 如果token不存在删除token请求头
	if (!token) {
		Reflect.deleteProperty(header, 'token')
	}
	/* 前置操作 */
	const httpDefaultOpts = {
		url,
		data,
		method,
		header,
		dataType: 'json',
		timeout: 10000
	};
	/* 后置操作 */
	const promise = new Promise((resolve, reject) => {
		uni.request(httpDefaultOpts).then(
		(res) => {
			const {
				code = 500, data = null, message = '网络错误，请稍后再试'
			} = res?.data || {};
			switch(code) {
				case 200:
					resolve(data)
					break;
				case 401:
					uni.clearStorageSync();
					uni.navigateTo({
						url: '/pages/login/index'
					})
					reject(message)
					break;
				default: 
					uni.showToast({
						title: message,
						icon: 'none'
					})
					reject(message)
					break;
			}
		}).catch((err) => {
			reject(err)
		})
	})
	return promise;
}

export default httpTokenRequest;