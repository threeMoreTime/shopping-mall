// 手机号码
const pattern = /^1[3-9]\d{9}$/;
// 6位数字类型
const codePatttern = /^\d{6}$/;
// 身份证
const idCardpattern = /^([1-9]\d{5}(18|19|([23]\d))\d{2}(0\d|1[012])(0\d|[12]\d|3[01])\d{3}[0-9Xx])$/;
// 密码校验
const pawPatttern = /^[a-zA-Z]\w{5,17}$/;

// 两次内容对比
export const comparison = (first, second) => {
	if (first !== second) {
		uni.showToast({
			title: "两次密码不一致",
			icon: "error"
		})
		return false
	}
	return true
}

// 非空校验
export const empty = (emptyStr, strName) => {
	if (emptyStr == "") {
		uni.showToast({
			title: strName + "不能为空",
			icon: "error"
		})
		return false
	}
	return true
}

export const pawRegex = (password) => {
	if (!pawPatttern.test(password)) {
		uni.showToast({
			title: "密码必须以字母开头，长度在6~18之间，只能包含字符、数字和下划线",
			icon: "error"
		})
		return false
	}
	return true
}

export const idCardRegex = (idCard) => {
	if (!idCardpattern.test(idCard)) {
		uni.showToast({
			title: "请输入正确身份证",
			icon: "error"
		})
		return false
	}
	return true
}

export const phoneRegex = (phone) => {
	if (!pattern.test(phone)) {
		uni.showToast({
			title: "请输入正确手机号码",
			icon: "error"
		})
		return false
	}
	return true
}

export const inviteCodeRegex = (inviteCode,strName) => {
	if (inviteCode.length !== 6) {
		uni.showToast({
			title: "请输入6位" + strName,
			icon: "error"
		})
		return false
	}
	return true
}

export const verificationRegex = (verificationCode) => {
	if (!codePatttern.test(verificationCode)) {
		uni.showToast({
			title: "请输入正确验证码",
			icon: "error"
		})
		return false
	}
	return true
}

// function regex({
// 	phone = null,
// 	verificationCode = null,
// 	inviteCode = null
// }) {



// 	if (inviteCode != null) {
// 		if (inviteCode.length !== 6) {
// 			uni.showToast({
// 				title: "请输入正确邀请码",
// 				icon: "error"
// 			})
// 			return false
// 		}
// 	}
// 	if (phone != null) {
// 		if (!pattern.test(phone)) {
// 			uni.showToast({
// 				title: "请输入正确手机号码",
// 				icon: "error"
// 			})
// 			return false
// 		}
// 	}
// 	if (verificationCode != null) {
// 		if (!codePatttern.test(verificationCode)) {
// 			uni.showToast({
// 				title: "请输入正确验证码",
// 				icon: "error"
// 			})
// 			return false
// 		}
// 	}

// 	return true
// }
