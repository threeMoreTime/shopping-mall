<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">我的挂单</view>
    </view>
    <view class="DaBox">
      <view class="tishiBox" v-for="item, index in dateList" :key="item.id"
        :class="[index === titleIndex ? 'boxListTitleItem1' : '']" @click="changTitle(index)">
        <view class="left">
          <text class="leftBox">
            {{item.title}}
            <!-- tab -->
          </text>
        </view>
        <!--       <view class="right">
          <text class="rightBox">2222</text>
        </view> -->
      </view>
    </view>
   <view class="" v-show="titleIndex === 0 ?true :false">
     <view class="jiaoYiChangGongTopBox"  >
           <view class="TopBox1">交易成功</view>
           <view class="TopBox2">2022-11-29:17:19:41</view>
           <view class="TopBox3" style="text-align: center;">买入</view>
         </view>
         <!-- 第1个 -->
         <view class="jiaoYiChangGongBottomBox">
           <view class="Top">
             <view class="bottomBox1">单价</view>
             <view class="bottomBox2">数量</view>
             <view class="bottomBox3">剩余数量</view>
             <view class="bottomBox4">总额</view>
           </view>
           <view class="Bottom">
             <view class="bottomBox5">7.80</view>
             <view class="bottomBox6">100.00</view>
             <view class="bottomBox7">100.00</view>
             <view class="bottomBox8">780.00</view>
           </view>
         </view>
         <!-- 第2个 -->
         <view class="ssss" style="transform: translateY(-100rpx);">
           <view class="jiaoYiChangGongTopBox">
             <view class="TopBox1">交易成功</view>
             <view class="TopBox2">2022-11-29:17:19:41</view>
             <view class="TopBox3" style="width: 72rpx;
     height: 64rpx;
     background: #FF0000;
     border-radius: 0rpx 0rpx 32rpx 32rpx; text-align: center;">卖出</view>
           </view>
           <view class="jiaoYiChangGongBottomBox">
             <view class="Top">
               <view class="bottomBox1">单价</view>
               <view class="bottomBox2">数量</view>
               <view class="bottomBox3">剩余数量</view>
               <view class="bottomBox4">总额</view>
             </view>
             <view class="Bottom">
               <view class="bottomBox5">7.80</view>
               <view class="bottomBox6">100.00</view>
               <view class="bottomBox7">100.00</view>
               <view class="bottomBox8">780.00</view>
             </view>
           </view>
         </view>
       
       
   </view>
   
   
  <!-- tab右 -->
  <view class=""  v-show="titleIndex === 1 ?true :false">
    2222222222222222222222
  </view>
  
    <!-- -------		 -->
  </view>
</template>
<script setup>

  import {
    reactive,
    ref,
    toRefs
  } from "vue";
    // import { navigateTo, navigateBack } from '../../utils/navigate';
  const isShow = ref(true)
    // const tabIsShow = ref(true)//tab控制显示左右切换
  const data = reactive({
    dateList: [{
        title: '能量值',
        id: 1
      },
      {
        title: '创单',
        id: 2
      }
    ],
    titleIndex: 0
  })
  const {
    dateList,
    titleIndex
  } = toRefs(data)
  
  
  // 返回上一级wx
  function navigateBack() {
    wx.navigateBack({
      delta: 1
    })
  }
  // 点击改变样式
  const changTitle = (index) => {
    titleIndex.value = index
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

    .DaBox {
      margin-top: 52rpx;
      width: 100%;
      display: flex;
      justify-content: space-around;

      // display: flex;
      // justify-content: space-around;
      // position: absolute;
      // top: 126rpx;
      .tishiBox {
        width: 252rpx;
        height: 60rpx;
        // background: #24743C;
        background: #FFFFFF;
        box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        opacity: 1;
        text-align: center !important;
        line-height: 60rpx;


        .leftBox {
          width: 82rpx;
          height: 50rpx;
          font-size: 28rpx;
          font-weight: 600;
          // color: #FFFFFF;
          background: #FFFFFF;
          -webkit-background-clip: text;



        }


      }

      .boxListTitleItem1 {
        // padding: 4rpx 24rpx;
        // background-color: #C58C61;
        // border: 2rpx solid #C58C61;
        color: #FFFFFF;
        background: #24743C;
        // margin-left: 16rpx;
        // border-radius: 22rpx;
      }
    }

    .jiaoYiChangGongTopBox {
      margin-top: 28rpx;
      display: flex;
      justify-content: space-between;
      width: 686rpx;
      height: 226rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      margin-left: 32rpx;

      // opacity: 1;
      // border: 2rpx solid #707070;
      .TopBox1 {
        width: 206rpx;
        height: 44rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #000000;
        line-height: 24rpx;
        margin-top: 20rpx;
        // margin-left: 24rpx;
        padding-left: 24rpx;
      }

      .TopBox2 {
        margin-top: 20rpx;
        // margin-left: 150rpx;
        // padding-left: -10rpx !important;
        transform: translateX(-85rpx);
        width: 300rpx;
        height: 28rpx;
        font-size: 20rpx;
        color: #929292;
        line-height: 28rpx;
      }

      .TopBox3 {
        width: 72rpx;
        height: 64rpx;
        background: #24743C;
        border-radius: 0rpx 0rpx 32rpx 32rpx;
        opacity: 1;
        transform: translateX(-26rpx);

      }
    }

    // 下
    .jiaoYiChangGongBottomBox {
      transform: translateY(-138rpx);
      overflow: hidden;
    
      .Top {
        padding-top: 20rpx;
        display: flex;
        justify-content: space-around;
        font-size: 24rpx;
        font-weight: 400;
        color: #000000;
      
      }

      .Bottom {
        margin-top: 3rpx;
        display: flex;
        justify-content: space-around;
        // width: 64rpx;
        height: 44rpx;
        font-size: 32rpx;
        font-weight: 800;
        color: #000000;
        padding-left: 10rpx;
      }
    }

    // 第二个
    .jiaoYiChangGongTopBox {
      margin-top: 28rpx;
      display: flex;
      justify-content: space-between;
      width: 686rpx;
      height: 226rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      margin-left: 32rpx;

      // opacity: 1;
      // border: 2rpx solid #707070;
      .TopBox1 {
        width: 206rpx;
        height: 44rpx;
        font-size: 32rpx;
        font-weight: bold;
        color: #000000;
        line-height: 24rpx;
        margin-top: 20rpx;
        // margin-left: 24rpx;
        padding-left: 24rpx;
      }

      .TopBox2 {
        margin-top: 20rpx;
        // margin-left: 150rpx;
        // padding-left: -10rpx !important;
        transform: translateX(-85rpx);
        width: 300rpx;
        height: 28rpx;
        font-size: 20rpx;
        color: #929292;
        line-height: 28rpx;
      }

      .TopBox3 {
        width: 72rpx;
        height: 64rpx;
        background: #24743C;
        border-radius: 0rpx 0rpx 32rpx 32rpx;
        opacity: 1;
        transform: translateX(-26rpx);
      }
    }

    // 下
    .jiaoYiChangGongBottomBox {
      transform: translateY(-138rpx);

      // border-top: 2rpx solid #eaeaea;
      // overflow: hidden;
      // display: flex;
      // flex-wrap: wrap;
      // width: 686rpx;
      // height: 178rpx;
      .Top {
        padding-top: 20rpx;
        display: flex;
        justify-content: space-around;
        font-size: 24rpx;
        font-weight: 400;
        color: #000000;
      }

      .Bottom {
        margin-top: 3rpx;
        display: flex;
        justify-content: space-around;
        // width: 64rpx;
        height: 44rpx;
        font-size: 32rpx;
        font-weight: 800;
        color: #000000;
        padding-left: 10rpx;
      }
    }

  }
</style>
