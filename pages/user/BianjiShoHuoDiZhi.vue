<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">{{shouAddress}}</view>
			<view class=""></view>
		</view>

		<!-- 表单		 -->
		<view class="BiaoDan">

			<u-form :model="form" ref="uForm" class="box-box" :borderBottom="false">
				<u-form-item label="收货人" class="item" label-width="110" labelPosition="left" :borderBottom="false">
					<u-input v-model="form.name" class="item2"
						:customStyle="{'padding': '0 20rpx' ,'color': '#030303' }" />
				</u-form-item>
				<u-form-item label="手机号" class="item" label-width="110" labelPosition="left" :borderBottom="false">
					<u-input v-model="form.ShoJi" class="item2"
						:customStyle="{'padding': '0 20rpx' ,'color': '#030303'}" />
				</u-form-item>
				<u-form-item label="所在地址" class="item" label-width="130" labelPosition="left" :borderBottom="false">
					<u-input v-model="form.diZhi" class="item2"
						:customStyle="{'padding': '0 15rpx' ,'color': '#030303' }" />
				</u-form-item>
				<u-form-item label="详细地址" class="item" label-width="130" labelPosition="left" :borderBottom="false">
					<u-input v-model="form.XiangXiDizhi" :customStyle="{'color': '#030303'}" type="textarea"
						height="200" backgroundColor="#F1F1F1" class="oooo" />
					<!-- <   v-model="form.XiangXiDizhi"  class="aaaaaa"/> -->
				</u-form-item>
				<u-form-item style="position: relative;" label="默认地址" class="item" label-width="130"
					labelPosition="left" :borderBottom="false">
					<u-switch style="position: absolute;right: 0;" v-model="form.checked" active-color="#24743c"
						@change='changeDef'>
					</u-switch>
				</u-form-item>
			</u-form>
			<!-- 定位图标 -->
			<text class="tuBiao"></text>
			<!-- 定位图标 -->
		</view>
		<!-- 表单     -->


		<!-- 保存按钮 -->
		<view class="BOX-bottom" @click="save">
			<text>保存</text>
		</view>
		<!-- 保存按钮 -->
	</view>
</template>

<script setup>
	import {
		computed,
		reactive,
		ref
	} from "vue";
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		list,
		detail,
		edit,
		set
	} from "@/api/userAddress.js"
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 表单
	const form = reactive({
		name: '',
		ShoJi: '',
		diZhi: '',
		XiangXiDizhi: '',
		checked: false,
		province: '',
		city: '',
		district: ''
	})
	const id = ref()
	const type = ref()
	const detailInfo = ref()
	const shouAddress = ref('')
	onLoad((option) => {
		id.value = option.id
		type.value = option.type
		console.log('option', option)
		if (type.value == 1) {
			addressDetail(id.value)
			shouAddress.value = '编辑收货物地址'
		}else{
			shouAddress.value = '添加收货物地址'
		}
	})

	const changeDef = (e) => {
		if (form.checked == true) {
			set(id.value).then(res => {
				uni.showToast({
					title: '默认地址设置成功！',
					icon: "success"
				})
			})
			return false
		}
	}
	const addressDetail = (id) => {
		detail(id).then(res => {
			detailInfo.value = res
			let {realName,phone,detail,province,city,district,isDefault} = detailInfo.value
			form.name = realName
			form.ShoJi = phone
			form.diZhi = province + city + district
			form.XiangXiDizhi = detail
			form.checked = isDefault
		})
	}

	const save = () => {
		let params = {}
		if (type.value == 1) {
			params = {
				id: id.value,
				realName: form.name,
				phone: form.ShoJi,
				detail: form.XiangXiDizhi,
				isDefault: form.checked,
				address: {
					province: '广东省',
					city: '深圳市',
					district: '南山区',
				}
			}
		} else {
			params = {
				realName: form.name,
				phone: form.ShoJi,
				detail: form.XiangXiDizhi,
				isDefault: form.checked,
				address: {
					province: '广东省',
					city: '深圳市',
					district: '南山区',
				}
			}
		}
		edit(params).then(res => {
			uni.showToast({
				title: '地址保存成功！',
				icon: "success"
			})
		})
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
		position: relative;

		.oooo {
			padding-top: 10rpx;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
		}

		.aaaaaa {
			width: 472rpx;
			height: 184rpx;
			background: #F1F1F1;
			border-radius: 16rpx 16rpx 16rpx 16rpx;

			// opacity: 1;
		}

		.tabs {
			width: 100%;
			height: 176rpx;
			padding: 20rpx 32rpx;
			background-color: #1C6732;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;

			.title {
				// width: 188rpx;
				height: 44rpx;
				font-size: 32rpx;

				font-weight: 800;
				color: #FFFFFF;
				line-height: 24rpx;
				margin-bottom: 3rpx;
			}

			.arrowsBg {
				// transform: rotate(180deg);
				width: 25rpx;
				height: 48rpx;
				background: url("@/static/img/arrows.png") 100% no-repeat;
				background-size: 100% 100%;
			}
		}

		// 表单
		.BiaoDan {
			margin-top: 38rpx;
			margin-left: 32rpx;
			width: 686rpx;
			height: 616rpx;
			background: #FFFFFF;
			padding-left: 34rpx;
			position: relative;

			.box-box {

				// padding: 0 0 0 50rpx;
				.item {
					font-size: 20rpx;
					font-weight: 800;
					color: #030303;
					line-height: 24rpx;
				}

				.item2 {
					width: 472rpx;
					height: 86rpx;
					background: #F1F1F1;
					line-height: 80rpx;

					border-radius: 16rpx 16rpx 16rpx 16rpx;
					// opacity: 1;

				}

			}

			.tuBiao {
				width: 30rpx;
				height: 43rpx;
				background: #24743C;
				opacity: 1;
				background: url('../../static/img/dizhi.png') 100% no-repeat;
				background-size: 100% 100%;
				position: absolute;
				bottom: 275rpx;
				left: 620rpx;

			}
		}

		.BOX-bottom {
			// margin: 682rpx 0 0 
			position: absolute;
			bottom: 22rpx;
			left: 32rpx;
			width: 686rpx;
			height: 80rpx;
			background: #24743C;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				font-weight: 400;
				color: #FFFFFF;
				line-height: 24rpx;
			}
		}
	}
</style>
