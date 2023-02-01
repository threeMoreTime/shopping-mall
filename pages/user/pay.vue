<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">我要充值</view>
			<view class="titleText">充值记录</view>
		</view>
		<view class="contextBox">
			<view class="payList">
				<view class="payListItem">线下充值</view>
			</view>
			<view class="listBg pay"  @click="showPayWay = true">
				<text class="payText">{{payWayName}}</text>
				<view class="arrowsMiniBg"></view>
				<u-select 
					cancel-color="#A4A4A4"
					confirm-color="#A4A4A4"
					v-model="showPayWay" 
					:list="list" 
					@confirm="changePayWay"></u-select>
			</view>
			<view class="listBg">
				<view class="item">
					<text>收款银行</text>
					<text class="details">海南银行股份有限公司</text>
				</view>
				<view class="item pad-24">
					<text>银行卡号</text>
					<view class="details">
						<text style="margin-right: 32rpx;">6003352600017</text>
						<text style="color: #FF0000;">复制</text>
					</view>
				</view>
				<view class="item">
					<text>开户名</text>
					<text class="details">海南聚兴乾晟大宗商品交易有限公司</text>
				</view>
			</view>
			<view class="listBg">
				<view class="payTitle">请输入充值的金额</view>
				<view class="">
					<u-field
						v-model="money"
						placeholder="请输入充值的金额"
						label-width="0"
						trim
						icon="rmb"
						icon-color="#292929"
					>
					</u-field>
				</view>
			</view>
			<view class="listBg payPassword">
				<text style="margin-right: 28rpx;font-size: 24rpx;color: #292929;">支付密码</text>
				<u-input 
					v-model="payPassword" 
					type="password" 
					:border="false"
					placeholderStyle="font-size:24rpx;font-weight: 400;color: #CBCBCB;"
					 />
			</view>
			<view class="listBg">
				<view class="payTitle">打款截图</view>
				<view class="">
					<u-upload 
						:action="action" 
						:file-list="fileList" 
						width="130" 
						height="130"
						@on-success="updateImg"
						></u-upload>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	const showPayWay = ref(false)
	const money = ref(null)
	const payPassword = ref(null)
	// 图片上传地址
	const action = ref('http://www.example.com/upload')
	const fileList = ref([])
	const list = ref([
		{
			value: '1',
			label: '购物积分'
		},
		{
			value: '2',
			label: '管理积分'
		}
	])
	const payWayName = ref(list.value[0].label)
	const changePayWay = (list) => {
		payWayName.value = list[0].label
	}
	const updateImg = (data, index, lists, name) => {
		console.log(data, index, lists, name);
	}
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.payPassword {
		display: flex;
		align-items: center;
	}
	.payTitle {
		font-weight: 400;
		color: #292929;
		font-size: 24rpx;
	}
	.pad-24 {
		padding: 24rpx 0;
	}
	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24rpx;
		font-weight: 400;
		color: #848484;
		.details {
			font-weight: bold;
			color: #000000;
		}
	}
	.pay {
		display: flex;
		align-items: center;
	}
	.payText {
		font-size: 28rpx;
		font-weight: 400;
		color: #000000;
	}
	.arrowsMiniBg {
		margin-left: 20rpx;
		width: 19rpx;
		height: 10rpx;
		background: url("@/static/img/arrBmtton.png") 100% no-repeat;
		background-size: 100% 100%;
	}
	.listBg {
		width: 100%;
		padding: 20rpx 26rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		margin-bottom: 24rpx;
	}
	.payList {
		margin: 34rpx 0;
		.payListItem {
			width: 252rpx;
			height: 60rpx;
			line-height: 60rpx;
			background: #24743C;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
			border-radius: 16rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
		}
	}
	.contextBox {
		padding: 0 30rpx;
		background: #FBFBFB;
	}
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		.titleText {
			font-size: 32rpx;
			font-weight: 800;
			color: #F5F5F5;
			margin-bottom: 6rpx;
			margin-left: 145rpx;
		}
		.title {
			margin-left: 260rpx;
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
}
</style>
