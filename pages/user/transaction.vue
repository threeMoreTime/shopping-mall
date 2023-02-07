<template>
	<view class="tabBar">
		<u-tabs 
			:list="tabList" 
			:is-scroll="false" 
			inactive-color="#0A0A0A" 
			active-color="#24743C"
			:current="current"
			@change="tabsChange"
		></u-tabs>
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
		],
		current: 0,
	});
	const { tabList, current } = toRefs(data)
	
	const tabsChange = (index) => {
		data.current = index
	}
</script>

<style lang="scss">
	.tabBar {
		height: 98rpx;
		background: #FFFFFF;
		box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		border-radius: 0px 0px 8px 8px;
		opacity: 1;
	}
</style>
