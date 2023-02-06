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
		<view class="context">
			<view class="">
				<text class="historyTitle">搜索历史</text>
				<view class="historyBox">
					<view class="boxText">
						<text @click="changeKeyWord(item)" v-for="item,index in searchList" :key="index">{{item}}</text>
					</view>
					<view class="delBg" @click="changeDel"></view>
				</view>
			</view>
			<view class="m-top-150">
				<text class="historyTitle">热门搜索</text>
				<view class="historyBox">
					<view class="boxText">
						<text>羽绒服</text>
						<text>维生素</text>
						<text>巧克力</text>
						<text>热水袋</text>
						<text>沐浴露</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import { historyStore } from "@/store/index.js"
import { changePath } from "@/utils/navigate.js"
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
			changePath('/pages/home/searchList',{keyword: value})
		} else {
			return uni.showToast({
				title: "输入内容不能为空",
				icon: "error"
			})
		}
	}
	// 点击删除浏览器缓存搜索记录
	const changeDel = () => {
		store.delStorage()
		searchList.value = []
	}
	// 点击搜索记录
	const changeKeyWord = (keywordtext) => {
		keyword.value = keywordtext
		changePath('/pages/home/searchList',{keyword: keyword.value})
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
	.m-top-150 {
		margin-top: 150rpx;
	}
	.delBg {
		width: 33rpx;
		height: 31rpx;
		background: url("@/static/img/del.png") 100% no-repeat;
		background-size: 100% 100%;
	}
	.boxText {
		width: 95%;
		text {
			margin-right: 14rpx;
			margin-bottom: 10rpx;
			display: inline-block;
			background: #E2E2E2;
			border-radius: 22rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #8D8D8D;
			padding: 6rpx 22rpx;
		}
	}
	.historyBox {
		margin-top: 24rpx;
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
