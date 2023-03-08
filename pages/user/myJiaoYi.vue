<template>
	<view class="bg">
		<view class="topHeZi">
			<view class="arrowsBg" @click="navigateBack()"></view>
			<view class="title">我的交易</view>
		</view>
		<view class="DaBox">
			<view class="tishiBox" v-for="item in dateList" :key="item.id"
				:class="[item.id === titleIndex ? 'boxListTitleItem1' : '']">
				<view class="left">
					<text class="leftBox" @click="changTitle(item.id)">
						{{item.title}}
						<!-- tab -->
					</text>
				</view>
			</view>
		</view>
		<view class="context">
			<view class="ListBox" v-show="titleIndex === 1">
				<view class="itemBox" v-for="item in classifyList" :key="item.id">
					<view class="itemTop">
						<view class="">
							<text style="color: #4E4E4E;">对方编号：</text>
							<text style="color: #000000;font-weight: bold;font-size: 24rpx;">{{item.tradeUid}}</text>
						</view>
						<view style="margin-top: 10rpx;color: #929292;">{{item.createTime}}</view>
						<!-- titleType2类名是卖出的样式 -->
						<view class="titleType" v-if="item.direction == 'BUY'">买入</view>
						<view class="titleType titleType2" v-else>卖出</view>
					</view>
					<view class="itemBottom">
						<view class="itemBottomBox">
							<text style="padding: 20rpx 0 10rpx;">单价</text>
							<text class="itemBottomTitle">{{item.price}}</text>
						</view>
						<view class="itemBottomBox">
							<text style="padding: 10rpx 0;">数量</text>
							<text class="itemBottomTitle">{{item.amount}}</text>
						</view>
						<view class="itemBottomBox">
							<text style="padding: 10rpx 0;">总额</text>
							<text class="itemBottomTitle">{{item.trunover}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="ListBox" v-show="titleIndex === 2">
				<view class="itemBox" v-for="item in classifyList" :key="item.id">
					<view class="itemTitle">
						<text>{{item.orderNum}}</text>
						<text style="font-size: 28rpx;color: #FF0000;">{{item.statusName}}</text>
					</view>
					<view class="itemCtx">
						<view class="itemCtxText">
							<text>数量: <text class="itemCtxCount">{{item.volume}}</text></text>
							<text style="padding: 16rpx 0 0rpx;">出售方: <text class="itemCtxCount">{{item.tradeUid}}</text></text>
						</view>
						<view class="itemCtxText">
							<text>总额: <text class="itemCtxCount">{{item.trunover}}</text></text>
							<text style="padding: 16rpx 0 0rpx;">购买方: <text class="itemCtxCount">{{userStore().userInfo.uid || 0}}</text></text>
						</view>
					</view>
					<view class="itemBtn">
						<view class="btn" @click="seeDetails(item.status,item.id)">查看详情</view>
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
		navigateBack,
		changePath
	} from "@/utils/navigate.js"
	import {
		findOrderList
	} from "@/api/trade.js"
	import { userStore } from "@/store/index.js"
	const isShow = ref(true)
	// const tabIsShow = ref(true)//tab控制显示左右切换
	const data = reactive({
		dateList: [{
				title: '能量值',
				id: 1
			},
			{
				title: '仓单',
				id: 2
			}
		],
		titleIndex: 1,
		classifyList: []
	})
	const {
		dateList,
		titleIndex,
		classifyList
	} = toRefs(data)


	// 点击切换改变样式
	const changTitle = (index) => {
		titleIndex.value = index
		getfindOrderList(index)
	}

	async function getfindOrderList(classifyNo = 1) {
		const statusNames = {
			0: '交易中',
			1: '待支付',
			2: '待确认',
			3: '驳回',
			4: '完成'
		}
		try {
			const res = await findOrderList({
				classify: classifyNo
			})
			classifyList.value = res
			classifyList.value.forEach(item => {
				item.statusName = statusNames[item.status]
			})
		} catch (err) {
			throw new Error(err)
		}
	}

	// 查看详情
	const seeDetails = (detailsId,id) => {
		const detailsObj = {
			4: '/pages/user/JiaoYiXiangQing',
			1: '/pages/user/payWarehouse'
		}
		changePath(detailsObj[detailsId],{id})
	}
	getfindOrderList()
</script>
<style lang="scss" scoped>
	.bg {
		position: relative;
		width: 100%;
		height: 176rpx;
		background: #24743C;

		.context {
			margin-top: 28rpx;

			.ListBox {
				padding: 0 32rpx;
			}

			.itemBox {
				padding: 24rpx;
				width: 686rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				margin-bottom: 24rpx;

				.itemBtn {
					padding-top: 14rpx;
					display: flex;
					justify-content: right;

					.btn {
						padding: 8rpx 20rpx;
						background: #24743C;
						border-radius: 18rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #FFFFFF;
					}
				}

				.itemCtxCount {
					font-weight: bold;
					color: #000000;
				}

				.itemCtx {
					border-top: 2rpx solid rgba(112, 112, 112, 0.17);
					border-bottom: 2rpx solid rgba(112, 112, 112, 0.17);
					padding: 18rpx 0 30rpx;
					display: flex;
					align-items: center;
					font-size: 24rpx;
					font-weight: 400;
					color: #7A7A7A;

					.itemCtxText {
						display: flex;
						flex-direction: column;
						margin-right: 100rpx;
					}
				}

				.itemTitle {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 20rpx;
					font-weight: 400;
					color: #303030;
					padding-bottom: 16rpx;
				}

				.itemBottomTitle {
					font-weight: 800;
					font-size: 32rpx;
					color: #000000;
				}

				.itemBottomBox {
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 24rpx;
					font-weight: 400;
				}

				.itemBottom {
					display: flex;
					align-items: center;
					justify-content: space-around;
				}

				.itemTop {
					position: relative;
					font-size: 20rpx;
					font-weight: 400;
					padding-bottom: 20rpx;
					border-bottom: 2rpx solid rgba(112, 112, 112, 0.17);

					.titleType {
						position: absolute;
						top: -24rpx;
						right: 0;
						width: 72rpx;
						height: 64rpx;
						line-height: 64rpx;
						text-align: center;
						background: #24743C;
						border-radius: 0rpx 0rpx 32rpx 32rpx;
						font-weight: 400;
						font-size: 28rpx;
						color: #FFFFFF;
					}

					.titleType2 {
						background: #FF0000;
					}
				}
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

		.DaBox {
			margin-top: 52rpx;
			width: 100%;
			display: flex;
			justify-content: space-around;

			// display: flex;
			// justify-content: space-around;
			// position: absolute;
			// top: 126rpx;
			.tishiBox {
				width: 252rpx;
				height: 60rpx;
				// background: #24743C;
				background: #FFFFFF;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				opacity: 1;
				text-align: center !important;
				line-height: 60rpx;


				.leftBox {
					width: 82rpx;
					height: 50rpx;
					font-size: 28rpx;
					font-weight: 600;
					// color: #FFFFFF;
					background: #FFFFFF;
					-webkit-background-clip: text;



				}


			}

			.boxListTitleItem1 {
				// padding: 4rpx 24rpx;
				// background-color: #C58C61;
				// border: 2rpx solid #C58C61;
				color: #FFFFFF;
				background: #24743C;
				// margin-left: 16rpx;
				// border-radius: 22rpx;
			}
		}

		.jiaoYiChangGongTopBox {

			margin-top: 28rpx;
			display: flex;
			justify-content: space-between;
			width: 686rpx;
			height: 226rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			margin-left: 32rpx;

			// opacity: 1;
			// border: 2rpx solid #707070;
			.TopBox1 {
				height: 28rpx;
				font-size: 20rpx;
				line-height: 24rpx;
				margin-top: 20rpx;
				// margin-left: 24rpx;
				padding-left: 24rpx;

			}

			.TopBox2 {
				margin-top: 20rpx;
				// margin-left: 150rpx;
				// padding-left: -10rpx !important;
				transform: translateX(-85rpx);
				width: 300rpx;
				height: 28rpx;
				font-size: 20rpx;
				color: #929292;
				line-height: 28rpx;
			}

			.TopBox3 {
				width: 72rpx;
				height: 64rpx;
				// background: #24743C;
				border-radius: 0rpx 0rpx 32rpx 32rpx;
				opacity: 1;
				transform: translateX(-26rpx);

			}
		}

		// 下
		.jiaoYiChangGongBottomBox {
			transform: translateY(-138rpx);
			overflow: hidden;

			.Top {
				padding-top: 20rpx;
				display: flex;
				justify-content: space-around;
				font-size: 24rpx;
				font-weight: 400;
				color: #000000;

			}

			.Bottom {
				margin-top: 3rpx;
				display: flex;
				justify-content: space-around;
				// width: 64rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 800;
				color: #000000;
				padding-left: 10rpx;

			}
		}

		// 第二个
		.jiaoYiChangGongTopBox {
			margin-top: 28rpx;
			display: flex;
			justify-content: space-between;
			width: 686rpx;
			height: 226rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			margin-left: 32rpx;

			.TopBox1 {
				width: 206rpx;
				height: 44rpx;
				font-size: 20rpx;

				color: #4E4E4E;
				line-height: 24rpx;
				margin-top: 20rpx;
				padding-left: 24rpx;
			}

			.TopBox2 {
				margin-top: 20rpx;
				transform: translateX(-116rpx);
				height: 34rpx;
				font-size: 24rpx;
				font-weight: bold;
				color: #000000;
				line-height: 24rpx;
			}

			.TopBox3 {
				// width: 72rpx;
				height: 64rpx;
				background: #24743C;
				border-radius: 0rpx 0rpx 32rpx 32rpx;
				opacity: 1;
				transform: translateX(-26rpx);
			}
		}

		// 下
		.jiaoYiChangGongBottomBox {
			transform: translateY(-138rpx);

			// border-top: 2rpx solid #eaeaea;
			// overflow: hidden;
			// display: flex;
			// flex-wrap: wrap;
			// width: 686rpx;
			// height: 178rpx;
			.Top {
				padding-top: 20rpx;
				display: flex;
				justify-content: space-around;
				font-size: 24rpx;
				font-weight: 400;
				color: #000000;
			}

			.Bottom {
				margin-top: 3rpx;
				display: flex;
				justify-content: space-around;
				// width: 64rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 800;
				color: #000000;
				padding-left: 10rpx;
			}
		}

		.riqi1 {
			position: absolute;
			left: 48rpx;
			top: 346rpx;
			font-weight: 400;
			color: #929292;
			font-size: 20rpx;
		}

		.riqi {
			position: absolute;
			left: 48rpx;
			top: 48rpx;
			font-weight: 400;
			color: #929292;
			font-size: 20rpx;
		}

		.cardBox {
			margin-top: 35rpx;
			margin-left: 32rpx;
			width: 686rpx;
			height: 284rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;

			.cardItem2 {
				margin-top: 15rpx;
				margin-left: 24rpx;
				width: 642rpx;
				height: 120rpx;

				background: #FFFFFF;
				border-top: 2rpx solid rgba(200, 200, 200, 0.5);
				border-bottom: 2rpx solid rgba(200, 200, 200, 0.5);
				display: flex;
				flex-wrap: wrap;

				.Item1 {
					width: 50%;
					height: 34rpx;
				}

				.Item2 {
					width: 50%;
					height: 34rpx;
				}

				.Item3 {
					width: 50%;
					height: 34rpx;
				}

				.Item4 {
					width: 50%;
					height: 34rpx;
				}
			}

			.cardItem3 {
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-start;

				.item1 {
					text-align: center;
					margin-top: 22rpx;
					margin-right: 22rpx;
					width: 136rpx;
					height: 48rpx;
					background: #24743C;
					border-radius: 18rpx 18rpx 18rpx 18rpx;
					opacity: 1;

				}
			}

		}

		.cardItem1 {
			display: flex;
			justify-content: space-between;

			.text1 {
				margin-left: 24rpx;
				margin-top: 22rpx;
				width: 220rpx;
				height: 28rpx;
				font-size: 20rpx;
				font-weight: 400;
				color: #303030;
				line-height: 24rpx;
			}

			.text2 {
				margin-right: 24rpx;
				margin-top: 22rpx;
				width: 90rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #FF0000;
				line-height: 24rpx;
			}
		}

	}
</style>
