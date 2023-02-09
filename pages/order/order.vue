<template>
  <view class="bg">
    <view class="tabs">
      <view
        class="arrowsBg"
        @click="navigateBack"
      ></view>
      <view class="title">我的订单</view>
      <view class=""></view>
    </view>
    <view class="box">
      <view class="tabBox">
        <u-tabs
          height="80"
          bg-color="#FBFBFB"
          duration="0.3"
          gutter="20"
          active-color="#0A0A0A"
          bar-width="60"
          font-size="28"
          inactive-color="#676767"
          bar-height="8"
          :bar-style="{
						'background-color': '#1FA848',
						'text-align': 'center',
						'margin': '0rpx -10rpx',
					}"
          :active-item-style="{
						'font-size': '32rpx',
						'color': '#0A0A0A',
						'font-weight': 'bold'
					}"
          :list="tabList"
          v-model="type"
          @change="changeTabs"
        ></u-tabs>
      </view>
      <view
        class="orderList"
        v-show="type === 0"
      >
        <view class="orderListItem">
          <view class="ItemTop">
            <text>订单号：2302310251121221312_0</text>
            <text class="redBg">代发货</text>
          </view>
          <view class="ItemMiddle">
            <image
              src="../../static/img/clothing.png"
              alt=""
            />
            <view class="context">
              <text class="title">美特斯邦威羽绒服保暖冬季防风保暖特斯邦威羽绒服保暖冬季防风保暖</text>
              <view class="price">
                <text class="redBg">￥30000.00</text>
                <text class="miniCount">x2</text>
              </view>
              <view class="count">
                <text>共计1件商品</text>
                <text style="color: #CECECE; margin-left: 22rpx;">尺码：L</text>
              </view>
            </view>
          </view>
          <view class="ItemBottom">
            <text>【种树专区】</text>
          </view>
        </view>
      </view>
      <view
        class="orderList"
        v-show="type === 1"
      >
        <view class="orderListItem">
          <view class="ItemTop">
            <text>订单号：2302310251121221312_0</text>
            <text class="redBg">代发货</text>
          </view>
          <view class="ItemMiddle">
            <image
              src="../../static/img/clothing.png"
              alt=""
            />
            <view class="context">
              <text class="title">美特斯邦威羽绒服保暖冬季防风保暖特斯邦威羽绒服保暖冬季防风保暖</text>
              <view class="price">
                <text class="redBg">￥30000.00</text>
                <text class="miniCount">x2</text>
              </view>
              <view class="count">
                <text>共计1件商品</text>
                <text style="color: #CECECE; margin-left: 22rpx;">尺码：L</text>
              </view>
            </view>
          </view>
          <view class="ItemBottom">
            <text>【种树专区】</text>
            <view class="btn">
              <view class="btnItem1">查看物流</view>
              <view class="btnItem2">待发货</view>
            </view>
          </view>
        </view>
      </view>
      <view
        class="orderList"
        v-show="type === 2"
      >
        <view class="orderListItem">
          <view class="ItemTop">
            <text>订单号：2302310251121221312_0</text>
            <text class="redBg">待收货</text>
          </view>
          <view class="ItemMiddle">
            <image
              src="../../static/img/clothing.png"
              alt=""
            />
            <view class="context">
              <text class="title">美特斯邦威羽绒服保暖冬季防风保暖特斯邦威羽绒服保暖冬季防风保暖</text>
              <view class="price">
                <text class="redBg">￥30000.00</text>
                <text class="miniCount">x2</text>
              </view>
              <view class="count">
                <text>共计1件商品</text>
                <text style="color: #CECECE; margin-left: 22rpx;">尺码：L</text>
              </view>
            </view>
          </view>
          <view class="ItemBottom">
            <text>【种树专区】</text>
            <view class="btn">
              <view class="btnItem2">确认收货</view>
            </view>
          </view>
        </view>
      </view>
      <view
        class="orderList"
        v-show="type === 3"
      >
        <view class="orderListItem">
          <view class="ItemTop">
            <text>订单号：2302310251121221312_0</text>
            <text class="redBg">已完成</text>
          </view>
          <view class="ItemMiddle">
            <image
              src="../../static/img/clothing.png"
              alt=""
            />
            <view class="context">
              <text class="title">美特斯邦威羽绒服保暖冬季防风保暖特斯邦威羽绒服保暖冬季防风保暖</text>
              <view class="price">
                <text class="redBg">￥30000.00</text>
                <text class="miniCount">x2</text>
              </view>
              <view class="count">
                <text>共计1件商品</text>
                <text style="color: #CECECE; margin-left: 22rpx;">尺码：L</text>
              </view>
            </view>
          </view>
          <view class="ItemBottom">
            <text>【种树专区】</text>
          </view>
        </view>
      </view>
      <view
        class="orderList"
        v-show="type === 4"
      >
        <view class="orderListItem">
          <view class="ItemTop">
            <text>订单号：2302310251121221312_0</text>
            <text class="redBg">已提货</text>
          </view>
          <view class="ItemMiddle">
            <image
              src="../../static/img/clothing.png"
              alt=""
            />
            <view class="context">
              <text class="title">美特斯邦威羽绒服保暖冬季防风保暖特斯邦威羽绒服保暖冬季防风保暖</text>
              <view class="price">
                <text class="redBg">￥30000.00</text>
                <text class="miniCount">x2</text>
              </view>
              <view class="count">
                <text>共计1件商品</text>
                <text style="color: #CECECE; margin-left: 22rpx;">尺码：L</text>
              </view>
            </view>
          </view>
          <view class="ItemBottom">
            <text>【种树专区】</text>
            <view class="btn">
              <view
                class="btnItem2"
                @click="openShow"
              >取消订单</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="popupBox">
      <u-popup
        v-model="orderIsShow"
        mode="bottom"
        border-radius="20"
      >
        <view class="popupBoxList">
          <view class="title">取消订单</view>
          <view class="subheading">请选择订单原因</view>
          <view class="checkboxList">
            <u-checkbox-group
              class="checkboxListItem"
              size="29"
              v-for="item in checkList"
              :key="item.name"
            >
				{{item.name}}
              <u-checkbox
                class="checkbox"
                @change="checkboxChange"
                shape="circle"
                active-color="#24743C"
                v-model="item.isShow"
                :name="item.name"
              ></u-checkbox>
            </u-checkbox-group>
          </view>
          <view class="btn">
            <view
              class="btnChild"
              @click="changeShow(1)"
            >暂不取消</view>
            <view
              class="btnChild"
              @click="changeShow(2)"
            >确定取消</view>
          </view>
        </view>
      </u-popup>
    </view>
  </view>
</template>

<script setup>
import {
  reactive,
  ref,
  toRefs
} from "vue";
import {
  onLoad
} from "@dcloudio/uni-app";
onLoad((option) => {
  // console.log(option)
  type.value = option?.typeId ? parseInt(option.typeId) : 0
})
const checkList = ref([
  {
    isShow: false,
    name: '价格有点贵'
  },
  {
    isShow: false,
    name: '收货地址拍错'
  },
  {
    isShow: false,
    name: '商家支持不了银行卡'
  },
  {
    isShow: false,
    name: '暂时不需要了'
  },
  {
    isShow: false,
    name: '其他'
  }
])
const checkboxChange = (index) => {
  // console.log(index);
}
const data = reactive({
  tabList: [{
    name: '全部订单'
  },
  {
    name: '待发货'
  },
  {
    name: '待收货'
  },
  {
    name: '已完成'
  },
  {
    name: '自提订单'
  },
  ],
  // 全部订单(0) 待发货(1) 待收货(2) 已完成(3) 自提订单(4)
  type: 0,
  orderIsShow: false,
  orderCause: []
})
const {
  tabList,
  type,
  orderIsShow,
  orderCause
} = toRefs(data)
// 点击取消订单
const openShow = () => {
  orderIsShow.value = true
}
// 取消订单的弹窗内容按钮
const changeShow = (id) => {
  // id为1是暂不取消  2是确定取消
  if (id === 1) {
    orderIsShow.value = false
    checkList.value.forEach(item => item.isShow = false)
  } else {
    orderIsShow.value = false
    orderCause.value = checkList.value.filter(item => item.isShow)
    console.log(orderCause.value);
    checkList.value.forEach(item => item.isShow = false)
  }
}
// 用户点击tabs后触发
const changeTabs = (index) => {
  type.value = index
}
// 返回上一级
const navigateBack = () => {
  uni.navigateBack({
    delta: 1
  })
}

	
	const changePath = (path) => {
		uni.navigateTo({
			url: path
		})
	}
</script>

<style lang="scss" scoped>
.popupBoxList {
  width: 100%;
  padding: 50rpx 32rpx;
  .btn {
    padding: 0 76rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    font-weight: 400;
    color: #ffffff;
    .btnChild {
      width: 262rpx;
      height: 72rpx;
      line-height: 72rpx;
      text-align: center;
      background: #24743c;
      border-radius: 16rpx;
    }
  }
  .checkboxList {
    width: 100%;
    font-size: 28rpx;
    font-weight: 400;
    color: #202020;
    .checkboxListItem {
      width: 688rpx;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      position: relative;
      margin-bottom: 52rpx;
      .checkbox {
        position: absolute;
        right: 0;
      }
    }
  }
  .subheading {
    padding: 60rpx 0;
    font-size: 28rpx;
    font-weight: 400;
    color: #919191;
  }
  .title {
    font-size: 32rpx;
    font-weight: bold;
    color: #000000;
    text-align: center;
  }
}
.bg {
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  position: relative;

  .box {
    width: 100%;
    background-color: #fbfbfb;
    padding: 0 32rpx;
  }

  .orderList {
    margin-top: 30rpx;
  }

  .orderListItem {
    width: 100%;
    // height: 338rpx;
    padding: 0 30rpx;
    background: #ffffff;
    box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0, 0, 0, 0.12);
    border-radius: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .ItemBottom {
      width: 100%;
      height: 74rpx;
      font-size: 20rpx;
      font-weight: 400;
      color: #24743c;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn {
        display: flex;
        align-items: center;

        .btnItem1 {
          width: 126rpx;
          height: 48rpx;
          border-radius: 24rpx;
          color: #8e8e8e;
          text-align: center;
          line-height: 48rpx;
          margin-right: 6rpx;
          border: 2rpx solid #808080;
        }

        .btnItem2 {
          width: 126rpx;
          height: 48rpx;
          border-radius: 24rpx;
          color: #ffffff;
          text-align: center;
          line-height: 48rpx;
          background: #f51d1d;
          border: 2rpx solid #f51d1d;
        }
      }
    }

    .ItemMiddle {
      display: flex;
      align-items: center;
      padding: 30rpx 0 14rpx 0;
      border-bottom: 2rpx solid rgba(112, 112, 112, 0.06);

      .context {
        width: 100%;
        margin-left: 58rpx;
        font-size: 28rpx;
        font-weight: bold;
        color: #000000;
        overflow: hidden;
        text-overflow: ellipsis;

        .count {
          font-size: 20rpx;
          font-weight: 400;
          color: #000000;
        }

        .price {
          width: 100%;
          padding: 12rpx 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .miniCount {
          font-size: 20rpx;
          font-weight: 400;
          color: #a8a8a8;
        }

        .title {
          width: 100%;
          white-space: nowrap;
        }
      }

      image {
        width: 138rpx;
        height: 138rpx;
      }
    }

    .ItemTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 24rpx 0 14rpx 0;
      font-size: 20rpx;
      font-weight: 400;
      color: #3a3a3a;
      border-bottom: 2rpx solid rgba(112, 112, 112, 0.06);
    }
  }
}

.redBg {
  font-size: 28rpx;
  font-weight: bold;
  color: #ff0000;
}

.tabBox {
  width: 100%;
}

.tabs {
  width: 100%;
  height: 176rpx;
  padding: 20rpx 32rpx;
  background-color: #1c6732;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .title {
    font-size: 32rpx;
    font-weight: 800;
    color: #f5f5f5;
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
