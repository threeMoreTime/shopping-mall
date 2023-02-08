<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">公告详情</view>
		<view class=""></view>
	</view>
	<view class="card">
		<view class="title">热烈祝贺3.0版本上线</view>
		<view class="content">热烈祝贺3.0版本上线</view>
		<view class="time">2023-01-03  09:50:35</view>
	</view>
</template>

<script setup>
	
	const navigateBack =() => {
		uni.navigateBack({
			delta: 1
		})
	}
	
</script>

<style lang="scss" scoped>
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
	
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 26rpx 38rpx;
		padding: 22rpx 0 48rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		
		.title {
			text-align: center;
			font-size: 32rpx;
			color: #0F0F0F;
		}
		
		.content {
			margin: 28rpx 0;
			text-align: center;
			font-size: 24rpx;
		}
		
		.time {
			text-align: center;
			font-size: 20rpx;
			color: #929292;
		}
	}

</style>
