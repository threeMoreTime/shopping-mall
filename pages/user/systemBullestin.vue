<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">系统公告</view>
		<view class=""></view>
	</view>
	<view class="card">
		<view class="cardHead">
			<view class="head">
				<view class="title">热烈庆祝3.0版本上线</view>
				<view class="time">2023-01-03 09:50:35</view>
			</view>
			<view class="content">123456789123456789</view>			
		</view>
		<view class="footer" @click="changePath('/pages/user/bullestinDetails')">
			<view class="btn">查看详情</view>
			<u-icon name="arrow-right" size="15" color="#D1D1D1"></u-icon>			
		</view>
	</view>
</template>

<script setup>
	import { reactive, toRefs } from 'vue'
	
	const changePath = (path) => {
		uni.navigateTo({
			url: path
		})
	}
	
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
	
	.card {
		margin: 26rpx 38rpx;
		padding: 22rpx 30rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		
		::v-deep .u-icon__icon {
			top: 8rpx !important;
		}
		
		.cardHead {
			border-bottom: 2rpx solid rgba(0,0,0,0.13) ;
		}
		
		.head {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		
		.title {
			font-size: 32rpx;
			font-weight: 400;
			color: #0F0F0F;
		}
		
		.time {
			font-size: 20rpx;
			color: #929292;
		}
		
		.content {
			margin-top: 22rpx;
			padding-bottom: 10rpx;
			font-size: 24rpx;
			color: #0F0F0F;
		}
		
		.btn {
			margin-top: 16rpx;
			font-size: 20rpx;
			color: #929292;
		}
		
		.footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
