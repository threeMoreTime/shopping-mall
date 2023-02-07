<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">我要充值</view>
			<view class="titleText" @click="changePath('/pages/user/record',0)">充值记录</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background: url("@/static/img/promotionBg.png") 100% no-repeat;
	background-size: 100% 100%;
}
</style>
