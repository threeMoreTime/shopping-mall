<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">交易明细</view>
		<view class=""></view>
	</view>
	<view class="tabBar">
		<u-tabs 
			:list="tabList" 
			:is-scroll="false" 
			inactive-color="#0A0A0A" 
			active-color="#24743C"
			:current="current"
			:active-item-style="{
				'font-size': '32rpx',
				'color': '#0A0A0A',
				'font-weight': 'bold'
			}"
			@change="tabsChange"
		></u-tabs>
	</view>
</template>

<script setup>
	import { reactive, toRefs } from 'vue';
	
	const data = reactive({
		tabList:[
			{ name: '全部' },
			{ name: '收入' },
			{ name: '支出' },
			{ name: '流转' },
		],
		current: 0,
	});
	const { tabList, current } = toRefs(data)
	
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	
	const tabsChange = (index) => {
		data.current = index
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
	
	.tabBar {
		height: 98rpx;
		background: #FFFFFF;
		box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		border-radius: 0px 0px 8px 8px;
		opacity: 1;
	}
</style>
