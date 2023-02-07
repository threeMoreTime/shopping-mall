<template>
	<view class="container">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view></view>
			<view class="titleText"></view>
		</view>
		<view class="swiper-box">
			<u-swiper class="swiper" height="776" :list="list"></u-swiper>
		</view>
		<view class="product-info-box">
			<view class="info-box">
				<view class="info-box-top">
					<view class="product-title">美特斯邦威羽绒服保暖冬季防风保暖...</view>
					<view class="product-price">760.00</view>
					<view class="product-originPrice">￥350.00</view>
				</view>
				<u-line color="#ccc" />
				<view class="info-box-bottom">
					<view class="left-tips">100%正品</view>
					<view class="right-tips">顺丰EM速达·丰富赠礼·无忧退款·安全支付</view>
				</view>
			</view>
			<view class="info-box m-top-20">详情介绍</view>
		</view>
		<view class="bottom">
			<view class="shopCart">
				<view class="shopCartBg"></view>
				<text>购物车</text>
			</view>
			<view class="btnAll">
				<view class="btn">加入购物车</view>
				<view class="btn2">立即购买</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {navigateBack} from "@/utils/navigate.js"
	const list = ref([
		'https://cdn.uviewui.com/uview/swiper/1.jpg',
		'https://cdn.uviewui.com/uview/swiper/2.jpg',
		'https://cdn.uviewui.com/uview/swiper/3.jpg',
	])
</script>

<style lang="scss" scoped>
	.container {
		background: #f1f1f1;
		height: 100vh;
		width: 100%;
		position: relative;
		.bottom {
			width: 750rpx;
			padding: 20rpx 32rpx 66rpx 42rpx;
			background: #FFFFFF;
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.shopCart {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				font-weight: 800;
				
			}
			.btnAll {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				font-weight: 400;
				color: #FFF1F1;
				text-align: center;
			}
			.btn {
				margin-right: 24rpx;
				width: 222rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: #E5BC70;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				opacity: 1;
			}
			.btn2 {
				width: 222rpx;
				line-height: 80rpx;
				height: 80rpx;
				background: #24743C;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				opacity: 1;
			}
		}
		.m-top-20 {
			margin-top: 20rpx;
			padding: 12rpx 0;
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}
		.tabs {
			z-index: 999;
			position: absolute;
			top: 30rpx;
			width: 100%;
			height: 176rpx;
			padding: 20rpx 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.titleText {
				width: 47rpx;
				height: 12rpx;
				background: url("@/static/img/more.png") 100% no-repeat;
				background-size: 100% 100%;
			}

			.title {
				margin-left: 260rpx;
				font-size: 32rpx;
				font-weight: 800;
				color: #F5F5F5;
				margin-bottom: 6rpx;
			}

			.arrowsBg {
				// transform: rotate(180deg);
				width: 25rpx;
				height: 48rpx;
				background: url("@/static/img/BlackArrow.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}

		.swiper-box {
			// padding-top: 100rpx;
			// height: 776rpx;
			// background-color: #fff;
			//滤镜下到上 黑白渐变

			background: linear-gradient(0deg, #999, #ffffff 25%);
		}

		.product-info-box {
			padding: 26rpx 30rpx 240rpx;
			background-color: #F1F1F1;
			.info-box {
				background-color: #fff;
				// padding: 22rpx 34rpx;
				border-radius: 20rpx;

				.info-box-top {
					padding: 30rpx 34rpx 18rpx;

					.product-title {
						font-size: 40rpx;
						font-weight: 800;
					}

					.product-price {
						font-size: 44rpx;
						font-weight: 800;
						color: #a20505;
					}

					.product-originPrice {
						font-weight: 400;
						color: #a8a8a8;
						text-decoration: line-through;
					}
				}

				.info-box-bottom {
					padding: 18rpx 34rpx;
					display: flex;
					justify-content: space-between;

					.left-tips {
						font-size: 28rpx;
						color: #000;
						font-size: 24rpx;
					}

					.right-tips {
						font-size: 28rpx;
						color: #a8a8a8;
						font-size: 20rpx;
					}
				}
			}
		}
	}
</style>
