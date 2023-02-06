<template>
	<view class="bg">
		<view class="box">
			<view class="TopTitle">
				<view class="set">
					<view class="msgBg"></view>
					<view class="setBg" @click="changePath('/pages/user/setting/index')"></view>
				</view>
				<view class="userInfo">
					<view class="headAndUser">
						<view class="headPortrait">
							<img src="https://ts1.cn.mm.bing.net/th/id/R-C.bf504fbc3ae59e60dd8e6e90291ebc49?rik=3lJID6j%2b4WOgIQ&riu=http%3a%2f%2fe0.ifengimg.com%2f01%2f2019%2f0128%2f987B6893026017BF116335D3F0D6B512498C37CF_size82_w900_h608.jpeg&ehk=OhGESBk%2feiwZo22m0IFV1kZXrOPX46lJEgNnqoFfcdk%3d&risl=&pid=ImgRaw&r=0"
								alt="">
						</view>
						<view class="nameAndId">
							<view class="name">
								<text>李白</text>
								<view class="vip">
									<view class="vipBg"></view>
									<text>1</text>
								</view>
							</view>
							<text class="Id">ID：52121121</text>
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
						<view class="coin_certificate" @click="changePath('/pages/user/setting/IntegrationAndFlow',2)">
							<text style="font-weight: 800; font-size: 40rpx;">25035.58</text>
							<text class="title" style="font-weight: 400; font-size: 24rpx;">兑换券</text>
						</view>
						<view class="coin_certificate" @click="changePath('/pages/user/setting/IntegrationAndFlow',3)">
							<text style="font-weight: 800; font-size: 40rpx;">5027.00</text>
							<text class="title" style="font-weight: 400; font-size: 24rpx;">能量值</text>
						</view>
						<view class="coin_certificate" @click="changePath('/pages/user/setting/IntegrationAndFlow',4)">
							<text style="font-weight: 800; font-size: 40rpx;">18119.13</text>
							<text class="title" style="font-weight: 400; font-size: 24rpx;">仓单</text>
						</view>
					</view>
					<view class="propertyBottom">
						<view class="integralAndtitle" @click="changePath('/pages/user/setting/IntegrationAndFlow',1)">
							<text class="integral">140.00</text>
							<text class="title">购物积分</text>
						</view>
						<view class="borderBg"></view>
						<view class="integralAndtitle" @click="changePath('/pages/user/setting/IntegrationAndFlow',0)">
							<text class="integral">12471.22</text>
							<text class="title">管理积分</text>
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
							<u-grid-item @click="changePath('/pages/order/order',1)">
								<view class="itemBg selected1"></view>
								<view class="grid-text">待发货</view>
							</u-grid-item>
							<u-grid-item @click="changePath('/pages/order/order',2)">
								<view class="itemBg selected2"></view>
								<view class="grid-text">待收货</view>
							</u-grid-item>
							<u-grid-item @click="changePath('/pages/order/order',3)">
								<view class="itemBg selected3"></view>
								<view class="grid-text">已完成</view>
							</u-grid-item>
							<u-grid-item @click="changePath('/pages/order/order',4)">
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
								<view class="grid-text">仓单交易</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg selected2"></view>
								<view class="grid-text">能量交易</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg selected3"></view>
								<view class="grid-text">我的社区</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg selected4"></view>
								<view class="grid-text">我的交易</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg selected5"></view>
								<view class="grid-text">推广中心</view>
							</u-grid-item>
							<u-grid-item @click="changePath('/pages/user/merchant')">
								<view class="itemBg selected6"></view>
								<view class="grid-text">我的店铺</view>
							</u-grid-item>
							<u-grid-item @click="changePath('/pages/user/merchant')">
								<view class="itemBg selected7"></view>
								<view class="grid-text">我的项目</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
				<view class="function">
					<view class="Title">项目功能</view>
					<view class="">
						<u-grid :col="4" :border="false">
							<u-grid-item @click="changePath('/pages/user/pay')">
								<view class="itemBg1 selected1"></view>
								<view class="grid-text">我要充值</view>
							</u-grid-item>
							<u-grid-item @click="changePath('/pages/user/energyValue')">
								<view class="itemBg1 selected2"></view>
								<view class="grid-text">能量值兑换</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg1 selected3"></view>
								<view class="grid-text">仓单提现</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg1 selected4"></view>
								<view class="grid-text">我的合同</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg1 selected5"></view>
								<view class="grid-text">工作室</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg1 selected6"></view>
								<view class="grid-text">释放记录</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg1 selected7"></view>
								<view class="grid-text" @click="myGuaDan">我的挂单</view>
							</u-grid-item>
							<u-grid-item>
								<view class="itemBg1 selected8"></view>
								<view class="grid-text" >我要转换</view>
							</u-grid-item>
						</u-grid>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// 路由跳转
	const changePath = (path,id) => {
		if (path) {
			uni.navigateTo({
				url: id? path + '?typeId=' + id : path
			})
		}
	}
  
  // 点击我的挂单跳转路由
  const myGuaDan = () => {
      // console.log(11);
  		uni.navigateTo({
  			url:'/pages/user/myGuaDan'
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
				margin-top: -178rpx;
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

					img {
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
