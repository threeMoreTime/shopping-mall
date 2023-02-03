import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const userStore = defineStore('user', () => {
	const userInfo = reactive({})
	return { userInfo };
});

export const historyStore = defineStore('history', () => {
	const history = ref(uni.getStorageSync('searchList') || [])
	const historyList = (data) => {
		history.value.push(data)
		uni.setStorage({
			key: 'searchList',
			data: history.value
		})
	}
	const delStorage = () => {
		uni.removeStorageSync('searchList');
		history.value = []
	}
	return { history,historyList,delStorage };
});