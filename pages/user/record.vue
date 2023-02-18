<template>
  <view class="bg">
    <view class="tabs">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">{{typeName}}</view>
      <view class=""></view>
    </view>
    <view class="context">
      <view class="ctxBox" v-if="type === 0">
        <view class="titles">
          <text>状态/时间</text>
          <text>金额/支付方式</text>
        </view>
        <view class="listBox">
          <!-- for -->
          <view class="listItem" v-for="(item,index) in list">
            <view class="flex-col">
              <text class="title-color-000">{{`${item.status}`}}</text>
              <text class="text-color">{{item.createTime}}</text>
            </view>
            <text>{{item.balanceManageIntegral}}</text>
            <view class="flex-col flex-col-end">
              <text class="title-color-000" style="font-weight: bold;">￥{{item.extractPrice}}</text>
              <text class="text-color">{{item.extractType}}</text>
            </view>
          </view>
        </view>
      </view>
      <view class="ctxBox" v-if="type === 1">
        <view class="titles">
          <text>状态/时间</text>
          <text>价格</text>
          <text>仓单数量</text>
        </view>
        <view class="listBox">
          <view class="listItem">
            <view class="flex-col">
              <text class="title-color-000 font-weight-bold">1000.00</text>
              <text class="text-color">2023-01-03 09:50:35</text>
            </view>
            <text class="title-price">￥1.00</text>
            <text class="title-price">1000</text>
          </view>
          <view class="listItem">
            <view class="flex-col">
              <text class="title-color-000 font-weight-bold">890.00</text>
              <text class="text-color">2023-01-03 09:50:35</text>
            </view>
            <text class="title-price">￥1.00</text>
            <text class="title-price">1000</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    onLoad
  } from "@dcloudio/uni-app";
  import {
    computed,
    reactive,
    ref,
    toRefs
  } from "vue"
  import {
    changePath,
    navigateBack
  } from '@/utils/navigate.js'
  import {
    tixianjilu
  } from '@/api/userWithdraw.js' //  * 前台-用户-提现 api

  onLoad((option) => {
    // console.log(option)
    type.value = option?.typeId ? parseInt(option.typeId) : 0
    GETtixianjilu()
  })

  // 当前页面的类型 提现记录(0) 兑换记录(1) 
  const type = ref(0)
  // 当前页面的类型名称
  const typeName = computed(() => {
    switch (type.value) {
      case 0:
        return '提现记录'
        break;
      case 1:
        return '兑换记录'
        break;
    }
  })



  // 传的参数
  let GETpageForm = reactive({
    page: 1, //页码
    limit: 20, // 限制数量
    total: null, //总数
    totalPage: null
  })
  let list = ref([]) //list 数据
  // 获取 提现记录数据
  const GETtixianjilu = async () => {
    try {
      const res = await tixianjilu(GETpageForm)
      // console.log(res);
      GETpageForm.limit = res.limit // 限制数量
      GETpageForm.limit = res.page,
        GETpageForm.limit = res.total,
        GETpageForm.totalPage = res.totalPage
      // console.log(res);
      //list 数据
      res.list.forEach(item => { // 第1层循环
        item.list.forEach(item1 => { // 第2层循环
          list.value.push(item1) //追加进去 {} {}每一项数据
        })
      })
      // console.log(list.value);  
      // 处理status 的状态
      list.value.forEach(item => {
        switch (item.status) {
          case -1:
            item.status = '未通过'
            break;
          case 0:
            item.status = '审核中'
            break;
          case 1:
            item.status = '已提现'
            break;
        }
      })

    } catch (e) {
      console.log(e);
    }
  }
</script>

<style lang="scss" scoped>
  .bg {
    width: 100%;
    height: 100vh;
    background-color: #FBFBFB;
    position: relative;

    .title-color-000 {
      font-size: 28rpx;
      font-weight: 400;
      color: #0F0F0F;
    }

    .title-price {
      font-size: 32rpx;
      font-weight: bold;
      color: #010101;
    }

    .font-weight-bold {
      font-weight: bold;
    }

    .title-color-red {
      color: #C50000;
    }

    .text-color {
      color: #929292;
      margin-top: 10rpx;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
    }

    .flex-col-end {
      align-items: flex-end;
    }

    .listItem {
      width: 100%;
      // height: 102rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 16rpx;
      margin-bottom: 24rpx;
      padding: 16rpx 24rpx 16rpx 32rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20rpx;
      font-weight: 400;
      color: #010101;
    }

    .titles {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 28rpx;
      font-weight: 400;
      color: #0F0F0F;
    }

    .listBox {
      padding: 0 4rpx;
      margin-top: 26rpx;
    }

    .ctxBox {
      margin-top: 22rpx;
    }

    .context {
      width: 100%;
      background-color: #FBFBFB;
      padding: 0 28rpx;
    }

    .tabs {
      width: 100%;
      height: 176rpx;
      padding: 20rpx 32rpx;
      background-color: #1C6732;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;

      .title {
        font-size: 32rpx;
        font-weight: 800;
        color: #FFFFFF;
        margin-bottom: 6rpx;
      }

      .arrowsBg {
        // transform: rotate(180deg);
        width: 25rpx;
        height: 48rpx;
        background: url("@/static/img/arrows.png") 100% no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
