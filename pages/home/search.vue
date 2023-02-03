<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="search">
				<u-search 
					v-model="keyword" 
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
		<view class="context">
			<view class="">
				<text class="historyTitle">搜索历史</text>
				<view class="historyBox">
					<view class="boxText">
						<text></text>
					</view>
					<view class="delBg"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import { historyStore } from "@/store/index.js"
	const store = historyStore()
	const keyword = ref('')
	// 调用仓库的搜索记录
	const searchList = store.history
	console.log(searchList);
	// 点击搜索
	const changeSearch = (value) => {
		store.historyList(value)
	}
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped >
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.delBg {
		width: 33rpx;
		height: 31rpx;
	}
	.boxText {
		width: 80%;
		text {
			margin-right: 14rpx;
		}
	}
	.historyBox {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.historyTitle {
		font-size: 32rpx;
		font-weight: bold;
		color: #8D8D8D;
		padding-bottom: 24rpx;
	}
	.context {
		margin-top: 38rpx;
		padding: 0 32rpx;
		width: 100%;
		background-color: #FBFBFB;
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
