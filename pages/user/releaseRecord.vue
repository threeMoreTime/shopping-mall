<template>
  <view class="container">
    <view class="tops">
      <view class="tabs">
        <view class="leftIcon" @click="navigateBack"></view>
        <view class="tabsText">释放记录</view>
        <view></view>
      </view>
    </view>
    <view class="content">
      <view class="total-box">
        <view class="top-box">
          <view class="totalRelease">释放总值</view>
          <view class="totalReleaseNum">330000.00</view>
        </view>
        <view class="bottom-box">
          <view class="bottom-left">
            <view class="released">已释放</view>
            <view class="releasedNum">197156.6</view>
          </view>
          <view class="bottom-right">
            <view class="unreleased">未释放</view>
            <view class="unreleasedNum">197156.6</view>
          </view>
        </view>
      </view>
      <view class="record-item" v-for="item in 2">
        <view class="time-box">{{ `2022-11-29  17:19:41` }}</view>
        <u-line color="#aaa" />
        <view class="record-box">
          <view class="yield-box">
            <view class="yieldTitle">总产量</view>
            <view class="yieldNum">180.00</view>
          </view>
          <view class="output-box">
            <view class="output-title">总额</view>
            <view class="outputNum">180.00</view>
          </view>
          <view class="balance-box">
            <view class="balance-title">余额</view>
            <view class="balanceNum">180.00</view>
          </view>
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
    // height: 176rpx;
    width: 100%;
    background-color: #1c6732;
    display: flex;
    align-items: flex-end;
    padding: 88rpx 0 178rpx;

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
    .total-box {
      background-color: #fff;
      position: relative;
      z-index: 999;
      padding: 28rpx 26rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 16rpx;
      .top-box {
        .totalRelease {
          font-size: 24rpx;
          line-height: 44rpx;
        }
        .totalReleaseNum {
          font-size: 40rpx;
          font-weight: 600;
        }
      }
      .bottom-box {
        margin-top: 20rpx;
        display: flex;
        justify-content: space-between;
        .bottom-left {
          width: 50%;
          .released {
            font-size: 24rpx;
            line-height: 44rpx;
          }
          .releasedNum {
            font-size: 32rpx;
            font-weight: 600;
          }
        }
        .bottom-right {
          width: 50%;
          .unreleased {
            font-size: 24rpx;
            line-height: 44rpx;
          }
          .unreleasedNum {
            font-size: 32rpx;
            font-weight: 600;
          }
        }
      }
    }
    .record-item {
      margin-top: 20rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      padding: 22rpx 24rpx;
      border-radius: 16rpx;
      .time-box {
        margin-top: 20rpx;
        font-size: 20rpx;
        line-height: 44rpx;
        color: #1E1E1E;
      }
      .record-box {
        margin: 20rpx 0 10rpx;
        display: flex;
        justify-content: space-between;
        text-align: center;
        .yield-box {
          width: 33.33%;
          .yieldTitle {
            font-size: 24rpx;
            line-height: 44rpx;
          }
          .yieldNum {
            font-size: 32rpx;
            font-weight: 600;
          }
        }
        .output-box {
          width: 33.33%;
          .output-title {
            font-size: 24rpx;
            line-height: 44rpx;
          }
          .outputNum {
            font-size: 32rpx;
            font-weight: 600;
          }
        }
        .balance-box {
          width: 33.33%;
          .balance-title {
            font-size: 24rpx;
            line-height: 44rpx;
          }
          .balanceNum {
            font-size: 32rpx;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
