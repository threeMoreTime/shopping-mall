<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">提现申请</view>
			<view class=""></view>
		</view>
		<view class="context">
			<view class="payWay">
				<view class="payWayItem" v-for="item in classStyle" :key="item.id" @click="changeClass(item.id)">
					<view :class="['itemBg' + item.id,classIndex === item.id ? 'itemActivateBg' + item.id : '']"></view>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="ctxBox" v-show="classIndex === 1">
				<u-field
					v-model="formData.cardholder"
					label="持卡人"
					placeholder="请输入持卡人姓名"
					label-width="150"
				>
				</u-field>
				<u-field
					v-model="formData.cardNumber"
					label="卡号"
					placeholder="请填写卡号"
					label-width="150"
				>
				</u-field>
				<u-field
					v-model="formData.bank"
					label="银行"
					placeholder="请选择银行"
					:disabled="true"
					@click="clickItem"
					label-width="150"
				>
				</u-field>
				<!-- confirm事件改变formData.bank的值 -->
				<u-select :list="bankList" v-model="bankShow" @confirm="changeBank"></u-select>
				<u-field
					v-model="formData.bankName"
					label="开户行名称"
					placeholder="请填写开户行名称"
					label-width="150"
				>
				</u-field>
				<u-field
					v-model="formData.balance"
					label="提现"
					placeholder="请输入提现金额"
					label-width="150"
				>
				</u-field>
				<view class="balance">当前可提现金额：0.00</view>
			</view>
			<view class="ctxBox" v-show="classIndex === 2">
				<u-field
					v-model="formData.cardholder"
					label="账号"
					placeholder="请填写您的微信账号"
					label-width="150"
				>
				</u-field>
				<u-field
					v-model="formData.cardNumber"
					label="提现"
					placeholder="请输入提现金额"
					label-width="150"
				>
				</u-field>
				<view class="balance">当前可提现金额：0.00</view>
			</view>
			<view class="ctxBox" v-show="classIndex === 3">
				<u-field
					v-model="formData.cardholder"
					label="账号"
					placeholder="请填写您的支付宝账号"
					label-width="150"
				>
				</u-field>
				<u-field
					v-model="formData.cardNumber"
					label="提现"
					placeholder="请输入提现金额"
					label-width="150"
				>
				</u-field>
				<view class="balance">当前可提现金额：0.00</view>
			</view>
			<view class="btn">提现</view>
			<view class="rule">
				<text class="ruleTitle">规则</text>
				<text class="texts">最低提现1元</text>
				<text class="texts">提现申请后管理员会尽快审核打款，请耐心等待。</text>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from "vue";
	const formData = reactive({
		cardholder: '',
		cardNumber: null,
		bank: '',
		bankName: '',
		balance: null
	})
	const classStyle = ref([
		{id: 1,name: '银行卡'},
		{id: 2,name: '微信'},
		{id: 3,name: '支付宝'},
	])
	const classIndex = ref(1)
	const bankShow = ref(false)
	const bankList = ref([
		{
			value: '1',
			label: '中国银行'
		},
		{
			value: '2',
			label: '农业银行'
		}
	])
	// 打开选择银行的下拉列表
	const clickItem = () => {
		bankShow.value = true
	}
	// 改变银行
	const changeBank = (list) => {
		formData.bank = list[0].label
	}
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 改变支付方式 银行卡(1) 微信(2) 支付宝(3)
	const changeClass = (index) => {
		classIndex.value = index
	}
</script>

<style lang="scss" scoped>
.bg {
	width: 100%;
	height: 100vh;
	background-color: #FBFBFB;
	position: relative;
	.ruleTitle {
		font-size: 28rpx;
		font-weight: 400;
		color: #000000;
		margin-bottom: 16rpx;
	}
	.rule {
		margin-top: 44rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		.texts {
			font-size: 20rpx;
			font-weight: 400;
			color: #A8A8A8;
			margin-bottom: 2rpx;
		}
	}
	.btn {
		margin-top: 64rpx;
		width: 686rpx;
		height: 72rpx;
		line-height: 72rpx;
		background: #24743C;
		border-radius: 16rpx;
		text-align: center;
		font-size: 28rpx;
		font-weight: 400;
		color: #FFFFFF;
	}
	.balance {
		width: 100%;
		font-size: 20rpx;
		font-weight: 400;
		color: #A8A8A8;
		padding: 20rpx 0;
	}
	.ctxBox {
		margin-top: 24rpx;
		padding: 0 24rpx;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
		border-radius: 16rpx;
	}
	.payWay {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.itemBg1 {
			width: 48rpx;
			height: 48rpx;
			background: url("@/static/img/bankCard.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.itemBg2 {
			width: 48rpx;
			height: 48rpx;
			background: url("@/static/img/WeChat.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.itemBg3 {
			width: 48rpx;
			height: 48rpx;
			background: url("@/static/img/Alipay.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.itemActivateBg1 {
			width: 48rpx;
			height: 48rpx;
			background: url("@/static/img/bankCardActivate.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.itemActivateBg2 {
			width: 48rpx;
			height: 48rpx;
			background: url("@/static/img/WeChatactivAte.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.itemActivateBg3 {
			width: 48rpx;
			height: 48rpx;
			background: url("@/static/img/AlipayActivate.png") 100% no-repeat;
			background-size: 100% 100%;
		}
		.payWayItem {
			width: 220rpx;
			height: 112rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
			border-radius: 16rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 14rpx 0;
		}
	}
	.context {
		background-color: #FBFBFB;
		padding: 20rpx 32rpx;
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
