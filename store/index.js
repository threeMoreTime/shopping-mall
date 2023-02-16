import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const userStore = defineStore('user', () => {
	const userInfo = reactive({})
	const token = ref(uni.getStorageSync('token') || '')
	function setToken(data) {
		token.value = data;
		uni.setStorageSync('token', data)
	} 
	const systemConfig = reactive({
		appAliPay: false,
		appWxPay: false,
		picUrlPre: 'https://manghemini.oss-cn-shenzhen.aliyuncs.com/',
		picWKP: 'http://192.168.1.28:8860'
	});
	return { userInfo,token,setToken,systemConfig };
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