<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">{{typeName}}</view>
			<view class=""></view>
		</view>
		<view class="main">
				<view class="center">
					<view class="upload" v-if="collectionCode[typeId-1].length == 0">
						<u-icon name="error-circle" class="add"></u-icon>
						<view class="change">暂无收款码</view>
						<view class="btn" @click="ChoosePicture(typeId)">去设置</view>
					</view>
					<view class="upload2" v-else>
						<u-image width="100%" height="100%" :src="collectionCode[typeId-1]">
						</u-image>
					</view>
				</view>
				<view v-show="collectionCode[typeId-1].length != 0" class="reset" @click="ChoosePicture(typeId)">重新设置</view>
		</view>
	</view>
</template>

<script setup>
	import {updateUserInfo} from '@/api/user.js'
	import {uploadFilePromise} from '@/utils/fileUpload.js'
	import {onLoad} from "@dcloudio/uni-app";
	import {reactive,ref} from "vue";
	import {userStore} from "@/store/index.js"
	const typeName = ref('')
	const typeId = ref(null)
	// const collectionCode = reactive({
	//  wx: '',
	//  alipay: ''
	// })
	const collectionCode = reactive([userStore().userInfo.weixinPaymentPic||'', userStore().userInfo.zhifubaoPaymentPic||''])
	
	onLoad((options)=>{
		typeId.value = options.id
		if(options.id == 1){
			typeName.value = '微信收款码'
		}else{
			typeName.value = '支付宝收款码'
		}
		// console.log("options: ",typeId.value);
	})

  // 选择二维码
	const ChoosePicture = (id) => {
		const pictureTypes = {
		  1: "wx",
		  2: "alipay",
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
				collectionCode[id-1] = userStore().systemConfig.picUrlPre + imageUrl
				let params = {}
				if(id == 1){
					params = {weixinPaymentPic:collectionCode[id-1]}
				}else{
					params = {zhifubaoPaymentPic:collectionCode[id-1]}
				}
				updateUserInfo(params).then(res=>{
					console.log('res',res)
					uni.$showMsg('收款码设置成功','success')
				})
	    }
	  });
	}

	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #EFEFEF;
		position: relative;

		.main {
			width: 100%;
			height: calc(100% - 176rpx);
			background-color: #1C6732;
			position: relative;
			.reset{
				width: 100%;
				height: 70rpx;
				background-color: #1c6732;
				color: #EFEFEF;
				text-align: center;
				line-height: 70rpx;
				font-size: 30rpx;
				border-radius: 10rpx;
				position: absolute;
				bottom: 500rpx;
			}
			.center{
				position: absolute;
				left: 50%;
				top: 10%;
				transform: translateX(-50%);
				width: 90%;
				height: 600rpx;
				border-radius: 15rpx;
				background-color: #efefef;
				
				.upload {
					margin: 30rpx auto;
					width: 500rpx;
					height: 500rpx;
					background-color: #efefef;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.btn{
						width: 40%;
						height: 70rpx;
						background-color: #1c6732;
						color: #EFEFEF;
						text-align: center;
						line-height: 70rpx;
						font-size: 30rpx;
						border-radius: 10rpx;
						position: absolute;
						bottom: 100rpx;
					}
				
					.add {
						font-size: 150rpx;
						color: #606266;
					}
				
					.change {
						color: #606266;
					}
				}
				
				.upload2 {
					margin: 30rpx auto;
					// background-color: #f4f5f6;
					width: 500rpx;
					height: 500rpx;
					position: relative;
				}
			}
		}

		.cellView {
			margin-top: 32rpx;
		}

		.m-t-48 {
			margin-top: 48rpx;
		}

		.pad-32 {
			padding: 0 32rpx;
		}

		.box {
			width: 100%;
			background-color: #EFEFEF;
		}

		.tabs {
			width: 100%;
			height: 176rpx;
			padding: 20rpx 32rpx;
			background-color: #1C6732;
			// z-index: 999;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;

			.title {
				font-size: 32rpx;
				font-weight: 500;
				color: #FFFFFF;
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
	}
</style>
