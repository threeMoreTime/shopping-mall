<template>
	<view class="nav">
		<view :class="['btn', current === 0  ? 'select' : '']" @click="switchNavigation">出售中</view>
		<view :class="['btn', current === 1  ? 'select' : '']" @click="switchNavigation">仓库中</view>
	</view>
	<view class="card">
		<view class="cardHead">
			<view class="imag">
				<image class="imag" src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"></image>
			</view>
			<view>
				<view class="title">标题标题标题标题标题标题标题标题</view>
				<view class="text">
					<text>销量：123</text>
					<text>库存：123</text>
				</view>
				<view class="amount">
					<text class="money">￥315.00</text>
					<text class="quantity">x1</text>
				</view>
			</view>			
		</view>
		<view class="cardFooter">
			<view>上架</view>
			<view>编辑</view>
			<view>删除</view>
		</view>
	</view>
	<view class="empty" v-if="false">
		<view>亲，还没有任何商品哦</view>
		<view class="emptyFooter">
			<view class="btn emptyBtn select" @click="changePath">发布商品</view>
		</view>
	</view>
</template>

<script setup>
	import { reactive, toRefs } from 'vue'
	
	const data = reactive({
		current: 0,
	})
	
	const { current } = toRefs(data)
	
	const switchNavigation = () => {
		data.current = data.current === 0 ? 1 : 0
	}
	
	const changePath = () => {
		uni.navigateTo({
			url: "releaseGoods"
		})
	}
</script>

<style lang="scss">
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		padding: 26rpx 80rpx;
	}
	.btn,
	.select{
		width: 282rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		border-radius: 8px 8px 8px 8px;
		// color: #FFFFFF;
	}
	
	.select {
		background: #24743C;
		color: #FFFFFF;
	}
	
	.empty {
		position: absolute;
		top: 30%;
		left: 30%;
		
		.emptyBtn {
			width: 174rpx;
			height: 70rpx;
			margin-top: 62rpx;
			opacity: 1;
		}
		
		.emptyFooter {
			display: flex;
			justify-content: center;
		}
	}
	
	.card {
		margin: 32rpx;
		padding: 42rpx ;
		background: #FFFFFF;
		box-shadow: 0px 4px 6px 1px rgba(0,0,0,0.12);
		border-radius: 10px 10px 10px 10px;
		opacity: 1;
		
		.cardHead {
			display: flex;
			border-bottom: 2rpx solid rgba(200, 200, 200, 0.5);
			padding-bottom: 20rpx;
		}
		
		.imag {
			width: 164rpx;
			height: 164rpx;
			margin-right: 30rpx;
		}
		
		.title {
			font-size: 28rpx;
			font-weight: bold;
			color: #000000;
		}
		
		.text {
			display: flex;
			justify-content: space-between;
			padding-right: 138rpx;
			margin-top: 4rpx;
			font-size: 24rpx;
			color: #ACACAC;
		}
		
		.amount {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 32rpx;
		}
		
		.money {
			font-size: 28rpx;
			color: #CC0000;
			font-weight: 800;
		}
		
		.quantity {
			font-size: 20rpx;
			color: #A8A8A8;
		}
		
		.cardFooter {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 26rpx 46rpx 0;
			font-size: 28rpx;
		}
	}
</style>
