<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">账户提现</view>
			<view class=""></view>
		</view>
		<view class="context">
			<view class="box">
				<view class="topBox">
					<text>我的资产</text>
					<text>账户余额(元)</text>
					<text class="text-color-red">￥0.00</text>
					<text class="text-color-gray" @click="changePath('/pages/transaction/index')">交易明细</text>
				</view>
				<view class="bottomBox">
					<view class="topBox">
						<text>交易中金额(元)</text>
						<text class="text-color-red">￥0.00</text>
					</view>
					<view class="topBox">
						<text>可提现金额(元)</text>
						<text class="text-color-red">￥0.00</text>
						<view class="btn" @click="changePath('/pages/user/application')">提现</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 路由跳转
	const changePath = (path,id) => {
		if (path) {
			uni.navigateTo({
				url: id? path + '?typeId=' + id : path
			})
		}
	}
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.btn {
		padding: 8rpx 32rpx;
		background: #E10000;
		border-radius: 26rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #FFFFFF;
	}
	.bottomBox {
		display: flex;
		justify-content: space-between;
	}
	.topBox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.text-color-gray {
		color: #959595;
		text-decoration: underline;
	}
	.text-color-red {
		font-size: 48rpx;
		font-weight: 800;
		color: #E10000;
	}
	.box {
		font-weight: 400;
		font-size: 28rpx;
		color: #0A0A0A;
		padding: 40rpx 60rpx;
		width: 686rpx;
		height: 530rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		text {
			padding-bottom: 16rpx;
		}
	}
	.context {
		padding: 0 32rpx;
		margin-top: 24rpx;
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
