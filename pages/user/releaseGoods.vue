<template>
	<view class="tabBar">
		<u-tabs 
			:list="tabBarList" 
			font-size="28rpx" 
			inactive-color="#0A0A0A" 
			active-color="#24743C"
			:current="current"
			@change="tabsChange"
		>
		</u-tabs>
	</view>
	<u-form :model="form" ref="uform" :labelWidth='200' v-show="current === 0">
		<view class="box">
			<u-form-item label="商品名称">
				<u-input v-model="form.name" placeholder="最多30字"></u-input>
			</u-form-item>
			<u-form-item label="商品副标题" :border-bottom="false">
				<u-input v-model="form.title" placeholder="最多50字"></u-input>
			</u-form-item>
		</view>
		<view class="box">
			<view @click="openSelect">
				<u-form-item label="选择商品类目" right-icon="arrow-right">
					<u-select 
						v-model="form.category" 
						cancel-color="#24743C" 
						confirm-color="24743C"
					></u-select>
				</u-form-item>				
			</view>
			<u-form-item label="店铺分类" :border-bottom="false" right-icon="arrow-right">
				<u-select></u-select>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item label="商品图片0/1">
				<u-upload upload-text=""></u-upload>
			</u-form-item>
			<u-form-item label="视频(可选)" :border-bottom="false">
				<u-upload upload-text=""></u-upload>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item label="商品单价">
				<u-input placeholder="个/件/包"></u-input>
			</u-form-item>
			<u-form-item label="商品价格">
				<u-input placeholder="元"></u-input>
			</u-form-item>
			<u-form-item label="商品市场价">
				<u-input placeholder="划线价"></u-input>
			</u-form-item>
			<u-form-item label="商品库存">
				<u-input placeholder="数量"></u-input>
			</u-form-item>
			<u-form-item label="快递运费">
				<u-input placeholder="元"></u-input>
			</u-form-item>
			<u-form-item label="包邮" :labelWidth='500'>
				<u-switch></u-switch>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item label="图文详情" right-icon="arrow-right">
				<u-select></u-select>
			</u-form-item>
		</view>
	</u-form>
	<view class="box switch" v-show="current != 0">
		<text>{{ switchName }}</text>
		<u-switch></u-switch>
	</view>
	<view class="footer" v-show="current === 0">
		<button type="primary" class="custom-style">保存到仓库</button>
		<button type="primary" class="custom-style" @click="release">发布商品</button>
	</view>
</template>

<script setup>
	import {
		reactive,
		toRefs
	} from 'vue';

	const data = reactive({
		tabBarList: [{
				name: '基本信息',
			},
			{
				name: '规格参数',
			},
			{
				name: '分销'
			},
			{
				name: '自购省钱'
			}
		],
		current: 0,
		switchName: '',
		form: {
			name: '',
			title: '',
			category: false,
			classification: ''
		}
	});

	const {
		tabBarList,
		form,
		current,
		switchName
	} = toRefs(data);

	const tabsChange = (index)=> {
		if (index === 1) {
			data.switchName = '启用商品规格'
		} else if (index === 2) {
			data.switchName = '是否参与分销'
		} else if (index === 3) {
			data.switchName = '是否开启自购省钱'
		}
		data.current = index
	}
	
	const openSelect = () => {
		data.form.category = true;   
	}
</script>

<style lang="scss" scoped>
	.tabBar {
		padding: 0 32rpx;
	}

	.box {
		margin: 24rpx 32rpx;
		padding: 0rpx 28rpx 0rpx 28rpx;
		background: #FFFFFF;
		box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
		border-radius: 8px;
		opacity: 1;
		
		::v-deep .u-add-wrap {
			width: 82rpx !important;
			height: 82rpx !important;
			line-height: 82rpx;
			border: 1px dashed #707070;
			border-radius: 16rpx;
		}
		
		::v-deep .u-icon__icon {
			top: 10rpx !important;
			color: #B7B7B7;
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 22rpx;
		padding-bottom: 61rpx;

		.custom-style {
			width: 326rpx;
			height: 72rpx;
			text-align: center;
			line-height: 72rpx;
			background: #24743C;
		}
	}

	.switch {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 26rpx 28rpx;
	}
</style>>
