<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">我的店铺</view>
		<view class=""></view>
	</view>
	<view class="title" v-if="current == 1">店铺信息</view>
	<u-form :labelWidth='200' class="form" v-if="current == 1">
		<view class="card">
			<u-form-item label="店铺名称">
				<u-input v-model="dataForm.storeName" placeholder="请输入店铺名称"></u-input>
			</u-form-item>
			<u-form-item :label="'店铺logo('+ (dataForm.logo.length>0?1:0) +'/1)'">
				<!-- <u-upload max-count="1" :auto-upload="false" show-progress ref="logoUpload" @click="ChoosePicture" :action="action.value"></u-upload> -->
				<!-- <u-upload max-count="1" @afterRead="ChoosePicture" :action="action"></u-upload> -->
				<!-- <u-upload max-count="1" :file-list="dataForm.logo"></u-upload> -->
				<view class="upload" @click="ChoosePicture(1)" v-if="dataForm.logo.length == 0">
					<u-icon name="plus" class="add"></u-icon>
					<view class="change">选择图片</view>
				</view>
				<view class="upload2" v-else>
					<view class="dele" @click="close(1)">
						<u-icon name="close" class="close"></u-icon>
					</view>
					<u-image @click="photos(1)" width="100%" height="100%" border-radius="15rpx" :src="dataForm.logo">
					</u-image>
				</view>
			</u-form-item>
			<u-form-item :label="'店主微信('+ (dataForm.wx.length>0?1:0) +'/1)'">
				<!-- <u-upload max-count="1" :file-list="dataForm.wx"></u-upload> -->
				<view class="upload" @click="ChoosePicture(2)" v-if="dataForm.wx.length == 0">
					<u-icon name="plus" class="add"></u-icon>
					<view class="change">选择图片</view>
				</view>
				<view class="upload2" v-else>
					<view class="dele" @click="close(2)">
						<u-icon name="close" class="close"></u-icon>
					</view>
					<u-image @click="photos(2)" width="100%" height="100%" border-radius="15rpx" :src="dataForm.wx">
					</u-image>
				</view>
			</u-form-item>
			<u-form-item label="主营">
				<u-input placeholder="请输入店铺主营业务" v-model="dataForm.main"></u-input>
			</u-form-item>
		</view>
		<view class="card">
			<u-form-item label="店铺分类" right-icon="arrow-right" @click="showCate = true">
				<u-input v-model="dataForm.cate" disabled bor disabledColor="#ffffff" placeholder="请选择分类">
				</u-input>
				<u-select v-model="showCate" confirm-color="#24743C" mode="single-column" :default-value="[1]" :list="cateList" @confirm="confirmCate"></u-select>
			</u-form-item>
			<u-form-item label="所在地区">
				<u-input v-model="dataForm.refundAddress"></u-input>
			</u-form-item>
			<u-form-item label="详细地址">
				<u-input placeholder="请填写店铺详细地址" v-model="dataForm.shipAddress"></u-input>
			</u-form-item>
			<u-form-item label="店铺简介" label-position="top">
				<u-input type="textarea" placeholder="了解你,从简介开始" v-model="dataForm.describes"></u-input>
			</u-form-item>
		</view>
		<view class="title" style="padding-top: 0;">店铺信息</view>
		<view class="card">
			<u-form-item label="联系人">
				<u-input placeholder="昵称" v-model="dataForm.refundContact"></u-input>
			</u-form-item>
			<u-form-item label="联系电话">
				<u-input placeholder="请输入电话号码" v-model="dataForm.refundMobile"></u-input>
			</u-form-item>
		</view>
		<view class="card">
			<u-form-item :label="'店铺宣传图('+ dataForm.imgs.length +'/1)'">
				<!-- <u-upload max-count="1" :file-list="dataForm.imgs"></u-upload> -->
				<view class="upload" @click="ChoosePicture(3)" v-if="dataForm.imgs.length == 0">
					<u-icon name="plus" class="add"></u-icon>
					<view class="change">选择图片</view>
				</view>
				<view class="upload2" v-else>
					<view class="dele" @click="close(3)">
						<u-icon name="close" class="close"></u-icon>
					</view>
					<u-image @click="photos(3)" width="100%" height="100%" border-radius="15rpx"
						:src="dataForm.imgs[0]"></u-image>
				</view>
			</u-form-item>
		</view>
	</u-form>
	<view class="btn">
		<button type="primary" @click="save(data.current)">{{ btnName }}</button>
	</view>
	<view style="height: 150rpx;"></view>
</template>

<script setup>
	import {
		uploadFilePromise
	} from '@/utils/fileUpload.js'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		saveOrUpdate,findAllCategory
	} from '@/api/shop.js'
	import {
		defaults
	} from 'lodash';
	const action = ref('/dev/client/user/system/image')
	const close = (id) => {
		uni.showModal({
			title: '提示',
			content: '您确定要删除此项吗？',
			success: function(res) {
				if (res.confirm) {
					switch (id) {
						case 1:
							dataForm.logo = ''
							return
							break;
						case 2:
							dataForm.wx = ''
							return
							break;
						case 3:
							dataForm.imgs = []
							return
							break;
					}
				}
			}
		});
	}
	// logo/wx/宣传图
	const ChoosePicture = (id) => {
		uni.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['camera', 'album'],
			success: async function(res) {
				console.log('chooseImage res', res)
				uni.showLoading({
					title: '图片上传中',
				})
				const result = await uploadFilePromise(res.tempFiles[0])
				console.log("result: ", JSON.parse(result).data.url);
				switch (id) {
					case 1:
						dataForm.logo = 'https://cdn.uviewui.com/uview/swiper/1.jpg'
						return
						break;
					case 2:
						dataForm.wx = 'https://cdn.uviewui.com/uview/swiper/2.jpg'
						return
						break;
					case 3:
						dataForm.imgs.push('https://cdn.uviewui.com/uview/swiper/3.jpg')
						console.log(dataForm.imgs)
						return
						break;
				}
			}
		});
	}
	// 预览
	const photos = (id) => {
		let imgList = []
		switch (id) {
			case 1:
				imgList.push(dataForm.logo)
				break;
			case 2:
				imgList.push(dataForm.wx)
				break;
			case 3:
				imgList = dataForm.imgs
				break;
		}
		console.log("imgList: ", imgList);
		uni.previewImage({
			count: imgList.length,
			urls: imgList,
			success: function(res) {
				console.log(res);
			}
		});
	}
	const data = reactive({
		current: 0,
		btnName: '',
	})
	const {
		current,
		btnName,
	} = toRefs(data)

	const findCategory = () => {
		cateList.length = 0
		findAllCategory().then(res=>{
			res.map(e => {
				cateList.push({
					value: e.id,
					label: e.name
				})
			})
		})
	}
	const confirmCate = (e) => {
		// console.log('e',e)
		// console.log('e',e[0])
		// console.log('e',e[0].value)
		// console.log('e',e[0].label)
		dataForm.cate = e[0].label
		dataForm.cateIds.push(e[0].value)
	}
	onLoad((option) => {
		if (option.typeId) {
			data.current = option.typeId
			data.btnName = '保存'
		}
		findCategory()
	})
	const showCate = ref(false)
	const cateList = reactive([])
	const dataForm = reactive({
		storeName: 'XX小店',
		logo: '',
		wx: '',
		main: '餐饮',
		cate: '',
		cateIds: [],
		// cate: cateList[0].label ? cateList[0].label:'',
		// cateIds: [cateList[0].value]? [cateList[0].value]:'',
		refundAddress: '广东省',
		shipAddress: '广东深圳龙岗',
		describes: '这是餐饮服务',
		refundContact: '张三的店',
		refundMobile: '13154658975',
		imgs: []
	})

	const save = (id) => {
		if (!dataForm.storeName) {
			uni.$showMsg('店铺名称不能为空！', 'error')
			return false
		}
		if (!dataForm.logo) {
			uni.$showMsg('店铺logo不能为空！', 'error')
			return false
		}
		if (!dataForm.wx) {
			uni.$showMsg('店主微信不能为空！', 'error')
			return false
		}
		if (!dataForm.main) {
			uni.$showMsg('主营不能为空！', 'error')
			return false
		}
		if (!dataForm.cateIds) {
			uni.$showMsg('分类不能为空！', 'error')
			return false
		}
		if (!dataForm.refundAddress) {
			uni.$showMsg('地区不能为空！', 'error')
			return false
		}
		if (!dataForm.shipAddress) {
			uni.$showMsg('详细地址不能为空！', 'error')
			return false
		}
		if (!dataForm.describes) {
			uni.$showMsg('简介不能为空！', 'error')
			return false
		}
		if (!dataForm.refundContact) {
			uni.$showMsg('联系人不能为空！', 'error')
			return false
		}
		if (!dataForm.refundMobile) {
			uni.$showMsg('联系电话不能为空！', 'error')
			return false
		}
		if (id == 1) {
			console.log(dataForm)
			saveOrUpdate(dataForm).then(res => {
				uni.showToast({
					title: '店铺申请成功！',
					icon: "success"
				})
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/user/merchant'
					})
				}, 2000)
			})
		}
	}

	const navigateBack = () => {
		uni.navigateBack()
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

	.title {
		padding: 18rpx 0 0 32rpx;
		font-size: 24rpx;
	}


	.card {
		margin: 16rpx 32rpx 28rpx;
		padding: 0 28rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0, 0, 0, 0.16);
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		font-size: 24rpx;

		.upload {
			width: 200rpx;
			height: 200rpx;
			border-radius: 15rpx;
			background-color: #f4f5f6;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.add {
				font-size: 40rpx;
				color: #606266;
			}

			.change {
				color: #606266;
			}
		}

		.upload2 {
			border-radius: 15rpx;
			// background-color: #f4f5f6;
			width: 200rpx;
			height: 200rpx;
			position: relative;

			.dele {
				z-index: 999;
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
				position: absolute;
				right: 10rpx;
				top: 10rpx;
				background-color: #fa3534;
				color: #fef8ff;

				.close {
					z-index: 999 !important;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}


	.btn {
		width: 100%;
		padding: 32rpx;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		z-index: 999;

		::v-deep uni-button {
			height: 72rpx;
			line-height: 72rpx;
			background: #24743C;
			border-radius: 16rpx;
		}
	}
</style>
