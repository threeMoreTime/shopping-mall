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
							<u-button 
								:disabled="isDisabled" 
								hover-class="none" 
								:custom-style="customCodeStyle"
								@click="setTimer">
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
							v-model="dataform.phone" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入新的密码" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" 
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请再次输入新的密码" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-cell-item>
				</u-cell-group>
			</view>
			<view class="dataForm" v-if="type === 2">
				<u-cell-group>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入原密码" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" :style="{'padding':'10rpx 26rpx'}">
						<u-input height="68" placeholder="请输入新的密码" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-cell-item>
					<u-cell-item hover-class="none" :arrow="false" 
						:style="{'padding':'10rpx 26rpx','position':'relative'}">
						<u-input height="68" placeholder="请再次输入新的密码" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-cell-item>
				</u-cell-group>
			</view>
			<u-button @click="save" hover-class="none" :hair-line="false" :custom-style="customBtnStyle">保存</u-button>
		</view>
	</view>
</template>

<script setup>
	import { updateBindingPhone } from "@/api/user.js"
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
	const isDisabled = ref(false)
	const codeNumber = ref(60)
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
	onLoad((option) => {
		// console.log(option)
		type.value = option?.typeId ? parseInt(option.typeId) : 0
	})
	const dataform = reactive({
		oldPhone: '',
		newPhone: '',
		verificationCode: 914262
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
	
	// updateBindingPhone
	const save = () => {
		console.log("dataform: ",dataform)
		if(dataform.oldPhone.length == 0){
			uni.showToast({
				title: '旧手机号不能为空！',
				icon:'error'
			})
			return false
		}if(dataform.newPhone.length == 0){
			uni.showToast({
				title: '新手机号不能为空！',
				icon:'error'
			})
			return false
		}if(dataform.oldPhone.length == 0){
			uni.showToast({
				title: '验证码不能为空！',
				icon:'error'
			})
			return false
		}
		updateBindingPhone(dataform).then(res => {
			uni.showToast({
				title: '换绑成功！',
				icon:"success"
			})
		}).catch(err => {
			uni.showToast({
				title: err,
				icon:'error'
			})
		})
	}
	
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
