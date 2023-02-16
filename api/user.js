import request from "@/utils/request.js"

// 退出登录
export const logout = () => {
	return request({
		url: '/client/user/logout',
		method: 'GET'
	})
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

// 修改密码
export const updatePwd = (data) => {
	return request({
		url: '/client/user/updatePwd',
		method: 'POST'
	}, data)
}

// 验证验证码是否正确
export const verificationCode = (data) => {
	return request({
		url: '/client/user/verificationCode',
		method: 'POST'
	}, data)
}

// 修改用户信息
export const updateUserInfo = (data) => {
	return request({
		url: '/client/user/updateUserInfo',
		method: 'POST'
	}, data)
}

// 修改用户信息
export const updateBindingPhone = (data) => {
	return request({
		url: '/client/user/updateBindingPhone',
		method: 'POST'
	}, data)
}
