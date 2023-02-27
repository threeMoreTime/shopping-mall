import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

// 店铺
export const shopStore = defineStore('shop', ()=>{
	const shopInfo = reactive({})
	return {shopInfo}
})

export const userStore = defineStore('user', () => {
	const userInfo = reactive({})
	const token = ref(uni.getStorageSync('token') || '')
	let storeOrderAddress = {};
	function setToken(data) {
		token.value = data;
		uni.setStorageSync('token', data)
		uni.showToast({
			title:"登录成功",
			icon:"success"
		})
	} 
	const systemConfig = reactive({
		appAliPay: false,
		appWxPay: false,
		picUrlPre: 'https://zhichuanglianmeng.oss-cn-shenzhen.aliyuncs.com/',
	});
	return { userInfo,token,setToken,systemConfig,storeOrderAddress };
});

export const historyStore = defineStore('history', () => {
	const history = ref(uni.getStorageSync('searchList') || [])
	const historyList = (data) => {
		new Promise((resolve, reject) => {
			history.value.unshift(data)
			// history.value = [...new Set(history.value)]
			history.value = Array.from(new Set(history.value))
			resolve(history.value)
		}).then((res) => {
			uni.setStorage({
				key: 'searchList',
				data: res
			})
		})
	}
	const delStorage = () => {
		uni.removeStorageSync('searchList');
		history.value = []
	}
	return { history,historyList,delStorage };
});