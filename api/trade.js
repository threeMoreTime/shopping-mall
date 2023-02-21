import request from "@/utils/request.js"

// 购物车数据列表
export const addTrade = (data) => {
	return request({
		url: '/client/trade/addTrade',
		method: 'POST'
	},data)
}

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