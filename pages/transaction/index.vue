<template>
	<view>
		<u-tabs :list="tabList" :is-scroll="false" inactive-color="#0A0A0A" active-color="#24743C"></u-tabs>
	</view>
</template>

<script setup>
	import { reactive, toRefs } from 'vue';
	
	const data = reactive({
		tabList:[
			{ name: '全部' },
			{ name: '收入' },
			{ name: '支出' },
			{ name: '流转' },
		]
	});
	const { tabList } = toRefs(data)
</script>

<style lang="scss">

</style>
