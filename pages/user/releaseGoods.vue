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
		v-show="current === 0" 
		:model="form" 
		:rules="rules"
		ref="uform" 
		:labelWidth='200' 
	>
		<view class="box">
			<u-form-item label="商品名称" prop="storeName">
				<u-input v-model="form.storeName" placeholder="最多30字" maxlength="30"></u-input>
			</u-form-item>
			<u-form-item label="商品副标题" prop="storeInfo" :border-bottom="false">
				<u-input v-model="form.storeInfo" placeholder="最多50字" maxlength="50"></u-input>
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
					@confirm="activeCategory"
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
					:file-list=form.image
					:auto-upload="false"
				></u-upload>
			</u-form-item>
			<u-form-item label="视频(可选)" :border-bottom="false">
				<view class="upload" @click="uploadVideo" v-show="!form.videoLink">
					<view class="text">
						<u-icon name="plus" size="40rpx"></u-icon>
						<view>选择视频</view>
					</view>
				</view>
				<view class="videoBox" v-show="form.videoLink">
					<video class="video" :src="form.videoLink"></video>
					<view class="iconBox">
						<u-icon class="icon" name="close" color="#ffff" @click="deleteVideo"></u-icon>	
					</view>
				</view>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item label="商品单位" prop="unitName">
				<u-input v-model="form.unitName" placeholder="个/件/包"></u-input>
			</u-form-item>
			<u-form-item label="商品价格" prop="price">
				<u-input v-model="form.price" placeholder="元"></u-input>
			</u-form-item>
			<u-form-item label="商品市场价" prop="otPrice">
				<u-input v-model="form.otPrice" placeholder="划线价"></u-input>
			</u-form-item>
			<u-form-item label="商品库存" prop="stock">
				<u-input v-model="form.stock" placeholder="数量"></u-input>
			</u-form-item>
			<u-form-item label="快递运费" prop="postage" v-show="form.isPostage">
				<u-input v-model="form.postage" placeholder="元"></u-input>
			</u-form-item>
			<u-form-item label="包邮">
				<u-switch v-model="form.isPostage" active-color="#24743C"></u-switch>
			</u-form-item>
		</view>
		<view class="box">
			<u-form-item label="图文详情" prop="description" label-position="top">
				<u-input v-model="form.description" type="textarea"></u-input>
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
			<button type="primary" class="custom-style"  @click="release(0)">保存到仓库</button>
			<button type="primary" class="custom-style" @click="release(1)">发布商品</button>			
		</view>
	</view>
	<view style="height: 200rpx;"></view>
</template>

<script setup>
	import {publish,getById} from '@/api/shop.js'
	import {reactive, toRefs, ref} from 'vue';
	import {onReady, onLoad} from "@dcloudio/uni-app";
	
	const imageUpload = ref(null)
	const uform = ref()
	
	const data = reactive({
		tabBarList: [
			{ name: '基本信息' },
			{ name: '规格参数' },
			{ name: '分销' },
			{ name: '自购省钱' }
		],
		current: 0,
		switchName: '',
		form: {
			storeName: "",
	    storeInfo: "",
	    cateIds: [1,2,3],
	    shopCateIds: [1],
	    image: [],// string
	    videoLink: '',// string
			unitName: '',
	    price: "",
	    otPrice: "",
	    stock: '',
	    isPostage: '',
	    postage: '',
	    description: " ",
		},
		rules: {
			storeName: [{ required: true, message: '请输入商品名称', trigger: ['blur', 'change' ]}],
			storeInfo: [{ required: true, message: '请输入商品副标题', trigger: ['blur', 'change' ]}],
			unitName: [{ required: true, message: '请输入商品单位', trigger: ['blur', 'change' ]}],
			price: [{ required: true, message: '请输入价格', trigger: ['blur', 'change' ]}],
			otPrice: [{ required: true, message: '请输入商品市场价', trigger: ['blur', 'change' ]}],
			stock: [{ required: true, message: '请输入商品库存', trigger: ['blur', 'change' ]}],
			description: [{ required: true, message: '请输入图文详情', trigger: ['blur', 'change' ]}],
		},
		categoryValue: '',
		specification: false,
		distribution: false,
		save: false,
		videoSrc: ''
	});

	const {
		tabBarList,
		form,
		current,
		switchName,
		fileList,
		specification,
		distribution,
		save,
		rules,
		videoSrc
	} = toRefs(data);
	data.form.image = reactive([
		{
			url: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
		}
	])
	onReady(() => {
		uform.value.setRules(rules)
	})
  onLoad((option)=>{
		if(Object.keys(option).length>0){
			goodsId.value = parseInt(option.id)
			detail(parseInt(goodsId.value))
			return
		}
	})
	const goodsId = ref()
	const detail = (id) =>{
		getById(id).then(res=>{
			console.log('res',res)
				data.form.image.push({url:res.image})
				let {storeName,storeInfo,cateIds,shopCateIds,image,videoLink,unitName,price,otPrice,stock,isPostage,postage,description} = res
				data.form = {
					storeName,
			    storeInfo,
			    cateIds,
			    shopCateIds,
			//     image[0].url:[{url: 'https://cdn.uviewui.com/uview/swiper/2.jpg',}],
			//     image[0].url:image,
			//     videoLink: videoLink || '',
					unitName,
			    price,
			    otPrice,
			    stock,
			    isPostage,
			    postage,
			    description,
				}
		})
	}
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
	}
	
	const activeCategory = (res) => {
		console.log(categoryValue, res)
	}
	
	const release = (isShow) => {
		// data.form.fileList = imageUpload.value.lists
		uform.value.validate((valid) => {
			let params = {}
			if(valid){
				if(goodsId.value){
					params = {
						id: goodsId.value,
						image: data.form.image ? data.form.image:'https://cdn.uviewui.com/uview/swiper/2.jpg',
						isShow
					}
					
				}else{
					params = {
						image: data.form.image,
						isShow
					}
				}
				let dataInfo = {...data.form, ...params}
				// console.log('dataInfo',dataInfo)
				publish(dataInfo).then(res=>{
					if(isShow == 1){
						uni.showToast({
							title: '发布商品成功！',
							icon: "success"
						})
					}else{
						uni.showToast({
							title: '保存成功！',
							icon: "success"
						})
					}
					setTimeout(()=>{
						uni.navigateBack(-1)
					},2000)
				})
			}
		})
	}
	
	const uploadVideo = () => {
		uni.chooseVideo({
			sourceType: ['album', 'camera'],
			success: (res) => {
				data.form.videoLink = res.tempFilePath
				console.log('ssss',res.tempFilePath)
			}
		})
	}
	
	const deleteVideo = () => {
		data.videoSrc = ''
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
		
		.upload {
			width: 220rpx;
			height: 220rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #f4f5f6;
		}
		
		.text {
			text-align: center;
			color: #606266;
		}
		
		.videoBox {
			position: relative;
		}
		
		.video {
			width: 220rpx;
			height: 220rpx;
		}
		
		.iconBox {
			position: relative;
			float: right;
			top: -14rpx;
			right: 26rpx;
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			background: red;
			z-index: 999;
		}
		
		.icon {
			position: absolute;
			top: 6rpx;
			right: 5rpx;
			z-index: 99999;
		}
	}

	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 999;
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
