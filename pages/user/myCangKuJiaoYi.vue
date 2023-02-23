<template>
	<view class="bg">
		<view class="tabs">
      <!-- 箭头 -->
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">仓单交易</view>
			<view class="titleText" @click="woYaoGuaDan('/pages/user/woYaoGuaDan',0)">我要挂单</view>
		</view>
		<view class="buyList">
			<view class="buyListItem" v-for="item in tradeList" :key="item.id">
				<view class="buyListItemTitle">
					<view class="ItemTitle">￥{{item.price}}</view>
					<view class="ItemPrice">
						<text style="margin-right: 22rpx">数量 {{item.totalAmount}}</text>
						<text>剩余 {{item.amount}}</text>
					</view>
				</view>
				<view class="buyListItemBtn" @click="changeDeal(item.id)">买入</view>
			</view>
		</view>
		<u-popup v-model="isPopupShow" mode="bottom" border-radius="16">
			<view class="popClass">
				<view class="inpItem">
					<u-input v-model="dataForm.numberTransaction" type="number" height="88" placeholder="请输入交易数量" />
				</view>
				<view class="inpItem">
					<u-input v-model="dataForm.payPassword" type="password" height="88" placeholder="请输入支付密码" />
				</view>
				<view class="btn">确认</view>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
		onLoad,
		onReachBottom
	} from '@dcloudio/uni-app'
import { findTradeList } from "@/api/trade.js"
onLoad(() => {
	findTradeList(reqDataForm).then(res => {
		tradeList.value = res.list
	})
})

onReachBottom(() => {
	reqDataForm.limit+=5
	findTradeList(reqDataForm).then(res => {
		tradeList.value = res.list
	})
})

	const tradeList = ref([])

	const reqDataForm = reactive({
		type: 'SELL',
		classify: 2,
		queryType: 'all',
		limit: 20,
		page: 1
	})
	const isPopupShow = ref(false)
	const dataForm = reactive({})
  // 返回上一级
  const navigateBack = () => {
  	uni.navigateBack({
  		delta: 1
  	})
  }
  
  const changeDeal = () => {
  	isPopupShow.value = true
  }
  
	const   woYaoGuaDan = (path,id) => {
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
	background-color: #FBFBFB;
	position: relative;
	
	.btn {
		width: 100%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		background: #24743c;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 16rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #ffffff;
	}
	
	.inpItem {
		background: #ffffff;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 16rpx;
		margin-bottom: 24rpx;
		padding: 0 32rpx;
	}
	
	.popClass {
		padding: 42rpx 32rpx;
	
		.price {
			padding: 12rpx 0 18rpx;
			text-align: right;
			font-size: 20rpx;
			font-weight: 400;
			color: #e92929;
			border-top: 2rpx solid rgba(112, 112, 112, 0.09);
		}
	
		.Title {
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}
	
		.flex-space-between {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	
	.buyList {
		padding: 0 32rpx;
		margin-top: 51rpx;
	}
	
	.buyListItem {
		width: 100%;
		height: 140rpx;
		background: #ffffff;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 16rpx;
		padding: 0 30rpx 0 16rpx;
		margin-bottom: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	
		.buyListItemTitle {
			height: 100%;
			padding: 16rpx 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
	
			.ItemTitle {
				font-size: 36rpx;
				font-weight: 800;
				color: #000000;
			}
	
			.ItemPrice {
				font-size: 24rpx;
				font-weight: 800;
				color: #9a9a9a;
			}
		}
	
		.buyListItemBtn {
			width: 126rpx;
			height: 48rpx;
			background: #24743c;
			border-radius: 24rpx;
			text-align: center;
			line-height: 48rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #ffffff;
		}
	}
	
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		.titleText {
height: 44rpx;
font-size: 32rpx;
font-weight: 800;
color: #F5F5F5;
line-height: 24rpx;
			margin-bottom: 6rpx;
			margin-left: 145rpx;
		}
		.title {
			margin-left: 260rpx;
			margin-bottom: 6rpx;
      height: 44rpx;
      font-size: 32rpx;
      font-weight: 800;
      color: #F5F5F5;
      line-height: 24rpx;
		}
		.arrowsBg {
			// transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
            margin-bottom: 6rpx;
		}
	}
}
</style>
