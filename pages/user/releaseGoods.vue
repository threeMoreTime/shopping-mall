<template>
  <view class="">
	  <u-tabs :list="tabBarList"></u-tabs>
  </view>
</template>

<script setup>
  import { reactive, toRefs } from 'vue';

  const data = reactive({
    tabBarList: [
		{ name: '基本信息' },
		{ name: '规格参数' },
		{ name: '分销' },
		{ name: '自购省钱' }
	]
  });

  const { tabBarList } = toRefs(data)
</script>

<style lang="scss" scoped>

</style>>