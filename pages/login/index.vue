<template>
	<view class="box">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
		</view>
		<view class="context">
			<view class="loginBg" v-if="type === 0"></view>
			<view class="registerTitle">{{typeName}}</view>
			<view class="userForm" v-if="type === 0">
				<view class="userItem flex-space-between">
					<u-input v-model="userForm.phone" height=96 placeholder="手机号码" />
				</view>
				<view class="userItem flex-space-between">
					<u-input v-model="userForm.password" type="password" height=96 placeholder="密码" />
				</view>
				<view class="agreement" v-if="type === 0">
					<u-checkbox-group width="45rpx">
						<u-checkbox @change="checkboxChange" v-model="agreement.checked" :name="agreement.name"
							shape="circle" iconSize="24"></u-checkbox>
					</u-checkbox-group>
					<text>登录即代表阅读并同意用户协议与隐私政策</text>
				</view>
			</view>
			<view class="userForm" v-if="type === 1">
				<view style="font-size: 24rpx;font-weight: 400;color: #747474;">请先验证身份</view>
				<view class="userPhone">+86 {{userForm.phone}}</view>
				<view class="userItem flex-space-between position-relative">
					<u-input v-model="userForm.code" height=96 placeholder="验证码" />
					<view class="code">
						<u-button :disabled="isDisabled" hover-class="none" :custom-style="customStyle"
							@click="setTimer">
							{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}
						</u-button>
					</view>
				</view>
			</view>
			<view class="userForm" v-if="type === 2">
				<view class="userPhone">+86 {{userForm.phone}}</view>
				<view class="userItem flex-space-between">
					<u-input v-model="userForm.newPassword" height=96 placeholder="输入密码" />
				</view>
				<view class="userItem flex-space-between">
					<u-input v-model="userForm.twicePassword" height=96 placeholder="再次输密码" />
				</view>
			</view>
			<view class="userForm" v-if="type === 3">
				<view class="userItem flex-space-between">
					<u-input v-model="userForm.phone" height=96 placeholder="手机号码" />
				</view>
				<view class="userItem flex-space-between position-relative">
					<u-input v-model="userForm.code" height=96 placeholder="验证码" />
					<view class="code">
						<u-button :disabled="isDisabled" hover-class="none" :custom-style="customStyle"
							@click="setTimer">
							{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}
						</u-button>
					</view>
				</view>
			</view>
			<view class="userForm" v-if="type === 4">
				<view style="font-size: 24rpx;font-weight: 400;color: #747474;">请先验证身份</view>
				<view class="userPhone">+86 {{userForm.phone}}</view>
				<view class="userItem flex-space-between position-relative">
					<u-input v-model="userForm.code" height=96 placeholder="验证码" />
					<view class="code">
						<u-button :disabled="isDisabled" hover-class="none" :custom-style="customStyle"
							@click="setTimer">
							{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}
						</u-button>
					</view>
				</view>
			</view>
			<view class="userForm" v-if="type === 5">
				<view class="userItem flex-space-between">
					<u-input v-model="userForm.phone" height=96 placeholder="手机号码" />
				</view>
			</view>
			<view class="nextBtn" @click="changeInp">{{type == 0? '登录' : '确定'}}</view>
			<view class="retrieve-password" v-if="type === 0" 
				@click="changePath('index',{typeId: 5})">找回密码</view>
			<view class="register" v-if="type === 0">还没有账号？<text @click="changePath('register',{})"
					style="color: #1C6732;">立即注册</text></view>
		</view>
	</view>
</template>

<script setup>
	import {changePath} from "@/utils/navigate.js"
	import {
		computed,
		reactive,
		ref
	} from "vue";
	import {
	    onLoad
	  } from "@dcloudio/uni-app";
	import _ from 'lodash'
	import {login,info,sendCode,verificationCode,findBackPwd} from "@/api/user.js"
	import {userStore} from "@/store/index.js"
	import {phoneRegex,pawRegex,inviteCodeRegex,comparison} from "@/utils/regex.js"
	let customStyle = {
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
	const userForm = reactive({
		phone: '',
		newPassword: '',
		code: ''
	})
	// type值类型 登录(0)  修改密码(1) 设置新密码(2) 绑定手机号(3) 更换手机号(4) 请输入手机号码(5)
	const type = ref(0)
	onLoad((option) => {
		type.value = option?.typeId ? +(option.typeId) : 0
	})
	const typeName = computed(() => {
		switch (type.value) {
			case 0:
				return '登录'
				break;
			case 1:
				return '修改密码'
				break;
			case 2:
				return '设置新密码'
				break;
			case 3:
				return '绑定手机号'
				break;
			case 4:
				return '更换手机号'
				break;
			case 5:
				return '请输入手机号码'
				break;
		}
	})
	const isDisabled = ref(false)
	const codeNumber = ref(60)
	const setTimer = _.throttle(() => {
		if(codeNumber.value === 60)
		if(userForm.phone != "") {
			sendCode(userForm).then(() => {
				uni.showToast({
					title: "发送成功",
					icon:"success"
				})
			})
		}
		let timer = setInterval(() => {
			codeNumber.value--
			isDisabled.value = true
			if (codeNumber.value == 0) {
				clearInterval(timer)
				codeNumber.value = 60
				isDisabled.value = false
			}
		}, 1000)
	}, 500)
	const changeInp = () => {
		if(type.value === 5) {
			// 找回密码逻辑
			if(phoneRegex(userForm.phone))
			// changePath('index',{typeId: 1})
			type.value = 1
		} else if(type.value === 1) {
			if(inviteCodeRegex(userForm.code,"验证码"))
			verificationCode(userForm).then(res => {
				// changePath('index',{typeId: 2})
				type.value = 2
			})
		} else if (type.value === 2) {
			// 校验密码格式
			if(pawRegex(userForm.newPassword))
			// 判断两次密码是否一致
			if(comparison(userForm.newPassword,userForm.twicePassword))
			findBackPwd(userForm).then(res => {
				uni.showToast({
					title:"修改成功",
					icon:"success"
				})
				type.value = 0
			}, err => {
				uni.showToast({
					title:"修改失败",
					icon:"error"
				})
				type.value = 5
			})
		}
		 else if(type.value === 0) {
			// 登录的逻辑
			if(phoneRegex(userForm.phone))
			if(pawRegex(userForm.password)) {
				if (!agreement.checked) {
					return uni.showToast({
						title: "请勾选协议",
						icon: "error"
					})
				}
				login(userForm).then(res => {
					userStore().setToken(res)
					info().then(res => {
						userStore().userInfo = res
					})
					uni.switchTab({
						url:'/pages/home/index'
					})
				}).catch(err => {
					uni.showToast({
						title:err,
						icon:"error"
					})
				})
			}
		}
	}
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	const agreement = reactive({
		name: 'agreement',
		disabled: false,
		checked: false
	})
	const checkboxChange = (e) => {
		console.log(e);
	}
</script>

<style lang="scss" scoped>
	.context {
		width: 100%;
		padding: 60rpx 60rpx 0;

		.position-relative {
			position: relative;
		}

		.code {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 30rpx;
		}

		.userPhone {
			padding: 36rpx 0;
			font-size: 32rpx;
			font-weight: 800;
			color: #030303;
		}

		.retrieve-password {
			padding-top: 36rpx;
			font-size: 24rpx;
			font-weight: 400;
			text-align: right;
		}

		.register {
			padding: 200rpx 0 100rpx;
			text-align: center;
			font-size: 24rpx;
			font-weight: 400;
			color: #757575;
		}

		.nextBtn {
			margin: 40rpx auto;
			width: 630rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background: #1C6732;
			border-radius: 50rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			// margin-top: 250rpx;
		}

		.loginBg {
			margin: 0rpx auto;
			width: 160rpx;
			height: 160rpx;
			background: url("@/static/img/loginBg.png") 100% no-repeat;
			background-size: 100% 100%;
		}

		.agreement {
			width: 100%;
			padding: 30rpx 0;
			font-size: 20rpx;
			font-weight: 800;
			color: #000000;
			display: flex;
			align-items: center;
		}

		.registerTitle {
			// padding-bottom: 20rpx;
			padding: 80rpx 0 20rpx;
			font-size: 48rpx;
			font-weight: 800;
			color: #030303;
		}

		.userItem {
			width: 100%;
			height: 96rpx;
			background: rgba(233, 233, 233, 0.48);
			border-radius: 48rpx;
			margin-bottom: 20rpx;
			padding: 0 38rpx;

			.ItemBg {
				margin-right: 24rpx;
			}
		}
	}

	.flex-space-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		display: flex;
		align-items: flex-end;

		.arrowsBg {
			transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrowsBg.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
