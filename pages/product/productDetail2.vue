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
					<view class="product-title">{{shopInfo.storeName}}</view>
					<view class="product-price">￥{{shopInfo.price?.toFixed(2)}}</view>
					<view class="product-originPrice">￥{{shopInfo.otPrice}}</view>
				</view>
				<u-line color="#ccc" />
				<view class="info-box-bottom">
					<view class="left-tips">100%正品</view>
					<view class="right-tips">顺丰EM速达·丰富赠礼·无忧退款·安全支付</view>
				</view>
			</view>
			<view class="info-box m-top-20">详情介绍</view>
			<view class="contentImg" style="width: 750rpx;" v-html="shopInfo.content"></view>
		</view>
		<view class="bottom">
			<view class="shopCart" @click="changePath('/pages/shopping/shoppingCart',{})">
				<view class="shopCartBg"></view>
				<text>购物车</text>
			</view>
			<view class="shopCart" @click="enshrine">
				<view :class="[sc ? 'shopCollect2':'shopCollect']"></view>
				<text>收藏</text>
			</view>
			<view class="btnAll">
				<view class="btn" @click="shopAndBuy(0)">加入购物车</view>
				<view class="btn2" @click="shopAndBuy(1)">立即购买</view>
			</view>
			
			<vk-data-goods-sku-popup 
				:amount-type="0"
				ref="skuPopup" 
				v-model="isShow" 
				border-radius="20" 
				:localdata="goodsInfo"
				goods-id-name="id"
				sku-id-name="id"
				sku-list-name="skuList"
				spec-list-name="specList"
				stock-name="stock"
				sku-arr-name="attrValues"
				goods-thumb-name="image"
				:mode="skuMode" 
				@open="shopAndBuy"
				@buy-now="buyNow"
				@add-cart="addCart"
				></vk-data-goods-sku-popup>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		reactive,
		ref
	} from 'vue'
	import {
		navigateBack,
		changePath
	} from "@/utils/navigate.js"
	import { onLoad } from "@dcloudio/uni-app";
	import { productDetail } from "@/api/category.js"
	import { cartSave } from "@/api/cart.js"
	import { userStore } from "@/store/index.js"
	import { preOrder } from "@/api/order.js"
	import {collect,getLikeById} from '@/api/shop.js'

	onLoad((option) => {
		getList(option?.id)
		productId.value = option?.id
		getLikeById(option?.id).then(res => {
			sc.value = res ? 1 : 0
		})
	})
	const goodsInfo = ref({})
	const shopInfo = ref({})
	const addCartForm = reactive({
		productId: 0,
		productAttrUnique: "",
		cartNum: 0
	})
	// 订单id号
	const productId = ref(null)
	// 是否收藏 0否 1是
	const sc = ref(0)
	// 共用的提示方法
	const uniShowToast = ({msg = "",icon = "none"}) => {
		uni.showToast({
			title:msg,
			icon:icon
		})
	}
	const enshrine = () => {
		sc.value = !sc.value
		sc.value = sc.value ? 1 : 0
		collect({
			isLike: sc.value,
			productId: productId.value
		}).then(res=>{
			if(sc.value === 1) {
				return uniShowToast({
					msg:"收藏成功",
					icon:"success"
				})
			}
			uniShowToast({
				msg:"取消收藏",
				icon:"success"
			})
		},err => {
			uniShowToast({
				msg:err,
				icon:"error"
			})
		})
	}
	const list = ref([])
	const getList = (id) => {
		if(id) {
			productDetail(id).then(res => {
				console.log('SSSSSSSSSSS',res);
				shopInfo.value = res.productInfo
				// 是否需要发货
				isNeedDeliver.value = shopInfo.value.isNeedDeliver
				// 对content标签img改成image
				shopInfo.value.content = shopInfo.value.content?.replace(/<img\b/gi, '<image');
				// 对content的src拼接上userStore().systemConfig.picUrlPre
				shopInfo.value.content = shopInfo.value.content?.replace(/(<image[^>]+src=")([^"]+)(")/, `$1${userStore().systemConfig.picUrlPre}$2$3`);
				shopInfo.value.image = userStore().systemConfig.picUrlPre + shopInfo.value.image
				// 目前只有一个图片，直接push
				list.value.push(shopInfo.value.image)
				goodsInfo.value = res
				goodsInfo.value.image = userStore().systemConfig.picUrlPre + goodsInfo.value.image
				goodsInfo.value.skuList.map(item => {
					item.image = userStore().systemConfig.picUrlPre + item.image
				})
				// console.log(goodsInfo.value);
			})
		}
	}
	// 当前商品是否需要发货字段
	const isNeedDeliver = ref(true)
	
	const skuMode = ref(1)
	// console.log(productValue.value);
	const isShow = ref(false)
	// 加入购物车(0) 立即购买(1)
	const typeId = ref(0)
	const typeName = computed(() => {
		// switch (typeId.value) {
		// 	case 0:
		// 		return '加入购物车'
		// 		break;
		// 	case 1:
		// 		return '立即购买'
		// 		break;
		// }
		const typeMap = new Map([
		  [0, '加入购物车'],
		  [1, '立即购买']
		]); 
		return typeMap.get(typeId.value)
		
		
	})
	const numValue = ref(0)
	const shopAndBuy = (id) => {
		typeId.value = id
		isShow.value = true
		// 加入购物车(0) 立即购买(1)
	}
	// 选完规格后点击购买
	const buyNow = (selectShop) => {
		// console.log(selectShop);
		let data = {}
		data.productId = selectShop.productId
		data.attrValueId = selectShop.id
		data.productNum = selectShop.buy_num
		preOrder({preOrderType: 'buyNow',orderDetails: [data]}).then(({preOrderNo}) => {
			isShow.value = false
			changePath('/pages/order/QueRenDingDan',{preOrderNo,isNeedDeliver: isNeedDeliver.value})
		},() => {
			uniShowToast({
				msg:err,
				icon:"error"
			})
		})
	}
	// 选完规格后点击加入购物车
	const addCart = (selectShop) => {
		addCartForm.productId = selectShop.productId
		addCartForm.productAttrUnique = selectShop.id
		addCartForm.cartNum = selectShop.buy_num
		cartSave(addCartForm).then(res => {
			uniShowToast({
				msg:"加入购物车成功",
				icon:"success"
			})
			isShow.value = false
		},err => {
			uniShowToast({
				msg:err,
				icon:"error"
			})
		})
		// changePath('/pages/order/QueRenDingDan',{})
		
	}
</script>

<style lang="scss" scoped>	
	.contentImg {
		width: 750rpx;
	}
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

				.disabled {
					background: #939393 !important;
				}

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
				.shopCollect {
					margin-bottom: 8rpx;
					width: 44rpx;
					height: 46rpx;
					background: url("@/static/img/collect2.png") 100% no-repeat;
					background-size: 100% 100%;
				}
				.shopCollect2 {
					margin-bottom: 8rpx;
					width: 44rpx;
					height: 46rpx;
					background: url("@/static/img/collect.png") 100% no-repeat;
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
