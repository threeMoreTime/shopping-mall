<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">商品分类</view>
		<view class=""></view>
	</view>
	<view class="container">
		<view class="classifySelect">
			<!-- 一级 -->
			<view class="tab-box">
				<view class="tab-item" v-for="(item, index) in tabList" :key="index"
					:class="{ active: index === activeTabId }" @click="handleTabClick(index,item.id)">
					<view>{{ item.name }}</view>
				</view>
			</view>
			<!-- 二级 -->
			<scroll-view scroll-y="true" :scroll-top="scrollTop" class="scroll-y">
				<view class="classify-content">
					<view class="classify-box" :id="'tab' + item.id" v-for="item in tabList">
						<view class="classify-title">{{ item.name }}</view>
						<view class="classify-wrapper">
							<view class="classify-item" v-for="item2 in item.child">
								<u-image width="138rpx" height="138rpx"
									src="https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
									@click="handleClassifyClick(item2.id)"></u-image>
								<view class="itemName">{{ item2.name }}</view>
							</view>
						</view>
					</view>
				</view>				
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	
	let activeTabId = ref(0)
	let scrollTop = ref(0)

	let tabList = ref([{
			id: 745,
			pid: 0,
			path: '/0/741',
			name: '食品酒水',
			child: [{ name: '卸妆'}, { name: '卸妆'}, { name: '卸妆'}, { name: '卸妆'}, { name: '卸妆'}]
		},
		{
			id: 745,
			pid: 0,
			path: '/0/741',
			name: '户外运动',
			child: [{
				name: '清洁'
			}]
		},
		{
			id: 745,
			pid: 0,
			path: '/0/741',
			name: '美妆护肤',
			child: [{
				name: '礼物'
			}]
		},
		{
			id: 745,
			pid: 0,
			path: '/0/741',
			name: '家用电器',
			child: [{
				name: '西瓜'
			}]
		},
		{
			id: 745,
			pid: 0,
			path: '/0/741',
			name: '母婴童装',
			child: [{
				name: '菠萝'
			}]
		}
	])

	//tab 点击事件
	const handleTabClick = (index, id) => {
		activeTabId.value = index
		// classList.value = tabList[id - 1].classList
		uni.pageScrollTo({
			selector: '#tab' + id,
			duration: 100,
		})
	}

	//分类点击事件
	const handleClassifyClick = (id) => {
		uni.navigateTo({
			url: `/pages/classify/classifyResult?id=${id}`,
		})
	}

	const navigateBack = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	.scroll-y {
		height: 1100rpx;
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

	.active {
		border-left: 12rpx solid #915638;
		font-weight: bolder;
		background-color: #fff !important;
	}

	.container {
		box-sizing: border-box;

		.classifySelect {
			margin-top: 32rpx;
			display: flex;

			.tab-box {
				width: 182rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: column;
				position: fixed;
				top: 200rpx;
				background-color: #f8f8f8;
				// float: left;

				.tab-item {
					width: 182rpx;
					height: 88rpx;
					background-color: #f8f8f8;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28rpx;
				}
			}

			.classify-content {
				// width: 70%;
				margin: 0 0 0 182rpx;

				.classify-box {
					.classify-title {
						width: 100%;
						height: 88rpx;
						line-height: 88rpx;
						font-size: 28rpx;
						font-weight: bold;
						background-color: #fff;
						padding-left: 32rpx;
					}

					.classify-wrapper {
						width: 100%;
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-start;
						padding: 24rpx;

						.classify-item {
							width: 33%;
							background-color: #fff;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: center;

							.itemName {
								font-size: 24rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
