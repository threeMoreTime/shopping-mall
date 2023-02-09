<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">退款/款</view>
    </view>
    
  
       
                  <!-- 第二个卡片盒子 -->
                  <!-- 图片 -->
                  <view class="card-box2">
          <image src="../../static/img/clothing.png" class="image" mode=""></image>
          
          
          <view class="Msg-kuaidi">
            <text class="item1">退款成功</text>
            <text class="item2">退款成功￥315.00</text>
          </view>
          
          <view class="Msg-right">
            <text class="item1">美特司邦威羽绒服保暖冬季防风保暖...</text>
            <text class="item2">￥350.00</text>
            <text class="item3">￥350.00</text>
          </view>
          
          <text class="text-text">x1111</text>
                  </view>
                   <!-- 第二个卡片盒子 -->
       
            

<!-- 删除按钮
 -->
<view class="btn">
  <text>删除记录</text>
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
 
 // 箭头
 const btnTo=(id)=>{
   if(id){
     console.log('---------------');
   }
 }
 


 
 
</script>
<style lang="scss" scoped>
  .bg {
    position: relative;
    width: 100%;
    height: 176rpx;
    background: #24743C;
.btn{
  display: flex;
  justify-content:center;
align-items: center;
      position:absolute;
      top: 480rpx;
      right: 74rpx;
  width: 126rpx;
  height: 48rpx;
  border-radius: 24rpx 24rpx 24rpx 24rpx;
  opacity: 1;
  border: 2rpx solid #808080;
  text{
    // width: 78rpx;
    height: 28rpx;
    font-size: 20rpx;
    // font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    color: #8E8E8E;
    line-height: 24rpx;

  }
}

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







.card-box2{
  margin-top: 26rpx;
  margin-left: 34rpx;
  width: 684rpx;
  height: 360rpx;
  background: #FFFFFF;
  box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
  border-radius: 20rpx 20rpx 20rpx 20rpx;
  opacity: 1;
  
  .image{
    width: 164rpx;
    height: 164rpx;
  margin:48rpx 0 0 30rpx ;
  }
  
  .Msg-kuaidi{
      margin-left:52rpx;
   width: 590rpx;
   height: 56rpx;
    display: flex;
    flex-wrap: wrap;
background: #F1F1F1;
border-radius: 0rpx 0rpx 0rpx 0rpx;
opacity: 1;

    .item1{
        margin-right: 5rpx;
        padding: 2rpx 2rpx;
      width: 120rpx;
      height: 40rpx;
      font-size: 28rpx;
      font-weight: bold;
      color: #000000;
      line-height: 40rpx;
    }
    .item2{
      margin-left: 15rpx;
      // margin:24rpx 0 0 78rpx;
 font-weight: 400;
 color: #000000;
 line-height: 0rpx;
 height: 40rpx;
 font-size: 28rpx;
       line-height: 40rpx;
    }
    
  
  }
  
  .Msg-right{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 236rpx;
    margin: 0 0 0 234rpx;
  
    .item1{
      width: 410rpx;
      height: 80rpx;
      font-size: 28rpx;
      font-weight: bold;
      color: #000000;
          padding-bottom:35rpx;
    }
    .item2{
 padding-bottom: 35rpx;
 height: 28rpx;
 font-size: 20rpx;
 font-weight: 400;
 color: #A8A8A8;
 line-height: 24rpx;
text-decoration:line-through; // 删除线

    }
        .item3{
          // width: 116rpx;
          height: 40rpx;
          font-size: 28rpx;
        
          font-weight: 800;
          color: #000000;
          line-height: 24rpx;
        }
  }
  
  .text-text{
    position: absolute;
    top: 310rpx;
    right:70rpx ;
    font-weight: 400;
    color: #A8A8A8;
    height: 28rpx;
    font-size: 20rpx;
  }
}


  
    
  }
</style>
