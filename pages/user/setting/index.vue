<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">设置</view>
			<view class=""></view>
		</view>
		<view class="box">
			<view class="cellView">
				<u-cell-group>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="个人资料"
						@click="changePath('../../../pages/user/setting/commonSetting',{typeId: 0})"></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="安全设置"
						@click="changePath('../../../pages/user/setting/commonSetting',{typeId: 1})"></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="地址管理"
						@click="changePath('../../../pages/user/shoHuoDiZhi',{})"
					></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="银行信息"
						@click="changePath('../../../pages/user/setting/commonSetting',{typeId: 3})"></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="微信收款码"></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="支付宝收款码">
					</u-cell-item>
				</u-cell-group>
			</view>
			<view class="cellView">
				<u-cell-group>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="意见反馈"
						@click="changePath('../../../pages/user/setting/commonSetting',{typeId: 2})"></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="关于我们"
						@click="changePath('../../../pages/user/setting/about',{})"></u-cell-item>
					<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="检查更新" value="当前版本3.0"
						:value-style="{'font-size': '24rpx','font-weight': '500','color': '#686868'}" :arrow="false">
					</u-cell-item>
				</u-cell-group>
			</view>
			<view class="logout" @click="logoutInp">退出登录</view>
		</view>
	</view>
</template>

<script setup>
	import {
		changePath
	} from "@/utils/navigate.js"
	import {
		logout
	} from "@/api/user.js"
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	const logoutInp = () => {
		logout().then(() => {
			uni.clearStorageSync()
			changePath('/pages/login/index', {
				typeId: 0
			})
		}, () => {
			uni.showToast({
				title: "退出登录失败",
				icon: "error"
			})
		})
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #EFEFEF;
		position: relative;

		.logout {
			margin: 100rpx auto;
			text-align: center;
			width: 686rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #1C6732;
			border-radius: 16rpx;
			color: #FFFFFF;
			font-size: 28rpx;
			font-weight: 500;
		}

		.cellView {
			margin-top: 32rpx;
		}

		.box {
			width: 100%;
			background-color: #EFEFEF;
		}
	}

	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		.title {
			font-size: 32rpx;
			font-weight: 500;
			color: #FFFFFF;
			margin-bottom: 6rpx;
		}

		.arrowsBg {
			// transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
