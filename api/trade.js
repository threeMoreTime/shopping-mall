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
export const findTradeList = (data) => {
	return request({
		url: '/client/trade/findTradeList',
		method: 'GET'
	},data)
}