<template>
	<view>
		<caseForm :formData.sync="formData" @refreshForm="refreshForm" ref="form"></caseForm>
		<button @click="submitEvent">提交</button>
	</view>
</template>

<script setup>
	import caseForm from '@/components/caseForm.vue'
	import {reactive,ref,nextTick,onMounted } from "vue";
	
	const formData = reactive({
		form: {
			event_code:{
				label: '姓名', // 文本
				value: '' ,
				type: 'input' ,
				inputType: 'text',
				icon_show: false,
			},
			event_password:{
				label: '密码',
				value: '' ,
				type: 'input',
				inputType: 'password',
				icon_show: false,
			},
			event_sele:{
				label: '单列',
				value: '' ,
				valueLabel: '' ,
				type: 'picker' ,
				mode: 'selector', // 单列
				option: [{value:1,label:'中国'},{value:2,label:'美国'}, {value:3,label:'日本'}],
				show: false,
				icon_show: true,
			},
			// event_areaid:{
			// 	label: '多列',
			// 	value: '' ,
			// 	valueLabel: '' ,
			// 	type: 'picker' ,
			// 	mode: 'multiSelector', // 单列
			// 	option: [[111, 222, 333], ['AAA', 'BBB', 'CCC']],
			// 	show: false,
			// 	icon_show: true,
			// },
			is_select:{
				label: '是否选中', 
				value: 0 ,
				type: 'switch' ,
				show: false,
			},
			event_time:{
				label: '全时间',
				value: '',
				type: 'datetime',
				inputType: 'time' , 
				show: false, // date显示
				icon_show: true,
			},
			event_ymd:{
				label: '年月日',
				value: '',
				type: 'yymmdd',
				inputType: 'time' , 
				show: false, // date显示
				icon_show: true,
			},
			event_hms:{
				label: '时分秒',
				value: '',
				type: 'hhmmss',
				inputType: 'time' , 
				show: false, // date显示
				icon_show: true,
			},
			event_place:{
				label: '地点',
				value: '',
				type: 'place', 
				inputType: 'region', 
				show: false, // region显示
				icon_show: true,
			},
			event_upload:{
				label: 'LOGO',
				value: '',
				valueLabel:'logo',
				type: 'upload',
				// option:[{url:'xxxxx'}],
			},
			event_sex:{
				label: '性别',
				value: '男',
				type: 'radio',
				option:[{name: '男',disabled: false},{name: '女',disabled: false}]
			},
			event_hobby:{
				label: '爱好',
				value: '',
				type: 'checked',
				option:[{name: '抽烟',checked: false,disabled: false},
								{name: '喝酒',checked: false,disabled: false},
								{name: '打游戏',checked: false,disabled: false}]
			},
		},
	})
	const form = ref(null);
 const loadAreaList = () =>{
		nextTick(()=>{
			form.value.init(formData)
		})
	}
				
  const refreshForm = (form) => {
		console.log("form: ",form);
		formData.form = JSON.parse(JSON.stringify(form))
	}
	const submitEvent = () => {
		let form = JSON.parse(JSON.stringify(formData.form))
		let params = {}
		for(let key in form){
			 eval("params." + [key] + "='" + form[key].value+"'");
		}
		console.log('params',params)
	}
</script>

<style>

</style>
