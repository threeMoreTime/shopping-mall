<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">发布商品</view>
		<view class=""></view>
	</view>
	<view class="tabBar">
		<u-tabs 
			:list="tabBarList" 
			font-size="28rpx" 
			inactive-color="#0A0A0A" 
			active-color="#24743C"
			:current="current"
			@change="tabsChange"
			:active-item-style="{
				'font-size': '32rpx',
				'color': '#0A0A0A',
				'font-weight': 'bold'
			}"
		>
		</u-tabs>
	</view>
	<u-form 
		:model="form" 
		ref="uform" 
		:labelWidth='200' 
		v-show="current === 0" 
		clearable="form"
	>
		<view class="box">
			<u-form-item label="商品名称">
				<u-input v-model="form.name" placeholder="最多30字"></u-input>
			</u-form-item>
			<u-form-item label="商品副标题" :border-bottom="false">
				<u-input v-model="form.title" placeholder="最多50字"></u-input>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item 
				label="选择商品类目" 
				right-icon="arrow-right" 
				@click.capture="onCategory"
			>
				<u-select 
					v-model="form.category" 
					confirm-color="#24743C"
				></u-select>
			</u-form-item>				
			<view @click="changePath('/pages/user/storeClass')">
				<u-form-item label="店铺分类" :border-bottom="false" right-icon="arrow-right">
					<u-select></u-select>
				</u-form-item>				
			</view>
		</view>
		<view class="box">
			<u-form-item label="商品图片0/1">
				<u-upload 
					ref="imageUpload"
					:max-count="1" 
					:file-list=form.fileList
					:auto-upload="false"
				></u-upload>
			</u-form-item>
			<u-form-item label="视频(可选)" :border-bottom="false">
				<u-upload></u-upload>
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
			<u-form-item label="包邮">
				<u-switch v-model="form.freeMail" active-color="#24743C"></u-switch>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item label="图文详情" label-position="top">
				<u-input type="textarea"></u-input>
			</u-form-item>
		</view>
	</u-form>
	<view class="box switch" v-show="current != 0">
		<text>{{ switchName }}</text>
		<u-switch 
			v-model="specification" 
			v-show="current === 1"
			active-color="#24743C"
		></u-switch>
		<u-switch 
			v-model="distribution" 
			v-show="current === 2"
			active-color="#24743C"
		></u-switch>
		<u-switch 
			v-model="save" 
			v-show="current === 3"
			active-color="#24743C"
		></u-switch>
	</view>
	<view class="footer" v-show="current === 0">
		<view class="footerBtn">
			<button type="primary" class="custom-style">保存到仓库</button>
			<button type="primary" class="custom-style" @click="release">发布商品</button>			
		</view>
	</view>
</template>

<script setup>
	import {
		reactive,
		toRefs,
		ref
	} from 'vue';
	
	const imageUpload = ref(null)
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
			classification: '',
			freeMail: false,
			fileList: []
		},
		specification: false,
		distribution: false,
		save: false,
	});

	const {
		tabBarList,
		form,
		current,
		switchName,
		fileList,
		specification,
		distribution,
		save
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
	
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	
	
	const changePath = (path) => {
		uni.navigateTo({
			url: path
		})
	}
	
	const onCategory = () => {
		data.form.category = true;
		console.log(imageUpload.value.lists[0].url)
	}
</script>

<style lang="scss" scoped>
	
	.tabs {
		width: 100%;
		height: 176rpx;
		padding: 20rpx 32rpx;
		background-color: #1C6732;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	
		.title {
			font-size: 32rpx;
			font-weight: 800;
			color: #F5F5F5;
			margin-bottom: 6rpx;
		}
	
		.arrowsBg {
			// transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
	
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
	}

	.footer {
		width: 100%;
		// position: fixed;
		// bottom: 0;
		padding-top: 22rpx;
		padding-bottom: 61rpx;
		background: #FFFFFF;
		
		.footerBtn {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

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
