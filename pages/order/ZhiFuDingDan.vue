<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">支付订单</view>
    </view>

    <!-- 第一个卡片盒子 -->
    <view class="BOX-1">
      <view class="item">
        <text style="text-align: center;
    width: 100%;
height: 34rpx;
font-size: 24rpx;
font-weight: bold;
color: #000000;
line-height: 24rpx;">实付金额</text>
        <text style="
    text-align: center;
    width: 100%;
height: 66rpx;
font-size: 48rpx;
font-weight: bold;
color: #E30000;
line-height: 24rpx;
        padding-top:10rpx;
">￥{{payCount}}</text>
        <text style="
    text-align: center;
  width: 100%;
height: 28rpx;
font-size: 20rpx;
font-weight: 400;
color: #010101;
    padding-top:10rpx;
line-height: 24rpx;">商品价格￥{{oldPre}}+运费￥{{freightFee}}</text>
      </view>
    </view>
    <!-- 第一个卡片盒子 -->

    <!-- 第2个卡片盒子 -->

	<view class="payType">
		<text style="color: #8F8F8F;">选择支付方式</text>
		<view class="payList">
			<view class="palItem" v-for="item in list" :key="item.id" @click="handlePay(item)">
				<view class="iconAndName">
					<image class="iconBg" :src="item.bgIcon" mode=""></image>
					<text>{{item.name}}</text>
				</view>
				<view class="select" :class="[bgIndexId === item.id ? 'selectActivate' : '']"></view>
			</view>
		</view>
	</view>

    <!-- 第2个卡片盒子 -->

    <!-- 保存按钮 -->
    <view class="BOX-bottom1" @click="clickBuy">
      <text>确定支付</text>
    </view>
    <!-- 保存按钮 -->
  </view>
</template>
<script setup>
  import {
	  computed,
    reactive,
    ref,
    toRefs
  } from "vue";
	import { onLoad } from "@dcloudio/uni-app";
	import {createOrder,payPayment} from "@/api/order.js"
	import {changePath} from "@/utils/navigate.js"
	
	onLoad((option) => {
		// console.log(option);
		preOrderNo.value = option?.preOrderNo
		oldPre.value = +(option?.countNum)
		freightFee.value = +(option?.freightFee)
		// 默认执行一次，让函数初始化
		handlePay({})
	})
	
  // 返回上一级
  function navigateBack() {
    uni.navigateBack({
      delta: 1
    })
  }
  // 商品未加上运费的价格
  const oldPre = ref(0)
  // 运费
  const freightFee = ref(0)
  // 总计
  const payCount = computed(() => {
	  return oldPre.value + freightFee.value
  })
  // 订单号
  const preOrderNo = ref(null)
  // 单选按钮 
  const bgIndexId = ref(1) //默认选中
  const list = ref(
    [{
		id: 1,
        name: '支付宝',
		payChannel: 'appAlipay',
		payType: 'alipay',
		bgIcon: '../../static/img/AlipayActivate.png'
      },
      {
		id: 2,
        name: '微信支付',
		payChannel: 'appWeixin',
		payType: 'wxpay',
		bgIcon: '../../static/img/WeChatactivAte.png'
      },
      {
		id: 3,
        name: '兑换卷加管理积分',
		payChannel: 'bank',
		payType: '',
		bgIcon: '../../static/img/ooooooooooo.png'
      }
    ]
  )
  const orderFrom = reactive({})
  const handlePay = ({
	  id = 1,
	  name = "支付宝",
	  payChannel = 'appAlipay',
	  payType = 'alipay'
	  }) => {
	  bgIndexId.value = id
	  orderFrom.preOrderNo = preOrderNo.value
	  orderFrom.payChannel = payChannel
	  orderFrom.payType = payType
	  orderFrom.mark = ''
  }
  const clickBuy = () => {
	  createOrder(orderFrom).then(res => {
			payPayment({
				'orderNo': res.orderNo,
				'payChannel': orderFrom.payChannel,
				'payType': orderFrom.payType
			}).then(res => {
				// console.log(res);
				if(res.tradeAppRequestBody != "")
				uni.requestPayment({
					provider: orderFrom.payType,
					orderInfo: res.tradeAppRequestBody,
					success: (res) => {
						console.log(res);
						uni.showLoading({
							title: "支付成功"
						})
						setTimeout(function () {
							uni.hideLoading();
							changePath("/pages/order/order",{typeId: 1})
						}, 2000);
					},
					fail: () => {
						uni.showToast({
							title: "支付失败",
							icon:"error"
						})
						// 返回待支付页面
						uni.navigateBack({
							delta: 2
						})
					}
				})
			})
			
	  	})
  }

</script>
<style lang="scss" scoped>
  .bg {
    position: relative;
    width: 100%;
    background: #24743C;
    height: 176rpx;
	.payType {
		padding: 14rpx 30rpx;
		margin: 26rpx auto;
		width: 688rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 20rpx;
		font-size: 28rpx;
		font-weight: 400;
		.palItem {
			margin-bottom: 32rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.iconAndName {
				display: flex;
				align-items: center;
			}
			.iconBg {
				margin-right: 30rpx;
				width: 40rpx;
				height: 40rpx;
			}
			.select {
				width: 30rpx;
				height: 30rpx;
				background: #FFFFFF;
				border-radius: 50%;
				border: 2rpx solid #BEBEBE;
			}
			.selectActivate {
				width: 32rpx;
				height: 32rpx;
				background: url("@/static/img/successArrow.png") 100% no-repeat;
				background-size: 100% 100%;
				border: 0rpx solid #24743C;
			}
		}
		.payList {
			margin-top: 34rpx;
		}
	}
.box-box-msg{
  position: absolute;
  top :88rpx;
  display: flex;
  flex-direction: column;
text{
  padding: 10rpx 10rpx;
  font-weight: 400;
  color: #000000;
  // line-height: 24rpx
}
}

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


    .BOX-1 {
      margin: 44rpx 0 0 34rpx;
      width: 684rpx;
      height: 238rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0, 0, 0, 0.12);
      border-radius: 20rpx 20rpx 20rpx 20rpx;
      opacity: 1;
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;

      // 
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      }

    }

    .Box-2 {
      position: relative;
      margin: 26rpx 0 0 32rpx;
      width: 688rpx;
      height: 308rpx;
      background: #FFFFFF;
      box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
      border-radius: 20rpx 20rpx 20rpx 20rpx;
      opacity: 1;

      .text {
        padding: 0 0 0 30rpx;
        position: absolute;
        top: 14rpx;
        // width: 164rpx;
        height: 40rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #8F8F8F;
        line-height: 24rpx;
      }

      .radio {
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: space-between;

        margin-left: 100rpx;
        // margin-bottom:110rpx;
        padding-top: 88rpx;
        font-weight: 400;

      }
    }

    .BOX-bottom1 {
      // margin-top: 662rpx;
      position: fixed;
      bottom: 12rpx;
      left: 32rpx;
      width: 686rpx;
      height: 80rpx;
      background: #24743C;
      border-radius: 16rpx 16rpx 16rpx 16rpx;
      opacity: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      text {
        font-weight: 400;
        color: #FFFFFF;
        line-height: 40rpx;
        // width: 110rpx;
        height: 40rpx;
        font-size: 28rpx;
      }
    }


    .tuBiao-Box {
      position: absolute;
      top: 562rpx;
      left: 70rpx;

      .item1 {
        width: 39rpx;
        height: 39rpx;
        background: #5A9EF7;
        background: url('../../static/img/AlipayActivate.png') 100% no-repeat;
        background-size: 100% 100%;

      }

      .item2 {
        margin-top: 15rpx;
        margin-bottom: 15rpx;
        width: 39rpx;
        height: 38rpx;
        background: #61AF4A;

        background: url('../../static/img/WeChatactivAte.png') 100% no-repeat;
        background-size: 100% 100%;
      }

      .item3 {
        width: 39rpx;
        height: 33rpx;
        background: #F4B12A;
        background: url('../../static/img/ooooooooooo.png') 100% no-repeat;
        background-size: 100% 100%;
      }

    }

  }
</style>
