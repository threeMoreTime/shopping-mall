<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">商品管理</view>
		<view class=""></view>
	</view>
	<view class="nav">
		<view :class="['btn', current === 1  ? 'select' : '']" @click="switchNavigation">出售中</view>
		<view :class="['btn', current === 0  ? 'select' : '']" @click="switchNavigation">仓库中</view>
	</view>
	<view class="card" v-show="current === 1" v-for="item in goodsList" :key="item.id">
		<view class="cardHead" :style="[current === 1 ? 'border-bottom: none; padding-bottom: 0' : '']">
			<view class="imag">
				<image class="imag" :src="userStore().systemConfig.picUrlPre + item.image"></image>
			</view>
			<view>
				<view class="title">{{item.storeName}}</view>
				<view class="text">
					<text>销量：{{item.sales}}</text>
					<text>库存：{{item.stock}}</text>
				</view>
				<view class="amount">
					<text class="money">￥{{item.price}}</text>
					<text class="quantity">x1</text>
				</view>
			</view>
		</view>
		<view class="cardFooter" v-show="current === 1">
			<view @click="s_upOrDown(item.id, 0)">下架</view>
			<!-- <view @click="changePath(item.id)">编辑</view> -->
			<view>删除</view>
		</view>
		<view class="empty" v-if="current === 1 && goodsList.length == 0">
			<view>亲，还没有任何商品哦</view>
			<view class="emptyFooter">
				<view class="btn emptyBtn select" @click="changePath">发布商品</view>
			</view>
		</view>
	</view>
	<view class="card" v-show="current === 0" v-for="item in entrepot" :key="item.id">
		<view class="cardHead" :style="[current === 0 ? 'border-bottom: none; padding-bottom: 0' : '']">
			<view class="imag">
				<image class="imag" :src="userStore().systemConfig.picUrlPre + item.image"></image>
			</view>
			<view>
				<view class="title">{{item.storeName}}</view>
				<view class="text">
					<text>销量：{{item.sales}}</text>
					<text>库存：{{item.stock}}</text>
				</view>
				<view class="amount">
					<text class="money">￥{{item.price}}</text>
					<text class="quantity">x1</text>
				</view>
			</view>
		</view>
		<view class="cardFooter" v-show="current === 0">
			<view v-if="item.status == 2" @click="s_upOrDown(item.id, 1)">上架</view>
			<view v-else-if="item.status == 0">审核中</view>
			<view v-else style="color: red;">未通过</view>
			<view @click="changePath(item.id)">编辑</view>
			<view @click="deleGoods(item.id)">删除</view>
		</view>
	</view>
	<!-- && goodsList.length == 0 -->
	<view class="empty" v-if="current === 0 ">
		<view v-show="goodsList.length == 0">亲，还没有任何商品哦</view>
		<view class="emptyFooter">
			<view class="btn emptyBtn select" @click="changePath()">添加商品</view>
		</view>
	</view>
</template>

<script setup>
	import {
		shopManage,
		upOrDown,
		deleById
	} from '@/api/shop.js'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		userStore
	} from "@/store/index.js"
	import {
		onShow,
		onReachBottom,
		onPullDownRefresh
	} from "@dcloudio/uni-app";
	const data = reactive({
		current: 1,
		page: 1,
		pageSize: 4,
	})
	const {
		current
	} = toRefs(data)
	let goodsList = ref([])
	let entrepot = ref([])

	onShow(() => {
		data.page = 1
		goodList(data.current)
	})
	onReachBottom(() => {
		if (data.current == 1) {
			if (goodsList.value.length < data.page * data.pageSize) {
				uni.$showMsg('已经到底了，暂无其他数据')
				return
			}
		} else {
			if (entrepot.value.length < data.page * data.pageSize) {
				uni.$showMsg('已经到底了，暂无其他数据')
				return
			}
		}
		data.page += 1
		goodList(data.current)
	})
	onPullDownRefresh(() => {
		data.page = 1
		goodList(data.current)
		setTimeout(() => {
			uni.stopPullDownRefresh()
		}, 1000)
	})
	const goodList = (id) => {
		uni.showLoading({
			title: '加载中'
		})
		let params = {
			page: data.page,
			limit: data.pageSize,
			isShow: id
		}
		shopManage(params).then(res => {
			// console.log('res',res)
			uni.hideLoading()
			if (data.page == 1) {
				goodsList.value.length = []
				entrepot.value.length = []
			}
			if (id == 1) {
				goodsList.value = [...goodsList.value, ...res.list]
			} else {
				entrepot.value = [...entrepot.value, ...res.list]
			}
		})
	}
	const switchNavigation = () => {
		data.current = data.current === 1 ? 0 : 1
		// console.log('lllll',data.current)
		data.page = 1
		goodList(data.current)
	}
	const s_upOrDown = (id, isShow) => {
		// console.log(isShow,id)
		let params = {
			id,
			isShow
		}
		upOrDown(params).then(res => {
			console.log('下架', res)
			if (isShow == 1) {
				uni.showToast({
					title: '上架成功！',
					icon: "success"
				})
			} else {
				uni.showToast({
					title: '下架成功！',
					icon: "success"
				})
			}
			goodList(data.current)
		})
	}

	const deleGoods = (id) => {
		deleById(id).then(res => {
			uni.showToast({
				title: '删除成功！',
				icon: "success"
			})
		})
		goodList(data.current)
	}
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}

	const changePath = (id) => {
		if (id) {
			uni.navigateTo({
				url: `releaseGoods?id=${id}`
			})
		} else {
			uni.navigateTo({
				url: "releaseGoods"
			})
		}
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

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		padding: 26rpx 80rpx;
	}

	.btn,
	.select {
		width: 282rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
		box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
		border-radius: 8px 8px 8px 8px;
		// color: #FFFFFF;
	}

	.select {
		background: #24743C;
		color: #FFFFFF;
	}

	.empty {
		// position: absolute;
		// top: 30%;
		// left: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;

		.emptyBtn {
			width: 174rpx;
			height: 70rpx;
			margin-top: 42rpx;
			opacity: 1;
		}

		.emptyFooter {
			display: flex;
			justify-content: center;
		}
	}

	.card {
		margin: 32rpx;
		padding: 42rpx;
		background: #FFFFFF;
		box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.12);
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
