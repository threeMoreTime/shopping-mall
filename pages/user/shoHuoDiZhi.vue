<template>
	<view class="bg">
		<view class="topHeZi">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">收货地址</view>
		</view>
		<view v-for="item in siteList.list" :key="item.id">
			<view class="box-card">
				<text class="box-box-box">{{item.realName}}</text>
				<text class="item">{{item.phone}}</text>
				<text class="item2">{{item.detail}}</text>
				<u-badge type="green" v-show="item.isDefault" class="badge" count="默认"
					style="position: absolute;right: 250rpx;"></u-badge>
				<view class="Box-right">
					<view class="shanchu" @click="dele(item.id)"></view>
					<view class="bianji" @click="changePath(1,item.id)"></view>
				</view>
			</view>
		</view>

		<view class="newBg">
			<view class="NewaDdress">
				<text class="address" @click="changePath(2)">新建地址+</text>
			</view>
		</view>

	</view>
</template>
<script setup>
	import {
		onLoad,
		onReachBottom
	} from "@dcloudio/uni-app";
	import {
		reactive,
		ref,
		toRefs
	} from "vue";
	import {
		list,
		del
	} from "@/api/userAddress.js"

	const siteList = ref([])
	const listPage = reactive({
		page: 1,
		limit: 20
	})
	onLoad(() => {
		addressList()
	})
	// 触底分页
	// onReachBottom(() => {
	// 	addressList2()
	// })
	const dele = (id) => {
		uni.showModal({
			title: '删除地址',
			content: '确认删除地址吗?',
			success: function(res) {
				if (res.confirm) {
					del(id).then(res => {
						uni.showToast({
							title: '删除地址成功！',
							icon: "success"
						})
					})
				} else if (res.cancel) {
					return true;
				}
			}
		});
	}
	const changePath = (type, id) => {
		if (type == 1) {
			uni.navigateTo({
				url: `/pages/user/BianjiShoHuoDiZhi?id=${id}&type=${type}`
			})
		} else {
			uni.navigateTo({
				url: `/pages/user/BianjiShoHuoDiZhi?type=${type}`
			})
		}
	}

	// 地址列表
	const addressList = () => {
		list(listPage).then(res => {
			siteList.value = res
			// console.log('siteList.value', siteList.value)
		})
	}
	// const addressList2 = () => {
	// 	let params = {
	// 		page: listPage.page + 1,
	// 		limit:20
	// 	}
	// 	list(params).then(res => {
	// 		siteList.value = res
	// 	})
	// }


	// 返回上一级
	function navigateBack() {
		wx.navigateBack({
			delta: 1
		})
	}

	// 路由跳转
	// const changePath = (path, id) => {
	// 	if (path) {
	// 		uni.navigateTo({
	// 			url: id ? path + '?typeId=' + id : path+'?typeId=add'
	// 		})
	// 	}
	// }
</script>
<style lang="scss" scoped>
	.badge {
		background-color: #24743c;
		color: white;
		z-index: -100;
	}

	.bg {
		position: relative;
		width: 100%;
		height: 176rpx;
		background: #24743C;

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


		.box-card {
			margin: 52rpx 0 0rpx 32rpx;
			width: 686rpx;
			height: 174rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			opacity: 1;
			position: relative;

			.box-box-box {
				margin: 0 0 0 38rpx;
				position: absolute;
				top: 28rpx;
				font-weight: 400;
				color: #000000;
				line-height: 24rpx;
				// width: 164rpx;
				height: 44rpx;
				font-size: 32rpx;

			}

			.item {
				position: absolute;
				left: 150rpx;
				top: 28rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #000000;
				line-height: 24rpx;
			}

			.item2 {
				position: absolute;
				top: 106rpx;
				left: 38rpx;
				height: 34rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #979797;
				line-height: 24rpx;
			}

			.Box-right {
				// padding:114rpx 0;
				position: absolute;
				top: 28rpx;
				right: 28rpx;
				display: flex;
				flex-direction: column;


				.shanchu {
					width: 24rpx;
					height: 26rpx;
					background: #000000;
					background: url('../../static/img/del.png') 100% no-repeat;
					background-size: 100% 100%;
					// opacity: 1;
				}

				.bianji {
					margin-top: 58rpx;
					width: 32rpx;
					height: 30rpx;
					background: #44454A;
					background: url('../../static/img/aaaaaaaaaaaaa.png') 100% no-repeat;
					background-size: 100% 100%;
				}
			}

		}

		.newBg {
			width: 100%;
			height: 172rpx;
			position: fixed;
			bottom: 0;
			background-color: #FFFFFF;
			.NewaDdress {
				width: 686rpx;
				height: 72rpx;
				background: #24743C;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				margin: 20rpx auto;
				display: flex;
				justify-content: center;
				align-items: center;

				.address {
					height: 40rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 40rpx;
					text-align: center;
				}
			}

		}
	}
</style>
