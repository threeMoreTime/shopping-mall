<template>
	<view class="bg">
		<view class="tabs">
			<!-- 箭头 -->
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">我要挂单</view>
			<view class=""></view>
		</view>
		<view class="context">
			<view class="ctxBox">
				<view class="listBox">
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000">类型</text>
						</view>
						<view class="flex-col flex-col-end">
							<text class="title-color-000" style="font-weight: 400;
              font-size: 28rpx;
 margin-right: 6rpx;
color: #000000;">
								<image src='../../static/img/danxuananniu.png' style="width: 29rpx;
height: 29rpx;
line-height: 29rpx;
"></image>&nbsp;&nbsp;卖出
							</text>
						</view>
					</view>

					<!-- 第二个 -->
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000">数量</text>
						</view>
						<view class="flex-col flex-col-end">
							<text class="title-color-000"
								style="margin-right: -90rpx; width: 280rpx; text-align: center;">
								<u-input v-model.number="dataform.amount" type="number" :border="false" placeholder="请输入挂单数量" />
							</text>
						</view>


					</view>
					
					<view class="listItem">
						<view class="flex-col">
							<text class="title-color-000">金额</text>
						</view>
						<view class="flex-col flex-col-end">
							<text class="title-color-000"
								style="margin-right: -90rpx; width: 280rpx; text-align: center;">
								<u-input v-model.number="dataform.price" type="number" :border="false" placeholder="请输入挂单金额" />
							</text>
						</view>
					</view>

					<!-- 第三个 -->
					<view class="listItem">
						<view class="flex-col flex-col-end">
							<text class="title-color-000">
								<u-input v-model="dataform.payPassword" type="text" :border="false" placeholder="请输入密码" />
							</text>
						</view>


					</view>

					<!-- button -->
					<view class="Button">
						<button style="width: 686rpx;
height: 72rpx;
background: #24743C;
border-radius: 16rpx 16rpx 16rpx 16rpx;
font-weight: 400;
font-size: 30rpx;
color: #FFFFFF;
text-align: center;" @click="btnCommit">确认提交</button>
					</view>


				</view>


			</view>


		</view>
	</view>
</template>

<script setup>
import { reactive } from "vue";
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	
	const dataform = reactive({
		type: 'SELL',
		payPassword: null,
		amount: null,
		price: null
	})

	// 确认提交按钮
	const btnCommit = () => {
		console.log('111111111111');
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FBFBFB;
		position: relative;

		.title-color-000 {
			font-size: 28rpx;
			font-weight: 400;
			color: #0F0F0F;
		}

		.flex-col {
			display: flex;
			flex-direction: column;
		}

		.flex-col-end {
			align-items: flex-end;
		}

		.listItem {
			width: 100%;
			height: 102rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx;
			margin-bottom: 24rpx;
			padding: 16rpx 24rpx 16rpx 32rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 20rpx;
			font-weight: 400;
			color: #010101;
		}

		.titles {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 400;
			color: #0F0F0F;
		}

		.listBox {
			padding: 0 4rpx;
			margin-top: 26rpx;
		}

		.ctxBox {
			margin-top: 22rpx;
		}

		.context {
			width: 100%;
			background-color: #FBFBFB;
			padding: 0 28rpx;
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
				font-weight: 800;
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
	}
</style>
