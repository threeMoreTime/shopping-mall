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
						<view class="itemText">美食</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg2"></view>
						<view class="itemText">居家</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg3"></view>
						<view class="itemText">母婴</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg4"></view>
						<view class="itemText">女装</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg5"></view>
						<view class="itemText">美妆</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg6"></view>
						<view class="itemText">男装</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg7"></view>
						<view class="itemText">鞋品</view>
					</view>
					<view class="fundomianItem">
						<view class="itemBg8"></view>
						<view class="itemText">电器</view>
					</view>
				</view>
				<view class="gameImg" @click="changePath('/pages/user/myFarm', {})">
					<image src="@/static/img/gameImg.png" alt=""/>
				</view>
				<view class="ctxBox">
					<view class="tabBox">
						<u-tabs 
							height="70" 
							bg-color="#FFF" duration="0.3" gutter="15" active-color="#3A2A08" 
							bar-width="60"
							font-size="24"
							inactive-color="#676767"
							bar-height="8" :bar-style="{
								'background-color': '#1FA848',
								'text-align': 'center',
								'font-size': '24rpx',
								'margin': '0rpx 0rpx',
							}" :active-item-style="{
								'font-size': '28rpx',
								'color': '#3A2A08',
								'font-weight': 'bold'
							}" 
							:list="tabList" v-model="current" @change="changeTabs"></u-tabs>
					</view>
					<view class="ctxList" v-if="current === 0">
						<view class="ctxListItem">
							<view class="ItemBottomCtx">
								<image src="@/static/img/camera.png" alt=""/>
								<view class="ItemBottomText">
									<text>数码相机</text>
									<view class="goldCtx">
										<text class="gold">3000</text>
										<text class="goldForm">/积分</text>
									</view>
								</view>
							</view>
							<view class="ItemBottomBtn" @click="changePath('/pages/product/productDetail', {})">购买</view>
						</view>
						<view class="ctxListItem">
							<view class="ItemBottomCtx">
								<image src="@/static/img/camera.png" alt=""/>
								<view class="ItemBottomText">
									<text>数码相机</text>
									<view class="goldCtx">
										<text class="gold">3000</text>
										<text class="goldForm">/积分</text>
									</view>
								</view>
							</view>
							<view class="ItemBottomBtn">购买</view>
						</view>
					</view>
					<view class="ctxVideo" v-else-if="current === 2">
						<view class="ctxVideoItem" v-for="item in videos" :key="item.id">
							<video class="videos" :src="item.src"
							show-fullscreen-btn show-play-btn show-loading 
							enable-progress-gesture vslide-gesture-in-fullscreen
							controls
							object-fit="fill"
							@play="showVideoTitle(item.id)"
							></video>
							<view class="videoTest" v-show="isVideoshow !== item.id">
								<text>{{item.name}}</text>
								<text>{{item.number}}</text>
							</view>
						</view>
					</view>
					<view class="ctxList" v-if="current === 3">
						<view class="ctxListItem border-bottom-70">
							<view class="ItemBottomCtx">
								<image src="@/static/img/gold.png" alt=""/>
								<view class="ItemBottomText">
									<text>黄金10克金条</text>
									<view class="goldCtx">
										<text class="gold">3000</text>
										<text class="goldForm">￥</text>
									</view>
									<text class="market">已售2.6万</text>
								</view>
							</view>
							<view class="ItemBottomBtn" @click="changePath('/pages/product/productDetail', {})">兑换</view>
						</view>
						<view class="ctxListItem border-bottom-70">
							<view class="ItemBottomCtx">
								<image src="@/static/img/gold.png" alt=""/>
								<view class="ItemBottomText">
									<text>黄金10克金条</text>
									<view class="goldCtx">
										<text class="gold">3000</text>
										<text class="goldForm">￥</text>
									</view>
									<text class="market">已售2.6万</text>
								</view>
							</view>
							<view class="ItemBottomBtn">兑换</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue";
import {changePath} from "@/utils/navigate.js"
	const isVideoshow = ref(true)
	const showVideoTitle = (id) => {
		isVideoshow.value = id
	}
	const data = reactive({
		videos: [
			{id: 1,name: 'DNF土包子',number: '520', src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'},
			{id: 2,name: 'DNF土包子',number: '520', src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'},
			{id: 3,name: 'DNF土包子',number: '520', src: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'}
		],
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
		tabList: [
			{name: '积分兑换'},
			{name: '现金购买'},
			{name: '周边生活'},
			{name: '兑换黄金'},
		],
		current: 0,
	})
	const {keyword,swiperList,tabList,current,videos} = toRefs(data)
	// 用户点击搜索后触发
	const changeCancel = () => {
		console.log(keyword.value)
	}
	// 用户点击轮播图后触发
	const changeSwiper = (index) => {
		console.log(index)
	}
	// 用户点击tabs后触发
	const changeTabs = (index) => {
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
			.ctxBox {
				margin-top: 38rpx; 
				width: 686rpx;
				padding: 0 20rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
				border-radius: 16rpx;
				.ctxVideo {
					padding: 20rpx 0rpx 40rpx;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
				}
				.ctxVideoItem {
					width: 315rpx;
					height: 400rpx;
					margin-top: 16rpx;
					position: relative;
					border-radius: 20rpx;
					.videos {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
					.videoTest {
						width: 100%;
						padding: 0 14rpx;
						font-size: 24rpx;
						font-weight: 400;
						position: absolute;
						top: 350rpx;
						color: #fff;
						z-index: 99;
						display: flex;
						justify-content: space-between;
					}
				}
				.ctxList {
					padding-bottom: 70rpx;
				}
				.border-bottom-70 {
					border-bottom: 2rpx solid rgba(112, 112, 112, 0.1);
					padding-bottom: 30rpx;
				}
				.ItemBottomCtx {
					display: flex;
					align-items: center;
				}
				.market {
					font-size: 20rpx;
					font-weight: 400;
					color: #A8A8A8;
				}
				.ItemBottomText {
					margin-left: 18rpx;
				}
				.ItemBottomBtn {
					width: 126rpx;
					height: 48rpx;
					background: #24743C;
					border-radius: 24rpx 24rpx 24rpx 24rpx;
					color: #FFF;
					font-size: 28rpx;
					font-weight: bold;
					text-align: center;
					line-height: 48rpx;
				}
				.goldCtx {
					margin-top: 16rpx;
				}
				.gold {
					color: #E60808;
				}
				.goldForm {
					font-size: 20rpx;
					font-weight: bold;
					color: #3A0808;
				}
				
				.ctxListItem {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 42rpx;
					image {
						width: 120rpx;
						height: 120rpx;
					}
				}
			}
			.gameImg {
				width: 686rpx;
				height: 130rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 16rpx;
					box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.24);
				}
			}
			.wrap {
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 20rpx;
			}
			
			.fundomian {
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #3A2A08;
				padding: 0 20rpx;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				margin: 16rpx 0rpx 28rpx;
				.fundomianItem {
					text-align: center;
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 140rpx;
					padding: 20rpx 0rpx;
					.itemBg7 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/shoppingBg.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
					.itemBg8 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/wiring.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
					.itemBg6 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/men.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
					.itemBg5 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/beautyMakeup.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
					.itemBg1 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/delicious.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
			
					.itemBg2 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/livingRoom.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
			
					.itemBg3 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/infant.png") 100% no-repeat;
						background-size: 100% 100%;
						margin-bottom: 12rpx;
					}
			
					.itemBg4 {
						width: 60rpx;
						height: 60rpx;
						background: url("@/static/img/blouse.png") 100% no-repeat;
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
