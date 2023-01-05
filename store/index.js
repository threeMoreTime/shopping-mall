import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const userStore = defineStore('user', () => {
	const userInfo = reactive({})
	return { userInfo };
});