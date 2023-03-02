<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack()"></view>
			<view class="title">黄金兑换</view>
			<view class=""></view>
		</view>
		<view class="context">
			<view class="ListBox">
				<view class="ItemBox" v-for="item in GoldProductsList">
					<view class="ItemBottomCtx">
						<image :src="item.image" alt=""/>
						<view class="ItemBottomText">
							<text>{{item.storeName}}</text>
							<text>/{{item.unitName}}</text>
							<view class="goldCtx">
								<text class="goldForm">￥</text>
								<text class="gold">{{item.price}}</text>
							</view>
							<text class="market">已售 {{item.sales}}</text>
						</view>
						<view class="ItemBottomBtn" @click="changePath('/pages/product/productDetail2', {id: item.id})">兑换</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { navigateBack,changePath } from "@/utils/navigate.js"
	import {findGoldProducts} from "@/api/project.js"
	import { userStore } from "@/store/index.js"
import { ref } from "vue";
	const GoldProductsList = ref([])
	findGoldProducts().then(res => {
		if(res?.length && res instanceof Array) {
			GoldProductsList.value = res
			GoldProductsList.value.forEach(item => {
				item.image = userStore().systemConfig.picUrlPre + item.image
			})
		}
	})
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.ListBox {
		padding: 0 32rpx;
		.ItemBottomBtn {
			width: 126rpx;
			height: 48rpx;
			background: #24743C;
			border-radius: 24rpx 24rpx 24rpx 24rpx;
			color: #FFF;
			font-size: 28rpx;
			font-weight: bold;
			text-align: center;
			line-height: 48rpx;
			position: absolute;
			right: 0;
		}
		.goldCtx {
			margin-top: 16rpx;
		}
		.gold {
			color: #E60808;
		}
		.goldForm {
			font-size: 20rpx;
			font-weight: bold;
			color: #3A0808;
		}
		.ItemBottomText {
			margin-left: 18rpx;
		}
		.ItemBottomCtx {
			display: flex;
			align-items: center;
			position: relative;
		}
		.ItemBox {
			width: 686rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
			border-radius: 16rpx;
			margin-bottom: 24rpx;
			padding: 52rpx 34rpx;
			image {
				width: 130rpx;
				height: 130rpx;
			}
		}
	}
	.context {
		width: 100%;
		background-color: #FBFBFB;
		margin-top: 32rpx;
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
}
</style>
