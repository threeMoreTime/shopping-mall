<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack"></view>
				<view class="title">能量值兑换</view>
				<view class="titleText" @click="changePath('/pages/user/record',1)">兑换记录</view>
			</view>
		</view>
		<view class="ctxBox">
			<view class="item flex-space-between itemText">
				<view class="flex-col">
					<text class="titles">仓单余额</text>
					<text>17213.37</text>
				</view>
				<view class="flex-col">
					<text class="titles">今日可兑换</text>
					<text>0.00</text>
				</view>
				<view class="flex-col">
					<text class="titles">价格</text>
					<text>6.60</text>
				</view>
			</view>
			<view class="item pad-32">
				<view class="itemCtx">
					<text>兑换数量</text>
					<u-input v-model="conversionValue" type="number" :border="false" 
						placeholder="请输数量"
						input-align="right"
						/>
				</view>
				<view class="itemCtx">
					<text>需要仓单</text>
					<text>0</text>
				</view>
			</view>
			<view class="item" style="padding: 10rpx 20rpx;">
				<u-input v-model="payPassword" type="password" :border="false"
					placeholder="请输入支付密码"
					/>
			</view>
			<view class="btn">确认兑换</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	const conversionValue = ref(null)
	const payPassword = ref(null)
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
		margin-top: 54rpx;
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		background: #24743C;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 32rpx;
		text-align: center;
	}
	.itemCtx {
		height: 84rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid rgba(112, 112, 112, 0.13);
	}
	.pad-32 {
		padding: 0 32rpx;
	}
	.titles {
		font-weight: 400;
		font-size: 24rpx;
		color: #000000;
		margin-bottom: 10rpx;
	}
	.flex-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: 800;
		font-size: 40rpx;
		color: #000000;
	}
	.itemText {
		padding: 50rpx 26rpx 34rpx;
	}
	.flex-space-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.ctxBox {
		padding: 0 32rpx;
		position: absolute;
		top: 214rpx;
		.item {
			width: 686rpx;
			// height: 182rpx;
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
		.title {
			margin-left: 60rpx;
		}
		.tabBoxs {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 112rpx;
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
