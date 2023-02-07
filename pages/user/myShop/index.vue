<template>
	<view class="title">店铺信息</view>
	<u-form :labelWidth='200' class="form">
		<view class="card">
			<u-form-item label="店铺名称">
				<u-input></u-input>
			</u-form-item>
			<u-form-item label="店铺logo(0/1)">
				<u-upload></u-upload>
			</u-form-item>
			<u-form-item label="店铺微信">
				<u-upload></u-upload>
			</u-form-item>	
			<u-form-item label="主营">
				<u-input></u-input>
			</u-form-item>
		</view>
		<view class="card">
			<u-form-item label="店铺分类">
				<u-input></u-input>
			</u-form-item>
			<u-form-item label="所在地区">
				<u-input></u-input>
			</u-form-item>
			<u-form-item label="详细地址">
				<u-input></u-input>
			</u-form-item>
			<u-form-item label="店铺简介">
				<u-input type="textarea"></u-input>
			</u-form-item>
		</view>
		<view class="title" style="padding-top: 0;">店铺信息</view>
		<view class="card">
			<u-form-item label="联系人">
				<u-input></u-input>
			</u-form-item>
			<u-form-item label="联系电话">
				<u-input></u-input>
			</u-form-item>
		</view>
		<view class="card">
			<u-form-item label="店铺宣传图(0/1)">
				<u-upload></u-upload>
			</u-form-item>
		</view>
	</u-form>
	<view class="btn">
		<!-- <button type="primary">申请店铺</button> -->
		<button type="primary">保存</button>
	</view>
	<view></view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	
	.form {
		height: 2000rpx;
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
		
		&:nth-last-child(1) {
			margin-bottom: 500rpx;
		}
	}
	
	
	.btn {
		width: 100%;
		padding: 32rpx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		
		::v-deep uni-button {
			height: 72rpx;
			line-height: 72rpx;
			background: #24743C;
			border-radius: 16rpx;
		}
	}
</style>
