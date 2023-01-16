<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">积分</view>
			<view class=""></view>
		</view>
		<view class="box">
			<view class="choice">
				<view 
					class="choiceItem" 
					:class="[item.id === choiceIndex? 'choiceItemBg' : '']"
					v-for="item in choiceName"
					:key="item.id"
					@click="changeChoice(item.id)"
					>{{item.name}}</view>
			</view>
			<view class="choiceList" v-show="choiceIndex === 1">
				<view class="choiceListItem">
					<view class="top">
						<text>购买商品</text>
						<text class="price">-30000.00</text>
					</view>
					<view class="bottom">
						<text>2023-01-03  09:50:35</text>
						<text>余额：14000.00</text>
					</view>
				</view>
			</view>
			<view class="choiceList" v-show="choiceIndex === 2">
				<view class="choiceListItem">
					<view class="top">
						<text>联创分红</text>
						<text class="price">-30000.00</text>
					</view>
					<view class="bottom">
						<text>2023-01-03  09:50:35</text>
						<text>余额：14000.00</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	const choiceName = ref([
		{id: 1, name: '购物积分流水'},
		{id: 2, name: '管理积分流水'}
	])
	const choiceIndex = ref(1)
	// 点击改变顶部的样式
	const changeChoice = (index) => {
		choiceIndex.value = index
	}
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
		.box {
			width: 100%;
			background-color: #FBFBFB;
			padding: 0 32rpx;
		}
	}
	.choiceList {
		width: 100%;
	}
	.choiceListItem {
		margin: 0 auto 26rpx;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		padding: 10rpx 24rpx 16rpx 32rpx;
		.bottom {
			margin-top: 10rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #929292;
			display: flex;
			justify-content: space-between;
		}
		.top {
			font-size: 28rpx;
			font-weight: 400;
			color: #0F0F0F;
			display: flex;
			justify-content: space-between;
			.price {
				font-weight: bold;
			}
		}
	}
	.choice {
		padding: 26rpx 0 42rpx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 28rpx;
		font-weight: 400;
		color: #000000;
		.choiceItem {
			width: 252rpx;
			height: 60rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
			border-radius: 16rpx;
			text-align: center;
			line-height: 60rpx;
		}
		.choiceItemBg {
			background: #24743C;
			color: #FFFFFF;
		}
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
</style>
