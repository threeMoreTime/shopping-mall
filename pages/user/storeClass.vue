<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">店铺分类</view>
		<view class=""></view>
	</view>
	<view class="nav">
		<view class="btn" @click="openMoadl">添加</view>
	</view>
	<view class="card">
		<view v-if="!list.length">暂无分类</view>
		<view class="item" v-for="(item, index) in list">
			<view>{{ item.name }}</view>
			<view class="cardBtn">
				<view class="btnItem">编辑</view>
				<view>删除</view>
			</view>
		</view>
	</view>
	<u-modal 
		v-model="show" 
		title="添加店铺分类" 
		:show-confirm-button="false"
		mask-close-able
	>
		<view class="modalInput">
			<u-input :border="true" placeholder="输入店铺分类,8个字以内"></u-input>
		</view>
		<view class="modalBtn">
			<u-button>确认</u-button>
		</view>
	</u-modal>
</template>

<script setup>
	import { reactive, toRefs } from 'vue'
	
	const data = reactive({
		show: false,
		list: [
			{ name: '分类一' },
			{ name: '分类二' }
		]
	})
	
	const { show, list } = toRefs(data)
	
	const openMoadl = () => {
		data.show = true;
	}
	
	const indexArr = reactive([1,2,3])
	const navigateBack = () => {
		uni.$emit('returnData',indexArr)
		uni.navigateBack({
			delta: 1
		})
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
	
	.nav {
		display: flex;
		justify-content: flex-end;
		margin-top: 24rpx;
		padding-right: 32rpx;
		
		.btn {
			width: 142rpx;
			height: 58rpx;
			text-align: center;
			line-height: 57rpx;
			background: #DE0000;
			border-radius: 16rpx;
			color: #F5F5F5;
		}
	}
	
	.card {
		margin: 22rpx 32rpx;
		padding: 26rpx 28rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
		
		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 24rpx;
			
			&:nth-last-child(1) {
				margin-bottom: 0;
			}
		}
		
		.cardBtn {
			display: flex;
			font-size: 24rpx;
			color: #ACACAC;
		}
		
		.btnItem {
			margin-right: 26rpx;
		}
	}
	
	.modalInput {
		margin: 10rpx 24rpx 0;
	}
	
	.modalBtn {
		margin: 44rpx 26rpx 52rpx;
		
		::v-deep .u-btn--default {
			background: #24743C;
			color: #FFFFFF;
		}
	}
</style>
