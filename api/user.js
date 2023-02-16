import request from "@/utils/request.js"

// 验证验证码
export const verificationCode = (data) => {
	return request({
		url: '/client/user/verificationCode',
		method: 'POST'
	}, data)
}

// 手机号码注册
export const register = (data) => {
	return request({
		url: '/client/user/register',
		method: 'POST'
	}, data)
}

// 发送短信登录验证码
export const sendCode = (data) => {
	return request({
		url: '/client/user/sendCode',
		method: 'GET'
	}, data)
}

// 账号密码登录
export const login = (data) => {
	return request({
		url: '/client/user/login',
		method: 'POST'
	}, data)
}

// 获取用户详情
export const info = () => {
	return request({
		url: '/client/user/info',
		method: 'GET'
	})
}