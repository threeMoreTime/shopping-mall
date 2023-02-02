<template>
	<view class="bg">
		<view class="TopTitle">
			<view class="tabs">
				<view class="arrowsBg" @click="navigateBack"></view>
				<view class="title">商家中心</view>
				<view class=""></view>
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
			</view>
		</view>
		<view class="box">
			<view class="workingArea">
				<text>工作区</text>
				<view class="workingAll">
					<view class="workingAllItem">
						<view class="ItemBg"></view>
						<text>商品管理</text>
					</view>
					<view class="workingAllItem">
						<view class="ItemBg"></view>
						<text>订单管理</text>
					</view>
					<view class="workingAllItem">
						<view class="ItemBg"></view>
						<text>退货/款</text>
					</view>
					<view class="workingAllItem" @click="changePath('/pages/user/property')">
						<view class="ItemBg"></view>
						<text>我的账户</text>
					</view>
				</view>
			</view>
			<view class="workingArea">
				<view class="top">
					<text>数据统计</text>
					<view class="topRigth">
						<text>经营分析</text>
						<view class="arrBg"></view>
					</view>
				</view>
				<view class="bottom">
					<view class="bottomItem">
						<text>今日成交额</text>
						<text class="price">￥0</text>
					</view>
					<view class="bottomItem">
						<text>今日成交额</text>
						<text class="price">￥0</text>
					</view>
					<view class="bottomItem">
						<text>今日成交额</text>
						<text class="price">￥0</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 路由跳转
	const changePath = (path,id) => {
		if (path) {
			uni.navigateTo({
				url: id? path + '?typeId=' + id : path
			})
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FBFBFB;
		position: relative;
	}
	.workingArea {
		width: 686rpx;
		// height: 244rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 20rpx;
		padding: 28rpx;
		font-size: 28rpx;
		font-weight: 800;
		color: #3A2A08;
		margin-bottom: 22rpx;
	}
	.bottom {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		font-size: 24rpx;
		font-weight: 400;
		color: #000000;
		.price {
			font-size: 40rpx;
			font-weight: 800;
			padding-top: 10rpx;
		}
		.bottomItem {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.top {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid rgba(112, 112, 112, 0.15);
		.topRigth {
			display: flex;
			align-items: center;
			font-weight: 400;
			color: #A1A1A1;
			.arrBg {
				margin-left: 16rpx;
				width: 11rpx;
				height: 20rpx;
				background: url("@/static/img/arrowsBg.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}
	}
	.box {
		width: 100%;
		padding: 0 32rpx;
		transform: translateY(-76rpx);
		.workingArea {
			display: flex;
			flex-direction: column;
		}
		.workingAll {
			margin-top: 42rpx;
			display: flex;
			justify-content: space-around;
			.workingAllItem {
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
				&:nth-of-type(1) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/commodityAdmin.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(2) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/orderAdmin.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(3) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/sales.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
				&:nth-of-type(4) {
					.ItemBg {
						margin-bottom: 10rpx;
						width: 58rpx;
						height: 58rpx;
						border-radius: 50%;
						background: url("@/static/img/account.png") 100% no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}
	}
	.TopTitle {
		width: 750rpx;
		height: 444rpx;
		background: #1C6732;
		border-radius: 0rpx 0rpx 160rpx 0rpx;
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
	.userInfo {
		transform: translateY(20rpx);
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
	
	.tabs {
		width: 100%;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		.title {
			margin-top: 86rpx;
			font-size: 32rpx;
			font-weight: 800;
			color: #F5F5F5;
			margin-bottom: 3rpx;
		}
		.arrowsBg {
			// transform: rotate(180deg);
			margin-bottom: 5rpx;
			width: 22rpx;
			height: 41rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
