<template>
	<view class="titles">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">商品分类</view>
		<view class=""></view>
	</view>
	<view class="context">
		<view class="tabs">
			<view 
				class="tabName" 
				v-for="item in tabsList"
				:class="[tabsIndex === item.id ? 'activateName' : '']"
				@click="changeTabs(item.id)"
				>{{item.name}}</view>
		</view>
		<view class="classify-content">
		  <view
		    class="classify-box"
		    :id="'tab' + item.id"
		    v-for="item in tabsList"
		  >
		    <view class="classify-title">{{ item.name }}</view>
		    <view class="classify-wrapper">
		      <view class="classify-item" v-for="item2 in item.child">
		        <u-image
		          width="138rpx"
		          height="138rpx"
		          :src="item2.extra"
		          @click="handleClassifyClick(item2.id)"
		        ></u-image>
		        <view class="itemName">{{ item2.name }}</view>
		      </view>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue";
import {navigateBack,changePath} from "@/utils/navigate.js"
import {leftcategory} from "@/api/category.js"
import {userStore} from "@/store/index.js"
	const store = userStore()
	const tabsIndex = ref(null)
	const tabsList = ref([])
	leftcategory().then(res => {
		tabsList.value = res
		tabsList.value.forEach(item => {
			item.child.map(childItem => {
				childItem.extra = store.systemConfig.picUrlPre + childItem.extra
			})
		})
		// console.log(tabsList.value);
		tabsIndex.value = tabsList.value[0].id
	})
	// 点击一级列表触发
	const changeTabs = (id) => {
		if(id) {
			tabsIndex.value = id
			uni.pageScrollTo({
				selector: '#tab' + id,
				duration: 100,
			})
		}
	}
	// 点击二级列表触发
	const handleClassifyClick = (id) => {
		if(id) {
			changePath("/pages/home/searchList",{id})
		}
	}
</script>

<style lang="scss" scoped>
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
.context {
	width: 100%;
	display: flex;
	justify-content: space-between;
	.classify-content {
	  // width: 70%;
	  margin: 200rpx 0 0 182rpx;
	  overflow: scroll;
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
			  padding: 8rpx 0 20rpx;
	        }
	      }
	    }
	  }
	}
	.tabs {
		width: 184rpx;
		height: 100vh;
		background: #F8F8F8;
		padding: 34rpx 0;
		font-size: 28rpx;
		font-weight: 400;
		color: #0A0A0A;
		margin-top: 170rpx;
		position: fixed;
		overflow: scroll;
		.activateName {
			background: #FFFFFF;
			border-left: 12rpx solid #5CAA24;
			font-weight: 800;
			box-sizing: border-box;
		}
		.tabName {
			width: 100%;
			padding: 24rpx 0;
			text-align: center;
		}
	}
}
.titles {
	width: 100%;
	height: 176rpx;
	background: #1C6732;
	padding: 14rpx 32rpx;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	position: fixed;
	z-index: 99;
	.titleText {
		font-size: 36rpx;
		font-weight: 800;
		color: #FFFFFF;
		margin-bottom: 8rpx;
	}
	.search {
		height: 64rpx;
		width: 598rpx;
	}
}
</style>
