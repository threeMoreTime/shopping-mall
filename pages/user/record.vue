<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">{{typeName}}</view>
			<view class=""></view>
		</view>
		<view class="context">
			<view class="ctxBox" v-if="type === 0">
				<view class="titles">
					<text>状态/时间</text>
					<text>金额/支付方式</text>
				</view>
				<view class="listBox">
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000">已通过</text>
							<text class="text-color">2023-01-03  09:50:35</text>
						</view>
						<text>购物积分</text>
						<view class="flex-col flex-col-end">
							<text class="title-color-000" style="font-weight: bold;">￥10.00</text>
							<text class="text-color">银行卡</text>
						</view>
					</view>
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000 title-color-red">已驳回</text>
							<text class="text-color">2023-01-03  09:50:35</text>
						</view>
						<text>购物积分</text>
						<view class="flex-col flex-col-end">
							<text class="title-color-000" style="font-weight: bold;">￥10.00</text>
							<text class="text-color">银行卡</text>
						</view>
					</view>
				</view>
			</view>
			<view class="ctxBox" v-if="type === 1">
				<view class="titles">
					<text>状态/时间</text>
					<text>价格</text>
					<text>仓单数量</text>
				</view>
				<view class="listBox">
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000 font-weight-bold">1000.00</text>
							<text class="text-color">2023-01-03  09:50:35</text>
						</view>
						<text class="title-price">￥1.00</text>
						<text class="title-price">1000</text>
					</view>
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000 font-weight-bold">890.00</text>
							<text class="text-color">2023-01-03  09:50:35</text>
						</view>
						<text class="title-price">￥1.00</text>
						<text class="title-price">1000</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
	    onLoad
	  } from "@dcloudio/uni-app";
	import { computed, ref } from "vue";
	onLoad((option) => {
		// console.log(option)
		type.value = option?.typeId? parseInt(option.typeId) : 0
	})
	// 当前页面的类型 充值记录(0) 兑换记录(1) 
	const type = ref(0)
	// 当前页面的类型名称
	const typeName = computed(() => {
		switch (type.value) {
			case 0:
				return '充值记录'
				break;
			case 1:
				return '兑换记录'
				break;
		}
	})
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
		background-color: #FBFBFB;
		position: relative;
		.title-color-000 {
			font-size: 28rpx;
			font-weight: 400;
			color: #0F0F0F;
		}
		.title-price {
			font-size: 32rpx;
			font-weight: bold;
			color: #010101;
		}
		.font-weight-bold {
			font-weight: bold;
		}
		.title-color-red {
			color: #C50000;
		}
		.text-color {
			color: #929292;
			margin-top: 10rpx;
		}
		.flex-col {
			display: flex;
			flex-direction: column;
		}
		.flex-col-end {
			align-items: flex-end;
		}
		.listItem {
			width: 100%;
			// height: 102rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
			border-radius: 16rpx;
			margin-bottom: 24rpx;
			padding: 16rpx 24rpx 16rpx 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 20rpx;
			font-weight: 400;
			color: #010101;
		}
		.titles {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 400;
			color: #0F0F0F;
		}
		.listBox {
			padding: 0 4rpx;
			margin-top: 26rpx;
		}
		.ctxBox {
			margin-top: 22rpx;
		}
		.context {
			width: 100%;
			background-color: #FBFBFB;
			padding: 0 28rpx;
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
