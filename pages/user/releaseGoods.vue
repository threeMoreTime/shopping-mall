<template>
	<view class="tabs">
		<view class="arrowsBg" @click="navigateBack"></view>
		<view class="title">发布商品</view>
		<view class=""></view>
	</view>
<!-- 	<view class="tabBar">
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
	</view> -->
	<u-form 
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
			<!-- <u-form-item 
				label="选择商品类目" 
				right-icon="arrow-right" 
				@click.capture="onCategory"
			>
			<u-input v-model="data.categoryValue" disabled bor disabledColor="#ffffff" placeholder="请选择分类">
			</u-input>
				<u-select 
					v-model="form.category" 
					confirm-color="#24743C"
					@confirm="activeCategory"
					:default-value="[1]"
					:list="cateList"
				></u-select>
			</u-form-item> -->
			
			
			<u-form-item
				label="选择商品类目" 
				right-icon="arrow-right" 
				@click.capture="onCategory"
			>
			<u-input v-model="data.categoryValue" disabled bor disabledColor="#ffffff" placeholder="请选择分类">
			</u-input>
			<u-select v-model="form.category" mode="mutil-column-auto" :list="cateList" @confirm="activeCategory"></u-select>
			</u-form-item>
			
			<!-- <view @click="changePath('/pages/user/storeClass')">
				<u-form-item label="店铺分类" :border-bottom="false" right-icon="arrow-right">
					<u-select></u-select>
				</u-form-item>				
			</view> -->
		</view>
		<view class="box">
			<u-form-item :label="'商品图片('+ (data.form.image.length>0?1:0) +'/1)'">
				<!-- <u-upload 
					ref="imageUpload"
					:max-count="1" 
					:file-list=form.image
					:auto-upload="false"
				></u-upload> -->
				<!-- v-if="dataForm.logo.length == 0" -->
				<view class="upload" @click="ChoosePicture(1)" v-if="data.form.image.length == 0">
					<u-icon name="plus" class="add"></u-icon>
					<view class="change">选择图片</view>
				</view>
				<view class="upload2" v-else>
					<view class="dele" @click="close(1)">
						<u-icon name="close" class="close"></u-icon>
					</view>
					<u-image @click="photos(1)" width="100%" height="100%" border-radius="15rpx" :src="userStore().systemConfig.picUrlPre + data.form.image">
					</u-image>
				</view>
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
			<u-form-item label="成本价" prop="cost">
				<u-input v-model="form.cost" placeholder="成本价"></u-input>
			</u-form-item>
			<u-form-item label="商品库存" prop="stock">
				<u-input v-model="form.stock" placeholder="数量"></u-input>
			</u-form-item>
			<u-form-item label="快递运费" prop="postage" v-show="!form.isPostage">
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
	<!-- <view class="box switch" v-show="current != 0">
		<text>{{ switchName }}</text>
		<u-switch 
			v-model="specification" 
			v-show="current === 1"
			active-color="#24743C"
			@change="specificationChange"
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
	</view> -->
	<view class="footer" v-show="current === 0">
		<view class="footerBtn">
			<button type="primary" class="custom-style"  @click="release(0)">保存到仓库</button>
		</view>
	</view>
	<view style="height: 200rpx;"></view>
</template>

<script setup>
	import {publish,getById,isSpecType,Commodity} from '@/api/shop.js'
	import {reactive, toRefs, ref} from 'vue';
	import { userStore } from "@/store/index.js"
	import {onReady, onLoad,onShow} from "@dcloudio/uni-app";
	import {uploadFilePromise} from '@/utils/fileUpload.js'
	
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
	    cateIds: [],
	//     shopCateIds: [1],
	    image: '',// string
	    videoLink: '',// string
			unitName: '',
	    price: "",
	    otPrice: "",
	    cost: "",
	    stock: '',
	    isPostage: false,
	    postage: '',
	    description: " ",
		},
		rules: {
			// storeName: [{ required: true, message: '请输入商品名称', trigger: ['blur', 'change' ]}],
			// storeInfo: [{ required: true, message: '请输入商品副标题', trigger: ['blur', 'change' ]}],
			// unitName: [{ required: true, message: '请输入商品单位', trigger: ['blur', 'change' ]}],
			// price: [{ required: true, message: '请输入价格', trigger: ['blur', 'change' ]}],
			// otPrice: [{ required: true, message: '请输入商品市场价', trigger: ['blur', 'change' ]}],
			// stock: [{ required: true, message: '请输入商品库存', trigger: ['blur', 'change' ]}],
			// description: [{ required: true, message: '请输入图文详情', trigger: ['blur', 'change' ]}],
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
	data.form.image = reactive([])
	onReady(() => {
		uform.value.setRules(rules)
	})
  onLoad((option)=>{
		seleCommodity()
		if(Object.keys(option).length>0){
			goodsId.value = parseInt(option.id)
			detail(parseInt(goodsId.value))
			return
		}
	})
	onShow(()=>{
		uni.$on('returnData',data => {
			console.log("data: ",data);
		})
	})
	const goodsId = ref()
	const detail = (id) =>{
		getById(id).then(res=>{
			// console.log('res',res)
			// console.log('cateList',cateList)
			let cateValue = ''
			let cate = cateList.find(p => {
				return p.value === res.cateIds[0]
			})
			// console.log('cate',cate)
			let	cate2 = cate.children.find(i => {
				return i.value === res.cateIds[1]
			})
			// console.log('cate2',cate2)
			data.categoryValue = cate.label+ ' '+ cate2.label
			
			specification.value = res.specType
				// data.form.image.push({url:res.image})
				let {storeName,storeInfo,cateIds,shopCateIds,image,videoLink,unitName,price,otPrice,cost,stock,isPostage,postage,description} = res
				data.form.storeName = res.storeName
				data.form = {
					storeName,
			    storeInfo,
			    cateIds,
			//     shopCateIds,
			//     image:[{url: userStore().systemConfig.picUrlPre + res.image}],
			//     image: userStore().systemConfig.picUrlPre + res.image,
			    image: res.image,
			//     image[0].url:image,
			//     videoLink: videoLink || '',
					unitName,
			    price,
			    otPrice,
					cost,
			    stock,
			    isPostage,
			    postage,
			    description,
				}
				console.log('image',data.form.image)
		})
	}
	let cateList = reactive([])
	const close = (id) => {
		uni.showModal({
			title: '提示',
			content: '您确定要删除此项吗？',
			success: function(res) {
				if (res.confirm) {
					switch (id) {
						case 1:
							data.form.image = ''
							return
							break;
					}
				}
			}
		});
	}
	
	//商品图片
	const ChoosePicture = (id) => {
	  const pictureTypes = {
	    1: "image",
	  };
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
	      const imageUrl = JSON.parse(result).data.url;
	      if (pictureTypes[id]) {
	        data.form[pictureTypes[id]] = imageUrl;
	      }
	    }
	  });
	}
	
	// 预览
	const photos = (id) => {
		const imgMap = new Map([
		  [1, data.form.image],
		]); 
		const imgList = [userStore().systemConfig.picUrlPre + imgMap.get(id)];
		// console.log("imgList: ", imgList);
		uni.previewImage({
			count: imgList.length,
			urls: imgList,
			success: function(res) {
				console.log(res);
			}
		});
	}
	
	const recursion = (allData = []) => {
		let realData = []
		allData.forEach((v, i) => {
			v.value = v.id
			v.label = v.name
			if(Reflect.has(v, 'child')){
				v.children = v.child
				v.children = recursion(v.children)
			}
			realData.push(v)
		})
		return realData
	}
	
	// 商品类目
	const seleCommodity = () => {
		cateList.length = 0
		Commodity().then(res=>{
			// console.log('seleCommodity res',res)
			// console.log('recursion,',recursion(res))
			cateList = recursion(res)
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
	// 规格参数
	const specificationChange = (e) =>{
		// console.log(e,specification.value)
		let id = goodsId.value
		let specType = null
		if(specification.value){
			specType = 1
		}else{
			specType = 0
		}
		isSpecType(id,specType).then(res=>{
			uni.$showMsg('参数设置成功','success')
		})
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
		// console.log('res',res)
		let arr = []
		let arr2 = []
		res.map(p => {
			arr.push(p.value)
			arr2.push(p.label)
		})
		data.categoryValue = arr2[0]+ ' '+ arr2[1]
		data.form.cateIds = [...arr]
		// console.log('data.form.cateIds',data.form.cateIds)
	}
	
	const release = (isShow) => {
		console.log(isShow)
		// data.form.fileList = imageUpload.value.lists
		uform.value.validate((valid) => {
			console.log(valid)
			let params = {}
			if(valid){
				if(goodsId.value){
					params = {
						id: goodsId.value,
						// image: data.form.image[0].url ? data.form.image[0].url:'https://cdn.uviewui.com/uview/swiper/2.jpg',
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						isShow
					}
				}else{
					if(data.form.image.length == 0){
						uni.$showMsg('请选择商品图片','error')
						return false
					}
					params = {
						image: userStore().systemConfig.picUrlPre + data.form.image,
						isShow
					}
				}
				console.log('params',params)
				if(!data.form.storeName){
					uni.$showMsg('请输入商品名称','error')
					return false
				}
				if(!data.form.storeInfo){
					uni.$showMsg('请输入商品副标题','error')
					return false
				}
				if(!data.form.unitName){
					uni.$showMsg('请输入商品单位','error')
					return false
				}
				if(!data.form.price){
					uni.$showMsg('请输入价格','error')
					return false
				}	
				if(!data.form.otPrice){
					uni.$showMsg('请输入商品市场价','error')
					return false
				}
				if(!data.form.cost){
					uni.$showMsg('请输入成本价','error')
					return false
				}
				if(data.form.price < data.form.cost * 1.25){
					uni.$showMsg('价格偏低','error')
					return false
				}
				if(!data.form.stock){
					uni.$showMsg('请输入商品库存','error')
					return false
				}
				if(!data.form.isPostage){
					if(!data.form.postage){
						uni.$showMsg('请输入邮费','error')
						return false
					}
				}
				if(!data.form.description){
					uni.$showMsg('请输入图文详情','error')
					return false
				}
				let dataInfo = {...data.form, ...params}
				console.log('dataInfo',dataInfo)
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
