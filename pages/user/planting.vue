<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">沉香树兑换</view>
			<view class=""></view>
		</view>
		<view class="tabsBg"></view>
		<view class="context">
			<view class="integral">
				<view class="integralItem">
					<text class="integralTitle">积分余额</text>
					<text class="integralText">17213.37</text>
				</view>
				<view class="integralItem">
					<text class="integralTitle">今日可兑换</text>
					<text class="integralText">0.00</text>
				</view>
				<view class="integralItem">
					<text class="integralTitle">价格</text>
					<text class="integralText">0.00</text>
				</view>
			</view>
			<view class="needIntegral">
				<text class="size-28">需要积分</text>
				<text class="size-28" style="color: #929292;">0</text>
			</view>
			<view class="needIntegral">
				<u-input v-model="password" type="password" height="60" :border="false" />
			</view>
			<view class="statement">手续费: <text style="color: #FF0000;">15%</text></view>
			<view class="btn">确认兑换</view>
		</view>
	</view>
</template>

<script setup>
	import {navigateBack} from "@/utils/navigate.js"
	import { ref } from "vue";
	const password = ref(null)
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.btn {
		margin-top: 90rpx;
		text-align: center;
		line-height: 88rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #FFFFFF;
		width: 686rpx;
		height: 88rpx;
		background: #24743C;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
	}
	.statement {
		padding-left: 10rpx;
		font-size: 22rpx;
		font-weight: 400;
		color: #000;
	}
	.size-28 {
		font-size: 28rpx;
		font-weight: 400;
		color: #000;
	}
	.needIntegral {
		padding: 20rpx 34rpx;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24rpx;
	}
	.integralItem {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.integralTitle {
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
	}
	.integralText {
		font-size: 40rpx;
		font-weight: 800;
		color: #000000;
		margin-top: 10rpx;
	}
	.integral {
		width: 100%;
		padding: 50rpx 34rpx 34rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 22rpx;
	}
	.context {
		padding: 0 32rpx;
		margin-top: -140rpx;
	}
	.tabsBg {
		background: #24743C;
		width: 100%;
		height: 178rpx;
	}
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #24743C;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	
		.title {
			font-size: 32rpx;
			font-weight: 800;
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
}
</style>
