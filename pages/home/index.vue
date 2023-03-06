<template>
	<view class="bg">
		<view class="search">
			<view class="logoBg"></view>
			<view class="searchBox" @click="changePath('/pages/home/search')">
				<view class="searchBg"></view>
			</view>
		</view>
		<view class="context">
			<view class="wrap">
				<u-swiper :list="swiperList" name="pic" border-radius="20" height="278" @click="changeSwiper">
				</u-swiper>
			</view>
			<view class="news">
				<view class="newstitle">新闻</view>
				<view class="newstext">{{rollText}}</view>
				<view class="newsdite">通知</view>
			</view>
			<view class="fundomian">
				<view class="fundomianItem" @click="changePath('/pages/home/IntegralDetail')">
					<view class="itemBg1"></view>
					<view class="itemText">积分</view>
				</view>
				<view class="fundomianItem" @click="changePath('/pages/user/myFarm')">
					<view class="itemBg2"></view>
					<view class="itemText">农场</view>
				</view>
				<view class="fundomianItem" @click="changePath('/pages/user/merchant')">
					<view class="itemBg3"></view>
					<view class="itemText">商城入驻</view>
				</view>
				<view class="fundomianItem" @click="changeTab('/pages/exchange/index')">
					<view class="itemBg4"></view>
					<view class="itemText">交易所</view>
				</view>
			</view>
			<view class="indexTitle">
				<image src="@/static/img/indexTitleBg.png" alt="" />
			</view>
			<view class="tabBox">
				<u-tabs height="70" bg-color="#FBFBFB" duration="0.3" gutter="10" active-color="#3A2A08" bar-width="60"
					bar-height="8" :bar-style="{
						'background-color': '#1FA848',
						'color': '#3A2A08',
						'text-align': 'center',
						'font-size': '24rpx',
						'margin': '0rpx 0rpx',
					}" :active-item-style="{
						'font-size': '32rpx',
						'color': '#1FA848',
					}" :list="tabList" v-model="current" @change="changeTabs"></u-tabs>
			</view>
			<view class="ctxList">
				<view class="ctxListItem">
					<view class="ItemTop">
						<image src="@/static/img/logoBg.png" alt="" />
						<text class="ItemTitle">数码电子</text>
					</view>
					<view class="ItemBottom">
						<view class="ItemBottomCtx">
							<image src="@/static/img/camera.png" alt="" />
							<view class="ItemBottomText">
								<text>数码相机</text>
								<view class="goldCtx">
									<text class="gold">3000</text>
									<text class="goldForm">/元</text>
								</view>
							</view>
						</view>
						<view class="ItemBottomBtn" @click="changePath('/pages/product/productDetail2')">了解详情</view>
					</view>
				</view>
				<view class="ctxListItem">
					<view class="ItemTop">
						<image src="@/static/img/logoBg.png" alt="" />
						<text class="ItemTitle">数码电子</text>
					</view>
					<view class="ItemBottom">
						<view class="ItemBottomCtx">
							<image src="@/static/img/watches.png" alt="" />
							<view class="ItemBottomText">
								<text>时尚手表</text>
								<view class="goldCtx">
									<text class="gold">3000</text>
									<text class="goldForm">/元</text>
								</view>
							</view>
						</view>
						<view class="ItemBottomBtn">了解详情</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		ref,
		toRefs
	} from "vue";
	import {
		homeIndex,
		productType
	} from "@/api/homepage.js"
	import {
		userStore
	} from "@/store/index.js"
	const store = userStore()
	const rollText = ref(null)
	const data = reactive({
		tabList: [],
		current: 0,
		swiperList: [],
		tabCtxList: []
	})
	const {
		swiperList,
		tabList,
		current,
		tabCtxList
	} = toRefs(data)
	// 获取首页数据
	homeIndex().then(({
		banner = [],
		roll = [],
		categorys = []
	}) => {
		swiperList.value = banner
		tabList.value = categorys
		// console.log(tabList.value);
		// rollText.value = roll[0].info
		swiperList.value.map(item => {
			item.pic = store.systemConfig.picUrlPre + item.pic
		})
		// 默认发送一次请求商品类型请求
		getProjectList()
	})
	// 用户点击搜索后触发
	// const changeCancel = () => {
	// 	console.log(keyword.value)
	// }
	// 用户点击轮播图后触发
	const changeSwiper = (index) => {
		console.log(index)
	}
	
	// 获取项目分类列表
	const getProjectList = async (index = 0) => {
		try {
			const res = await productType({
				cateId: tabList.value[index].id
			});
			tabCtxList.value = res.map(item => ({
				...item,
				icon: store.systemConfig.picUrlPre + item.icon
			}));
			console.log(tabCtxList.value);
		} catch (error) {
			throw error
		}
	}
	
	// 用户点击tabs后触发
	const changeTabs = async (index = 0) => {
		getProjectList(index)
	};
	// 路由跳转
	const changePath = (path, id) => {
		if (path) {
			uni.navigateTo({
				url: id ? path + '?typeId=' + id : path
			})
		}
	}
	// 点击跳转tab页面
	const changeTab = (path) => {
		if (path) {
			uni.switchTab({
				url: path
			})
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		background-color: #FBFBFB;
	}

	.ctxList {
		width: 100%;
		margin-top: 32rpx;
	}

	.ctxListItem {
		width: 686rpx;
		height: 248rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		padding: 0 34rpx;
		font-size: 28rpx;
		color: #3A2A08;
		font-weight: bold;
		margin-bottom: 32rpx;

		.ItemBottom {
			height: 166rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			image {
				width: 120rpx;
				height: 120rpx;
			}

			.ItemBottomCtx {
				display: flex;
				align-items: center;
			}

			.ItemBottomText {
				margin-left: 18rpx;
			}

			.ItemBottomBtn {
				// width: 126rpx;
				padding: 0 16rpx;
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
		}

		.ItemTop {
			width: 100%;
			height: 82rpx;
			border-bottom: 2rpx solid rgba(112, 112, 112, 0.08);
			display: flex;
			align-items: center;

			.ItemTitle {
				margin-left: 22rpx;
			}

			image {
				width: 42rpx;
				height: 42rpx;
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

		.logoBg {
			width: 52rpx;
			height: 52rpx;
			background: url("@/static/img/logo.png") 100% no-repeat;
			background-size: 100% 100%;
			margin-top: 135rpx;
		}

		.searchBox {
			width: 604rpx;
			height: 64rpx;
			margin-top: 132rpx;
			background: #FFFFFF;
			border-radius: 36rpx;
		}

		.searchBg {
			width: 35rpx;
			height: 36rpx;
			background: url("@/static/img/search.png") 100% no-repeat;
			background-size: 100% 100%;
			margin: 14rpx 18rpx;
		}
	}

	.context {
		width: 100%;
		padding: 0 32rpx;
		margin-top: -172rpx;

		.wrap {
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 20rpx;
		}
	}

	.indexTitle {
		margin-top: 32rpx;
		width: 686rpx;
		height: 130rpx;
		margin-bottom: 10rpx;

		image {
			width: 100%;
			height: 100%;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
		}
	}

	.news {
		width: 686rpx;
		height: 88rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		margin: 16rpx 0rpx;
		display: flex;
		align-items: center;
		padding: 0 20rpx;
		justify-content: space-between;

		.newstitle {
			width: 80rpx;
			height: 42rpx;
			background: #2F9F50;
			border-radius: 22rpx 22rpx 22rpx 22rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 42rpx;
		}

		.newstext {
			font-size: 24rpx;
			font-weight: 400;
			color: #6E6E6E;
		}

		.newsdite {
			width: 68rpx;
			height: 38rpx;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			border: 2rpx solid #FF0000;
			font-size: 24rpx;
			font-weight: bold;
			color: #FF0000;
			text-align: center;
			line-height: 38rpx;
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

		.fundomianItem {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;

			.itemBg1 {
				width: 60rpx;
				height: 60rpx;
				background: url("@/static/img/integralBg.png") 100% no-repeat;
				background-size: 100% 100%;
				margin-bottom: 12rpx;
			}

			.itemBg2 {
				width: 60rpx;
				height: 60rpx;
				background: url("@/static/img/farmBg.png") 100% no-repeat;
				background-size: 100% 100%;
				margin-bottom: 12rpx;
			}

			.itemBg3 {
				width: 60rpx;
				height: 60rpx;
				background: url("@/static/img/shoppingBg.png") 100% no-repeat;
				background-size: 100% 100%;
				margin-bottom: 12rpx;
			}

			.itemBg4 {
				width: 60rpx;
				height: 60rpx;
				background: url("@/static/img/exchangBg.png") 100% no-repeat;
				background-size: 100% 100%;
				margin-bottom: 12rpx;
			}
		}
	}
</style>
