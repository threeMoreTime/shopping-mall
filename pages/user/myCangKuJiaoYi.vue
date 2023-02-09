<template>
	<view class="bg">
		<view class="tabs">
      <!-- 箭头 -->
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">创单交易</view>
			<view class="titleText" @click="woYaoGuaDan('/pages/user/woYaoGuaDan',0)">我要挂单</view>
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
  
  
	const   woYaoGuaDan = (path,id) => {
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
	background-color: #FBFBFB;
	position: relative;
	
	
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		.titleText {
height: 44rpx;
font-size: 32rpx;
font-weight: 800;
color: #F5F5F5;
line-height: 24rpx;
			margin-bottom: 6rpx;
			margin-left: 145rpx;
		}
		.title {
			margin-left: 260rpx;
			margin-bottom: 6rpx;
      height: 44rpx;
      font-size: 32rpx;
      font-weight: 800;
      color: #F5F5F5;
      line-height: 24rpx;
		}
		.arrowsBg {
			// transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
            margin-bottom: 6rpx;
		}
	}
}
</style>
