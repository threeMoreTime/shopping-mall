<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">购物车</view>
			<view class="title" @click="changePath('/pages/shopping/shoppingCart',{typeId: 1})">{{typeId === 0 ? '管理' : ''}}</view>
		</view>
		<view class="ctxList">
			<view class="item" v-for="item in productList">
				<view class="checkboxBg" :class="[item.selected ? 'checkboxBg2' : '']"
					@click="item.selected = !item.selected"></view>
				<u-image width="150rpx" height="150rpx" :src="item.img"></u-image>
				<view class="right-desc">
					<view class="desc-title u-line-2">{{ item.name }}</view>
					<view class="nowPrice">
						<text class="price">￥{{ item.nowPrice.toFixed(2) }}</text>
						<text class="count">x{{ item.count }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-166-fixed">
			<view class="btnAll">
				<view class="miniAll" :class="[allSelected? 'miniAll2' : '']" 
				@click="changeAllSelected"></view>
				<text>全选</text>
			</view>
			<view class="" v-show="typeId === 0">
				<text>总金额：</text>
				<text style="font-size: 40rpx; font-weight: 800; color: #CC0000;">￥{{amount}}</text>
			</view>
			<view 
				class="btn" 
				:style="[typeId === 1? 'background: #D63925;' : '']"
				@click="changeBtn"
				>{{typeBtnName}}</view>
		</view>
	</view>
</template>

<script setup>
	import {navigateBack,changePath} from "@/utils/navigate.js"
	import {
		computed,
		reactive,
		ref,
		toRefs,
		watch
	} from "vue";
	import {
	    onLoad
	  } from "@dcloudio/uni-app";
	const customStyle = {
		background: '#C4814C',
		borderRadius: '48rpx',
		'font-size': '28rpx',
		'font-weight': '400',
	}
	const data = reactive({
		allSelected: false,
		productList: [{
				id: 1,
				name: 'COACH|Studio 漆皮法腋下包COACH|Studio 漆皮法腋下包COACH|Studio 漆皮法腋下包漆皮法腋下包COACH|Studio 漆皮法腋下包',
				price: 350,
				nowPrice: 315,
				count: 1,
				status: 0,
				tips: '三个月最低价',
				img: '../../static/img/clothing.png',
				selected: false
			},
			{
				id: 2,
				name: 'COACH|Studio 漆皮法腋下包',
				price: 350,
				nowPrice: 315,
				count: 1,
				status: 0,
				tips: '三个月最低价',
				img: '../../static/img/clothing.png',
				selected: false
			},
		]
	})
	const {
		productList,
		allSelected
	} = toRefs(data)
	const selectedCount = computed(() => productList.value.filter((product) => product.selected).length)
	const selecteds = computed(() => selectedCount.value === productList.value.length)
	const changeAllSelected = () => {
		allSelected.value = !allSelected.value
		productList.value.map((product) => (product.selected = allSelected.value))
	}
	watch(selecteds, (value) => {
		allSelected.value = value
	})
	// 页面类型id 结算页面(0) 管理页面(1)
	const typeId = ref(0)
	// 按钮类型 结算(0) 删除(1)
	const typeBtnName = computed(() => {
		switch (typeId.value) {
			case 0:
				return '结算'
				break;
			case 1:
				return '删除'
				break;
		}
	})
	// 按钮类型 结算(0) 删除(1)
	const changeBtn = () => {
		if(typeId.value === 0) {
			console.log('结算');
		} else {
			console.log('删除');
		}
	}
	onLoad((option) => {
		typeId.value = option?.typeId ? +(option?.typeId) : 0
	})
	// 当前选中商品的总金额
	const amount = computed(() => {
		if(productList.value.every(item => !item.selected)) {
			return 0
		} else {
			let count = null
			productList.value.forEach(item => {
				if(item.selected) {
					count += item.nowPrice
				}
			})
			return count
		}
		
	})
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.bottom-166-fixed {
		padding: 0 34rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		width: 100%;
		height: 166rpx;
		background: #FFFFFF;
		bottom: 0;
		.btn {
			width: 222rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-size: 32rpx;
			font-weight: 400;
			color: #FFF1F1;
			background: #24743C;
			border-radius: 16rpx;
		}
		.btnAll {
			display: flex;
			align-items: center;
			font-size: 28rpx;
			font-weight: 400;
			.miniAll {
				margin-right: 12rpx;
				width: 34rpx;
				height: 34rpx;
				border: 2rpx solid #cbcccf;
				// background: #c5c5c5;
				border-radius: 50%;
			}
			.miniAll2 {
				width: 34rpx;
				height: 34rpx;
				border: 0rpx solid #cbcccf;
				background: url("@/static/img/successArrow.png") no-repeat;
				background-size: 100% 100%
			}
		}
	}
	.item {
		background-color: #FFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 260rpx;
		width: 100%;
		margin-top: 20rpx;
		border-radius: 20rpx;
		box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0, 0, 0, 0.08);
		padding: 46rpx 46rpx 40rpx;
		.price {
			font-size: 28rpx;
			font-weight: 800;
			color: #CC0000;
		}
		.count {
			font-size: 20rpx;
			font-weight: 400;
			color: #A8A8A8;
		}
		.checkboxBg {
			width: 29rpx;
			height: 29rpx;
			// background: #c5c5c5;
			border: 2rpx solid #cbcccf;
			border-radius: 50%;
		}
	
		.checkboxBg2 {
			width: 29rpx;
			height: 29rpx;
			border: 0rpx solid #cbcccf;
			background: url("@/static/img/successArrow.png") no-repeat;
			background-size: 100% 100%;
		}
	
		.right-desc {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 140rpx;
			.desc-title {
				width: 400rpx;
				background-color: #fff;
				font-weight: bold;
			}
	
	
			.nowPrice {
				color: #000;
				font-size: 28rpx;
				font-weight: bolder;
				height: 40rpx;
				line-height: 40rpx;
				display: flex;
				justify-content: space-between;
			}
	
			.open-box {
				display: flex;
				justify-content: space-between;
	
				.tips {
					color: #a20505;
					font-size: 20rpx;
					height: 40rpx;
					line-height: 80rpx;
				}
	
				.openBtn {
					width: 126rpx;
					height: 40rpx;
					border-radius: 30rpx;
					border: 2rpx solid #870000;
					color: #c48051;
					font-size: 24rpx;
					text-align: center;
					line-height: 40rpx;
				}
			}
		}
	}
	.ctxListItem {
		width: 100%;
		height: 260rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
		border-radius: 20rpx;
		margin-bottom: 22rpx;
	}
	.ctxList {
		padding: 40rpx 34rpx;
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
