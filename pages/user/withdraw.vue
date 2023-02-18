<template>
  <view class="container">
    <view class="tops">
      <view class="tabs">
        <view class="leftIcon" @click="navigateBack"></view>
        <view class="tabsText">提现</view>
        <view
          class="right-text"
          @click="changePath('/pages/user/record',{typeId: 0})"
          >提现记录</view
        >
      </view>
    </view>
    <view class="content">
      <view class="info-box">
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">收款银行</view>
          <view class="bank-name">{{FormData.extractType}}</view>
        </view>
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">银行卡号</view>
          <view class="bank-name">{{FormData.extractTarget}}</view>
        </view>
        <view class="bank-box u-flex u-row-between">
          <view class="bank-tag">开户名</view>
          <view class="bank-name">{{FormData.name}}</view>
        </view>
      </view>

      <view class="withdraw-box">
        <view class="tips">请输入提现的金额</view>
        <u-input v-model.number="FormData.money" type="number" placeholder="请输入提现的金额" />
        <u-line color="#707070" />
      </view>
      <view class="password-box">
        <text class="tips">支付密码</text>
        <u-input
          v-model="FormData.qrcodeUrl"
          type="password"
          placeholder="请输入支付密码"
        />
      </view>
      <view class="service-charge">
        {{ `手续费： 3%` }}
      </view>
    </view>
    <view class="btn-box">
      <u-button :custom-style="customStyle" @click="btnPost">立即提现</u-button>
    </view>
  </view>
</template>

<script setup>
import { nextTick } from "vue";
  name:'user1111111'
   import { onLoad} from "@dcloudio/uni-app"
   import { ref ,reactive } from 'vue'
import { changePath, navigateBack } from '@/utils/navigate.js'
import {  tixianshenqing} from '@/api/userWithdraw.js'  //  * 前台-用户-提现 api
  import { userStore}from '@/store/index.js'  // 导入用户信息  store 
   const  store=userStore()


onLoad(()=>{
  console.log(store.userInfo)
}
)
// 表单数据
const FormData=reactive({
 // extractType: 'weixin', //收款银行
 extractType: 'alipay', //收款银行
 extractTarget: 1, // 银行卡号
name: store.userInfo.realName,// 开户名,
 qrcodeUrl:'' ,//密码
 money:null //金额

})

 // 立即提现 btnPost
const btnPost=async()=>{
try{
  const res= await tixianshenqing(FormData)
  console.log(res); 
}catch(e){
console.log(e);
}
}



const customStyle = {
  width: '100%',
  height: '72rpx',
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
        margin-left: 80rpx;
        font-size: 32rpx;
        font-weight: 500;
        display: flex;
        align-items: center;
      }
    }
  }
  .content {
    padding: 203rpx 28rpx 0;
    .info-box {
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      padding: 20rpx 26rpx;
      .bank-box {
        height: 50rpx;
        .bank-tag {
          color: #848484;
        }
        .bank-name {
          color: #000;
        }
      }
    }
    .withdraw-box {
      margin-top: 30rpx;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      padding: 20rpx 26rpx;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
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
        margin-right: 20rpx;
      }
    }
    .service-charge {
      margin-top: 30rpx;
      font-size: 24rpx;
      color: #878787;
    }
  }
  .btn-box {
    margin-top: 30rpx;
    padding: 0 28rpx;
  }
}
</style>
