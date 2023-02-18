<template>
  <view class="bg">
    <view class="tabs">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">{{typeName}}</view>
      <view class=""></view>
    </view>
    <view class="box">
      <view class="choiceList" v-if="type === 0">
        <view class="choiceListItem">
          <view class="top">
            <text>联创分红</text>
            <text class="price">-30000.00</text>
          </view>
          <view class="bottom">
            <text>2023-01-03 09:50:35</text>
            <text>余额：14000.00</text>
          </view>
        </view>
      </view>
      <view class="choiceList" v-if="type === 1">
        <view class="choiceListItem">
          <view class="top">
            <text>购买商品</text>
            <text class="price">-30000.00</text>
          </view>
          <view class="bottom">
            <text>2023-01-03 09:50:35</text>
            <text>余额：14000.00</text>
          </view>
        </view>
      </view>
      <view class="choiceList" v-if="type === 2">
        <!-- for  -->
        <view class="choiceListItem" v-for="(item,index) in list">
          <view class="top">
            <text>{{item.title}}</text>
            <text class="price">{{item.num}}</text>
          </view>
          <view class="bottom">
            <text>{{item.createTime}}</text>
            <text>余额:{{item.balance}}</text>
          </view>
        </view>
      </view>
      <view class="choiceList" v-if="type === 3">
        <view class="choiceListItem">
          <view class="top">
            <text>能量值-买单</text>
            <text class="price">+5000</text>
          </view>
          <view class="bottom">
            <text>2023-01-03 09:50:35</text>
            <text>余额：14000.00</text>
          </view>
        </view>
      </view>
      <view class="choiceList" v-if="type === 4">
        <view class="choiceListItem">
          <view class="top">
            <text>能量值-买单</text>
            <text class="price">+5000</text>
          </view>
          <view class="bottom">
            <text>2023-01-03 09:50:35</text>
            <text>余额：14000.00</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    yuehuanjuan
  } from '@/api/userRecordMingxi.js' //   导入api
  import {
    computed,
    ref,
    reactive
  } from "vue";
  import {
    onLoad
  } from "@dcloudio/uni-app";

  onLoad((option) => {
    // console.log(option)
    type.value = option?.typeId ? parseInt(option.typeId) : 0
    GETyuehuanjuan()
  })
  const type = ref(null)
  // type值对应的页面 管理积分流水(0) 购物积分流水(1) 兑换券流水(2) 能量值流水(3) 仓单流水(4)
  const typeName = computed(() => {
    switch (type.value) {
      case 0:
        return '管理积分流水'
        break;
      case 1:
        return '购物积分流水'
        break;
      case 2:
        return '兑换券流水'
        break;
      case 3:
        return '能量值流水'
        break;
      case 4:
        return '仓单流水'
        break;
    }
  })
  // 返回上一级
  const navigateBack = () => {
    uni.navigateBack({
      delta: 1
    })
  }





  // 传的参数
  let GETpageForm = reactive({
    page: 1, //页码
    limit: 20, // 限制数量
    total: null, //总数
    totalPage: null
  })
  let list = ref([]) //list 数据

  // 获取 提现记录数据
  const GETyuehuanjuan = async () => {
    try {
      const res = await yuehuanjuan(GETpageForm)
      // console.log(res);
      GETpageForm.page = res.page, //页码
        GETpageForm.limit = res.limit, // 限制数量
        GETpageForm.total = res.total,
        GETpageForm.totalPage = res.totalPage
      // console.log(res);
      //list 数据
      res.list.forEach(item => {
        list.value.push(item) //追加进去 {} {}每一项数据
      })
      console.log(list.value)

      // 处理 list 下的type 展示
      // let num = ref(null)
      list.value.forEach(item => {
        switch (item.type) {
          case 1:
            item.num = '+' + item.quantity
            break;
          case 2:
            item.num = '-' + item.quantity
            break;
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
</script>

<style lang="scss" scoped>
  .bg {
    width: 100%;
    height: 100vh;
    background-color: #FBFBFB;
    position: relative;

    .box {
      width: 100%;
      background-color: #FBFBFB;
      padding: 0 32rpx;
    }
  }

  .choiceList {
    width: 100%;
    margin-top: 24rpx;
  }

  .choiceListItem {
    margin: 0 auto 26rpx;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
    border-radius: 16rpx;
    padding: 10rpx 24rpx 16rpx 32rpx;

    .bottom {
      margin-top: 10rpx;
      font-size: 20rpx;
      font-weight: 400;
      color: #929292;
      display: flex;
      justify-content: space-between;
    }

    .top {
      font-size: 28rpx;
      font-weight: 400;
      color: #0F0F0F;
      display: flex;
      justify-content: space-between;

      .price {
        font-weight: bold;
      }
    }
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
      color: #F5F5F5;
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
</style>
