<template>
	<view class="bg">
		<view class="TopTitle">
			<view class="tabs">
				<view class="arrowsBg" @click="navigateBack"></view>
				<view class="title">商家中心</view>
				<view class=""></view>
			</view>
			<view class="userInfo">
				<view class="headAndUser">
					<view class="headPortrait">
						<img :src="merchantInfo?.imgUrl" alt="">
					</view>
					<view class="nameAndId">
						<view class="name">
							<text>{{merchantInfo?.nick}}</text>
							<view class="vip" v-show="merchantInfo?.vip">
								<view class="vipBg"></view>
								<text>{{merchantInfo?.grade}}</text>
							</view>
						</view>
						<text class="Id">ID：{{merchantInfo?.ID}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="workingArea">
				<text>工作区</text>
				<view class="workingAll">
					<view class="workingAllItem" @click="changePath('/pages/user/goodsManagement')">
						<view class="ItemBg"></view>
						<text>商品管理</text>
					</view>
					<view class="workingAllItem">
						<view class="ItemBg"></view>
						<text>订单管理</text>
					</view>
					<view class="workingAllItem" @click="changePath('/pages/user/returnGoods')">
						<view class="ItemBg"></view>
						<text>退货/款</text>
					</view>
					<view class="workingAllItem" @click="changePath('/pages/user/property')">
						<view class="ItemBg"></view>
						<text>我的账户</text>
					</view>
				</view>
			</view>
			<view class="workingArea">
				<view class="top">
					<text>数据统计</text>
					<view class="topRigth" @click="changePath('/pages/user/dataStatistics')">
						<text>经营分析</text>
						<view class="arrBg"></view>
					</view>
				</view>
				<view class="bottom">
					<view class="bottomItem">
						<text>今日订单数</text>
						<text class="price">{{orderNum}}</text>
					</view>
					<!-- <view class="bottomItem">
						<text>今日店铺访客</text>
						<text class="price">0</text>
					</view> -->
					<view class="bottomItem">
						<text>今日成交额</text>
						<text class="price">￥{{turnover}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>>
	<u-modal
		v-model="showModal" 
		:show-confirm-button="false"
		mask-close-able
		:show-title="false"
	>
		<view class="modalcontent">
			店铺资料未完善，请完善店铺资料
		</view>
		<view class="modalBtn">
			<u-button @click="changePath('/pages/user/myShop/index', 1)">确认</u-button>
		</view>
	</u-modal>
</template>

<script setup>
	import {isShop,statistics} from '@/api/shop.js'
	import {onLoad} from "@dcloudio/uni-app";
	import { ref,reactive, toRefs } from 'vue'
	import {shopStore,userStore} from "@/store/index.js"
	const store = shopStore()
	const data = reactive({
		showModal: true
	})
	const turnover = ref(0)
	const orderNum = ref(0)
	const { showModal } = toRefs(data)
	
	const merchantInfo = reactive({
		imgUrl: userStore().systemConfig.picUrlPre + store.shopInfo?.logo || 'https://img.ixintu.com/download/jpg/20201115/4939f541273cedfc32fa2e67fb2ede02_512_512.jpg!bg',
		nick: store.shopInfo?.storeName || '未注册',
		ID: store.shopInfo?.id || 0,
		grade: '',
		vip: false,
	})
	
	onLoad(()=>{
		haveShop()
		statisticsData()
	})
	
	const statisticsData =()=>{
		statistics().then(res=>{
			orderNum.value = res.orderNum
			turnover.value = res.turnover
		})
	}
	const haveShop = () => {
		isShop().then(res => {
			console.log('res',res)
			shopStore().shopInfo = res
			merchantInfo.imgUrl = userStore().systemConfig.picUrlPre + store.shopInfo?.logo,
			merchantInfo.nick = store.shopInfo.storeName,
			merchantInfo.ID = store.shopInfo.id
			if(res === null){
				data.showModal = true
			}else{
				data.showModal = false
			}
		})
	}
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 路由跳转
	const changePath = (path,id) => {
		if (path) {
			uni.navigateTo({
				url: id? path + '?typeId=' + id : path
			})
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FBFBFB;
		position: relative;
	}
	.workingArea {
		width: 686rpx;
		// height: 244rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 20rpx;
		padding: 28rpx;
		font-size: 28rpx;
		font-weight: 800;
		color: #3A2A08;
		margin-bottom: 22rpx;
	}
	.bottom {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
		.price {
			font-size: 40rpx;
			font-weight: 800;
			padding-top: 10rpx;
		}
		.bottomItem {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.top {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid rgba(112, 112, 112, 0.15);
		.topRigth {
			display: flex;
			align-items: center;
			font-weight: 400;
			color: #A1A1A1;
			.arrBg {
				margin-left: 16rpx;
				width: 11rpx;
				height: 20rpx;
				background: url("@/static/img/arrowsBg.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	.box {
		width: 100%;
		padding: 0 32rpx;
		transform: translateY(-76rpx);
		.workingArea {
			display: flex;
			flex-direction: column;
		}
		.workingAll {
			margin-top: 42rpx;
			display: flex;
			justify-content: space-around;
			.workingAllItem {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
				&:nth-of-type(1) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/commodityAdmin.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(2) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/orderAdmin.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(3) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/sales.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(4) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/account.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}
	}
	.TopTitle {
		width: 750rpx;
		height: 444rpx;
		background: #1C6732;
		border-radius: 0rpx 0rpx 160rpx 0rpx;
	}
	.set {
		transform: translate(560rpx, 86rpx);
		height: 88rpx;
		width: 100%;
		padding: 0 34rpx;
		display: flex;
		align-items: center;
		// justify-content: right;
		.msgBg {
			margin-right: 34rpx;
			width: 42rpx;
			height: 37rpx;
			background: url("@/static/img/msgBg.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	
		.setBg {
			width: 35rpx;
			height: 40rpx;
			background: url("@/static/img/setBg.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
	.userInfo {
		transform: translateY(20rpx);
		width: 100%;
		// height: 104rpx;
		padding: 0 34rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #FFF;
	
		.userBtn {
			width: 148rpx;
			height: 52rpx;
			background: #E6AF49;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 26rpx;
			font-weight: 400;
			font-size: 28rpx;
			display: flex;
			align-items: center;
			justify-content: center;
	
			.vipBg {
				margin-right: 12rpx;
				width: 28rpx;
				height: 23rpx;
				background: url("@/static/img/btnVipBg.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}
	
		.nameAndId {
			.name {
				font-size: 40rpx;
				font-weight: 800;
				display: flex;
				align-items: center;
				margin-bottom: 8rpx;
	
				.vip {
					margin-left: 18rpx;
					font-size: 24rpx;
					display: flex;
					align-items: flex-end;
	
					.vipBg {
						width: 40rpx;
						height: 32rpx;
						background: url("@/static/img/vipBg.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
			}
	
			.Id {
				font-size: 24rpx;
				font-weight: 400;
			}
		}
	
		.headPortrait {
			width: 104rpx;
			height: 104rpx;
			margin-right: 50rpx;
	
			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				z-index: 9;
			}
		}
	
		.headAndUser {
			display: flex;
		}
	}
	
	.tabs {
		width: 100%;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		.title {
			margin-top: 86rpx;
			font-size: 32rpx;
			font-weight: 800;
			color: #F5F5F5;
			margin-bottom: 3rpx;
		}
		.arrowsBg {
			// transform: rotate(180deg);
			margin-bottom: 5rpx;
			width: 22rpx;
			height: 41rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
	
	.modalcontent {
		padding: 74rpx 60rpx 58rpx;
	}
	
	.modalBtn {
		margin: 0 26rpx 38rpx;
		
		::v-deep .u-btn--default {
			background: #24743C;
			color: #FFFFFF;
		}
	}
</style>
