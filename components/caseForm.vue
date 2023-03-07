<template>
	<view>
		<view v-if="ready">
			<u-form labelPosition="left" ref="uForm" :model="form">
				<u-form-item :label="item.label" borderBottom="" v-for="(item,key) in form" labelWidth="180rpx" class="form_item">
					<template v-if="item.type == 'text'">
						<view :style="item.value?'color:#333':'color:#ccc'" style="width:100%">
							{{item.value || item.placeholder || item.label}}
						</view>
					</template>
					<template v-if="item.type == 'input'">
						<u-input :type="item.inputType || 'text'" v-model="item.value"
							:placeholder="item.placeholder || item.label"
							:password-icon="true"
							clearable
							:disabled="item.disabled ? item.disabled: false" @input="input($event,key)" :border="none"/>
							<u-icon v-show="item.icon_show" name="arrow-right" color="#444" size="28"></u-icon>
					</template>
					<template v-if="item.type == 'radio'">
						<u-radio-group v-model="item.value">
							<u-radio
								active-color="#268839"
								@change="radioChange($event,key)" 
								v-for="(item, index) in item.option" :key="index" 
								:name="item.name"
								:disabled="item.disabled"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</template>
					<template v-if="item.type == 'checked'">
						<u-checkbox-group @change="checkboxGroupChange($event,key)">
							<u-checkbox 
								active-color="#268839"
								v-model="item.value" 
								v-for="(item, index) in item.option" :key="index" 
								:name="item.name"
							>{{item.name}}</u-checkbox>
						</u-checkbox-group>
					</template>
					<template v-if="item.type == 'picker'">
						<view @click="pickerClick(key,item)" :style="item.value?'color:#333':'color:#ccc'"
							style="width:100%">
							{{item.valueLabel || `请选择${item.label}`}}
						</view>
						<u-icon v-show="item.icon_show" name="arrow-right" color="#444" size="28"></u-icon>
						<u-picker mode="selector" v-model="item.show" :range="item.option" range-key="label"
							@confirm="pickerConfirm" @cancel="pickerCancel" mask-close-able confirm-color="#268839"></u-picker>
					</template>
					<template v-if="item.type == 'switch'">
						<u-switch space="2" :value="item.value" v-model="item.show" activeColor="#268839" inactiveColor="rgb(230, 230, 230)"
							:activeValue="1" :inactiveValue="0" asyncChange @change="switchChange($event,key)">

						</u-switch>
					</template>
					<!-- 单图 -->
					<template v-if="item.type == 'upload'">
						<!-- <u-upload :fileList="item.option" :sizeType="sizeType" @afterRead="afterRead"
							:placeholder="item.placeholder || item.label" @delete="deletePic" :name="key"
							:previewFullImage="true"></u-upload> -->
							<view class="upload" @click="ChoosePicture(key,item)" v-if="item.value.length == 0">
								<u-icon name="plus" class="add"></u-icon>
								<view class="change">选择图片</view>
							</view>
							<view class="upload2" v-else>
								<view class="dele" @click="close(key,item)">
									<u-icon name="close" class="close"></u-icon>
								</view>
								<u-image @click="photos(key,item)" width="100%" height="100%" border-radius="15rpx" :src="item.value">
								</u-image>
							</view>
					</template>
					<template v-if="item.type == 'datetime'">
						<view @click="pickerClick(key,item)" :style="item.value?'color:#333':'color:#ccc'"
							style="width:100%">
							{{item.value || `请选择${item.label}`}}
						</view>
						<u-icon v-show="item.icon_show" name="arrow-right" color="#444" size="28"></u-icon>
						<u-picker show-time-tag v-model="item.show" :value="Number(new Date())"
							:mode="item.inputType" :params="paramsTime" @confirm="pickerConfirm" @cancel="pickerCancel"
							mask-close-able confirm-color="#268839"></u-picker>
					</template>
					
					<template v-if="item.type == 'yymmdd'">
						<view @click="pickerClick(key,item)" :style="item.value?'color:#333':'color:#ccc'"
							style="width:100%">
							{{item.value || `请选择${item.label}`}}
						</view>
						<u-icon v-show="item.icon_show" name="arrow-right" color="#444" size="28"></u-icon>
						<u-picker v-model="item.show" :value="Number(new Date())"
							:mode="item.inputType" :params="paramsTimeYmd" @confirm="pickerConfirm" @cancel="pickerCancel"
							mask-close-able confirm-color="#268839"></u-picker>
					</template>
					<template v-if="item.type == 'hhmmss'">
						<view @click="pickerClick(key,item)" :style="item.value?'color:#333':'color:#ccc'"
							style="width:100%">
							{{item.value || `请选择${item.label}`}}
						</view>
						<u-icon v-show="item.icon_show" name="arrow-right" color="#444" size="28"></u-icon>
						<u-picker v-model="item.show" :value="Number(new Date())"
							:mode="item.inputType" :params="paramsTimeHms" @confirm="pickerConfirm" @cancel="pickerCancel"
							mask-close-able confirm-color="#268839"></u-picker>
					</template>
					<template v-if="item.type == 'place'">
						<view @click="pickerClick(key,item)" :style="item.value?'color:#333':'color:#ccc'"
							style="width:100%">
							{{item.value || `请选择${item.label}`}}
						</view>
						<u-icon v-show="item.icon_show" name="arrow-right" color="#444" size="28"></u-icon>
						<u-picker v-model="item.show" :value="Number(new Date())"
							:mode="item.inputType " @confirm="pickerConfirm" @cancel="pickerCancel"
							mask-close-able confirm-color="#268839"></u-picker>
					</template>
				</u-form-item>
			</u-form>
		</view>
	</view>
</template>

<script setup>
	import {reactive,ref,nextTick,onMounted } from "vue";
	import {uploadFilePromise} from '@/utils/fileUpload.js'
	import {userStore} from "@/store/index.js"
	
	const props = defineProps({
		formData: {
			type: Object,
			default: {}
		},
		index: {
			type: Number,
			default: 0,
		}
	})
	const emit = defineEmits(['refreshForm'])
	
	const sizeType = reactive(['compressed'])
	let form = reactive({})
	let rules = reactive({})
	let paramsTime = reactive({
		year: true,
		month: true,
		day: true,
		hour: true,
		minute: true,
		second: true
	})
	let paramsTimeYmd = reactive({
		year: true,
		month: true,
		day: true,
		hour: false,
		minute: false,
		second: false
	})
	let paramsTimeHms = reactive({
		year: false,
		month: false,
		day: false,
		hour: true,
		minute: true,
		second: true
	})
	let key = reactive('')
	let value = ref(0)
  let ready =	ref(false)
	let imgUrl = ref('')
	
	
	onMounted(()=>{
		init()
	})
	const init = () => {
		form = props.formData.form
		rules = props.formData.rules
		nextTick(()=>{
			ready.value = true
		})
		// console.log('form',form)
	}
	const radioChange = (e,key) => {
		// console.log(e);
		// console.log(form[key])
		form[key].value = e
		emit('refreshForm',form)
	}
	const checkboxGroupChange = (e,key) => {
		form[key].value = e
		emit('refreshForm',form)
	}
	const switchChange = (e,key) => {
		// console.log(e)
		// console.log(key)
		form[key].value = e
		form[key].show != form[key].show
		emit('refreshForm',form)
	}
	
	const input = (e,key) =>{
		form[key].value = e			
		emit('refreshForm',form)
	}
	
	const pickerClick = (seleKey,item) =>{
		if(item.bind){
			if(form[item.bind].value){
				uni.showMsg('请先输入' + form[item.bind].label)
				return
			}
		}
		key = seleKey
		form[key].show = true
	}
	const pickerConfirm = (value) =>{
		if(form[key].type == 'picker'){
			console.log('value',value)
			form[key].valueLabel = form[key].option[value].label
			form[key].value = form[key].option[value].value
		}
		if(form[key].type == 'datetime'){
			// console.log('value',value)
			form[key].value = `${value.year}-${value.month}-${value.day} ${value.hour}:${value.minute}:${value.second}`
		}
		if(form[key].type == 'yymmdd'){
			form[key].value = `${value.year}-${value.month}-${value.day}`
		}
		if(form[key].type == 'hhmmss'){
			form[key].value = `${value.hour}:${value.minute}:${value.second}`
		}
		if(form[key].type == 'place'){
			console.log('value',value)
			form[key].value = value.province.name+' '+value.city.name+' '+value.area.name
		}
		emit('refreshForm',form)
	}
	
	const pickerCancel = () =>{
		if(form[key]){
			form[key].show = false
		}
	}
	
	const deletePic = (event) => {
		form[`${event.name}`]['value'].splice(event.index, 1)
	}
	// 多文件
	const afterRead = async (event) =>{
		console.log(event)
		let lists = [].concat(event.file)
		let fileListLen = form[`${event.name}`]['value'].length
		lists.map((item) => {
			form[`${event.name}`]['value'].push({
				...item,
				status: 'uploading',
				message: '上传中'
			})
		})
		for (let i = 0; i < lists.length; i++) {
			const result = await uploadFilePromise(lists[i].url)
			console.log(result)
			let item = form[`${event.name}`]['value'][fileListLen]
			form[`${event.name}`]['value'].splice(fileListLen, 1, Object.assign(item, {
				status: 'success',
				message: '',
				url: result
			}))
			fileListLen++
		}
	}
	
	// 单文件
	const ChoosePicture = (seleKey,item) => {
		if(item.bind){
			if(form[item.bind].value){
				uni.showMsg('请先输入' + form[item.bind].label)
				return
			}
		}
		key = seleKey
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
	      const imageUrl = JSON.parse(result).data.url
	      form[key].value = userStore().systemConfig.picUrlPre + imageUrl
				emit('refreshForm',form)
	    }
	  });
	}
	// 预览
	const photos = (seleKey,item) => {
		if(item.bind){
			if(form[item.bind].value){
				uni.showMsg('请先输入' + form[item.bind].label)
				return
			}
		}
		key = seleKey
		const imgList = [form[key].value];
		// console.log("imgList: ", imgList);
		uni.previewImage({
			count: imgList.length,
			urls: imgList,
			success: function(res) {
				console.log(res);
			}
		});
	}
	const close = (seleKey,item) => {
		if(item.bind){
			if(form[item.bind].value){
				uni.showMsg('请先输入' + form[item.bind].label)
				return
			}
		}
		key = seleKey
		uni.showModal({
			title: '提示',
			content: '您确定要删除此项吗？',
			success: function(res) {
				if (res.confirm) {
					form[key].value = ''
				}
			}
		});
	}
</script>

<style lang="scss" scoped>
	.form_item{
		width: 90%;
		margin: 0 auto;
		min-height: 100rpx;
	}
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
</style>
