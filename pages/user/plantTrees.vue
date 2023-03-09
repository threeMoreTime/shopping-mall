<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack()"></view>
				<view class="title">种树专区</view>
			</view>
		</view>
		<view class="context">
			<view class="cart" style="margin: 0 auto;">
				<view class="exchangeInfo">
					<text>种树积分</text>
					<text 
						style="font-size: 40rpx;
						font-weight: 800;
						padding-top: 10rpx;">{{userStore().userInfo.plantTreeIntegral ?? 0}}</text>
				</view>
			</view>
			<view class="ListBox">
				<view class="ItemBox cart">
					<view class="plantTreeBg"></view>
					<view class="treeInfo">
						<text style="font-size: 28rpx;">沉香树</text>
						<view style="padding: 10rpx 0;display: flex;align-items: center;">
							<view class="treeIntegral"></view>
							<text style="font-weight: 400;">14521</text>
						</view>
						<text style="font-size: 24rpx;font-weight: 400;color: #C5C5C5;">已售4541</text>
					</view>
					<view class="btn">兑换</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { navigateBack } from "@/utils/navigate.js"
	import { userStore } from "@/store/index.js"
import { reactive, ref } from "vue";
	let pageFrom = {
		page: 1,
		limit: 30
	}
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.context {
		margin-top: -140rpx;
		.treeInfo {
			display: flex;
			flex-direction: column;
			margin-left: 18rpx;
		}
		.treeIntegral {
			margin-right: 8rpx;
			width: 24rpx;
			height: 28rpx;
			background: url("@/static/img/treeIntegral.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.btn {
			color: #FFFFFF;
			font-size: 28rpx;
			width: 160rpx;
			text-align: center;
			height: 56rpx;
			line-height: 56rpx;
			background: #24743C;
			border-radius: 28rpx;
			position: absolute;
			right: 24rpx;
		}
		.plantTreeBg {
			height: 134rpx;
			width: 96rpx;
			background: url("@/static/img/treeBg2.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.ItemBox {
			padding: 34rpx 36rpx;
			margin-bottom: 26rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #0F0F0F;
			display: flex;
			align-items: center;
			position: relative;
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
