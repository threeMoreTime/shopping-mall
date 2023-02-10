<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">我的店铺</view>
		<view class=""></view>
	</view>
	<view class="title" v-if="current == 1">店铺信息</view>
	<u-form :labelWidth='200' class="form" v-if="current == 1">
		<view class="card">
			<u-form-item label="店铺名称">
				<u-input placeholder="请输入店铺名称"></u-input>
			</u-form-item>
			<u-form-item label="店铺logo(0/1)">
				<u-upload max-count="1"></u-upload>
			</u-form-item>
			<u-form-item label="店铺微信(0/1)">
				<u-upload max-count="1"></u-upload>
			</u-form-item>	
			<u-form-item label="主营">
				<u-input placeholder="请输入店铺主营业务"></u-input>
			</u-form-item>
		</view>
		<view class="card">
			<u-form-item label="店铺分类" right-icon="arrow-right">
				<u-select></u-select>
			</u-form-item>
			<u-form-item label="所在地区">
				<u-input></u-input>
			</u-form-item>
			<u-form-item label="详细地址">
				<u-input placeholder="请填写店铺详细地址"></u-input>
			</u-form-item>
			<u-form-item label="店铺简介" label-position="top">
				<u-input type="textarea" placeholder="了解你,从简介开始"></u-input>
			</u-form-item>
		</view>
		<view class="title" style="padding-top: 0;">店铺信息</view>
		<view class="card">
			<u-form-item label="联系人">
				<u-input placeholder="昵称"></u-input>
			</u-form-item>
			<u-form-item label="联系电话">
				<u-input placeholder="请输入电话号码"></u-input>
			</u-form-item>
		</view>
		<view class="card">
			<u-form-item label="店铺宣传图(0/1)">
				<u-upload max-count="1"></u-upload>
			</u-form-item>
		</view>
	</u-form>
	<view class="btn">
		<button type="primary">{{ btnName }}</button>
	</view>
	<view style="height: 150rpx;"></view>
</template>

<script setup>
	import { reactive, toRefs } from 'vue'
	import { onLoad } from "@dcloudio/uni-app";
	
	const data = reactive({
		current: 0,
		btnName: ''
	})
	
	const { current, btnName } = toRefs(data)
	
	onLoad((option) => {
		if (option.typeId) {
			data.current = option.typeId
			data.btnName = '保存'
		}
	})
	
	const navigateBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
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
			color: #F5F5F5;
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
	
	.title {
		padding: 18rpx 0 0 32rpx;
		font-size: 24rpx;
	}
	
	
	.card {
		margin: 16rpx 32rpx 28rpx;
		padding: 0 28rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		font-size: 24rpx;
	}
	
	
	.btn {
		width: 100%;
		padding: 32rpx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		z-index: 999;
		
		::v-deep uni-button {
			height: 72rpx;
			line-height: 72rpx;
			background: #24743C;
			border-radius: 16rpx;
		}
	}
</style>
