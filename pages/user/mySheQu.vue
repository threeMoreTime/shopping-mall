<template>
	<view class="bg">
		<view class="tabBox">
			<view class="tabBoxs">
				<view class="arrowsBg" @click="navigateBack"></view>
				<view class="title">我的社区</view>
			</view>
		</view>
		<view class="ctxBox">
			<view class="item flex-space-between itemText">
				<view class="flex-col">
					<text class="titles">团队人数</text>
					<text>160</text>
				</view>
				<view class="flex-col">
					<text class="titles">团队业绩</text>
					<text>1334</text>
				</view>
				<view class="flex-col">
					<text class="titles">推荐业绩</text>
					<text>17</text>
				</view>
        <view class="flex-col">
        	<text class="titles">分享人数</text>
        	<text>6</text>
        </view>
			</view>
		</view>
    
    
 
    <view class="DoBox">
      <!-- 第一个 -->
      <view class="BoxCard">
      <view class="image">
        <image src="../../static/img/men.png" mode=""></image>
      </view>
      <!-- 1 -->
      <view class="item1Card">
        <text class="item1">积极国王</text>
        <text class="item2">17777777777</text>
      </view>
      <!-- 2 -->
      <view class="item2Card">
       <text class="item1">注册时间</text>
        <text class="item2">2023-01-03  09:50:35</text>
      </view>
      </view>
      
      <!-- 第二个      -->
      <view class="BoxCard">
      <view class="image">
        <image src="../../static/img/men.png" mode=""></image>
      </view>
      <!-- 1 -->
      <view class="item1Card">
        <text class="item1">积极国王</text>
        <text class="item2">17777777777</text>
      </view>
      <!-- 2 -->
      <view class="item2Card">
       <text class="item1">注册时间</text>
        <text class="item2">2023-01-03  09:50:35</text>
      </view>
      </view>

      
    </view>
	</view>
</template>

<script setup>
import { ref } from "vue";
	const conversionValue = ref(null)
	const payPassword = ref(null)
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 路由跳转
	const changePath = (path,id) => {
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
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;

  

	.titles {
		font-weight: 400;
		font-size: 24rpx;
		color: #000000;
		margin-bottom: 10rpx;
	}
	.flex-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: 800;
		font-size: 40rpx;
		color: #000000;
	}
	.itemText {
		padding: 50rpx 26rpx 34rpx;
	}
	.flex-space-between {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.ctxBox {
		padding: 0 32rpx;
		position: absolute;
		top: 214rpx;
		.item {
			width: 686rpx;
			// height: 182rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
			border-radius: 16rpx;
			margin-bottom: 24rpx;
		}
	}
	.tabBox {
		width: 100%;
		height: 354rpx;
		background: #24743C;
		font-weight: 800;
		color: #F5F5F5;
		font-size: 32rpx;
		padding: 0 32rpx;
	
		.tabBoxs {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 112rpx;
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
// margin-left: -343rpx;
position: absolute;
left: 320rpx;
		}
    
    .BoxCard{
    display: flex;
      position: relative;

      top: 70rpx;
     margin-left: 32rpx;
      width: 686rpx;
      height: 102rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      opacity: 1;
          margin-top:  20rpx; 
      
      .item1Card{
        margin-left: 16rpx;
      
display: flex;
flex-direction: column; 
      .item1{
           margin-top: 16rpx;
            height: 40rpx;
            text-align: center;
            font-size: 30rpx;
            color: #0F0F0F;
            line-height: 24rpx; 
              font-weight: 400;
        
      }
      .item2{     
// width: 116rpx;
height: 28rpx;
font-size: 20rpx;
font-weight: 400;
color: #929292;
line-height: 24rpx;
  margin-bottom: 14rpx;
      }
      }
      
      .item2Card{
        position: absolute;
  
        right: 28rpx;
        margin-top: 10rpx;
margin-left: 170rpx;
        display: flex;
        flex-direction: column; 
                  
                  .item1{
                position: relative;
             right: -140rpx;
              font-size: 20rpx;
              font-weight: 400;
              color: #929292;
              line-height: 24rpx;
                            
                  }
        .item2{
          position: relative;
          top: 16rpx;
          font-weight: 400;
          color: #929292;
          line-height: 24rpx;
          font-size: 20rpx;
        }
        
        
      }
      
      .image{
   image{
     width: 68rpx;
     height: 68rpx;
       margin-top: 20rpx;
       margin-left: 24rpx;
   }
        
      }
      
    }
    
}


</style>
