<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="search">
				<u-search 
					v-model="keyword" 
					:show-action="false"
					:action-style="{
						'color': '#FFFFFF',
						'font-size': '32rpx',
						'font-weight': 'bold'
					}"
					:input-style="{
						'width': '410rpx',
					}"
					@search="changeSearch"
					></u-search>
			</view>
		</view>
		<view class="tabBox">
			<view class="tabBoxItem" 
				:class="[tabTextIndex === item.id? 'tabBoxItemActivate' : '']" 
				v-for="item in tabText" :key="item.id" @click="changeTabs(item.id)">{{item.name}}</view>
		</view>
		<view class="ctxBox">
			<view class="ctxBoxItem">
				
			</view>
		</view>
	</view>
</template>

<script setup>
	import { changePath,navigateBack } from "@/utils/navigate.js"
	import { historyStore } from "@/store/index.js"
	import { ref } from "vue";
	const tabText = ref([
		{id: 1,name: '热销'},
		{id: 2,name: '综合'},
		{id: 3,name: '最新'},
		{id: 4,name: '低价'}
	])
	const tabTextIndex = ref(1)
	const store = historyStore()
	const keyword = ref('')
	// 调用仓库的搜索记录
	const searchList = ref(store.history || [])
	// 点击搜索
	const changeSearch = (value) => {
		if(value) {
			store.historyList(value)
			searchList.value = store.history
			if (searchList.value.length > 15) {
				store.history.splice(15,1)
			}
			changePath('/pages/home/searchList/searchList',{keyword: value})
		} else {
			return uni.showToast({
				title: "输入内容不能为空",
				icon: "error"
			})
		}
	}
	// 点击tab栏
	const changeTabs = (index) => {
		tabTextIndex.value = index
	}
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.ctxBoxItem {
		width: 684rpx;
		height: 260rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
		border-radius: 20rpx;
		margin-bottom: 16rpx;
	}
	.ctxBox {
		width: 100%;
		padding: 0 34rpx;
	}
	.tabBox {
		width: 100%;
		padding: 44rpx 32rpx 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.tabBoxItem {
			background: #E3E3E3;
			border-radius: 24rpx;
			padding: 6rpx 34rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #272727;
			border: 2rpx solid #E3E3E3;
		}
		.tabBoxItemActivate {
			border: 2rpx solid #FFBE0A;
			background: #FFF9E8;
		}
	}
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		.search {
			width: 100%;
			margin-top: 10rpx;
			margin-left: 34rpx;
			transform: translateY(5rpx);
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
