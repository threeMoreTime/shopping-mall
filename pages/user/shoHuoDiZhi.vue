<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">收货地址</view>
    </view>
    
    <view class="box-card">
      <text class="box-box-box">初夏</text>
      <text class="item">177777777777</text>
      
      <text  class="item2">北京朝阳区xxxxxxxxxxxxx</text>
      
<view class="Box-right">
  <view class="shanchu"></view>
  <view class="bianji"></view>
</view>
    </view>
   
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


.box-card{
  margin: 52rpx 0 0 32rpx;
  width: 686rpx;
  height: 174rpx;
  background: #FFFFFF;
  box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
  border-radius: 20rpx 20rpx 20rpx 20rpx;
  opacity: 1;
  position: relative;
  
  .box-box-box{
margin: 0 0 0 38rpx ;
position: absolute;
top: 28rpx;
    font-weight: 400;
    color: #000000;
    line-height: 24rpx;
    // width: 164rpx;
    height: 44rpx;
    font-size: 32rpx;

  }
  
  .item{
    position: absolute;
    left: 130rpx;
    top: 28rpx;
    height: 44rpx;
    font-size: 32rpx;
    font-weight: 400;
    color: #000000;
    line-height: 24rpx;
  }
  
  .item2{
    position: absolute;
    top:106rpx ;
    left:38rpx;
height: 34rpx;
font-size: 24rpx;
font-weight: 400;
color: #979797;
line-height: 24rpx;
  }
  .Box-right{
    // padding:114rpx 0;
    position: absolute;
    top:28rpx;
    right: 28rpx;
    display: flex;
flex-direction: column;


.shanchu{
  width: 24rpx;
  height: 26rpx;
  background: #000000;
  background: url('../../static/img/del.png') 100% no-repeat;
  background-size: 100% 100%;
  // opacity: 1;
}

.bianji{
  margin-top: 58rpx;
  width: 32rpx;
  height: 30rpx;
  background: #44454A;
  background: url('../../static/img/aaaaaaaaaaaaa.png') 100% no-repeat;
  background-size: 100% 100%;
}
  }
  
}
    
  }
</style>
