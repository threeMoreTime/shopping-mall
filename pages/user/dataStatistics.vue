<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">数据统计</view>
		<view class=""></view>
	</view>
	<view class="content">
		<view class="box" v-for="(item, index) in list">
			<view>
				<view class="boxTtitle">{{ item.title }}</view>
				<view class="boxContent">
					<text class="text">{{ item.value }}</text>
					<text>{{ item.unit }}</text>
				</view>				
			</view>
		</view>
	</view>
</template>

<script setup>
	import {dataStatistics} from '@/api/shop.js'
	import {onLoad} from "@dcloudio/uni-app";
	import { reactive, toRefs } from 'vue'
	
	const data = reactive({
		list: [
			{ title: '成交额（元）', value: 0, unit: '元' },
			{ title: '店铺访客（人）', value: 0, unit: '人' },
			{ title: '店铺收藏量（元）', value: 0, unit: '次' },
			{ title: '订单数（笔）', value: 0, unit: '笔' },
			{ title: '购物车商品（件）', value: 0, unit: '件' }
		]
	})
	/**
	 *  itemNum: 0  		购物车商品
			likeNum: 0  		店铺收藏量
			orderNum: 0			订单数
			turnover: null  成交额
			visitorNum: null店铺访客 		
	*/
	const { list } = toRefs(data)
	
	onLoad(()=>{
		dataList()
	})
	const dataList = () => {
		dataStatistics().then(res => {
			data.list[0].value = res.turnover
			data.list[1].value = res.visitorNum
			data.list[2].value = res.likeNum
			data.list[3].value = res.orderNum
			data.list[4].value = res.itemNum
		})
	}
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
	
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 48rpx 32rpx;
	}
	
	.box {
		width: 328rpx;
		height: 234rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		// padding: 30rpx 54rpx 72rpx;
		margin-bottom: 24rpx;
		background: #FFFFFF;
		box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		border-radius: 8px;
		opacity: 1;
		
		.boxTtitle {
			margin-bottom: 36rpx;
			font-size: 28rpx;
		}
		
		.boxContent {
			text-align: center;
		}
		
		.text {
			margin-right: 24rpx;
			font-size: 40rpx;
			color: #000000;
			font-weight: 800;
		}
	}
</style>
