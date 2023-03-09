<template>
	<view class="bg">
		<view class="box">
			<view class="TopTitle">
				<view class="set">
					<view class="msgBg" @click="changePath('/pages/user/systemBullestin')"></view>
					<view class="setBg" @click="changePath('/pages/user/setting/index')"></view>
				</view>
				<view class="userInfo">
					<view class="headAndUser">
						<view class="headPortrait" @click="changeLogin">
							<image
								:src="store.systemConfig.picUrlPre + store.userInfo.avatar || 'https://img.ixintu.com/download/jpg/20201115/4939f541273cedfc32fa2e67fb2ede02_512_512.jpg!bg'"
								alt="" />
						</view>
						<view class="nameAndId">
							<view class="name">
								<text>{{store.userInfo.nickname || '未登录'}}</text>
								<!-- <view class="vip">
									<view class="vipBg"></view>
									<text>1</text>
								</view> -->
              </view>
              <text class="Id">ID：{{store.userInfo.uid || '未登录'}}</text>
            </view>
          </view>
          <view class="userBtn">
            <view class="vipBg"></view>
            <text>联创</text>
          </view>
        </view>
      </view>
      <view class="context">
        <view class="property">
          <view class="propertyTop">
            <view class="coin_certificate" @click="changePath('/pages/user/setting/IntegrationAndFlow',3)">
              <text style="font-weight: 800; font-size: 40rpx;">{{store.userInfo.energy || 0}}</text>
              <text class="title" style="font-weight: 400; font-size: 24rpx;">能量值</text>
            </view>
            <view class="coin_certificate" @click="changePath('/pages/user/setting/IntegrationAndFlow',1)">
              <text style="font-weight: 800; font-size: 40rpx;">{{store.userInfo.integral || 0}}</text>
              <text class="title" style="font-weight: 400; font-size: 24rpx;">购物积分</text>
            </view>
            <view class="coin_certificate" @click="changePath('/pages/user/setting/IntegrationAndFlow',4)">
              <text style="font-weight: 800; font-size: 40rpx;">{{store.userInfo.cang || 0}}</text>
              <text class="title" style="font-weight: 400; font-size: 24rpx;">仓单</text>
            </view>
          </view>
        </view>
        <view class="order">
          <view class="Title">
            <text class="titleText">我的订单</text>
            <view class="allOrder" @click="changePath('/pages/order/order',0)">
              <text class="allOrderText">全部订单</text>
              <view class="arrowsBg"></view>
            </view>
          </view>
          <view class="">
            <u-grid :col="4" :border="false">
              <u-grid-item @click="changePath('/pages/order/order',1)" style="position: relative;">
				<u-badge type="error" :count="orderCount.unShippedCount" :offset="[10,20]"></u-badge>
                <view class="itemBg selected1"></view>
                <view class="grid-text">待发货</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/order/order',2)" style="position: relative;">
				<u-badge type="error" :count="orderCount.receivedCount" :offset="[10,20]"></u-badge>
                <view class="itemBg selected2"></view>
                <view class="grid-text">待收货</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/order/order',3)" style="position: relative;">
				<u-badge type="error" :count="orderCount.completeCount" :offset="[10,20]"></u-badge>
                <view class="itemBg selected3"></view>
                <view class="grid-text">已完成</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/order/order',4)" style="position: relative;">
				<u-badge type="error" count="7" :offset="[10,20]"></u-badge>
                <view class="itemBg selected4"></view>
                <view class="grid-text">自提订单</view>
              </u-grid-item>
            </u-grid>
          </view>
        </view>
        <view class="function">
          <view class="Title">常用功能</view>
          <view class="">
            <u-grid :col="4" :border="false">
              <u-grid-item>
                <view class="itemBg selected1"></view>
                <view class="grid-text" @click="changePath('/pages/user/myCangKuJiaoYi')">仓单交易</view>
              </u-grid-item>
              <u-grid-item>
                <view class="itemBg selected2"></view>
                <view class="grid-text">能量交易</view>
              </u-grid-item>
              <u-grid-item>
                <view class="itemBg selected3"></view>
                <view class="grid-text" @click="changePath('/pages/user/mySheQu')">我的社区</view>
              </u-grid-item>
              <u-grid-item>
                <view class="itemBg selected4"></view>
                <view class="grid-text" @click="changePath('/pages/user/myJiaoYi')">我的交易</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/user/promotion')">
                <view class="itemBg selected5"></view>
                <view class="grid-text">推广中心</view>
              </u-grid-item>
			  <u-grid-item @click="changePath('/pages/user/pay')">
			    <view class="itemBg1 selected1"></view>
			    <view class="grid-text">我要充值</view>
			  </u-grid-item>
			  <u-grid-item @click="changePath('/pages/user/energyValue')">
			    <view class="itemBg1 selected2"></view>
			    <view class="grid-text">能量值兑换</view>
			  </u-grid-item>
			  <u-grid-item @click="changePath('/pages/user/withdraw')">
			    <view class="itemBg1 selected3"></view>
			    <view class="grid-text">仓单提现</view>
			  </u-grid-item>
			  <u-grid-item @click="changePath('/pages/user/releaseRecord')">
			    <view class="itemBg1 selected6"></view>
			    <view class="grid-text">释放记录</view>
			  </u-grid-item>
			  <u-grid-item>
			    <view class="itemBg1 selected7"></view>
			    <view class="grid-text" @click="changePath('/pages/user/myGuaDan')">我的挂单</view>
			  </u-grid-item>
			  <u-grid-item @click="changePath('/pages/user/convert')">
			    <view class="itemBg1 selected8"></view>
			    <view class="grid-text">我要转换</view>
			  </u-grid-item>
              
            </u-grid>
          </view>
        </view>
        <view class="function">
          <view class="Title">项目功能</view>
          <view class="">
            <u-grid :col="4" :border="false">
              
              <u-grid-item @click="changePath('/pages/user/merchant')">
                <view class="itemBg selected6"></view>
                <view class="grid-text">我的店铺</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/user/project')">
                <view class="itemBg selected7"></view>
                <view class="grid-text">我的项目</view>
              </u-grid-item>
              
              <u-grid-item @click="changePath('/pages/user/contract/myContract')">
                <view class="itemBg1 selected4"></view>
                <view class="grid-text">我的合同</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/user/studio/studio')">
                <view class="itemBg1 selected5"></view>
                <view class="grid-text">工作室</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/user/management/exchange')">
                <view class="itemBg1 selected9"></view>
                <view class="grid-text">兑换券</view>
              </u-grid-item>
              <u-grid-item @click="changePath('/pages/user/management/managingPoints')">
                <view class="itemBg1 selected10"></view>
                <view class="grid-text">管理积分</view>
              </u-grid-item>
			  <u-grid-item @click="changePath('/pages/user/plantTrees')">
			    <view class="itemBg1 selected11"></view>
			    <view class="grid-text">种树</view>
			  </u-grid-item>
              
            </u-grid>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
	import {
		computed,
		ref,
		reactive
	} from "vue";
	import {
		userStore
	} from "@/store/index.js"
	import {
		info
	} from "@/api/user.js"
	import {
		getOrderCount
	} from "@/api/order.js"

	import {
		onLoad
	} from "@dcloudio/uni-app";
	onLoad(
		() => {
			getUserInfo()
		}
	)

	const store = userStore()
	if (!store.userInfo.uid) {
		info().then(res => {
			store.userInfo = res
		})
	}
	// 未登录情况下点击头像跳转到登录页
	const changeLogin = () => {
		if (!store.userInfo.uid) {
			changePath("/pages/login/index")
		}
	}
	// 路由跳转
	const changePath = (path, id) => {
		if (path) {
			uni.navigateTo({
				url: id ? path + '?typeId=' + id : path
			})
		}
	}
	// 订单状态数据
	const orderCount = reactive({})

	// 获取用户详情信息和订单对应状态的数量
	const getUserInfo = () => {
		info().then(res => {
			store.userInfo = res
		})
		getOrderCount().then(({
			// 已完成订单数量
			completeCount = 0,
			// 待发货订单数量
			unShippedCount = 0,
			// 待收货订单数量
			receivedCount = 0
		}) => {
			orderCount.completeCount = completeCount
			orderCount.unShippedCount = unShippedCount
			orderCount.receivedCount = receivedCount
		})
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
				padding: 0 32rpx;
				margin-top: -160rpx;
			}

			.function {
				margin-top: 16rpx;
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 20rpx;
				padding: 26rpx 28rpx;

				.Title {
					font-weight: 800;
					font-size: 32rpx;
				}

				.itemBg1 {
					width: 50rpx;
					height: 50rpx;

					&.selected1 {
						background: url("@/static/img/recharge.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected2 {
						background: url("@/static/img/conversion.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected3 {
						background: url("@/static/img/withdraw.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected4 {
						background: url("@/static/img/contract.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected5 {
						background: url("@/static/img/studio.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected6 {
						background: url("@/static/img/release.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected7 {
						background: url("@/static/img/pending.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected8 {
						background: url("@/static/img/transition.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected9 {
						background: url("@/static/img/exchangeByuser.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected10 {
						background: url("@/static/img/manage.png") 100% no-repeat;
						background-size: 100% 100%;
					}
					
					&.selected11 {
						background: url("@/static/img/planting.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}

				.itemBg {
					width: 50rpx;
					height: 50rpx;

					&.selected1 {
						background: url("@/static/img/warehouseReceipt.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected2 {
						background: url("@/static/img/energy.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected3 {
						background: url("@/static/img/community.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected4 {
						background: url("@/static/img/myDeal.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected5 {
						background: url("@/static/img/promotion.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected6 {
						background: url("@/static/img/store.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected7 {
						background: url("@/static/img/project.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
			}

			.grid-text {
				font-size: 24rpx;
				font-weight: 400;
				color: #3A2A08;
				margin-top: 14rpx;
			}

			.order {
				margin-top: 16rpx;
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 20rpx;
				padding: 0 28rpx;

				.itemBg {
					width: 50rpx;
					height: 50rpx;

					&.selected1 {
						background: url("@/static/img/sending.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected2 {
						background: url("@/static/img/delivery.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected3 {
						background: url("@/static/img/accomplish.png") 100% no-repeat;
						background-size: 100% 100%;
					}

					&.selected4 {
						background: url("@/static/img/orderAll.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}

				.Title {
					padding: 24rpx 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.allOrder {
					font-weight: 400;
					font-size: 24rpx;
					color: #ABABAB;
					display: flex;
					align-items: center;

					.arrowsBg {
						margin-left: 10rpx;
						width: 11rpx;
						height: 23rpx;
						background: url("@/static/img/arrowsBg.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}

				.titleText {
					font-weight: 800;
					font-size: 32rpx;
				}
			}

			.property {
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				padding: 0 30rpx;

				.propertyBottom {
					font-weight: bold;
					display: flex;
					justify-content: space-around;
					padding: 22rpx 0 30rpx;

					.integralAndtitle {
						display: flex;
						flex-direction: column;
						align-items: center;

						.integral {
							font-size: 40rpx;
						}

						.title {
							margin-top: 10rpx;
							font-size: 24rpx;
						}
					}
				}

				.borderBg {
					border: 2rpx solid rgba(112, 112, 112, 0.07);
				}

				.propertyTop {
					display: flex;
					justify-content: space-between;
					padding: 22rpx 0 28rpx;
					border-bottom: 2rpx solid rgba(112, 112, 112, 0.07);
				}

				.coin_certificate {
					width: 205rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					border-right: 2rpx solid rgba(112, 112, 112, 0.07);

					&:last-child {
						border-right: 0rpx solid rgba(112, 112, 112, 0.07);
					}

					.title {
						padding: 12rpx 0;
					}
				}
			}

			.TopTitle {
				width: 750rpx;
				height: 540rpx;
				background: #1C6732;
				border-radius: 0rpx 0rpx 160rpx 0rpx;
			}

			.userInfo {
				transform: translateY(106rpx);
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

					image {
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
		}
	}
</style>
