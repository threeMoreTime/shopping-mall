<template>
	<view class="box">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack()"></view>
		</view>
		<view class="context">
			<view class="loginBg"></view>
			<view class="registerTitle">验证码登录</view>
			<view class="userForm">
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
				<view class="agreement">
					<u-checkbox-group width="45rpx">
						<u-checkbox v-model="agreement.checked" :name="agreement.name" shape="circle" iconSize="24">
						</u-checkbox>
					</u-checkbox-group>
					<text>登录即代表阅读并同意用户协议与隐私政策</text>
				</view>
			</view>
			<view class="nextBtn" @click="changeInp">登录</view>
			<view class="retrieve-password" @click="changePath('index',{typeId: 5})">找回密码</view>
			<view class="register" style="color: #1C6732;">
				<text @click="changePath('index',{})" style="color: #1C6732;">密码登录 &nbsp&nbsp&nbsp</text>
				<text @click="changePath('register',{})" style="color: #1C6732;">立即注册</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		changePath,
		navigateBack
	} from "@/utils/navigate.js"
	import {
		computed,
		reactive,
		ref
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import _ from 'lodash'
	import {
		login,
		info,
		sendCode,
		verificationCode,
		findBackPwd
	} from "@/api/user.js"
	import {
		userStore
	} from "@/store/index.js"
	import {
		phoneRegex,
		pawRegex,
		inviteCodeRegex,
		comparison
	} from "@/utils/regex.js"
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
		password: '',
		code: ''
	})
	const agreement = reactive({
		name: 'agreement',
		disabled: false,
		checked: false
	})
	const isDisabled = ref(false)
	const codeNumber = ref(60)
	const setTimer = _.throttle(() => {
		if (codeNumber.value === 60)
			if (phoneRegex(userForm.phone)) {
				sendCode(userForm).then(() => {
					uni.showToast({
						title: "发送成功",
						icon: "success"
					})
				})
				let timer = setInterval(() => {
					codeNumber.value--
					isDisabled.value = true
					if (codeNumber.value == 0) {
						clearInterval(timer)
						codeNumber.value = 60
						isDisabled.value = false
					}
				}, 1000)
			}
	}, 500)
	const changeInp = () => {
		
	}
</script>

<style lang="scss" scoped>
	.flex-space-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
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
