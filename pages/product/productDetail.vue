<template>
	<view class="container">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view></view>
			<view class="titleText"></view>
		</view>
		<view class="swiper-box">
			<u-swiper class="swiper" height="776" :list="list"></u-swiper>
		</view>
		<view class="product-info-box">
			<view class="info-box">
				<view class="info-box-top">
					<view class="product-title">美特斯邦威羽绒服保暖冬季防风保暖...</view>
					<view class="product-price">760.00</view>
					<view class="product-originPrice">￥350.00</view>
				</view>
				<u-line color="#ccc" />
				<view class="info-box-bottom">
					<view class="left-tips">100%正品</view>
					<view class="right-tips">顺丰EM速达·丰富赠礼·无忧退款·安全支付</view>
				</view>
			</view>
			<view class="info-box m-top-20">详情介绍</view>
		</view>
		<view class="bottom">
			<view class="shopCart" @click="changePath('/pages/shopping/shoppingCart',{})">
				<view class="shopCartBg"></view>
				<text>购物车</text>
			</view>
			<view class="btnAll">
				<view class="btn" @click="shopAndBuy(0)">加入购物车</view>
				<view class="btn2" @click="shopAndBuy(1)">立即购买</view>
			</view>
		</view>
		<u-popup v-model="isShow" mode="bottom" border-radius="16">
			<view class="flex-column showBox">
				<view class="boxImgAndText">
					<image src="@/static/img/camera.png" mode=""></image>
					<view class="text">
						<text class="text-bottom-18"
							style="font-size: 20rpx;font-weight: 400;color: #A8A8A8;text-decoration:line-through;">￥350.00</text>
						<text class="text-bottom-18" style="font-size: 32rpx;">￥315.00</text>
						<text class="text-bottom-18">请选择尺码.数量</text>
					</view>
				</view>
				<view class="specification" v-for="item in productAttr" :key="item.id">
					<text class="text-title">{{item.attrName}}</text>
					<view class="specificationList">
						<!-- ItemActivate -->
						<text class="Item" v-for="itemQuc in item.attrValues">{{itemQuc}}</text>
					</view>
				</view>
				<view class="numBox">
					<text class="text-title">数量</text>
					<u-number-box v-model="numValue"></u-number-box>
				</view>
				<text style="margin-top: 20rpx;font-size: 16rpx;color: #D4D4D4;">图片仅供参考</text>
				<view class="changeBtn" :class="[typeId ? 'backg-24743C' : '']">{{typeName}}</view>
			</view>
		</u-popup>
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue'
	import {
		navigateBack,
		changePath
	} from "@/utils/navigate.js"
	const productValue = ref({
		"红色,200*27cm": {
			"id": 41,
			"productId": 1,
			"suk": "红色,200*27cm",
			"stock": 0,
			"sales": 0,
			"price": 123,
			"image": "crmebimage/public/maintain/2021/12/25/5486775d8cad4fd8adfc254d2e93857cn0wu5hq8f4.jpg",
			"unique": "",
			"cost": 0,
			"barCode": "",
			"otPrice": 0,
			"weight": 0,
			"volume": 0,
			"brokerage": 0,
			"brokerageTwo": 0,
			"type": 0,
			"quota": 112,
			"quotaShow": null,
			"createTime": null,
			"updateTime": null,
			"attrValue": "{\"颜色\":\"红色\",\"尺码\":\"200*27cm\"}",
			"minPrice": null,
			"checked": null,
			"vipPrice": null
		},
		"白色,200*27cm": {
			"id": 1,
			"productId": 1,
			"suk": "白色,200*27cm",
			"stock": 345,
			"sales": 0,
			"price": 268,
			"image": "crmebimage/public/maintain/2021/12/25/63969148b6c4447d918124fd810c1da5m2h9aiylly.jpg",
			"unique": "",
			"cost": 40,
			"barCode": "",
			"otPrice": 188,
			"weight": 1,
			"volume": 0,
			"brokerage": 0,
			"brokerageTwo": 0,
			"type": 0,
			"quota": 0,
			"quotaShow": 0,
			"createTime": null,
			"updateTime": null,
			"attrValue": "{\"颜色\":\"白色\",\"尺码\":\"200*27cm\"}",
			"minPrice": null,
			"checked": null,
		 "vipPrice": null
		},
		"粉色,200*27cm": {
			"id": 39,
			"productId": 1,
			"suk": "粉色,200*27cm",
			"stock": 555,
			"sales": 0,
			"price": 250,
			"image": "crmebimage/public/maintain/2021/12/25/5486775d8cad4fd8adfc254d2e93857cn0wu5hq8f4.jpg",
			"unique": "",
			"cost": 100,
			"barCode": "",
			"otPrice": 421,
			"weight": 0.6,
			"volume": 0,
			"brokerage": 0,
			"brokerageTwo": 0,
			"type": 0,
			"quota": 66,
			"quotaShow": null,
			"createTime": null,
			"updateTime": null,
			"attrValue": "{\"颜色\":\"粉色\",\"尺码\":\"200*27cm\"}",
			"minPrice": null,
			"checked": null,
			"vipPrice": null
		},
		"红色,240*30": {
			"id": 40,
			"productId": 1,
			"suk": "红色,240*30",
			"stock": 0,
			"sales": 0,
			"price": 321,
			"image": "crmebimage/public/maintain/2021/12/25/5486775d8cad4fd8adfc254d2e93857cn0wu5hq8f4.jpg",
			"unique": "",
			"cost": 200,
			"barCode": "",
			"otPrice": 0,
			"weight": 0,
		 "volume": 0,
			"brokerage": 0,
			"brokerageTwo": 0,
			"type": 0,
			"quota": 53,
			"quotaShow": null,
			"createTime": null,
			"updateTime": null,
			"attrValue": "{\"颜色\":\"红色\",\"尺码\":\"240*30\"}",
			"minPrice": null,
			"checked": null,
			"vipPrice": null
		},
	})
	const productAttr = ref([{
			"id": 1,
			"productId": 1,
			"attrName": "颜色",
			"attrValues": "白色,黑色,粉色,红色",
			"type": 0,
			"isDel": false
		},
		{
			"id": 9,
			"productId": 1,
			"attrName": "尺码",
			"attrValues": "200*27cm,240*30,250*25",
			"type": 0,
			"isDel": false
		}
	])
	console.log(productAttr,'productAttr');
	productAttr.value.map(item => {
		item.attrValues = item.attrValues.split(",")
	})
	const list = ref([
		'https://cdn.uviewui.com/uview/swiper/1.jpg',
		'https://cdn.uviewui.com/uview/swiper/2.jpg',
		'https://cdn.uviewui.com/uview/swiper/3.jpg',
	])
	console.log(productValue.value, 'productValue');
	const isShow = ref(false)
	// 加入购物车(0) 立即购买(1)
	const typeId = ref(0)
	const typeName = computed(() => {
		switch (typeId.value) {
			case 0:
				return '加入购物车'
				break;
			case 1:
				return '立即购买'
				break;
		}
	})
	const numValue = ref(0)
	const shopAndBuy = (id) => {
		typeId.value = id
		isShow.value = true
		// 加入购物车(0) 立即购买(1)
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #f1f1f1;
		height: 100vh;
		width: 100%;
		position: relative;

		.backg-24743C {
			background: #24743C !important;
		}

		.text-title {
			font-size: 28rpx;
			font-weight: 800;
			color: #000000;
		}

		.text-bottom-18 {
			margin-bottom: 18rpx;
		}

		.flex-column {
			display: flex;
			flex-direction: column;
		}

		.showBox {
			padding: 58rpx 30rpx;

			.changeBtn {
				margin: 0 auto;
				margin-top: 150rpx;
				width: 632rpx;
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				background: #E5BC70;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #FFFFFF;
			}

			.numBox {
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.specification {
				margin-top: 50rpx;
				width: 80%;

				.Item {
					display: inline-block;
					padding: 8rpx 30rpx;
					border: 2rpx solid #EBEBEB;
					background: #EBEBEB;
					border-radius: 28rpx 28rpx 28rpx 28rpx;
					margin-right: 32rpx;
					margin-top: 22rpx;
				}

				.ItemActivate {
					border: 2rpx solid orange;
					background: orange;
				}
			}

			.boxImgAndText {
				display: flex;
				align-items: center;

				.text {
					display: flex;
					flex-direction: column;
					margin-left: 26rpx;
					font-weight: 800;
				}

				image {
					width: 194rpx;
					height: 194rpx;
					border: 2rpx solid rgba(112, 112, 112, 0.32);
				}
			}
		}

		.bottom {
			width: 750rpx;
			padding: 20rpx 32rpx 66rpx 42rpx;
			background: #FFFFFF;
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.shopCart {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				font-weight: 800;

				.shopCartBg {
					margin-bottom: 8rpx;
					width: 44rpx;
					height: 46rpx;
					background: url("@/static/img/shopCart.png") 100% no-repeat;
					background-size: 100% 100%;
				}
			}

			.btnAll {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				font-weight: 400;
				color: #FFF1F1;
				text-align: center;
			}

			.btn {
				margin-right: 24rpx;
				width: 222rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: #E5BC70;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				opacity: 1;
			}

			.btn2 {
				width: 222rpx;
				line-height: 80rpx;
				height: 80rpx;
				background: #24743C;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				opacity: 1;
			}
		}

		.m-top-20 {
			margin-top: 20rpx;
			padding: 12rpx 0;
			text-align: center;
			font-size: 28rpx;
			font-weight: 400;
			color: #000000;
		}

		.tabs {
			z-index: 999;
			position: absolute;
			top: 30rpx;
			width: 100%;
			height: 176rpx;
			padding: 20rpx 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.titleText {
				width: 47rpx;
				height: 12rpx;
				background: url("@/static/img/more.png") 100% no-repeat;
				background-size: 100% 100%;
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
				background: url("@/static/img/BlackArrow.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}

		.swiper-box {
			// padding-top: 100rpx;
			// height: 776rpx;
			// background-color: #fff;
			//滤镜下到上 黑白渐变

			background: linear-gradient(0deg, #999, #ffffff 25%);
		}

		.product-info-box {
			padding: 26rpx 30rpx 240rpx;
			background-color: #F1F1F1;

			.info-box {
				background-color: #fff;
				// padding: 22rpx 34rpx;
				border-radius: 20rpx;

				.info-box-top {
					padding: 30rpx 34rpx 18rpx;

					.product-title {
						font-size: 40rpx;
						font-weight: 800;
					}

					.product-price {
						font-size: 44rpx;
						font-weight: 800;
						color: #a20505;
					}

					.product-originPrice {
						font-weight: 400;
						color: #a8a8a8;
						text-decoration: line-through;
					}
				}

				.info-box-bottom {
					padding: 18rpx 34rpx;
					display: flex;
					justify-content: space-between;

					.left-tips {
						font-size: 28rpx;
						color: #000;
						font-size: 24rpx;
					}

					.right-tips {
						font-size: 28rpx;
						color: #a8a8a8;
						font-size: 20rpx;
					}
				}
			}
		}
	}
</style>
