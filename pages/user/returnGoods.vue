<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">退货/款</view>
		<view class=""></view>
	</view>
	<view class="card">
		<view class="goods">
			<u-image width="164rpx" height="164rpx" src="../../static/logo.png"></u-image>
			<view class="goodsContent">
				<view class="name">美特斯邦威羽绒服保暖冬季防风保 暖...</view>
				<view class="quantity">
					<text class="underline">￥350.00</text>
					<text>x1</text>
				</view>
				<view class="bold">￥350.00</view>
			</view>			
		</view>
		<view class="state">
			<text class="bold">退款成功</text>
			<text>退款成功￥350元</text>
		</view>
		<view class="footer">
			<view class="btn">删除记录</view>
		</view>
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
	
	.card {
		margin: 42rpx 32rpx;
		padding: 42rpx 32rpx 36rpx 32rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
		border-radius: 20rpx;
		
		.goods {
			display: flex;
			align-items: center;
		}
		
		.goodsContent {
			margin-left: 40rpx;
		}
		
		.name {
			font-size: 28rpx;
			font-weight: 800;
			color: #000000;
		}
		
		.quantity {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 6rpx 0 2rpx 0;
			font-size: 20rpx;
			color: #A8A8A8;
		}
		
		.underline {
			text-decoration: line-through;
		}
		
		.bold {
			font-size: 28rpx;
			font-weight: 800;
			color: #000000;
		}
		
		.state {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 28rpx;
			padding: 8rpx 150rpx 8rpx 62rpx;
			background: #F1F1F1;
		}
		
		.footer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		
		.btn {
			width: 126rpx;
			height: 48rpx;
			margin-top: 44rpx;
			border: 2rpx solid #808080;
			border-radius: 24rpx;
			text-align: center;
			line-height: 46rpx;
			font-size: 20rpx;
			color: #8E8E8E;
		}
	}
	
	.empty {
		margin-top: 58rpx;
		text-align: center;
		font-size: 28rpx;
		color: #8B8B8B;
	}
</style>
