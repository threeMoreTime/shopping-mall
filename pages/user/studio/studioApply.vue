<template>
  <view class="container">
    <view class="tops">
      <view class="tabs">
        <view class="leftIcon" @click="navigateBack"></view>
        <view class="tabsText">选择工作室</view>
        <view
          class="right-text"
          @click="changePath('/pages/user/studio/studioApplyState')"
          >状态</view
        >
      </view>
    </view>
    <view class="content">
      <view class="item" v-for="item in 2">
        <view class="left-box">
          <view class="studio">工作室</view>
          <view>16751231</view>
        </view>
        <view class="right-box">立即申请</view>
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 28rpx 44rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 16rpx;
      margin-bottom: 35rpx;
      .left-box{
        .studio{
          margin-bottom: 10rpx;
        }
      }
      .right-box {
        background-color: #1c6732;
        color: #fff;
        width:136rpx;
        text-align: center;
        font-size: 24rpx;
        line-height: 44rpx;
        border-radius: 22rpx;
      }
    }
  }
}
</style>
