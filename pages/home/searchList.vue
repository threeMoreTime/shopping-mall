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
			<view class="ctxBoxItem" v-for="item in shopList" :key="item.id" @click="clickShop(item.id)">
				<image :src="item.image" mode=""></image>
				<view class="contextBox">
					<text class="ctxTitle u-line-2">{{item.storeName}}</text>
					<text class="t-size-20rpx" style="text-decoration: line-through;color: #A8A8A8;">￥{{item.otPrice}}</text>
					<text class="ctxTitle">￥{{item.price}}</text>
					<view class="shopName">
						<text class="t-size-20rpx" style="color: #A20505;">天猫超市</text>
						<text class="t-size-20rpx" style="color: #A8A8A8;">已售 {{item.ficti}} {{item.unitName}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { changePath,navigateBack } from "@/utils/navigate.js"
	import { historyStore,userStore } from "@/store/index.js"
	import { products } from "@/api/category.js"
	import { reactive, ref } from "vue";
	import { onLoad } from "@dcloudio/uni-app";
	import { indexSearch } from "@/api/homepage.js"
	
	onLoad((option) => {
		getListById(option.id)
		getListByKeyword(encodeURIComponent(option.keyword))
	})
	
	const dataForm = reactive({
		keyword: '',
		cid: null,
		priceOrder: '',
		salesOrder: ''
	})
	const shopList = ref([])
	// 根据id获取商品列表
	const getListById = (id) => {
		if(id) {
			dataForm.cid = id
			products(dataForm).then(res => {
				shopList.value = res.list
				shopList.value.map(item => {
					item.image = userStore().systemConfig.picUrlPre + item.image
				})
			})
		}
	}
	const getListByKeyword = (keyword) => {
		indexSearch(keyword).then(res => {
			console.log(res);
		})
	}
	// 点击商品跳转到商品详情页
	const clickShop = (id) => {
		if(id) {
			changePath("/pages/product/productDetail2",{id})
		}
	}
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
			changePath('/pages/home/searchList',{keyword: value})
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
		padding: 26rpx 26rpx 26rpx 34rpx;
		width: 100%;
		// height: 260rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
		border-radius: 20rpx;
		margin-bottom: 16rpx;
		display: flex;
		align-items: center;
		.t-size-20rpx {
			font-size: 20rpx;
			font-weight: 400rpx;
		}
		.shopName {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.contextBox {
			margin-left: 26rpx;
			display: flex;
			flex-direction: column;
		}
		.ctxTitle {
			width: 410rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #000000;
		}
		text {
			padding: 0 0 8rpx;
		}
		image {
			width: 188rpx;
			height: 188rpx;
		}
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
