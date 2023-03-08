<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack()"></view>
				<view class="title">交易详情</view>
			</view>
		</view>
		<!-- 已完成  交易编号 -->
		<view class="Box-jiaoyi">
			<text class="item1">待付款</text>
			<text class="item2">交易编号:</text>
		</view>
		<!-- 已完成  交易编号 -->
		<view class="ctxBox">
			<view class="item flex-space-between itemText">
				<view class="flex-col">
					<text class="titles">数量</text>
					<text>{{OrderInfo?.volume}}</text>
				</view>
				<view class="flex-col">
					<text class="titles">总额</text>
					<text>{{OrderInfo?.trunover}}</text>
				</view>
			</view>
		</view>
		<view class="context">
			<view class="card" style="padding-bottom: 40rpx;">
				<view class="cardTitle">卖家信息</view>
				<view class="userInfo">
					<u-avatar size="76" :src="OrderInfo.tradeUserInfo?.avatar || ''"></u-avatar>
					<view class="nameAndphone">
						<text class="userName">{{OrderInfo.tradeUserInfo?.nickname}}</text>
						<text>{{OrderInfo.tradeUserInfo?.phone}}</text>
					</view>
					<view class="userNo">编号：{{OrderInfo.tradeUserInfo?.uid}}</view>
				</view>
				<view class="gathering">
					<view class="titleAndTabs">
						<text>收款信息</text>
						<view class="tabs">
							<!-- tabsItemActivate -->
							<view class="tabsItem" 
								v-for="item in tabsList" 
								:key="item.id"
								:class="{'tabsItemActivate' : item.id === tabsListIndex}"
								@click="handleTabClick(item.id)"
								>{{item.name}}</view>
						</view>
					</view>
					<view class="bankInfo" v-show="tabsListIndex === 1">
						<view class="bankInfoItem">
							<text>收款银行</text>
							<text style="color: #313131;">{{OrderInfo.tradeUserInfo?.bankName}}</text>
						</view>
						<view class="bankInfoItem">
							<text>银行卡号</text>
							<text style="color: #313131;">{{OrderInfo.tradeUserInfo?.bankCardNo}}</text>
						</view>
						<view class="bankInfoItem">
							<text>开户姓名</text>
							<text style="color: #313131;">{{OrderInfo.tradeUserInfo?.bankOpenName}}</text>
						</view>
					</view>
					<view class="apply" v-show="tabsListIndex === 2">
						<view class="applyImg">
							<image :src="OrderInfo.tradeUserInfo?.zhifubaoPaymentPic" mode=""></image>
						</view>
						<view style="padding: 16rpx 0 22rpx;">请扫码支付<text style="color: #D50000;">￥{{OrderInfo?.trunover}}</text></view>
					</view>
					<view class="apply" v-show="tabsListIndex === 3">
						<view class="applyImg">
							<image :src="OrderInfo.tradeUserInfo?.weixinPaymentPic" mode=""></image>
						</view>
						<view style="padding: 16rpx 0 22rpx;">请扫码支付<text style="color: #D50000;">￥{{OrderInfo?.trunover}}</text></view>
					</view>
				</view>
			</view>
			<view class="card">
				<view class="cardTitle">打款截图</view>
				<u-upload 
					:width="190" 
					:height="190" 
					:maxCount="uploadFrom.maxCount"
					:action="uploadFrom.action"
					:header="uploadFrom.header"
					:formData="uploadFrom.formData"
					:name="uploadFrom.name"
					@on-success="handleSuccess"></u-upload>
			</view>
			<view class="card">
				<u-input 
					v-model="payPassword" 
					type="password" 
					placeholder="请输入支付密码"
					height="84"
					:border="false" />
			</view>
			<view class="btn" @click="handlePay(OrderInfo?.id)">我已打款</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from "vue";
	import {navigateBack} from "@/utils/navigate.js"
	import {userStore} from "@/store/index.js"
	import {tradeOrderDetails} from "@/api/trade.js"
	import {
		onLoad
	} from "@dcloudio/uni-app";
	onLoad((option) => {
		getOrderDetails(option?.id)
	})
	
	// 订单信息
	const OrderInfo = reactive({})
	// 获取订单信息
	function getOrderDetails(id = 0) {
		return tradeOrderDetails(id).then(res => {
			res.tradeUserInfo.avatar = userStore().systemConfig.picUrlPre + res.tradeUserInfo.avatar
			Object.assign(OrderInfo,res)
			console.log(OrderInfo);
		})
	}
	// 支付密码
	const payPassword = ref(null)
	const tabsList = [
		{id:1,name: '银行卡'},
		{id:2,name: '支付宝'},
		{id:3,name: '微信'}
	]
	const tabsListIndex = ref(1)
	const handleTabClick = (id) => {
		if(id) {
			tabsListIndex.value = id
		}
	}
	// 上传参数
	const uploadFrom = reactive({
		action: '/dev/client/user/system/image',
		maxCount: '1',
		header: {
			'Authorization': userStore().token || ''
		},
		formData: {
			"model": "user"
		},
		name: 'multipart'
	})
	// 存放上传的图片路径
	const uploadImg = ref([])
	const handleSuccess = (data, index, lists, name) => {
		if (!Array.isArray(lists) || lists.length === 0) {
		  throw new Error('上传数据错误!');
		}
		uploadImg.value = lists.map(item => userStore().systemConfig.picUrlPre + item.response.data.url)
		console.log(uploadImg.value);
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FBFBFB;
		position: relative;
		.context {
			width: 100%;
			background-color: #FBFBFB;
			margin-top: 18rpx;
			padding: 0 32rpx 64rpx;
			.btn {
				width: 686rpx;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				background: #24743C;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
				border-radius: 16rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 150rpx;
			}
			.gathering {
				width: 638rpx;
				background: #ECECEC;
				border-radius: 16rpx;
				padding: 0 20rpx;
				.apply {
					text-align: center;
					font-size: 24rpx;
					font-weight: bold;
					image {
						width: 312rpx;
						height: 254rpx;
					}
					.applyImg {
						display: flex;
						justify-content: center;
					}
				}
				.bankInfo {
					font-size: 24rpx;
					font-weight: 400;
					color: #A2A2A2;
					.bankInfoItem {
						padding-bottom: 24rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
				}
				.titleAndTabs {
					font-size: 28rpx;
					font-weight: bold;
					color: #313131;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 18rpx 0 40rpx;
					.tabsItem {
						color: #24743C;
						border-radius: 22rpx;
						padding: 6rpx 18rpx;
						margin-left: 16rpx;
						border: 2rpx solid #24743C;
					}
					.tabsItemActivate {
						background: #24743C;
						color: #FFFFFF;
					}
					.tabs {
						font-size: 20rpx;
						font-weight: 400;
						display: flex;
						align-items: center;
					}
				}
			}
			.userInfo {
				display: flex;
				align-items: center;
				padding: 20rpx 0 30rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #6D6D6D;
				position: relative;
				.userName {
					font-weight: bold;
					color: #313131;
					font-size: 32rpx;
					margin-bottom: 8rpx;
				}
				.nameAndphone {
					display: flex;
					flex-direction: column;
					margin-left: 30rpx;
				}
				.userNo {
					position: absolute;
					right: 0;
				}
			}
			.cardTitle {
				font-size: 32rpx;
				font-weight: bold;
				color: #313131;
				padding: 16rpx 0;
				border-bottom: 2rpx solid rgba(112, 112, 112, 0.14);
			}
			.card {
				padding: 0 26rpx;
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
				border-radius: 16rpx;
				margin-bottom: 24rpx;
			}
		}
		.Box-card2 {
			margin: 18rpx 0 0 24rpx;
			width: 686rpx;
			height: 202rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;

			.text-msg2 {
				margin: 18rpx 0 0 24rpx;
				width: 126rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #313131;
				line-height: 24rpx;
			}

			.Msg2 {
				margin-top: 14rpx;
				margin-left: 26rpx;
				border-top: 1rpx solid rgba(200, 200, 200, 0.3);
				width: 636rpx;
				height: 126rpx;
			}

			.img2 {
				margin-top: 25rpx;
				margin-left: 24rpx;
				width: 76rpx;
				height: 76rpx;
			}

			.AAA2 {
				position: absolute;
				top: 764rpx;
				display: flex;
				flex-direction: column;
				margin-left: 140rpx;

			}

			.BBB2 {
				position: absolute;
				top: 780rpx;
				right: 62rpx;
				font-weight: 400;
				color: #6D6D6D;
				font-size: 24rpx;
			}

		}



		.Box-card {
			margin: 18rpx 0 0 24rpx;
			width: 686rpx;
			height: 202rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;

			.text-msg {
				margin: 18rpx 0 0 24rpx;
				width: 126rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #313131;
				line-height: 24rpx;
			}

			.Msg {
				margin-top: 14rpx;
				margin-left: 26rpx;
				border-top: 1rpx solid rgba(200, 200, 200, 0.3);
				width: 636rpx;
				height: 126rpx;

				// background-color: pink;
				.img {
					margin-top: 25rpx;
					margin-left: 24rpx;
					width: 76rpx;
					height: 76rpx;
				}
			}

			.AAA {
				position: absolute;
				top: 540rpx;
				display: flex;
				flex-direction: column;
				margin-left: 140rpx;

			}

			.BBB {
				position: absolute;
				top: 560rpx;
				right: 62rpx;
				font-weight: 400;
				color: #6D6D6D;
				font-size: 24rpx;
			}
		}




		.titles {
			font-weight: 400;
			font-size: 24rpx;
			color: #000000;
			margin-bottom: 10rpx;
		}

		.flex-col {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-weight: 800;
			font-size: 32rpx;
			color: #000000;
		}

		.itemText {
			padding: 50rpx 24rpx 34rpx;
		}

		.flex-space-between {
			display: flex;
			align-items: center;
			justify-content: space-around;
		}

		.ctxBox {
			padding: 0 32rpx;
			position: absolute;
			top: 270rpx;

			.item {
				width: 686rpx;
				height: 130rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				margin-bottom: 24rpx;
			}
		}

		.tabBox {
			width: 100%;
			height: 444rpx;
			background: #24743C;
			font-weight: 800;
			color: #F5F5F5;
			font-size: 32rpx;
			padding: 0 32rpx;

			.tabBoxs {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 112rpx;
			}

			.arrowsBg {
				// transform: rotate(180deg);
				width: 25rpx;
				height: 48rpx;
				background: url("@/static/img/arrows.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}

		.title {
			// margin-left: -343rpx;
			position: absolute;
			left: 320rpx;
		}

		.BoxCard {
			display: flex;
			position: relative;

			top: 18rpx;
			margin-left: 32rpx;
			width: 686rpx;
			height: 202rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;
			margin-top: 20rpx;



			.item2Card {
				position: absolute;

				right: 28rpx;
				margin-top: 10rpx;
				margin-left: 170rpx;
				display: flex;
				flex-direction: column;

				.item1 {
					position: relative;
					right: -140rpx;
					font-size: 20rpx;
					font-weight: 400;
					color: #929292;
					line-height: 24rpx;

				}

				.item2 {
					position: relative;
					top: 16rpx;
					font-weight: 400;
					color: #929292;
					line-height: 24rpx;
					font-size: 20rpx;
				}


			}

			.image {
				image {
					width: 68rpx;
					height: 68rpx;
					margin-top: 20rpx;
					margin-left: 24rpx;
				}

			}
		}

		.listBg {

			width: 686rpx;
			margin: 18rpx 0 0 24rpx;
			margin-left: 25rpx;
			padding: 20rpx 24rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx;
			margin-bottom: 24rpx;
		}

		.payText {
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}



		.Box-jiaoyi {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 176rpx;
			left: 32rpx;
			color: #FFFFFF;


			.item1 {
				padding-bottom: 50rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
			}

			.item2 {
				width: 118rpx;
				height: 34rpx;
				font-size: 24rpx;
				line-height: 24rpx;

			}

		}

		.text-msg {
			height: 60rpx;
			width: 100%;
		}

	}
</style>
