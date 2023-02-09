<template>
  <view class="container">
    <view class="tops">
      <view class="tabs">
        <view class="leftIcon" @click="navigateBack"></view>
        <view class="tabsText">我要转换</view>
        <view></view>
      </view>
    </view>
    <view class="content">
      <view class="credits-box">
        <view class="credits-item" v-for="item of arr">
          <view class="credits-tag">{{ item.name }}</view>
          <view class="credits-num">{{ item.num }}</view>
        </view>
      </view>
      <view class="info-box">
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">转出账户</view>
          <view class="bank-name" @click="optionsOutputIDShow = true">
            <view>兑换积分</view>
            <u-icon name="arrow-down"></u-icon>
          </view>
        </view>
        <u-line color="#ccc" />
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">转入账户</view>
          <view class="bank-name" @click="optionsInputIDShow = true">
            <view>购物积分</view>
            <u-icon name="arrow-down"></u-icon>
          </view>
        </view>
        <u-line color="#ccc" />
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">转出账户</view>
          <view class="bank-name num">975112</view>
        </view>
      </view>
      <view class="info-box">
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">手续费</view>
          <view class="bank-name num red">￥0</view>
        </view>
      </view>
      <view class="info-box">
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">手续费</view>
          <view class="bank-name num red">￥971027</view>
        </view>
      </view>
      <view class="password-box">
        <text class="tips">支付密码</text>
        <u-input
          v-model="password"
          type="password"
          placeholder="请输入支付密码"
        />
      </view>
    </view>
    <view class="btn-box">
      <u-button :custom-style="customStyle">确认兑换</u-button>
    </view>
    <u-action-sheet
      :list="optionsOutputList"
      v-model="optionsOutputIDShow"
    ></u-action-sheet>
    <u-action-sheet
      :list="optionsinputList"
      v-model="optionsInputIDShow"
    ></u-action-sheet>
  </view>
</template>

<script setup>
import { changePath, navigateBack } from '@/utils/navigate.js'
import { ref } from 'vue'
let optionsOutputIDShow = ref(false)
let optionsInputIDShow = ref(false)
const optionsOutputList = [
  {
    text: '兑换积分',
  },
  {
    text: '管理积分',
  },
]
const optionsinputList = [
  {
    text: '兑换积分',
  },
  {
    text: '管理积分',
  },
]
const arr = ref([
  {
    name: '管理积分',
    num: '197156.06',
  },
  {
    name: '购物积分',
    num: '197156.06',
  },
  {
    name: '兑换券',
    num: '197156.06',
  },
  {
    name: '仓单',
    num: '197156.06',
  },
])

const customStyle = {
  width: '100%',
  height: '88rpx',
  borderRadius: '20rpx',
  backgroundColor: '#24743c',
  color: '#fff',
  fontSize: '28rpx',
}
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
    .credits-box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .credits-item {
        box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
        border-radius: 16rpx;
        width: 48%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 26rpx 24rpx;
        margin-bottom: 20rpx;
        .credits-tag {
          font-size: 28rpx;
          color: #333;
          margin-bottom: 20rpx;
        }
        .credits-num {
          font-size: 28rpx;
          color: #333;
          font-weight: 600;
        }
      }
    }
    .info-box {
      margin-bottom: 20rpx;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      padding: 20rpx 26rpx 6rpx;
      .bank-box {
        height: 70rpx;
        line-height: 70rpx;
        text-align: right;
        .bank-tag {
          color: #848484;
        }
        .bank-name {
          color: #000;
          display: flex;
          width: 150rpx;
          justify-content: space-between;
          font-size: 28rpx;
        }
        .num {
          justify-content: flex-end;
        }
        .red {
          color: #f00;
          font-size: 24rpx;
        }
      }
    }
    .password-box {
      margin-top: 30rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      padding: 20rpx 26rpx;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tips {
        color: #848484;
        margin-right: 20rpx;
      }
    }
  }
  .btn-box {
    margin-top: 30rpx;
    padding: 0 28rpx;
  }
}
</style>
