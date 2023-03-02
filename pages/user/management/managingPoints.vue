<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack()"></view>
				<view class="title">管理积分流水</view>
			</view>
		</view>
		<view class="context">
			<view class="cart" style="margin: 0 auto;">
				<view class="exchangeInfo">
					<text>管理积分</text>
					<text 
						style="font-size: 40rpx;
						font-weight: 800;
						padding-top: 10rpx;">{{PjUserInfo.manageIntegral}}</text>
				</view>
			</view>
			<view class="ListBox">
				<view class="ItemBox cart">
					<view class="ItemBoxCtx">
						<text>联创分红</text>
						<text>-30000.00</text>
					</view>
					<view class="ItemBoxCtx">
						<text style="font-size: 20rpx;color: #929292;font-weight: 400;">2023-01-03  09:50:35</text>
						<text style="font-size: 20rpx;color: #929292;font-weight: 400;">余额：14000.00</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { navigateBack } from "@/utils/navigate.js"
	import { userStore } from "@/store/index.js"
	import { guanlijifen } from "@/api/userRecordMingxi.js"
	import {findPjUserInfo} from "@/api/project.js"
import { reactive } from "vue";
	let pageFrom = {
		page: 1,
		limit: 10
	}
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
	guanlijifen(pageFrom).then(res => {
		console.log(res);
	})
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.context {
		margin-top: -140rpx;
		.ItemBoxCtx {
			padding-bottom: 8rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.ItemBox {
			padding: 12rpx 32rpx 4rpx;
			margin-bottom: 26rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #0F0F0F;
		}
		.ListBox {
			background-color: #FBFBFB;
			padding: 0 32rpx;
			margin-top: 24rpx;
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
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
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
				margin-left: 240rpx;
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
