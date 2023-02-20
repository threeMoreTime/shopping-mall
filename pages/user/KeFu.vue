<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">客服</view>
    </view>
 
    <view class="BOX">
         <!-- 头像 -->
         <view class="tOXiang">
           <image src="../../static/img/men.png" mode=""></image>
         </view>
            <!-- 头像 -->
            
            <view class="msg-box">
              <text style="font-weight: 800;
              color: #000000;
              line-height: 24rpx;
              height: 40rpx;
              font-size: 28rpx;">我的xxxxxx</text>
<text class="text-msg">在吗小妹111111</text>
            </view>
    </view>
  
  
  <!-- 底部 -->
<view class="dibu">
  <view class="icon"></view>
  
<view class="form">
  <u-form>
  		<u-form-item><u-input  placeholder=""/></u-form-item>
  
  	</u-form>
</view>
</view>
<!-- 底部 -->
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
    uni.navigateBack({
      delta: 1
    })
  }
 

 
</script>
<style lang="scss" scoped>
  .bg {
    position: relative;
    width: 100%;
    background: #F1F1F1 ;
    height: 100vh;
    // position: relative;
    .BOX {
      width: 100%;
      background: #F1F1F1 ;
    }
    .topHeZi {
      display: flex;
      flex-direction: row;
      background-color: #24743C;
      .title {
        height: 44rpx;
        font-size: 32rpx;
        font-weight: 800;
        color: #F5F5F5;
        margin-left: 270rpx;
        margin-top: 108rpx;
        text-align: center;
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

.tOXiang{

  image{
    margin-top: 92rpx;
    margin-left: 32rpx;
    width: 92rpx;
    height: 92rpx;
    background-size: 100% 100%;
  }
}

.msg-box{
  position: absolute;
  top: 254rpx;
  display: flex;
  flex-direction: column;
  margin-left: 132rpx;
  // margin-bottom: 1400rpx;

.text-msg{
  // text-align: center;
  line-height: 92rpx;
  width: 520rpx;
  height: 92rpx;
  background: #FFFFFF;
  border-radius: 20rpx 20rpx 20rpx 20rpx;
  opacity: 1;
  font-weight: 400;
  color: #000000;
}
   
   .text-text{
     width: 520rpx;
     height: 92rpx;
     background: #FFFFFF;
     border-radius: 20rpx 20rpx 20rpx 20rpx;
     // opacity: 1;
   }
}
    
   

.dibu{
  width: 750rpx;
  height: 68rpx;
  background: #FFFFFF;

  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  .icon{
    width: 57rpx;
    height: 57rpx;
    background: url('@/static/img/llllllllll.png') 100% no-repeat;
    background-size: 100% 100%;
    margin-right: 5rpx;
  margin-left: 34rpx;
  }
  
  .form{
width: 602rpx;
height: 64rpx;
background: #E8E8E8;
border-radius: 30rpx 30rpx 30rpx 30rpx;
opacity: 1;
  }
}

   
  }
 
  
</style>
