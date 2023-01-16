<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">关于我们</view>
			<view class=""></view>
		</view>
		<view class="logoInfo">
			<view class="logoBg"></view>
			<text>智创联盟</text>
			<text style="font-size: 20rpx;color: #757575;">v 3.1.1</text>
		</view>
		<view class="copyright">Copyright©2023 - 上海茂玺集团 版权所有</view>
	</view>
</template>

<script setup>
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
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
	.copyright {
		width: 100%;
		font-size: 20rpx;
		font-weight: 500;
		color: #757575;
		position: absolute;
		top: 60%;
		text-align: center;
	}
	.logoInfo {
		font-size: 28rpx;
		font-weight: 500;
		color: #000000;
		margin-top: 98rpx;
		height: 236rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.logoBg {
		width: 144rpx;
		height: 144rpx;
		background: url("@/static/img/loginBg.png") 100% no-repeat;
		background-size: 100% 100%;
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
