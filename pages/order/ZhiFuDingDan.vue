<template>
	<view class="bg">
		<view class="popup" v-show="popupShow">
			<u-icon class="close" name="close" @click="close"></u-icon>
			<h3 class="h3">请输入支付密码</h3>
			<view class="money">
				<text>付款</text>
				<text class="money_2">￥{{payCount}}</text>
			</view>
			<hr style="width: 90%;margin: 0 auto 20rpx;border:0px;border-bottom:1px solid #efefef;">
			<u-message-input @click="getKey" :focus="true" maxlength="6" v-model="valueInput" :dot-fill="true" :breathe="true"></u-message-input>
			<u-keyboard mode="number" @confirm="confirmKey" @change="valChange" @backspace="backspace" :show-tips="false" :safe-area-inset-bottom="true" v-model="keyShow" z-index="9999" :mask="false"></u-keyboard>
		</view>
		<view class="mask" v-show="maskShow" @click="back"></view>

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
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		createOrder,
		payPayment
	} from "@/api/order.js"
	import {
		changePath
	} from "@/utils/navigate.js"

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
		return Number(oldPre.value + freightFee.value).toFixed(2)
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
				payChannel: 'vouchers',
				payType: 'vouchers',
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
		console.log(orderFrom);
	}

	let popupShow = ref(false)
	let maskShow = ref(false)
	let keyShow = ref(false)
	let valueInput = ref('') // 输入的密码
	
	const close = () =>{
		popupShow.value = false
		maskShow.value = false
		keyShow.value = false
	}
	const getKey = () =>{
		keyShow.value = true
	}
	// 键盘输入
	const valChange = (val) =>{
		if(valueInput.value.length < 6){
			valueInput.value += val
			return false
		}
	}
	// 退格键被点击
	const backspace = () =>{
		valueInput.value = valueInput.value.slice(0, -1)
	}
	// 键盘确定
	const confirmKey = async () =>{
		if(valueInput.value.length < 6){
			uni.$showMsg('请输入密码','error')
			return false
		}
		try {
			const {
				orderNo
			} = await createOrder(orderFrom);
			const {
				tradeAppRequestBody
			} = await payPayment({
				orderNo,
				payChannel: orderFrom.payChannel,
				payType: orderFrom.payType,
				payPassword: valueInput.value
			});
			uni.showLoading({
				title: "支付成功"
			});
			setTimeout(function() {
				uni.hideLoading();
				changePath("/pages/order/order", {
					typeId: 1
				});
			}, 2000);
			console.log("tradeAppRequestBody: ",tradeAppRequestBody);
		} catch (err) {
			uni.showToast({
				title: err,
				icon: "error"
			});
		}
	}
	const back = ()=>{
		popupShow.value = false
		maskShow.value = false
		keyShow.value = false
	}
	
	const clickBuy = async () => {
		if(orderFrom.payType == "vouchers"){
			popupShow.value = true
			maskShow.value = true
			keyShow.value = true
			return false
		}
		try {
			const {
				orderNo
			} = await createOrder(orderFrom);
			const {
				tradeAppRequestBody
			} = await payPayment({
				orderNo,
				payChannel: orderFrom.payChannel,
				payType: orderFrom.payType
			});
			if (tradeAppRequestBody) {
				await uni.requestPayment({
					provider: orderFrom.payType,
					orderInfo: tradeAppRequestBody,
					success: (res) => {
						console.log(res);
						uni.showLoading({
							title: "支付成功"
						});
						setTimeout(function() {
							uni.hideLoading();
							changePath("/pages/order/order", {
								typeId: 1
							});
						}, 2000);
					},
					fail: () => {
						uni.showToast({
							title: "支付失败",
							icon: "error"
						});
						uni.navigateBack({
							delta: 2
						});
					},
				});
			}
		} catch (err) {
			uni.showToast({
				title: err,
				icon: "error"
			});
		}
	};
</script>
<style lang="scss" scoped>
	.bg {
		position: relative;
		width: 100%;
		background: #24743C;
		height: 176rpx;
		.mask {
			z-index: 10;
			position: fixed;
			width: 100%;
			height: 100%;
			top:0;
			left: 0;
			background-color: rgba(0, 0, 0, 1);
			opacity: 0.51;
			overflow: hidden;
		}
		.popup{
			position: fixed;
			bottom: 0;
			// margin-top: 100%;
			// transform: translateX(-50%);
			z-index: 999;
			width: 100%;
			height: 70vh;
			border-top-right-radius: 15rpx;
			border-top-left-radius: 15rpx;
			background-color: #FFFFFF;
			
			.close{
				z-index: 999;
				width: 100%;
				position: absolute;
				top: 5%;
				left: 2%;
			}
			.h3{
				width: 100%;
				text-align: center;
				position: absolute;
				top: 5%;
			}
			.money{
				width: 100%;
				height: 150rpx;
				// border: solid red;
				margin-top: 20%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.money_2{
					font-size: 60rpx;
					font-weight: bold;
				}
			}
		}
		.payType {
			padding: 14rpx 30rpx;
			margin: 26rpx auto;
			width: 688rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
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

		.box-box-msg {
			position: absolute;
			top: 88rpx;
			display: flex;
			flex-direction: column;

			text {
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
