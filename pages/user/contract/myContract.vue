<template>
  <view class="container">
    <view class="tops">
      <view class="tabs">
        <view class="leftIcon" @click="navigateBack"></view>
        <view class="tabsText">合同列表</view>
        <view></view>
      </view>
    </view>
    <view class="content">
      <view class="item" v-for="item in 2" @click="changePath('/pages/user/contract/electronicContract')">
        <view class="left">
          <view class="contractName">HT316049778</view>
          <view class="contractId">202301020950354782212_0</view>
        </view>
        <view class="right">
          <view class="timeTag">签约时间</view>
          <view class="time">{{ `2023-01-03  09:50:35` }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { changePath, navigateBack } from '@/utils/navigate.js'
</script>

<style lang="scss" scoped>
.container {
  .tops {
    //fixed顶部
    position: fixed;
    top: 0;
    z-index: 999;
    height: 176rpx;
    width: 100%;
    background-color: #1c6732;
    display: flex;
    align-items: flex-end;

    .tabs {
      padding: 0 28rpx;
      color: #f5f5f5;
      width: 100%;
      height: 88rpx;
      line-height: 88rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .leftIcon {
        width: 23rpx;
        height: 41rpx;
        background: url('@/static/img/arrows.png') 100% no-repeat;
        background-size: 100% 100%;
      }

      .tabsText {
        // margin-left: 224rpx;
        font-size: 32rpx;
        font-weight: 500;
        display: flex;
        align-items: center;
      }
    }
  }
  .content {
    padding: 203rpx 28rpx 0;

    .item {
      margin-bottom: 30rpx;
      padding: 20rpx 32rpx;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      display: flex;
      justify-content: space-between;
      font-size: 28rpx;
      color: #0f0f0f;
      .left {
        display: flex;
        flex-direction: column;
        .contractName {
          font-size: 28rpx;
        }
        .contractId {
          font-size: 24rpx;
          color: #999999;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        text-align: right;
        .timeTag {
          font-size: 28rpx;
        }
        .time {
          font-size: 24rpx;
          color: #999999;
        }
      }
    }
  }
}
</style>
