<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">物流</view>
		<view class=""></view>
	</view>
	<view class="card">
		<view class="express">
			<view>韵达快递 432541213131131</view>
			<view>
				<text @click="copy">复制</text> | 
				<text>打电话</text>
			</view>
		</view>
		<u-time-line>
			<u-time-line-item nodeTop="23">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="pushpin-fill" color="#24743C" :size="35"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<text class="state">已下单</text>
						<text class="time">12-10 14:02</text>
						<view class="telephone">商品已下单</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item nodeTop="23">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="car" :size="30"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view class="address">送至 文化界99号黑龙江省</view>
					<view class="telephone">初夏 86-785***3649</view>
				</template>
			</u-time-line-item>
		</u-time-line>
	</view>
	<view class="card" style="padding: 42rpx 24rpx 48rpx 30rpx;">
		<view class="goods">
			<image class="imag" src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"></image>
			<view>
				<view class="goodsTitle">美特斯邦威羽绒服保暖冬季防风保暖12313...</view>
				<view class="quantity">x2</view>
				<view class="money">￥315000.00</view>
			</view>
		</view>
		<view>
			<view class="info">
				<text class="title">商品总价</text>
				<text>￥3150000.00</text>
			</view>
			<view class="info">
				<text class="title">加工费</text>
				<text>￥3150000.00</text>
			</view>
			<view class="info">
				<text class="title">实付款</text>
				<text>￥3150000.00</text>
			</view>
			<view class="info">
				<text class="title">订单编号</text>
				<text class="text">307777791132132132</text>
			</view>
			<view class="info">
				<text class="title">订单类型</text>
				<text class="text">报单</text>
			</view>
			<view class="info">
				<text class="title">创建时间</text>
				<text class="text">2022-12-08  14:02:46</text>
			</view>
			<view class="info">
				<text class="title">付款时间</text>
				<text class="text">2022-12-08  14:02:46</text>
			</view>
			<view class="info">
				<text class="title">发货时间</text>
				<text class="text">2022-12-08  14:02:46</text>
			</view>
		</view>
	</view>
	<u-top-tips ref="uTips"></u-top-tips>
</template>

<script setup>
	import { ref } from 'vue'
	const uTips = ref(null);
 	const navigateBack = () => {
		uni.navigateBack()
	}
	
	const copy = () => {
		uni.setClipboardData({
			data: '123456'
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
		margin: 52rpx 32rpx 20rpx;
		padding: 22rpx 22rpx 1rpx 32rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 20rpx;
		
		::v-deep .u-time-axis::before {
			top: 30rpx;
			height: 135rpx;
			border-left: 2rpx solid #24743C;
		}

		.express {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 18rpx;
			font-size: 24rpx;
			color: #6D6D6D;
		}

		.state {
			font-size: 32rpx;
			font-weight: 800;
			color: #24743C;
		}

		.time {
			margin-left: 18rpx;
			font-size: 28rpx;
			color: #24743C;
		}

		.address {
			font-size: 32rpx;
			font-weight: 800;
			color: #000000;
		}

		.telephone {
			margin-top: 4rpx;
			font-size: 24rpx;
			color: #6D6D6D;
		}

		.goods {
			display: flex;
			align-items: center;
			margin-bottom: 100rpx;
		}

		.imag {
			width: 138rpx;
			height: 138rpx;
			margin-right: 28rpx;
		}

		.goodsTitle {
			font-size: 24rpx;
			font-weight: bold;
			color: #000000;
		}

		.quantity {
			display: flex;
			justify-content: flex-end;
			margin: 10rpx 0;
			padding-right: 46rpx;
			font-size: 20rpx;
			color: #A8A8A8;
		}

		.money {
			font-size: 24rpx;
			color: #FF3B3B;
		}

		.info {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 32rpx;
			
			&:nth-last-child(1) {
				margin-bottom: 0;
			}

			.title {
				font-size: 28rpx;
				font-weight: 800;
				color: #000000;
				font-family: PingFang SC-Regular, PingFang SC;
			}
			
			.text {
				font-size: 28rpx;
				color: #878787;
			}
		}
	}
</style>
