<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">退货/款</view>
		<view class=""></view>
	</view>
	<view class="empty">
		暂无订单
	</view>
</template>

<script setup>
	
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss">
	
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
	.empty {
		margin-top: 58rpx;
		text-align: center;
		font-size: 28rpx;
		color: #8B8B8B;
	}
</style>
