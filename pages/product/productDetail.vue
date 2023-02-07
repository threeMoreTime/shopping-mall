<template>
  <view class="container">
    <view class="tab-bar">
      <u-icon name="arrow-left" color="#666" size="50"></u-icon>
      <!-- <u-image class="backBtn" width="100%" height="300rpx" src="src"></u-image> -->
      <!-- <view class="rightBtn"></view> -->
    </view>
    <view class="swiper-box"
      ><u-swiper class="swiper" :list="list"></u-swiper
    ></view>
    <view class="product-info-box">
      <view class="info-box">
        <view class="info-box-top">
          <view class="product-title">美特斯邦威羽绒服保暖冬季防风保暖...</view>
          <view class="product-price">760.00</view>
          <view class="product-originPrice">￥350.00</view>
        </view>
        <u-line color="#ccc" />
        <view class="info-box-bottom">
          <view class="left-tips">100%正品</view>
          <view class="right-tips">顺丰EM速达·丰富赠礼·无忧退款·安全支付</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg',
])
</script>

<style lang="scss" scoped>
.container {
  background: #f1f1f1;
  .tab-bar {
    z-index: 9999;
    padding: 28rpx;
    position: fixed;
    top: 0;
    left: 0;
  }
  .swiper-box {
    padding-top: 100rpx;
    // height: 776rpx;
    // background-color: #fff;
    //滤镜下到上 黑白渐变

    background: linear-gradient(0deg, #999, #ffffff 25%);

    .swiper {
      // height: 776rpx;
      padding-bottom: 100rpx;
    }
  }
  .product-info-box {
    padding: 26rpx 30rpx;
    .info-box {
      background-color: #fff;
      // padding: 22rpx 34rpx;
      border-radius: 20rpx;
      .info-box-top {
        padding: 30rpx 34rpx 18rpx;
        .product-title {
          font-size: 40rpx;
          font-weight: 800;
        }
        .product-price {
          font-size: 44rpx;
          font-weight: 800;
          color: #a20505;
        }
        .product-originPrice {
          font-weight: 400;
          color: #a8a8a8;
          text-decoration: line-through;
        }
      }
      .info-box-bottom {
        padding: 18rpx 34rpx;
        display: flex;
        justify-content: space-between;
        .left-tips {
          font-size: 28rpx;
          color: #000;
          font-size: 24rpx;
        }
        .right-tips {
          font-size: 28rpx;
          color: #a8a8a8;
          font-size: 20rpx;
        }
      }
    }
  }
}
</style>
