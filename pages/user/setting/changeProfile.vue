<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">{{typeName}}</view>
			<view class=""></view>
		</view>
		<view class="pad-32 m-t-48" v-if="type === 0">
			<u-form :model="dataform">
				<u-form-item :style="{'padding': '10rpx 0'}">
					<u-input height="68" placeholder="请输入姓名" :custom-style="customStyle" v-model="dataform.name" />
				</u-form-item>
				<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
			</u-form>
		</view>
		<view class="pad-32 m-t-48" v-if="type === 1">
			<u-form :model="dataform">
				<u-form-item :style="{'padding': '10rpx 0'}">
					<u-input height="68" placeholder="请输入手机号" :custom-style="customStyle" v-model="dataform.name" />
				</u-form-item>
				<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
			</u-form>
		</view>
		<view class="pad-32 m-t-48" v-if="type === 2">
			<u-form :model="dataform">
				<u-form-item :style="{'padding': '10rpx 0'}">
					<u-input height="68" placeholder="请输入身份证号码" :custom-style="customStyle" v-model="dataform.name" />
				</u-form-item>
				<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
			</u-form>
		</view>

	</view>
</template>

<script setup>
	let customStyle = {
		'background': '#FFF',
		'border-radius': '16rpx',
		'font-size': '28rpx',
		'font-weight': '500',
		'padding': '14rpx 26rpx'
	}
	let customBtnStyle = {
		'margin-top': '104rpx',
		'height': '80rpx',
		'background': '#1C6732',
		'border-radius': '16rpx',
		'font-size': '28rpx',
		'font-weight': '500',
		'color': '#FFFFFF'
	}
	import {
		computed,
		reactive,
		ref
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app";
	onLoad((option) => {
		type.value = option?.typeId ? parseInt(option.typeId) : 0
	})
	// 更改姓名(0) 更改手机号(1) 更改身份证号(2)
	const type = ref(0)
	const typeName = computed(() => {
		switch (type.value) {
			case 0:
				return '更改姓名'
				break;
			case 1:
				return '更改手机号'
				break;
			case 2:
				return '更改身份证号'
				break;
		}
	})
	const dataform = reactive({})
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #EFEFEF;
		position: relative;
	}

	.m-t-48 {
		margin-top: 48rpx;
	}

	.pad-32 {
		padding: 0 32rpx;
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
