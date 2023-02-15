function regex(
	{phone=null,verificationCode=null,inviteCode=null}
	) {
	// 手机号码
	const pattern = /^1[3-9]\d{9}$/;
	// 6位数字类型
	const codePatttern = /^\d{6}$/;
	
	if(inviteCode != null) {
		if (inviteCode.length !== 6) {
				uni.showToast({
					title:"请输入正确邀请码",
					icon:"error"
				})
				return false
			}
	}
	if(phone != null) {
		if (!pattern.test(phone)) {
				uni.showToast({
					title:"请输入正确手机号码",
					icon:"error"
				})
				return false
			}
	}
	if(verificationCode != null) {
		if (!codePatttern.test(verificationCode)) {
				uni.showToast({
					title:"请输入正确验证码",
					icon:"error"
				})
				return false
			}
	}
	
	return true
}

export default regex