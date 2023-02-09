<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">支付订单</view>
    </view>

    <!-- 第一个卡片盒子 -->
    <view class="BOX-1">
      <view class="item">
        <text style="text-align: center;
    width: 100%;
height: 34rpx;
font-size: 24rpx;
font-weight: bold;
color: #000000;
line-height: 24rpx;">实付金额</text>
        <text style="
    text-align: center;
    width: 100%;
height: 66rpx;
font-size: 48rpx;
font-weight: bold;
color: #E30000;
line-height: 24rpx;
        padding-top:10rpx;
">￥11111</text>
        <text style="
    text-align: center;
  width: 100%;
height: 28rpx;
font-size: 20rpx;
font-weight: 400;
color: #010101;
    padding-top:10rpx;
line-height: 24rpx;">商品价格￥1111+加工费￥0</text>
      </view>
    </view>
    <!-- 第一个卡片盒子 -->

    <!-- 第2个卡片盒子 -->
    <view class="Box-2">
      <text class="text">选择支付方式</text>
      <!-- 单选按钮 -->
      <view class="radio">
        <u-form :model="form" ref="uForm">
          <u-form-item>
            <u-radio-group v-model="value" @change="radioGroupChange" style="display: flex; flex-direction: column; margin-left:500rpx;">
              <u-radio :name="item" :disabled="item.disabled"
               v-for="(item, index) in list" :key="index"
               style="width:50rpx ; height:55rpx;position: relative; bottom: 20rpx; "
               >
              </u-radio>
            </u-radio-group>
          </u-form-item>
        </u-form>

<view class="box-box-msg">
  <text>支付宝</text>
  <text>微信支付</text>
  <text>兑换卷加管理积分</text>
</view>
      </view>


    </view>
    <!-- 第2个卡片盒子 -->

    <!-- 3个图标 -->
    <view class="tuBiao-Box">
      <view class="item1"></view>
      <view class="item2"></view>
      <view class="item3"></view>
    </view>
    <!-- 3个图标 -->

    <!-- 保存按钮 -->
    <view class="BOX-bottom1">
      <text>确定支付</text>
    </view>
    <!-- 保存按钮 -->
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


  // 单选按钮 
  const value = ref('支付宝') //默认选中
  const list = ref(
    [{
        name: '支付宝',
        disabled: false
      },
      {
        name: '微信支付',
        disabled: false
      },
      {
        name: '兑换卷加管理积分',
        disabled: false
      }
    ]
  )

  // 选中某个单选框时，由radio时触发
  function radioChange(e) {
    console.log(e);
  }

  // 选中任一radio时，由radio-group触发
  function radioGroupChange(e) {
    console.log(e);
  }
</script>
<style lang="scss" scoped>
  .bg {
    position: relative;
    width: 100%;
    background: #24743C;
    height: 176rpx;
.box-box-msg{
  position: absolute;
  top :88rpx;
  display: flex;
  flex-direction: column;
text{
  padding: 10rpx 10rpx;
  font-weight: 400;
  color: #000000;
  // line-height: 24rpx
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


    .BOX-1 {
      margin: 44rpx 0 0 34rpx;
      width: 684rpx;
      height: 238rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0, 0, 0, 0.12);
      border-radius: 20rpx 20rpx 20rpx 20rpx;
      opacity: 1;
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;

      // 
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      }

    }

    .Box-2 {
      position: relative;
      margin: 26rpx 0 0 32rpx;
      width: 688rpx;
      height: 308rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 20rpx 20rpx 20rpx 20rpx;
      opacity: 1;

      .text {
        padding: 0 0 0 30rpx;
        position: absolute;
        top: 14rpx;
        // width: 164rpx;
        height: 40rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #8F8F8F;
        line-height: 24rpx;
      }

      .radio {
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: space-between;

        margin-left: 100rpx;
        // margin-bottom:110rpx;
        padding-top: 88rpx;
        font-weight: 400;

      }
    }

    .BOX-bottom1 {
      margin-top: 662rpx;
      position: absolute;
      // bottom: 12rpx;
      left: 32rpx;
      width: 686rpx;
      height: 80rpx;
      background: #24743C;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      text {
        font-weight: 400;
        color: #FFFFFF;
        line-height: 40rpx;
        // width: 110rpx;
        height: 40rpx;
        font-size: 28rpx;
      }
    }


    .tuBiao-Box {
      position: absolute;
      top: 562rpx;
      left: 70rpx;

      .item1 {
        width: 39rpx;
        height: 39rpx;
        background: #5A9EF7;
        background: url('../../static/img/Alipay.png') 100% no-repeat;
        background-size: 100% 100%;

      }

      .item2 {
        margin-top: 15rpx;
        margin-bottom: 15rpx;
        width: 39rpx;
        height: 38rpx;
        background: #61AF4A;

        background: url('../../static/img/successArrow.png') 100% no-repeat;
        background-size: 100% 100%;
      }

      .item3 {
        width: 39rpx;
        height: 33rpx;
        background: #F4B12A;
        background: url('../../static/img/ooooooooooo.png') 100% no-repeat;
        background-size: 100% 100%;
      }

    }

  }
</style>
