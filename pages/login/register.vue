<template>
	<view class="box">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
		</view>
		<view class="registerTitle">注册</view>
		<view class="userForm" v-show="isNext === 0">
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="man-add" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.account" height=96 placeholder="请输入账号" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="man-add" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.InvitationCode" height=96 placeholder="请输入推荐码" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="account" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.name" height=96 placeholder="请输入姓名" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="account" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.idcard" height=96 type="idcard" placeholder="请输入身份证号" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="phone" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.phone" height=96 type="number" placeholder="请输入手机号码" />
			</view>
			<view class="userItem position-relative">
				<view class="flex-space-between">
					<view class="ItemBg">
						<u-icon name="lock" size="32"></u-icon>
					</view>
					<u-input v-model="userForm.code" height=96 type="number" placeholder="请输入验证码" />
				</view>
				<view class="code">
					<u-button :disabled="isDisabled" hover-class="none" :custom-style="customStyle" @click="setTimer">
						{{codeNumber == 60? '发送验证码' : codeNumber + '秒'}}</u-button>
				</view>
			</view>
		</view>
		<view class="userForm" v-show="isNext === 1">
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="lock" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.password" type="password" height=96 placeholder="请输入登录密码" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="lock" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.againPassword" type="password" height=96 placeholder="请再次输入登录密码" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="lock" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.payPassword" type="password" height=96 placeholder="请输入支付密码" />
			</view>
			<view class="userItem flex-space-between">
				<view class="ItemBg">
					<u-icon name="lock" size="32"></u-icon>
				</view>
				<u-input v-model="userForm.againPayPassword" type="password" height=96 placeholder="请再次输入支付密码" />
			</view>
		</view>
		<view class="agreement" v-show="isNext === 1">
			<u-checkbox-group width="45rpx">
				<u-checkbox 
					@change="checkboxChange" 
					v-model="agreement.checked"
					:name="agreement.name"
					shape="circle"
					iconSize="24"
				></u-checkbox>
			</u-checkbox-group>
			<text>登录即代表阅读并同意用户协议与隐私政策</text>
		</view>
		<view class="nextBtn" @click="changeInp">{{changeInpName}}</view>
	</view>
</template>

<script setup>
	import _ from 'lodash'
	import {
		reactive,
		ref
	} from "vue";
	const isNext = ref(0)
	const agreement = reactive({
		name: 'agreement',
		disabled: false,
		checked: false
	})

	const checkboxChange = (e) => {
		console.log(e);
	}
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
		account: '',
		code: '',
		name: '',
		idcard: '',
		phone: '',
		InvitationCode: '',
		password: '',
		againPassword: '',
		payPassword: '',
		againPayPassword: ''
	})
	const codeNumber = ref(60)
	const isDisabled = ref(false)
	const setTimer = _.throttle(() => {
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
	const changeInpName = ref('下一步')
	const changeInp = () => {
		if(isNext.value === 0) {
			isNext.value = 1
			changeInpName.value = '立即注册'
		}
		// 在这发请求
		if(isNext.value === 1) {
			
		}
	}
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped>
	.box {
		padding-bottom: 100rpx;
	}
	.agreement {
		width: 100%;
		padding-bottom: 40rpx;
		font-size: 20rpx;
		font-weight: 400;
		color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.nextBtn {
		margin: 0 auto;
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

	.code {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 30rpx;
	}

	.position-relative {
		position: relative;
	}

	.userForm {
		padding: 0 60rpx;
		padding-bottom: 250rpx;
	}

	.flex-space-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
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

	.registerTitle {
		padding: 34rpx 60rpx 100rpx;
		font-size: 48rpx;
		font-weight: 800;
		color: #030303;
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
