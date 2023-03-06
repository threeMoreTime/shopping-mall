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
			icon: "none"
		})
		return false
	}
	return true
}

export const pawRegex = (password) => {
	if (!pawPatttern.test(password)) {
		uni.showToast({
			title: "密码必须以\n字母开头，\n长度在6~18之间，\n只能包含字符、\n数字和下划线",
			icon: "none"
		})
		return false
	}
	return true
}

export const idCardRegex = (idCard) => {
	if (!idCardpattern.test(idCard)) {
		uni.showToast({
			title: "请输入正确\n身份证",
			icon: "none"
		})
		return false
	}
	return true
}

export const phoneRegex = (phone) => {
	if (!pattern.test(phone)) {
		uni.showToast({
			title: "请输入正确\n手机号码",
			icon: "none"
		})
		return false
	}
	return true
}

export const inviteCodeRegex = (inviteCode,strName) => {
	if (inviteCode.length !== 6) {
		uni.showToast({
			title: "请输入6位\n" + strName,
			icon: "none"
		})
		return false
	}
	return true
}

export const payPwdRegex = (pwd) => {
	if (pwd?.length !== 6 && !codePatttern.test(pwd)) {
		uni.showToast({
			title: "请输入6位数字\n支付密码",
			icon: "none"
		})
		return false
	}
	return true
}

export const verificationRegex = (verificationCode) => {
	if (!codePatttern.test(verificationCode)) {
		uni.showToast({
			title: "请输入正确\n验证码",
			icon: "none"
		})
		return false
	}
	return true
}

// 统一的错误信息封装
export const showToast = (msg, icon) => {
  uni.showToast({
    title: msg,
    icon: icon,
  });
};