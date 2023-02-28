<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack"></view>
				<view class="title">交易详情</view>
			</view>
		</view>
		<!-- 已完成  交易编号 -->
		<view class="Box-jiaoyi">
			<text class="item1">待付款</text>
			<text class="item2">交易编号:</text>
		</view>
		<!-- 已完成  交易编号 -->
		<view class="ctxBox">
			<view class="item flex-space-between itemText">
				<view class="flex-col">
					<text class="titles">数量</text>
					<text>16011</text>
				</view>
				<view class="flex-col">
					<text class="titles">总额</text>
					<text>6111111</text>
				</view>
			</view>
		</view>
		<view class="context">
			<view class="card">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";

	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	const Btn = () => {
		console.log(111111111111);
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FBFBFB;
		position: relative;
		.context {
			width: 100%;
			background-color: #FBFBFB;
			margin-top: 18rpx;
		}
		.Box-card2 {
			margin: 18rpx 0 0 24rpx;
			width: 686rpx;
			height: 202rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;

			.text-msg2 {
				margin: 18rpx 0 0 24rpx;
				width: 126rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #313131;
				line-height: 24rpx;
			}

			.Msg2 {
				margin-top: 14rpx;
				margin-left: 26rpx;
				border-top: 1rpx solid rgba(200, 200, 200, 0.3);
				width: 636rpx;
				height: 126rpx;
			}

			.img2 {
				margin-top: 25rpx;
				margin-left: 24rpx;
				width: 76rpx;
				height: 76rpx;
			}

			.AAA2 {
				position: absolute;
				top: 764rpx;
				display: flex;
				flex-direction: column;
				margin-left: 140rpx;

			}

			.BBB2 {
				position: absolute;
				top: 780rpx;
				right: 62rpx;
				font-weight: 400;
				color: #6D6D6D;
				font-size: 24rpx;
			}

		}



		.Box-card {
			margin: 18rpx 0 0 24rpx;
			width: 686rpx;
			height: 202rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;

			.text-msg {
				margin: 18rpx 0 0 24rpx;
				width: 126rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #313131;
				line-height: 24rpx;
			}

			.Msg {
				margin-top: 14rpx;
				margin-left: 26rpx;
				border-top: 1rpx solid rgba(200, 200, 200, 0.3);
				width: 636rpx;
				height: 126rpx;

				// background-color: pink;
				.img {
					margin-top: 25rpx;
					margin-left: 24rpx;
					width: 76rpx;
					height: 76rpx;
				}
			}

			.AAA {
				position: absolute;
				top: 540rpx;
				display: flex;
				flex-direction: column;
				margin-left: 140rpx;

			}

			.BBB {
				position: absolute;
				top: 560rpx;
				right: 62rpx;
				font-weight: 400;
				color: #6D6D6D;
				font-size: 24rpx;
			}
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
			font-size: 32rpx;
			color: #000000;
		}

		.itemText {
			padding: 50rpx 24rpx 34rpx;
		}

		.flex-space-between {
			display: flex;
			align-items: center;
			justify-content: space-around;
		}

		.ctxBox {
			padding: 0 32rpx;
			position: absolute;
			top: 270rpx;

			.item {
				width: 686rpx;
				height: 130rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				margin-bottom: 24rpx;
			}
		}

		.tabBox {
			width: 100%;
			height: 444rpx;
			background: #24743C;
			font-weight: 800;
			color: #F5F5F5;
			font-size: 32rpx;
			padding: 0 32rpx;

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

		.title {
			// margin-left: -343rpx;
			position: absolute;
			left: 320rpx;
		}

		.BoxCard {
			display: flex;
			position: relative;

			top: 18rpx;
			margin-left: 32rpx;
			width: 686rpx;
			height: 202rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;
			margin-top: 20rpx;



			.item2Card {
				position: absolute;

				right: 28rpx;
				margin-top: 10rpx;
				margin-left: 170rpx;
				display: flex;
				flex-direction: column;

				.item1 {
					position: relative;
					right: -140rpx;
					font-size: 20rpx;
					font-weight: 400;
					color: #929292;
					line-height: 24rpx;

				}

				.item2 {
					position: relative;
					top: 16rpx;
					font-weight: 400;
					color: #929292;
					line-height: 24rpx;
					font-size: 20rpx;
				}


			}

			.image {
				image {
					width: 68rpx;
					height: 68rpx;
					margin-top: 20rpx;
					margin-left: 24rpx;
				}

			}
		}

		.listBg {

			width: 686rpx;
			margin: 18rpx 0 0 24rpx;
			margin-left: 25rpx;
			padding: 20rpx 24rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx;
			margin-bottom: 24rpx;
		}

		.payText {
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}



		.Box-jiaoyi {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 176rpx;
			left: 32rpx;
			color: #FFFFFF;


			.item1 {
				padding-bottom: 50rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
			}

			.item2 {
				width: 118rpx;
				height: 34rpx;
				font-size: 24rpx;
				line-height: 24rpx;

			}

		}

		.text-msg {
			height: 60rpx;
			width: 100%;
		}

	}
</style>
