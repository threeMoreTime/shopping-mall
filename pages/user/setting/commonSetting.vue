<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">{{typeName}}</view>
			<view class=""></view>
		</view>
		<view class="box">
			<view class="dataform" v-if="type === 0">
				<view class="cellView">
					<u-cell-group>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="头像"
							:value-style="{'display': 'flex','align-items': 'center','justify-content': 'flex-end'}"
							@click="changeAvatar">
							<u-avatar size="70" :src="store.systemConfig.picUrlPre + store.userInfo.avatar"></u-avatar>
						</u-cell-item>
					</u-cell-group>
				</view>
				<view class="cellView">
					<u-cell-group>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="姓名"
							@click="changePath('../../../pages/user/setting/changeProfile',0)">
							<text>{{store.userInfo.realName}}</text>
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="手机号码"
							@click="changePath('../../../pages/user/setting/changeProfile',1)">
							<text>{{store.userInfo.phone}}</text>
						</u-cell-item>
						<!-- <u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="会员等级">
							<text>v1</text>
						</u-cell-item> -->
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="身份证号"
							@click="changePath('../../../pages/user/setting/changeProfile',2)">
							<text>{{store.userInfo.cardId}}</text>
						</u-cell-item>
					</u-cell-group>
				</view>
			</view>
			<view class="dataform" v-if="type === 1">
				<view class="cellView">
					<u-cell-group>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="换绑手机号"
							@click="changePath('../../../pages/user/setting/securitySettings',0)">
						</u-cell-item>
					</u-cell-group>
				</view>
				<view class="cellView">
					<u-cell-group>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="修改登录密码"
							@click="changePath('../../../pages/user/setting/securitySettings',1)">
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="修改支付密码"
							@click="changePath('../../../pages/user/setting/securitySettings',2)">
						</u-cell-item>
					</u-cell-group>
				</view>
			</view>
			<view class="dataform pad-32" v-if="type === 2">
				<u-form :model="dataform">
					<u-form-item label="联系方式" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}">
						<u-input height="68" placeholder="手机/邮箱" :custom-style="customStyle"
							v-model="dataform.mobile" />
					</u-form-item>
					<u-form-item label="问题和意见" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}">
						<u-input height="248" placeholder="请输入内容" type="textarea" maxlength="999"
							:custom-style="customStyle" v-model="dataform.content" />
					</u-form-item>
					<u-button @click="present" hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交
					</u-button>
				</u-form>
			</view>
			<view class="dataform pad-32" v-if="type === 3">
				<view class="cellView">
					<u-cell-group v-show="Object.keys(bankCardInfo).length > 0"
						:title-style="{'font-size': '28rpx','font-weight': '500','padding':'5rpx 26rpx'}">
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" :title="bankCardInfo.realName"
							:arrow="false" :style="{'height':'104rpx'}">
							<text>{{bankCardInfo.bankName}}</text>
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" :title="bankCardInfo.bankCardNo"
							:arrow="false" :style="{'height':'104rpx'}">
							<text @click="unbind">解绑</text>
						</u-cell-item>
					</u-cell-group>
				</view>
				<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle" @click="changeBankcard(bankCardInfo)">{{bankCardName}}</u-button>
			</view>
			<view class="dataform pad-32 m-t-48" v-if="type === 4">
				<u-form :model="dataform">
					<u-form-item label="银行" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入银行名称" :custom-style="customStyle"
							v-model="dataform.bankName" />
					</u-form-item>
					<u-form-item label="开户行" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入开户行" :custom-style="customStyle"
							v-model="dataform.bankOpenName" />
					</u-form-item>
					<u-form-item label="持卡人" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入持卡人" :custom-style="customStyle"
							v-model="dataform.realName" />
					</u-form-item>
					<u-form-item label="账号" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入账号" :custom-style="customStyle"
							v-model="dataform.bankCardNo" />
					</u-form-item>
					<u-form-item label="身份证" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入身份证" :custom-style="customStyle"
							v-model="dataform.cardId" />
					</u-form-item>
					<u-form-item label="支付密码" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input type="password" :password-icon="false" height="68" placeholder="请输入支付密码" :custom-style="customStyle"
							v-model="dataform.payPassword" />
					</u-form-item>
					<u-button v-if="Object.keys(bankCardInfo).length > 0" @click="updateBank" hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
					<u-button v-else @click="bankSubmit" hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
				</u-form>
			</view>
			<view class="popup" v-show="popupShow">
				<u-icon class="close" name="close" @click="close"></u-icon>
				<u-message-input style="margin-top: 5%;" @click="getKey" :focus="true" maxlength="6" v-model="valueInput" :dot-fill="true" :breathe="true"></u-message-input>
				<u-keyboard mode="number" @confirm="confirmKey" @change="valChange" @backspace="backspace" :show-tips="false" :safe-area-inset-bottom="true" v-model="keyShow" z-index="9999" :mask="false"></u-keyboard>
			</view>
			<view class="mask" v-show="maskShow" @click="back"></view>
			
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		computed,
		reactive,
		ref
	} from "vue";
	import {
		userStore
	} from "@/store/index.js"
	import {
		updateUserInfo,
		addFeedback,
		findBankCard,
		addBankCard,
		updateBankCard,
		delBankCard
	} from "@/api/user.js"
	const store = userStore()
	let customStyle = {
		'background': '#FFF',
		'border-radius': '16rpx',
		'font-size': '28rpx',
		'font-weight': '500',
		'padding': '14rpx 26rpx'
	}
	let customBtnStyle = {
		'margin-top': '104rpx',
		'height': '80rpx',
		'background': '#1C6732',
		'border-radius': '16rpx',
		'font-size': '28rpx',
		'font-weight': '500',
		'color': '#FFFFFF'
	}
	onLoad((option) => {
		// console.log(option)
		type.value = option?.typeId ? parseInt(option.typeId) : 0
	})
	// 当前页面的类型 个人资料(0) 安全设置(1) 意见反馈(2) 银行信息(3) 添加银行卡信息(4)
	const type = ref(0)
	// 当前页面的类型名称
	const typeName = computed(() => {
		switch (type.value) {
			case 0:
				return '个人资料'
				break;
			case 1:
				return '安全设置'
				break;
			case 2:
				return '意见反馈'
				break;
			case 3:
				gainBankCard()
				return '银行信息'
				break;
			case 4:
				return bankCardName=='添加银行卡'? '添加银行卡信息':'修改银行卡信息'
				break;
		}
	})
	const dataform = reactive({
		content: "",
		mobile: "",
		bankName: '',
		bankOpenName: '',
		// userName: '',
		bankCardNo: '',
		payPassword: '',
		realName: '',
		cardId: '',
	})
	const bankCardInfo = ref({})
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
	// 获取银行卡信息
	const gainBankCard = () => {
		findBankCard().then(res => {
			bankCardInfo.value = res
			if(Object.keys(bankCardInfo.value).length === 0){
				bankCardName.value = '添加银行卡'
			}else{
				bankCardName.value = '修改银行卡'
			}
		})
	}
	// bankCardInfo?'修改银行卡':'添加银行卡'
	const bankCardName = ref(null)

  // 解绑
	let popupShow = ref(false)
	let maskShow = ref(false)
	let keyShow = ref(false)
	let valueInput = ref('') // 输入的密码
	const unbind = () => {
		popupShow.value = true
		maskShow.value = true
		keyShow.value = true
	}
	const getKey = () =>{
		keyShow.value = true
	}
	// 键盘输入
	const valChange = (val) =>{
		if(valueInput.value.length < 6){
			valueInput.value += val
			return false
		}
	}
	// 退格键被点击
	const backspace = () =>{
		valueInput.value = valueInput.value.slice(0, -1)
	}
	// 键盘确定
	const confirmKey = () =>{
		console.log('valueInput',valueInput.value)
		if(valueInput.value.length < 6){
			uni.$showMsg('请输入密码','error')
			return false
		}
		let payPassword = valueInput.value
		delBankCard(payPassword).then(res=>{
			uni.$showMsg('解绑成功','success')
			popupShow.value = false
			maskShow.value = false
			keyShow.value = false
			gainBankCard()
		})
	}
	const back = ()=>{
		popupShow.value = false
		maskShow.value = false
		keyShow.value = false
	}
  // 修改银行卡
	const updateBank = () => {
		bankSubmit()
	}
	// 添加银行卡
	const bankSubmit = () => {
		let params = {
			bankName: dataform.bankName,
			bankOpenName: dataform.bankOpenName,
			bankCardNo: dataform.bankCardNo,
			realName: dataform.realName,
			payPassword: dataform.payPassword,
			cardId: dataform.cardId,
		}
		if (!params.bankName) {
			uni.$showMsg('请输入银行名称!', 'error')
			return false
		}
		if (!params.bankOpenName) {
			uni.$showMsg('请输入开户行!', 'error')
			return false
		}
		if (!params.realName) {
			uni.$showMsg('请输入真实姓名', 'error')
			return false
		}
		if (!params.bankCardNo) {
			uni.$showMsg('请输入银行卡号!', 'error')
			return false
		}
		if (!params.cardId) {
			uni.$showMsg('请输入身份证', 'error')
			return false
		}
		if (!params.payPassword) {
			uni.$showMsg('请输入支付密码', 'error')
			return false
		}
		if (!/^[0-9]\d{5}$/.test(params.payPassword)) {
			uni.showToast({
				title: '密码只能是6位数字！',
				icon: 'error'
			})
			return false
		}
		if(bankCardName.value == '添加银行卡'){
			addBankCard(params).then(res => {
				uni.showToast({
					title: '添加银行卡成功！',
					icon: "success"
				})
				setTimeout(()=>{
					type.value = 3
				},2000)
			})
		}else{
			updateBankCard(params).then(res => {
				uni.showToast({
					title: '修改银行卡成功！',
					icon: "success"
				})
				setTimeout(()=>{
					type.value = 3
				},2000)
			})
		}
	}

	// 提交意见
	const present = () => {
		let params = {
			content: dataform.content,
			mobile: dataform.mobile
		}
		if (!params.mobile) {
			uni.showToast({
				title: '请输入联系方式！',
				icon: 'error'
			})
			return false
		}
		if (!params.content) {
			uni.showToast({
				title: '请填写问题和意见！',
				icon: 'error'
			})
			return false
		}
		// console.log(params,'params')
		addFeedback(params).then(res => {
			uni.showToast({
				title: '意见反馈成功！',
				icon: "success"
			})
		})
	}

	// 更新头像
	const changeAvatar = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['camera', 'album'],
			success: async function(res) {
				uni.showLoading({
					title: '图片上传中',
				})
				// console.log(res);
				const tempFiles = res.tempFiles[0];
				uni.uploadFile({
					url: '/dev/client/user/system/image', //仅为示例，非真实的接口地址
					file: tempFiles,
					header: {
						'token': store.token,
					},
					name: 'multipart',
					formData: {
						"model": "user"
					},
					success: (uploadFileRes) => {
						// console.log('啊啊啊啊',uploadFileRes)
						const {
							code = 500, data = {}
						} = JSON.parse(uploadFileRes.data)
						if (code === 200) {
							uni.hideLoading()
							store.userInfo.avatar = data.url
							updateUserInfo(store.userInfo).then(res => {
								uni.showToast({
									title: "修改成功",
									icon: "success"
								})
							}).catch(err => {
								uni.showToast({
									title: "修改失败",
									icon: "error"
								})
							})
						}
					}
				});
			}
		});
	}

	// 选择头像
	const uploadFilePromise = url => {
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: '/dev' + '/client/user/system/image',
				fileType: "image",
				filePath: url,
				name: 'multipart',
				success: (res) => {
					uni.hideLoading();
					console.log('res', res)
					setTimeout(() => {
						resolve(res.data)
					}, 1000)
				},
				fail: (err) => {
					uni.hideLoading();
					uni.$showMsg('图片上传失败')
				}
			});
		})
	}
	// 跳转添加银行卡
	const changeBankcard = (data) => {
		if(Object.keys(bankCardInfo.value).length === 0){
			typeName.value = '添加银行卡信息'
		}else{
			typeName.value = '修改银行卡信息'
		}
		type.value = 4
		dataform.bankName = data.bankName
		dataform.bankOpenName = data.bankOpenName
		dataform.bankCardNo = data.bankCardNo
		dataform.realName = data.realName
		dataform.cardId = data.cardId
		// dataform = {
		// 	bankName: data.bankName,
		// 	bankOpenName: data.bankOpenName,
		// 	bankCardNo: data.bankCardNo,
		// 	realName: data.realName,
		// 	cardId: data.cardId,
		// }
	}
	// 路由跳转
	const changePath = (path, id) => {
		if (path) {
			uni.navigateTo({
				url: id ? path + '?typeId=' + id : path
			})
		}
	}
</script>

<style lang="scss" scoped>
	.mask {
		z-index: 10;
		position: fixed;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
		background-color: rgba(0, 0, 0, 1);
		opacity: 0.51;
		overflow: hidden;
	}
	.popup{
		position: fixed;
		bottom: 0;
		// margin-top: 100%;
		// transform: translateX(-50%);
		z-index: 999;
		width: 100%;
		height: 45vh;
		border-top-right-radius: 15rpx;
		border-top-left-radius: 15rpx;
		background-color: #FFFFFF;
		
		.close{
			z-index: 999;
			width: 100%;
			position: absolute;
			top: 5%;
			left: 2%;
		}
		.h3{
			width: 100%;
			text-align: center;
			position: absolute;
			top: 5%;
		}
		.money{
			width: 100%;
			height: 150rpx;
			// border: solid red;
			margin-top: 20%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.money_2{
				font-size: 60rpx;
				font-weight: bold;
			}
		}
	}
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #EFEFEF;
		position: relative;

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
