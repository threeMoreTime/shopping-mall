<template>
	<view class="bg" :class="[tabIndex === 2 ? 'bg2' : '']">
		<view class="box" :class="[tabIndex === 2 ? 'box2' : '']">
			<view class="boxTitle">
				<view class="boxTitleItem">
					<text class="title">{{data.trade_energy_pool}}</text>
					<text class="subheading">能量池</text>
				</view>
				<view class="boxTitleItem">
					<text class="title">{{data.trade_energy_num}}</text>
					<text class="subheading">能量值</text>
				</view>
				<view class="boxTitleItem" v-show="tabIndex == 0 || tabIndex == 1">
					<text class="title">￥{{data.trade_energy_price}}</text>
					<text class="subheading">价格</text>
				</view>
				<view class="boxTitleItem" v-show="tabIndex == 2">
					<view class="top" style="display: flex;flex-direction: column;align-items: center;">
						<text>￥{{data.highestPrice}}</text>
						<text>24H量价格/高</text>
					</view>
					<view class="bottom"
						style="display: flex;flex-direction: column;align-items: center;margin-top: 16rpx;">
						<text>￥{{data.lowestPrice}}</text>
						<text>24H量价格/低</text>
					</view>
				</view>
			</view>
			<view class="tabs">
				<view class="tabItem" :class="[tabIndex === index ? 'tabItemActivate' : '']"
					v-for="(item, index) in tabs" :key="item.id" @click="changleStyle(index)">
					<text>{{ item.name }}</text>
				</view>
			</view>
			<view class="buyList" v-show="tabIndex === 0">
				<view class="buyListItem" v-for="item in tradeList" :key="item.id">
					<view class="buyListItemTitle">
						<view class="ItemTitle">数量{{item.amount}}</view>
						<view class="ItemPrice">
							<text style="margin-right: 22rpx">单价￥{{item.price}}</text>
							<text>总价￥{{item.totalPrice}}</text>
						</view>
					</view>
					<view class="buyListItemBtn" @click="changeDeal({index: 0,typeName: 'addOrder',id: item.id})">买入
					</view>
				</view>
			</view>
			<view class="buyList" v-show="tabIndex === 1">
				<view class="buyListItem" v-for="item in tradeList" :key="item.id">
					<view class="buyListItemTitle">
						<view class="ItemTitle">数量{{item.amount}}</view>
						<view class="ItemPrice">
							<text style="margin-right: 22rpx;">单价￥{{item.price}}</text>
							<text>￥{{item.totalPrice}}</text>
						</view>
					</view>
					<view class="buyListItemBtn" @click="changeDeal({index: 1,typeName: 'addOrder',id: item.id})">卖出
					</view>
				</view>
			</view>
			<view class="market" v-if="tabIndex === 2">
				<view class="chartsTabs">
					<u-tabs height="70" bg-color="#272A30" inactive-color="#FFF" bar-height="8" gutter="45" :bar-style="{
              'background-color': '#1FA848',
              'color': '#3A2A08',
              'text-align': 'center',
              'margin': '0rpx 0rpx',
            }" :active-item-style="{
              color: '#1FA848',
            }" :list="tabList" v-model="current" @change="changeTabs"></u-tabs>
				</view>
				<view class="charts-box">
					<qiun-data-charts type="candle" :opts="opts" :chartData="chartData" :canvas2d="true"
						@getIndex="changeEhart" />
				</view>
				<view class="particulars">
					<view class="particularsLeft">
						<view class="particularsItem">
							<text>收</text>
							<text>{{data.closePrice}}</text>
						</view>
						<view class="particularsItem">
							<text>开</text>
							<text>{{data.openPrice}}</text>
						</view>
						<view class="particularsItem">
							<text>高</text>
							<text>{{data.highestPrice}}</text>
						</view>
						<view class="particularsItem">
							<text>低</text>
							<text>{{data.lowestPrice}}</text>
						</view>
					</view>
					<view class="borderBg"></view>
					<view class="particularsRight">
						<view class="particularsItem">
							<text>时间</text>
							<text>01-03 5:30</text>
						</view>
						<view class="particularsItem">
							<text>涨跌额</text>
							<text class="ItemBg">-0.000082</text>
						</view>
						<view class="particularsItem">
							<text>涨跌幅</text>
							<text class="ItemBg">30%</text>
						</view>
						<view class="particularsItem">
							<text>成交量</text>
							<text class="ItemBg">30%</text>
						</view>
					</view>
				</view>
				<view class="btnForflex">
					<view class="btnLeft btnBg" @click="changeDeal({index: 0,typeName: 'addTrade'})">买入</view>
					<view class="btnRight btnBg" @click="changeDeal({index: 1,typeName: 'addTrade'})">卖出</view>
				</view>
			</view>
			<u-popup v-model="isPopupShowByOrder" mode="bottom" border-radius="16">
				<view class="popClass">
					<view class="inpItem" v-show="showIndex === 0">
						<u-input v-model="dataForm.amount" type="number" height="88" placeholder="请输入交易数量" />
					</view>
					<view class="inpItem flex-space-between" v-show="showIndex === 1">
						<text class="Title">数量</text>
						<u-input v-model="dataForm.amount" type="number" height="88" input-align="right"
							placeholder="请输入挂单数量" />
					</view>
					<view class="inpItem">
						<u-input v-model="dataForm.payPassword" type="password" height="88" placeholder="请输入支付密码" />
					</view>
					<view class="btn" @click="hendlAddTrade('addOrder')">确认</view>
				</view>
			</u-popup>
			<u-popup v-model="isPopupShow" mode="bottom" border-radius="16">
				<view class="popClass">
					<view class="inpItem" v-show="showIndex === 0">
						<u-input v-model="dataForm.amount" type="number" height="88" placeholder="请输入交易数量" />
					</view>
					<view class="inpItem flex-space-between" v-show="showIndex === 1">
						<text class="Title">数量</text>
						<u-input v-model="dataForm.amount" type="number" height="88" input-align="right"
							placeholder="请输入挂单数量" />
					</view>
					<view class="inpItem">
						<view class="flex-space-between">
							<text class="Title">价格</text>
							<u-input v-model="dataForm.price" type="number" height="88" input-align="right"
								placeholder="请输入挂单价格" />
						</view>
						<view class="price">当前价格：￥{{data.trade_energy_price}}</view>
					</view>
					<view class="inpItem">
						<u-input v-model="dataForm.payPassword" type="password" height="88" placeholder="请输入支付密码" />
					</view>
					<view class="btn" @click="hendlAddTrade('addTrade')">确认</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
		toRefs,
		nextTick
	} from 'vue'
	import {
		onLoad,
		onReachBottom
	} from '@dcloudio/uni-app'
	import {
		energyConfig,
		findPrice,
		findTradeList,
		findKlinePeriod,
		findByPeriod,
		addTrade,
		addOrder
	} from "@/api/trade.js"
	import {
		info
	} from "@/api/user.js"
	import {
		userStore
	} from "@/store/index.js"
	const changeEhart = (params) => {
		console.log(params);
	}
	onMounted(() => {
		getenergyConfig()
	})
	onReachBottom(() => {
		tradeListFrom.limit += 5
		findTradeList(tradeListFrom).then(res => {
			tradeList.value = res.list
		})
	})
	const getenergyConfig = () => {
		energyConfig().then(({
			trade_energy_pool,
			trade_energy_num,
			trade_energy_price,
			trade_commission
		}) => {
			/* 	查询能量值配置
				trade_energy_pool->能量池
				trade_energy_num->能量值
				trade_energy_price->指导价格
				trade_commission->手续费
			*/
			data.trade_energy_pool = trade_energy_pool
			data.trade_energy_num = trade_energy_num
			data.trade_energy_price = trade_energy_price
			data.trade_commission = trade_commission
		})
		findPrice().then(({
			closePrice,
			highestPrice,
			lowestPrice,
			openPrice
		}) => {
			/*
				closePrice 关盘价格
				highestPrice 最高价格
				lowestPrice 最低价格
				openPrice 开盘价格
			*/
			data.closePrice = closePrice
			data.highestPrice = highestPrice
			data.lowestPrice = lowestPrice
			data.openPrice = openPrice
		})
		// 获取k线图的配置项
		findKlinePeriod().then(res => {
			let keyObj = Object.keys(res)
			for (let i = 0; i < keyObj.length; i++) {
				const key = keyObj[i];
				tabList.value.push({
					name: res[key],
					period: key
				})
			}
		})
	}

	const dataForm = reactive({
		type: '',
		amount: null,
		payPassword: null,
		price: null,
		tradeId: null
	})

	const data = reactive({
		tabList: [],
		current: 0,
		chartData: null,
		isPopupShow: false,
		showIndex: null,
		trade_energy_pool: null,
		trade_energy_num: null,
		trade_energy_price: null,
		trade_commission: null,
		closePrice: null,
		highestPrice: null,
		lowestPrice: null,
		openPrice: null,
		tradeList: [],
		isPopupShowByOrder: false
	})
	const {
		chartData,
		tabList,
		current,
		isPopupShow,
		showIndex,
		tradeList,
		isPopupShowByOrder
	} = toRefs(data)

	// 点击买入卖出时触发 index==0 买入  1卖出  需要调用函数时自传入
	const changeDeal = ({
		index = 0,
		typeName = 'addOrder',
		id = null
	}) => {
		typeName === 'addOrder' ? isPopupShowByOrder.value = true : isPopupShow.value = true
		showIndex.value = index
		dataForm.type = index === 0 ? 'BUY' : 'SELL'
		dataForm.tradeId = id
	}

	const hendlAddTrade = (keyword) => {
		if (keyword === 'addTrade') {
			addTrade(dataForm).then(res => {
				uni.showToast({
					title: "挂单成功",
					icon: "success"
				})
				isPopupShow.value = false
				info().then(res => {
					userStore().userInfo = res
				})
			}, () => {
				uni.showToast({
					title: "挂单失败",
					icon: "error"
				})
			})
		} else {
			addOrder(dataForm).then(res => {
				uni.showToast({
					title: "交易成功",
					icon: "success"
				})
				isPopupShowByOrder.value = false
				findTradeList(tradeListFrom).then(res => {
					tradeList.value = res.list
					info().then(res => {
						userStore().userInfo = res
					})
				})
			}, () => {
				uni.showToast({
					title: "交易失败",
					icon: "error"
				})
			})
		}
	}

	// 存放k线图的数据
	const chartsList = ref([])
	
	// 用户点击tabs后触发
	const changeTabs = (index = 0) => {
		findByPeriod({
			period: tabList.value[index].period
		}).then(res => {
			chartsList.value = res
			getServerData(chartsList.value)
		})
	}

	const opts = ref({
		color: ['#0AAB14'],
		padding: [40, 40, 0, 15],
		enableScroll: false,
		legend: {},
		fontColor: '#FFF',
		dataPointShape: false,
		dataLabel: true,
		yAxis: {
			scale: true,
			splitArea: {
				show: true
			}
		},
		extra: {
			candle: {
				average: {
					show: false
				}
			}
		}
	})

	function getServerData(arr) {
			let res = {
				xAxis: {
					data: arr.map(item => item.id)
				},
				categories: arr.map(item => item.id),
				series: [{
					name: 'k线图',
					data: arr.map(d => [d.openPrice, d.closePrice, d.highestPrice, d.lowestPrice])
					},
				],
			}
			chartData.value = res
	}

	const tabIndex = ref(0)
	const tabs = ref([{
			id: 1,
			name: '买入',
		},
		{
			id: 2,
			name: '卖出',
		},
		{
			id: 3,
			name: '行情',
		},
	])
	// 查询挂单数据表单
	const tradeListFrom = reactive({
		type: 'SELL',
		classify: 1,
		queryType: 'all',
		page: 1,
		limit: 20
	})

	function changleStyle(index) {
		tabIndex.value = index
		tradeList.value = []
		switch (tabIndex.value) {
			case 0:
				tradeListFrom.type = "SELL"
				break;
			case 1:
				tradeListFrom.type = "BUY"
				break
		}
		if (tabIndex.value == 0 || tabIndex.value == 1) {
			// 查询挂单数据
			findTradeList(tradeListFrom).then(res => {
				tradeList.value = res.list
			})
		}
		if (tabIndex.value == 2) {
			findByPeriod({
				period: tabList.value[0].period
			}).then(res => {
				chartsList.value = res
				getServerData(chartsList.value)
			})
		}

	}
	// 默认调用一次获取数据
	changleStyle(0)
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #fbfbfb;
		position: relative;

		.box {
			width: 100%;
			background-color: #fbfbfb;

			.popClass {
				padding: 42rpx 32rpx;

				.price {
					padding: 12rpx 0 18rpx;
					text-align: right;
					font-size: 20rpx;
					font-weight: 400;
					color: #e92929;
					border-top: 2rpx solid rgba(112, 112, 112, 0.09);
				}

				.Title {
					font-size: 28rpx;
					font-weight: 400;
					color: #000000;
				}

				.flex-space-between {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}

			.btn {
				width: 100%;
				height: 88rpx;
				line-height: 88rpx;
				text-align: center;
				background: #24743c;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #ffffff;
			}

			.inpItem {
				background: #ffffff;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				margin-bottom: 24rpx;
				padding: 0 32rpx;
			}

			.market {
				margin-top: 50rpx;
				width: 750rpx;
				height: 500rpx;
				padding: 0 30rpx;

				.btnForflex {
					margin-top: 44rpx;
					width: 100%;
					height: 96rpx;
					padding: 0 28rpx;
					font-weight: bold;
					font-size: 32rpx;
					color: #fff;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.btnLeft {
					background: #24743c;
				}

				.btnRight {
					background: #fa3b4a;
				}

				.btnBg {
					width: 294rpx;
					height: 96rpx;
					line-height: 96rpx;
					text-align: center;
					border-radius: 16rpx;
				}

				.particulars {
					margin-top: 32rpx;
					padding: 36rpx 0;
					width: 100%;
					border-radius: 14rpx;
					border: 2rpx solid rgba(255, 255, 255, 0.38);
					font-size: 24rpx;
					font-weight: bold;
					color: #ffffff;
					display: flex;
					justify-content: space-around;
				}

				.particularsItem {
					margin-bottom: 10rpx;

					text {
						&:first-child {
							margin-right: 20rpx;
						}
					}
				}

				.ItemBg {
					color: #fa3b4a;
				}

				.borderBg {
					border: 2rpx solid #707070;
				}

				.charts-box {
					margin: 0 auto;
					width: 100%;
					// height: 500rpx;
				}
			}

			.buyList {
				padding: 0 32rpx;
				margin-top: 71rpx;
			}

			.buyListItem {
				width: 100%;
				height: 140rpx;
				background: #ffffff;
				box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
				border-radius: 16rpx;
				padding: 0 30rpx 0 16rpx;
				margin-bottom: 24rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.buyListItemTitle {
					height: 100%;
					padding: 16rpx 0;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.ItemTitle {
						font-size: 36rpx;
						font-weight: 800;
						color: #000000;
					}

					.ItemPrice {
						font-size: 24rpx;
						font-weight: 800;
						color: #9a9a9a;
					}
				}

				.buyListItemBtn {
					width: 126rpx;
					height: 48rpx;
					background: #24743c;
					border-radius: 24rpx;
					text-align: center;
					line-height: 48rpx;
					font-size: 28rpx;
					font-weight: bold;
					color: #ffffff;
				}
			}

			.tabs {
				height: 58rpx;
				line-height: 58rpx;
				padding: 30rpx;
				display: flex;
				font-size: 32rpx;
				font-weight: 800;
				color: #ffffff;
			}

			.tabItem {
				width: 175rpx;
				height: 58rpx;
				text-align: center;
				background: url('@/static/img/tabBg.png') 100% no-repeat;
				background-size: 100% 100%;
			}

			.tabItemActivate {
				width: 175rpx;
				height: 58rpx;
				background: url('@/static/img/tabActivateBg.png') 100% no-repeat;
				background-size: 100% 100%;
			}

			.boxTitle {
				width: 100%;
				height: 248rpx;
				background: #24743c;
				color: #fff;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.boxTitleItem {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 80rpx;
				}

				.title {
					font-weight: 800;
					font-size: 40rpx;
				}

				.subheading {
					margin-top: 16rpx;
					font-weight: 400;
					font-size: 24rpx;
				}
			}
		}
	}

	.bg2 {
		background: #272a30;

		.box2 {
			background: #272a30;
		}
	}
</style>
