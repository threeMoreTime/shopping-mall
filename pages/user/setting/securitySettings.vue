<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">{{typeName}}</view>
			<view class=""></view>
		</view>
		<view class="box">
			<view class="dataForm" v-if="type === 0">
				<u-cell-group :style="{'border-radius': '20px'}">
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入旧的手机号码" :custom-style="customStyle"
							v-model="dataform.oldPhone" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入新的手机号码" :custom-style="customStyle"
							v-model="dataform.newPhone" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false"
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请输入验证码" :custom-style="customStyle"
							v-model="dataform.verificationCode" />
						<view class="code">
							<u-button :disabled="isDisabled" hover-class="none" :custom-style="customCodeStyle"
								@click="setTimer({typeByPaw: 'phone'})">
								{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}
							</u-button>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<view class="dataForm" v-if="type === 1">
				<u-cell-group>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入原密码" :custom-style="customStyle"
							v-model="dataform.oldPassword" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入新的密码" :custom-style="customStyle"
							v-model="dataform.newPassword" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false"
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请再次输入新的密码" :custom-style="customStyle"
							v-model="dataform.newPassword2" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false"
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请输入验证码" :custom-style="customStyle"
							v-model="dataform.verificationCode" />
						<view class="code">
							<u-button :disabled="isDisabled" hover-class="none" :custom-style="customCodeStyle"
								@click="setTimer({typeByPaw: 'paw'})">
								{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}
							</u-button>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<view class="dataForm" v-if="type === 2">
				<u-cell-group>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入原密码" :custom-style="customStyle"
							v-model="dataform.oldPassword" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入新的密码" :custom-style="customStyle"
							v-model="dataform.newPassword" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false"
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请再次输入新的密码" :custom-style="customStyle"
							v-model="dataform.newPassword2" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false"
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请输入验证码" :custom-style="customStyle"
							v-model="dataform.verificationCode" />
						<view class="code">
							<u-button :disabled="isDisabled" hover-class="none" :custom-style="customCodeStyle"
								@click="setTimer({typeByPaw: 'paw'})">
								{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}
							</u-button>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-button @click="save" hover-class="none" :hair-line="false" :custom-style="customBtnStyle">保存</u-button>
		</view>
	</view>
</template>

<script setup>
	import {
		phoneRegex,
		pawRegex,
		payPwdRegex
	} from "@/utils/regex.js"
	import {
		updateBindingPhone,
		updatePwd,
		sendCode,
		updatePayPwd
	} from "@/api/user.js"
	import {
		userStore
	} from "@/store/index.js"
	import {
		changePath
	} from "@/utils/navigate.js"
	import _ from 'lodash'
	let customStyle = {
		'background': '#FFF',
		'font-size': '28rpx',
		'font-weight': '500',
	}
	let customCodeStyle = {
		'width': '144rpx',
		'line-height': '46rpx',
		'text-align': 'center',
		'height': '46rpx',
		'background': '#000000',
		'border-radius': '24rpx',
		'font-size': '20rpx',
		'font-weight': '400',
		'color': '#FFFFFF',
	}
	let customBtnStyle = {
		'margin-top': '104rpx',
		'height': '80rpx',
		'background': '#1C6732',
		'border-radius': '16rpx',
		'font-size': '28rpx',
		'font-weight': '500',
		'color': '#FFFFFF'
	}
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		computed,
		reactive,
		ref
	} from "vue";

	const dataform = reactive({
		oldPhone: '',
		newPhone: '',
		verificationCode: '',
		oldPassword: '',
		newPassword: '',
		newPassword2: '',
	})

	const isDisabled = ref(false)
	const codeNumber = ref(60)

	const setTimer = _.throttle(({
		typeByPaw
	}) => {
		let phone = typeByPaw === 'paw' ? userStore().userInfo.phone : dataform.newPhone
		if (phoneRegex(phone) && codeNumber.value === 60) {
			let timer = setInterval(() => {
				codeNumber.value--
				isDisabled.value = true
				if (codeNumber.value === 0) {
					clearInterval(timer)
					codeNumber.value = 60
					isDisabled.value = false
				}
			}, 1000)
			sendCode({
					phone
				})
				.then(res => {
					uni.showToast({
						title: "发送成功",
						icon: "success"
					})
				})
				.catch(err => {
					clearInterval(timer)
					uni.showToast({
						title: err,
						icon: 'error'
					})
				})
		}
	}, 500)

	onLoad((option) => {
		// console.log(option)
		type.value = option?.typeId ? parseInt(option.typeId) : 0
	})

	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 当前页面的类型
	const type = ref(0)
	// 当前页面的类型名称
	const typeName = computed(() => {
		switch (type.value) {
			case 0:
				return '换绑手机号'
				break;
			case 1:
				return '修改密码'
				break;
			case 2:
				return '修改支付密码'
				break;
		}
	})

	const actions = {
		0: {
			fn: updateBindingPhone,
			successMessage: "绑定手机号修改成功",
			regex: phoneRegex
		},
		1: {
			fn: updatePwd,
			successMessage: "登录密码修改成功",
			regex: pawRegex
		},
		2: {
			fn: updatePayPwd,
			successMessage: "支付密码修改成功",
			regex: payPwdRegex
		}
	};

	const save = () => {
		const action = actions[type.value];
		const {
			fn,
			successMessage,
			regex
		} = action;
		let regexObj = {}
		if (type.value == 0) {
			regexObj = dataform.newPhone
		} else {
			regexObj = dataform.newPassword
		}

		if (regex && !regex(regexObj)) {
			return;
		}

		fn(dataform).then(
			() => {
				uni.showToast({
					title: successMessage,
					icon: "success"
				});
				uni.clearStorageSync();
				if (!fn == 'updatePayPwd') {
					changePath("/pages/login/index", {
						typeId: 0
					});
				} else {
					uni.navigateBack({
						delta: 1
					})
				}
			},
			(err) => {
				uni.showToast({
					title: err,
					icon: "error"
				});
			}
		);
	};


	// const save = () => {
	// 	if (type.value == 0) {
	// 		updateBindingPhone(dataform).then(res => {
	// 			uni.showToast({
	// 				title: "修改成功",
	// 				icon: "success"
	// 			})
	// 			uni.clearStorageSync()
	// 			changePath('/pages/login/index', {
	// 				typeId: 0
	// 			})
	// 		}, () => {
	// 			uni.showToast({
	// 				title: "修改失败",
	// 				icon: "error"
	// 			})
	// 		})
	// 	} else if (type.value == 1) {
	// 		if (pawRegex(dataform.newPassword))
	// 			updatePwd(dataform).then(res => {
	// 				uni.showToast({
	// 					title: "修改成功",
	// 					icon: "success"
	// 				})
	// 				uni.clearStorageSync()
	// 				changePath('/pages/login/index', {
	// 					typeId: 0
	// 				})
	// 			}, () => {
	// 				uni.showToast({
	// 					title: "修改失败",
	// 					icon: "error"
	// 				})
	// 			})
	// 	} else {
	// 		updatePayPwd(dataform).then(res => {
	// 			uni.showToast({
	// 				title: "修改成功",
	// 				icon: "success"
	// 			})
	// 			uni.clearStorageSync()
	// 			changePath('/pages/login/index', {
	// 				typeId: 0
	// 			})
	// 		}, () => {
	// 			uni.showToast({
	// 				title: "修改失败",
	// 				icon: "error"
	// 			})
	// 		})
	// 	}
	// }
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #EFEFEF;
		position: relative;
	}

	.u-cell-item-box {
		border-radius: 20rpx;
	}

	.code {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 34rpx;
	}

	.box {
		padding: 32rpx;
	}

	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		.title {
			font-size: 32rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-bottom: 6rpx;
		}

		.arrowsBg {
			// transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
