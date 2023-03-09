<template>
	<view class="bg">
		<view class="topHeZi">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">确认订单</view>
		</view>

		<!-- 第一个卡片盒子 -->
		<view class="card-box1">
			<!-- <image src="../../static/img/community.png" mode="" class="imaeg"></image> -->
			<view class="imaegBox">
				<view class="imaeg"> </view>
			</view>

			<view class="qBOX">
				<text class="item1">{{store.storeOrderAddress.realName}}</text>
				<text class="item2">&nbsp;&nbsp;{{store.storeOrderAddress.phone}}</text>
			</view>

			<text class="address">{{store.storeOrderAddress.detail}}</text>

			<!-- 箭头 -->
			<text class="youJianTou" @click="btnTo(1)">></text>

		</view>
		<!-- 第一个卡片盒子 -->

		<view class="shopList">
			<view class="shopItem" v-for="item in orderList" :key="item.attrValueId">
				<view class="imgAndTitle">
					<image :src="item.image" mode=""></image>
					<view class="titleAndText">
						<text class="u-line-2">{{item.productName}}</text>
						<view style="display: flex;justify-content: space-between;font-size: 20rpx;color: #A8A8A8;font-weight: 400;padding: 10rpx 0rpx;">
							<text>规格：{{item.sku}}</text>
							<text>x{{item.payNum}}</text>
						</view>
						<view class="">
							<text>￥{{item.price}}</text>
						</view>
					</view>
				</view>
				<view class="expressage">
					<text class="titles">快递</text>
					<text style="color: #CFCFCF;">包邮</text>
				</view>
				<view class="expressage">
					<text class="titles">订单备注</text>
					<text style="color: #CFCFCF;">选填</text>
				</view>
			</view>
		</view>

		<!-- 第四个卡片盒子 -->

		<view class="card-box4">
			<view class="item-Box1">
				<!-- <text>订单类型</text> -->
				<!-- <text>加工费用</text> -->
				<!-- <text>保价类型</text> -->
				<text>订单类型</text>
				<text>运费</text>
			</view>

			<view class="item-Box2">
				<!-- <text>兑换订单</text> -->
				<!-- <text>￥0</text> -->
				<!-- <text>顺丰保价</text> -->
				<text>兑换订单</text>
				<text>￥{{freightFee || 0}}</text>
			</view>
		</view>
		<!-- 第四个卡片盒子 -->

		<!-- 第五个卡片盒子 -->
		<view class="card-box5">
			<view class="item1">
				<text class="item1-1">总金额:</text>
				<text class="item1-2">￥{{countNum}}</text>
			</view>
			<view class="button">
				<view class="button-button" style="color: #FFF1F1;" @click="clickBuy">
					提交订单
				</view>

			</view>

		</view>
		<!-- 第五个卡片盒子 -->

	</view>
</template>
<script setup>
	import {
		reactive,
		ref,
		toRefs
	} from "vue";
	import {changePath} from "@/utils/navigate.js"
	import { userStore } from "@/store/index.js"
	import { info } from "@/api/user.js"
	import { onLoad,onShow } from "@dcloudio/uni-app";
	import { getPreOrderList,getOrderPrice } from "@/api/order.js"
	import { defaultAddress } from "@/api/userAddress.js"
	onLoad((option) => {
		getOrderList(option?.preOrderNo)
		preOrder.value = option?.preOrderNo
		isNeedDeliver.value = option?.isNeedDeliver
		updateOrderPrice()
	})
	
	async function updateOrderPrice() {
	  const address = await defaultAddress();
	  if (address) {
	    store.storeOrderAddress = address;
	    const { payFee, freightFee, orderDetailList } = await getOrderPrice({
	      preOrderNo: preOrder.value,
	      addressId: store.storeOrderAddress.id
	    });
	    const postageItem = orderDetailList.find(item => item.isPostage);
	    freightFee1.value = postageItem ? 0 : freightFee;
	    countNum.value = payFee;
	  }
	}
	
	const store = userStore()
	if(!store.userInfo?.uid) {
		info().then(res => {
			store.userInfo = res
		})
	}
	// 是否需要发货
	const isNeedDeliver = ref(true)
	// 保存preOrderNo获取当前商品列表
	const orderList = ref([])
	// 总金额
	const countNum = ref(0)
	// 商品未加上运费的价格
	const oldPre = ref(0)
	// 运费
	const freightFee1 = ref(null)
	// 预订单id
	const preOrder = ref(null)
	// 根据preOrderNo获取当前商品详情
	const getOrderList = (preOrderNo) => {
		getPreOrderList(preOrderNo).then(res => {
			// console.log(res);
			orderList.value = res.orderInfoVo?.orderDetailList
			oldPre.value = res.orderInfoVo?.payFee
			orderList.value.map(item => {
				item.image = store.systemConfig.picUrlPre + item.image
			})
			// countNum.value = res.orderInfoVo?.payFee
		})
	}
	// 点击提交订单
	const clickBuy = () => {
		if(!store.storeOrderAddress?.id) {
			return uni.showToast({
				title:"请填写收货地址",
				icon:"error"
			})
		} else {
			changePath("/pages/order/ZhiFuDingDan",
				{
					'preOrderNo': preOrder.value,
					'countNum': oldPre.value,
					'freightFee': freightFee1.value
				})
		}
	}
	
	// 返回上一级
	function navigateBack() {
		uni.navigateBack({
			delta: 1
		})
	}

	// 箭头
	const btnTo = (id) => {
		if (id) {
			changePath("/pages/user/shoHuoDiZhi",{keyword: "setAddr"})
		}
	}

	const showPayWay = ref(false)
	const list = ref([{
			value: '1',
			label: '发货'
		},
		{
			value: '2',
			label: '自取'
		}
	])
	const payWayName = ref(list.value[0].label)
	const changePayWay = (list) => {
		payWayName.value = list[0].label
	}
</script>
<style lang="scss" scoped>
	.bg {
		position: relative;
		width: 100%;
		height: 176rpx;
		background: #24743C;
		.shopList {
			margin: 0 auto;
			margin-top: 24rpx;
			width: 684rpx;
			.shopItem {
				background: #FFFFFF;
				box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				margin-bottom: 18rpx;
				padding: 48rpx 30rpx;
				font-size: 28rpx;
				font-weight: 800;
				.expressage {
					font-weight: 400;
					font-size: 24rpx;
					margin-top: 18rpx;
					.titles {
						display: inline-block;
						width: 126rpx;
					}
				}
				.imgAndTitle {
					display: flex;
					align-items: center;
					.titleAndText {
						width: 436rpx;
					}
				}
			}
			image {
				width: 164rpx;
				height: 164rpx;
				margin-right: 30rpx;
			}
		}
		// position: relative;
		.topHeZi {
			display: flex;
			flex-direction: row;

			.title {
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 800;
				color: #F5F5F5;
				margin-left: 256rpx;
				margin-top: 108rpx;
			}

			.arrowsBg {
				width: 25rpx;
				height: 48rpx;
				background: url("@/static/img/arrows.png") 100% no-repeat;
				background-size: 100% 100%;
				// text-align: center;
				margin-left: 34rpx;
				margin-top: 108rpx;
			}
		}


		.card-box1 {
			margin: 48rpx 0 0 32rpx;
			width: 686rpx;
			height: 150rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;

			.imaeg {
				// margin-top: 46rpx;
				margin-left: 42rpx;
				width: 39rpx;
				height: 57rpx;
				background: #24743C;
				// opacity: 1;
				background: url("../../static/img/dizhi.png") 100% no-repeat;
				background-size: 100% 100%; // 控制图片大小的属性
			}

			.imaegBox {
				padding-top: 30rpx;
			}

			.address {
				margin: 20rpx 0 0 100rpx;
				font-weight: 400;
				color: #979797;
				font-size: 24rpx;
			}



		}

		.youJianTou {
			position: absolute;
			top: 240rpx;
			right: 64rpx;
			width: 35rpx;
			height: 35rpx;
			color: #111111;
			font-size: 40rpx;
			// opacity: 1;
		}


		.qBOX {
			font-size: 32rpx;
			width: 480rpx;
			height: 100rpx;
			display: flex;
			justify-content: flex-start;
			position: absolute;
			top: 222rpx;
			margin-left: 100rpx;

			.item1 {
				// width: 80rpx;

				height: 44rpx;

				font-weight: 400;
				color: #616161;
			}

			.item2 {
				// flex-grow: 1;
				// margin-right: 10rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #616161;
				// text-align: right;
			}
		}


		.card-box2 {
			margin-top: 26rpx;
			margin-left: 34rpx;
			width: 684rpx;
			height: 360rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0, 0, 0, 0.12);
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			opacity: 1;

			.image {
				width: 164rpx;
				height: 164rpx;
				margin: 48rpx 0 0 30rpx;
			}

			.Msg-kuaidi {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				// flex-direction: column;


				.item1 {
					margin: 34rpx 0 0 40rpx;
					width: 48rpx;
					height: 34rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #000000;
				}

				.item2 {
					margin: 34rpx 0 0 78rpx;
					width: 448rpx;
					height: 34rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #CFCFCF;
				}

				.item3 {
					margin: 18rpx 0 0 40rpx;
					// width: 48rpx;
					height: 34rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #000000;
					line-height: 34rpx;
				}

				.item4 {
					margin: 18rpx 0 0 32rpx;
					width: 448rpx;
					height: 34rpx;
					line-height: 34rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #CFCFCF;
				}
			}

			.Msg-right {
				display: flex;
				flex-direction: column;

				.item1 {
					width: 410rpx;
					height: 80rpx;
					font-size: 28rpx;
					font-weight: bold;
					color: #000000;
					padding-bottom: 35rpx;
				}

				.item2 {
					padding-bottom: 35rpx;
					height: 28rpx;
					font-size: 20rpx;
					font-weight: 400;
					color: #A8A8A8;
					line-height: 24rpx;
					//text-decoration: line-through; // 删除线

				}

				.item3 {
					// width: 116rpx;
					height: 40rpx;
					font-size: 28rpx;

					font-weight: 800;
					color: #000000;
					line-height: 24rpx;
				}
			}

			.text-text {
				position: absolute;
				top: 506rpx;
				right: 70rpx;
				font-weight: 400;
				color: #A8A8A8;
				height: 28rpx;
				font-size: 20rpx;
			}
		}

		.card-box3 {
			display: flex;
			justify-content: space-between;
			margin: 26rpx 0 0 32rpx;
			width: 686rpx;
			height: 80rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;
			padding: 30rpx 60rpx 30rpx 30rpx;
			// text-align: center;
			line-height: 24rpx;

			.text-tubiao {
				position: absolute;
				top: 794rpx;
				right: 54rpx;
				// width: 11rpx;
				height: 20rpx;
				font-size: 40rpx;
				color: #949494;
				// opacity: 1;
			}
		}

		.card-box4 {
			margin: 24rpx 0 0 32rpx;
			padding-bottom: 150rpx;
			width: 686rpx;
			// height: 350rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;
			display: flex;
			justify-content: space-between;
			// align-items: center;

			.item-Box1 {

				margin-top: 28rpx;
				margin-left: 42rpx;
				display: flex;
				flex-direction: column;
				align-content: space-between;
				// padding: 32rpx 0;
				width: 50%;
				// height: 300rpx;
				font-size: 28rpx;
				// font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #000000;
				line-height: 60rpx
			}

			.item-Box2 {
				width: 50%;
				// height: 300rpx;
				padding-bottom: 30rpx;
				margin-left: 360rpx;
				margin-top: 28rpx;
				display: flex;
				flex-direction: column;

				font-size: 28rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #ACACAC;
				line-height: 60rpx;
				// justify-content: flex-end;
			}
		}

		.card-box5 {
			// position: relative;
			// margin-top: 282rpx;
			bottom: 0;
			width: 750rpx;
			height: 166rpx;
			background: #FFFFFF;
			opacity: 1;
			position: fixed;
			.item1 {
				position: relative;
				margin: 42rpx 0 0 50rpx;
				height: 56rpx;
				font-size: 15rpx;
				padding-bottom:720rpx ;
				width: 80rpx;


				.item1-2 {
					position: absolute;
					top: -5rpx;
					margin: 0rpx 0 0 15rpx;
					font-size: 35rpx;
					font-weight: 400;
					color: #CC0000;
				}
			}

			.button {
				position: absolute;
				bottom: 70rpx;
				right: 32rpx;
				width: 222rpx;
				height: 80rpx;
				background: #24743C;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				// opacity: 1;
				padding: 20rpx 0 0 40rpx;


				.button-button {
					width: 140rpx;
					height: 44rpx;
					font-size: 32rpx;
					// font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					line-height: 44rpx;
					text-align: center;

				}
			}
		}

	}
</style>
