<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">确认订单</view>
    </view>
    
    <!-- 第一个卡片盒子 -->
    <view class="card-box1">
      <!-- <image src="../../static/img/community.png" mode="" class="imaeg"></image> -->
      <view class="imaegBox">
        <view class="imaeg"> </view>
      </view>
      
      <view class="qBOX">
        <text class="item1">初11111111夏</text>
        <text class="item2">17777k77777</text>
      </view>
      
      
      
    </view>
           <!-- 第一个卡片盒子 -->
           
       
   
   

  </view>
</template>
<script setup>

  import {
    reactive,
    ref,
    toRefs
  } from "vue";

  // 返回上一级
  function navigateBack() {
    wx.navigateBack({
      delta: 1
    })
  }
 
</script>
<style lang="scss" scoped>
  .bg {
    position: relative;
    width: 100%;
    height: 176rpx;
    background: #24743C;

    // position: relative;
    .topHeZi {
      display: flex;
      flex-direction: row;

      .title {
        height: 44rpx;
        font-size: 32rpx;
        font-weight: 800;
        color: #F5F5F5;
        margin-left: 256rpx;
        margin-top: 108rpx;
      }

      .arrowsBg {
        width: 25rpx;
        height: 48rpx;
        background: url("@/static/img/arrows.png") 100% no-repeat;
        background-size: 100% 100%;
        // text-align: center;
        margin-left: 34rpx;
        margin-top: 108rpx;
      }
    }


.card-box1{
  margin: 48rpx 0 0 32rpx;
  width: 686rpx;
  height: 150rpx;
  background: #FFFFFF;
  box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  opacity: 1;
  .imaeg{
    // margin-top: 46rpx;
    margin-left: 42rpx;
    width: 39rpx;
    height: 57rpx;
    background: #24743C;
    // opacity: 1;
    background: url("../../static/img/dizhi.png") 100% no-repeat;
    background-size: 100% 100%; // 控制图片大小的属性
  }
  
  .imaegBox{
    padding-top: 30rpx;
  }
}

.qBOX{
    font-size: 32rpx;
  width: 480rpx;
  height:100rpx;
  display: flex;
justify-content:space-around;
position: absolute;
top: 222rpx;
    margin-left: 100rpx;

.item1{
  // width: 80rpx;

  height: 44rpx;

  font-weight: 400;
  color: #616161;
}
.item2{
  margin-left: 5rpx;
  font-size: 32rpx;
  font-weight: 400;
  color: #616161;
}
}

    
  }
</style>
