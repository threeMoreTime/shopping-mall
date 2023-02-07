<template>
	<view class="title">店铺信息</view>
	<uni-form :label-width="200">
		<view class="card">
			<uni-form-item></uni-form-item>
			<uni-form-item></uni-form-item>			
		</view>
	</uni-form>
	<view class="btn">
		<button type="primary">申请店铺</button>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss">
	
	.title {
		padding: 18rpx 0 0 32rpx;
		font-size: 24rpx;
	}
	
	
	.card {
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		opacity: 0.43;
	}
	
	.btn {
		width: 100%;
		padding: 32rpx;
		position: absolute;
		bottom: 0;
		
		::v-deep uni-button {
			height: 72rpx;
			line-height: 72rpx;
			background: #24743C;
			border-radius: 16rpx;
		}
	}
</style>
