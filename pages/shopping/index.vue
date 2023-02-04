<template>
	<view class="bg">
		<view class="box">
			<view class="search">
				<view class="searchBox">
					<u-search shape="round" v-model="keyword" :show-action="false" @search="changeCancel"></u-search>
				</view>
			</view>
			<view class="context">
				<view class="wrap">
					<u-swiper :list="swiperList" name="image" border-radius="20" height="278" @click="changeSwiper">
					</u-swiper>
				</view>
				<view class="fundomian">
					<view class="fundomianItem">
						<view class="itemBg1"></view>
						<view class="itemText">我的订单</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg2"></view>
						<view class="itemText">我的返利</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg3"></view>
						<view class="itemText">商品分类</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg4"></view>
						<view class="itemText">购物车</view>
					</view>
				</view>
				<view class="BoxList">
					<view class="BoxListItem">
						<image src="@/static/img/watches.png" alt=""/>
						<text>智能相机</text>
						<view class="ItemCtx">
							<view class="BoxListItemCtx">
								<text class="price">￥1299</text>
								<text>2.2万人购买</text>
							</view>
							<view class="miniTitle">
								<view class="miniTitleBg"></view>
								<text>创联电商</text>
							</view>
						</view>
					</view>
					<view class="BoxListItem">
						<image src="@/static/img/camera.png" alt=""/>
						<text>智能相机</text>
						<view class="ItemCtx">
							<view class="BoxListItemCtx">
								<text class="price">￥1299</text>
								<text>2.2万人购买</text>
							</view>
							<view class="miniTitle">
								<view class="miniTitleBg"></view>
								<text>创联电商</text>
							</view>
						</view>
					</view>
					<view class="BoxListItem">
						<image src="@/static/img/camera.png" alt=""/>
						<text>智能相机</text>
						<view class="ItemCtx">
							<view class="BoxListItemCtx">
								<text class="price">￥1299</text>
								<text>2.2万人购买</text>
							</view>
							<view class="miniTitle">
								<view class="miniTitleBg"></view>
								<text>创联电商</text>
							</view>
						</view>
					</view>
					<view class="BoxListItem">
						<image src="@/static/img/watches.png" alt=""/>
						<text>智能相机</text>
						<view class="ItemCtx">
							<view class="BoxListItemCtx">
								<text class="price">￥1299</text>
								<text>2.2万人购买</text>
							</view>
							<view class="miniTitle">
								<view class="miniTitleBg"></view>
								<text>创联电商</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, toRefs } from "vue";
	const data = reactive({
		keyword: '',
		swiperList: [{
				image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
				title: '昨夜星辰昨夜风，画楼西畔桂堂东'
			},
			{
				image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
				title: '身无彩凤双飞翼，心有灵犀一点通'
			},
			{
				image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
				title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
			}
		],
	})
	const {keyword,swiperList} = toRefs(data)
	// 用户点击搜索后触发
	const changeCancel = () => {
		console.log(keyword.value)
	}
	// 用户点击轮播图后触发
	const changeSwiper = (index) => {
		console.log(index)
	}
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.box {
		width: 100%;
		background-color: #FBFBFB;
		padding-bottom: 100rpx;
		.context {
			width: 100%;
			padding: 0 32rpx;
			margin-top: -172rpx;
			.wrap {
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 20rpx;
			}
			.BoxList {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.BoxListItem {
				padding: 20rpx 16rpx;
				margin-bottom: 16rpx;
				width: 334rpx;
				height: 456rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
				border-radius: 16rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #3A2A08;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.miniTitle {
					margin-top: 10rpx;
					display: flex;
					align-items: center;
					.miniTitleBg {
						margin-right: 8rpx;
						width: 20rpx;
						height: 20rpx;
						background: url("@/static/img/miniShop.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				.ItemCtx {
					font-size: 24rpx;
					font-weight: 400;
					color: #848484;
				}
				.BoxListItemCtx {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.price {
						font-size: 40rpx;
						font-weight: 800;
						color: #E60808;
					}
				}
				image {
					width: 200rpx;
					height: 200rpx;
					margin: 0 auto;
				}
			}
			.fundomian {
				width: 686rpx;
				height: 178rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #3A2A08;
				padding: 0 58rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 16rpx 0rpx 28rpx;
				.fundomianItem {
					text-align: center;
					display: flex;
					flex-direction: column;
					align-items: center;
			
					.itemBg1 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/order.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
			
					.itemBg2 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/rebate.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
			
					.itemBg3 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/classify.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
			
					.itemBg4 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/shoppingCart.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
				}
			}
		}
		.search {
			width: 750rpx;
			height: 394rpx;
			background: #24743C;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 0rpx 0rpx 60rpx 60rpx;
			padding: 0 32rpx;
			display: flex;
			justify-content: space-between;
			.searchBox {
				width: 100%;
				height: 64rpx;
				margin-top: 132rpx;
			}
		}
	}
}
</style>
