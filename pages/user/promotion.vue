<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">推广中心</view>
			<view class="titleText"></view>
		</view>
		<view class="ctxBox">
			<text class="font-weight-800" style="font-size: 56rpx;color: #FFFFFF;">分邀请享好友</text>
			<text class="font-weight-800" style="font-size: 72rpx;color: #FF8800;">一起赚钱一起收益</text>
			<text class="font-weight-800" style="font-size: 28rpx;color: #FF8800;">赚取收益可以相互转换，互相转账</text>
			<view class="QRcode"><image src="@/static/img/QRcode.png" /></view>
			<view class="InvitationCode">
				<text style="font-size: 28rpx;color: #AAAAAA;margin-bottom: 10rpx;">邀请码</text>
				<text style="font-size: 40rpx;color: #000000;">9D2Q34</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {navigateBack} from "@/utils/navigate.js"
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background: url("@/static/img/promotionBg.png") 100% no-repeat;
	background-size: 100% 100%;
	.InvitationCode {
		padding: 20rpx 0;
		width: 100%;
		height: 132rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		font-weight: 400;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.QRcode {
		width: 100%;
		height: 500rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 16rpx;
		image {
			width: 374rpx;
			height: 374rpx;
		}
	}
	.font-weight-800 {
		font-weight: 800;
		margin-bottom: 34rpx;
	}
	.ctxBox {
		margin-top: 36rpx;
		padding: 0 94rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		display: flex;
		align-items: flex-end;
		.titleText {
			font-size: 32rpx;
			font-weight: 800;
			color: #F5F5F5;
			margin-bottom: 6rpx;
			margin-left: 145rpx;
		}
		.title {
			margin-left: 260rpx;
			font-size: 32rpx;
			font-weight: 800;
			color: #F5F5F5;
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
