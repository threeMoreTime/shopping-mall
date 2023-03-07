import request from "@/utils/request.js"

/* 	查询能量值配置trade_energy_pool->
	能量池trade_energy_num->
	能量值trade_energy_price->
	指导价格trade_commission->手续费
*/
export const energyConfig = () => {
	return request({
		url: '/client/trade/energyConfig',
		method: 'GET'
	})
}

// 查询24小时内的最高价格和最低价格
export const findPrice = () => {
	return request({
		url: '/client/trade/findPrice',
		method: 'GET'
	})
}

// 查询挂单数据
/* 
	type: BUY 查求购单 SELL 查抛售单
	classify: 1 能量交易 2仓单交易
	queryType: all 别人的全部,user 自己的
*/
export const findTradeList = (data) => {
	return request({
		url: '/client/trade/findTradeList',
		method: 'GET'
	},data)
}

// 查询k线图指标选项
export const findKlinePeriod = () => {
	return request({
		url: '/client/trade/findKlinePeriod',
		method: 'GET'
	})
}

// 根据k线图指标选项查询数据  period
export const findByPeriod = (data) => {
	return request({
		url: '/client/trade/findByPeriod',
		method: 'GET'
	},data)
}

// 挂单，买入(求购）BUY，卖出（抛售）SELL
export const addTrade = (data) => {
	return request({
		url: '/client/trade/addTrade',
		method: 'POST'
	},data)
}

// 抛售仓单
export const addCangTrade = (data) => {
	return request({
		url: '/client/trade/addCangTrade',
		method: 'POST'
	},data)
}

// 能量交易,买入/卖出
export const addOrder = (data) => {
	return request({
		url: '/client/trade/addOrder',
		method: 'POST'
	},data)
}

// 仓单交易，买入
export const addCangOrder = (data) => {
	return request({
		url: '/client/trade/addCangOrder',
		method: 'POST'
	},data)
}

// 查询能量、仓单订单
export const findOrderList = (data) => {
	return request({
		url: '/client/trade/findOrderList',
		method: 'GET'
	},data)
}