<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack()"></view>
				<view class="title">兑换券</view>
				<view class="titleText" @click="changePath('/pages/user/management/goldExchange',{})">黄金兑换</view>
			</view>
		</view>
		<view class="context">
			<view class="cart">
				<view class="exchangeInfo">
					<text>兑换券</text>
					<text style="font-size: 40rpx;font-weight: 800;padding-top: 10rpx;">{{PjUserInfo.vouchers}}</text>
				</view>
			</view>
			<view class="cart">
				<view class="plantTrees">
					<text>兑换种树积分</text>
					<u-input 
						v-model="countNum" 
						type="number" 
						:border="false" 
						input-align="right"
						placeholder="请输入积分"
						 />
				</view>
				<view class="exchange">
					<text>需要兑换券</text>
					<text>{{countNum || 0}}</text>
				</view>
			</view>
			<view class="cart" style="padding: 0 10rpx;">
				<u-input v-model="payPassword" type="password" placeholder="请输入支付密码" height="84" :border="false" />
			</view>
			<view class="btn">确认兑换</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";
	import {
		changePath,
		navigateBack
	} from "@/utils/navigate.js"
	import {findPjUserInfo} from "@/api/project.js"
	const countNum = ref(null)
	const payPassword = ref(null)
	const PjUserInfo = reactive({
		frozenVouchers: 0,
		id: 0,
		isTreeUnionPackage: false,
		manageIntegral: 0,
		platformCode: null,
		treeCount: 0,
		uid: 0,
		vouchers: 0,
		vrank: "v0"
	})
	findPjUserInfo().then(res => {
		Object.assign(PjUserInfo,res)
	})
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FBFBFB;
		position: relative;

		.context {
			padding: 0 32rpx;
			margin-top: -140rpx;

			.btn {
				width: 686rpx;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				background: #24743C;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 54rpx;
			}

			.exchange {
				font-size: 28rpx;
				font-weight: 400;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 22rpx 30rpx;
			}

			.plantTrees {
				padding: 16rpx 30rpx;
				font-size: 28rpx;
				font-weight: 400;
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid rgba(112, 112, 112, 0.13);
			}

			.exchangeInfo {
				padding: 42rpx 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
			}

			.cart {
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				margin-bottom: 24rpx;
			}
		}
	
	.tabBox {
			width: 100%;
			height: 354rpx;
			background: #24743C;
			font-weight: 800;
			color: #F5F5F5;
			font-size: 32rpx;
			padding: 0 32rpx;

			.tabBoxs {
				display: flex;
				align-items: center;
				padding-top: 112rpx;

				.title {
					margin-left: 260rpx;
					margin-right: 160rpx;
				}
			}

			.arrowsBg {
				// transform: rotate(180deg);
				width: 25rpx;
				height: 48rpx;
				background: url("@/static/img/arrows.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>
