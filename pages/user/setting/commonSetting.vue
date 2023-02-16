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
							<u-avatar size="70" :src="store.userInfo.avatar"></u-avatar>
						</u-cell-item>
					</u-cell-group>
				</view>
				<view class="cellView">
					<u-cell-group>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="姓名"
							@click="changePath('../../../pages/user/setting/changeProfile',0)">
							<text>李泽希</text>
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="手机号码"
							@click="changePath('../../../pages/user/setting/changeProfile',1)">
							<text>13265664589</text>
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="会员等级">
							<text>v1</text>
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="身份证号"
							@click="changePath('../../../pages/user/setting/changeProfile',2)">
							<text>4415232199811207979</text>
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
						<u-input height="68" placeholder="手机/邮箱" :custom-style="customStyle" v-model="dataform.phone" />
					</u-form-item>
					<u-form-item label="问题和意见" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}">
						<u-input height="248" placeholder="请输入内容" type="textarea" maxlength="999"
							:custom-style="customStyle" v-model="dataform.context" />
					</u-form-item>
					<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
				</u-form>
			</view>
			<view class="dataform pad-32" v-if="type === 3">
				<view class="cellView">
					<u-cell-group title="卡1"
						:title-style="{'font-size': '28rpx','font-weight': '500','padding':'5rpx 26rpx'}">
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}" title="张斌"
							:arrow="false" :style="{'height':'104rpx'}">
							<text>中国农业银行</text>
						</u-cell-item>
						<u-cell-item :title-style="{'font-size': '28rpx','font-weight': '500'}"
							title="6228480039363319573" :arrow="false" :style="{'height':'104rpx'}">
						</u-cell-item>
					</u-cell-group>
				</view>
				<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle" @click="changeBankcard">
					添加银行卡</u-button>
			</view>
			<view class="dataform pad-32 m-t-48" v-if="type === 4">
				<u-form :model="dataform">
					<u-form-item label="银行" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入银行名称" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-form-item>
					<u-form-item label="持卡人" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入持卡人" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-form-item>
					<u-form-item label="账号" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入账号" :custom-style="customStyle" v-model="dataform.phone" />
					</u-form-item>
					<u-form-item label="支付密码" label-position="top" :label-style="{'font-size': '24rpx','font-weight': '500','color': '#757575',
						'height': '34rpx','padding': '0 26rpx'}" :style="{'padding': '10rpx 0'}">
						<u-input height="68" placeholder="请输入支付密码" :custom-style="customStyle"
							v-model="dataform.phone" />
					</u-form-item>
					<u-button hover-class="none" :hair-line="false" :custom-style="customBtnStyle">提交</u-button>
				</u-form>
			</view>
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
	import {userStore} from "@/store/index.js"
	import {updateUserInfo} from "@/api/user.js"
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
				return '银行信息'
				break;
			case 4:
				return '添加银行卡信息'
				break;
		}
	})
	const dataform = reactive({})
	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
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
						const {code = 500,data = {}} = JSON.parse(uploadFileRes.data)
						if(code === 200) {
							uni.hideLoading()
							store.userInfo.avatar = data.url
							updateUserInfo(store.userInfo).then(res => {
								uni.showToast({
									title:"修改成功",
									icon:"success"
								})
							}).catch(err => {
								uni.showToast({
									title:"修改失败",
									icon:"error"
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
	const changeBankcard = () => {
		type.value = 4
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
