<template>
	<view class="bg">
		<view class="box">
			<view class="watering">
				<view class="wateringBg"></view>
				<text>1000</text>
				<view class="fertilizationBg"></view>
				<text>1000</text>
			</view>
			<view class="integralList">
				<view 
					class="integralItem" 
					v-for="item in integralList"
					:key="item.id"
					:style="{'margin-top': item.top + 'rpx','margin-left': item.left + 'rpx'}"
					:class="[IntegraClassIndex === item.id? 'integralItemAct' : '']"
					@click="changeIntegra(item.id)"
					>{{item.integral}}</view>
			</view>
			<view class="treeBg" 
				@click="changeTreeClass" 
				:class="[
					TreeClassIndex ? 'treeBgAtt' : '',
					`${changeTreeName()}`
					]"></view>
		</view>
	</view>
</template>

<script setup>
	import {
		nextTick,
		reactive,
		ref
	} from "vue";
	import _ from "lodash"
	const integralList = reactive([
		{id: 1,integral: 145, top:100, left:100},
		{id: 2,integral: 75, top:100, left:100},
		{id: 3,integral: 35, top:100, left:100},
		{id: 4,integral: 135, top:100, left:100},
		{id: 5,integral: 25, top:100, left:100}
	])
	integralList.map(item => {
		item.top = getRandomInt(0,300)
		item.left = getRandomInt(0,600)
	})
	// 点击树苗拉伸样式索引
	const TreeClassIndex = ref(0)
	// 点击能量积分索引
	const IntegraClassIndex = ref(null)
	// 树苗能量总积分
	const treeIntegra = ref(0)
	// 树苗当前的大小

	let timer = null
	const changeTreeClass = _.throttle(() => {
		TreeClassIndex.value = 1
		timer = setTimeout(() => {
			TreeClassIndex.value = 0
			clearTimeout(timer)
		}, 2000)
	},2000)
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const changeIntegra = _.throttle((id) => {
		IntegraClassIndex.value = id
		setTimeout(() => {
			for (let i = 0; i < integralList.length; i++) {
				if(integralList[i].id === IntegraClassIndex.value) {
					treeIntegra.value += integralList[i].integral
					integralList.splice(i, 1);
				}
			}
		},500)
		changeTreeName()
	},600)
	// 能量到达某个区间就gen
	const changeTreeName = () => {
		if (treeIntegra.value >= 0 && treeIntegra.value <= 99) {
			return 'treeBg'
		} else if(treeIntegra.value >= 100 && treeIntegra.value <= 200) {
			return 'treeBg2'
		} else {
			return 'treeBg3'
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		background: url("@/static/img/farmGame.png") 100% no-repeat;
		background-size: 100% 100%;
		position: relative;
		.box {
			width: 100%;
			height: 100%;
			// background: url("@/static/img/farmGame.png") 100% no-repeat;
			// background-size: 100% 100%;
			.watering {
				width: 133rpx;
				position: absolute;
				right: 30rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 182rpx;
				text {
					background-color: #fff;
					border-radius: 16rpx 16rpx 16rpx 16rpx;
					padding: 4rpx 12rpx;
					font-weight: 800;
					font-size: 28rpx;
					color: #028836;
				}
			}
			.wateringBg {
				transform: translateY(20rpx);
				width: 140rpx;
				height: 140rpx;
				background: url("@/static/img/watering.png") 100% no-repeat;
				background-size: 100% 100%;
			}
			.fertilizationBg {
				margin-top: 50rpx;
				width: 110rpx;
				height: 110rpx;
				background: url("@/static/img/fertilization.png") 100% no-repeat;
				background-size: 100% 100%;
			}
			.integralList {
				width: 100%;
				height: 300rpx;
				position: absolute;
				top: 50vh;
				// transform: translateY(55vh);
				transform-origin: center bottom;
				.integralItem {
					width: 116rpx;
					height: 116rpx;
					background: url("@/static/img/energyBg.png") 100% no-repeat;
					background-size: 100% 100%;
					text-align: center;
					line-height: 116rpx;
					font-size: 36rpx;
					font-weight: 800;
					color: #2BAE5F;
					z-index: 9;
					position: absolute;
					animation: shake1 3s ease-in-out infinite;
				}
				.integralItemAct {
					animation: shake-opacity .5s ease-in-out;
				}
			}
			@keyframes shake1 {
				0% {
					transform: translateY(0);
				}
			
				50% {
					transform: translateY(-14rpx);
				}
			
				100% {
					transform: translateY(0);
				}
			}
			
			@keyframes shake-opacity {
				0% {
					opacity: 1;
				}
			
				100% {
					opacity: 0;
				}
			}
			
			.treeBg {
				width: 226rpx;
				height: 316rpx;
				// border: 1px solid red;
				position: absolute;
				top: 70vh;
				left: 262rpx;
				background: url("@/static/img/treeBG1.png") 100% no-repeat;
				background-size: 100% 100%;
				transform-origin: center bottom;
				animation: shake-top 3s ease-in-out infinite;
			}
			
			.treeBg2 {
				top: 63vh;
				left: 245rpx;
				width: 286rpx;
				height: 376rpx;
				background: url("@/static/img/treeBg2.png") 100% no-repeat;
				background-size: 100% 100%;
			}
			
			.treeBg3 {
				top: 61vh;
				left: 255rpx;
				width: 326rpx;
				height: 416rpx;
				background: url("@/static/img/treeBg3.png") 100% no-repeat;
				background-size: 100% 100%;
			}

			.treeBgAtt {
				animation: shake 2s ease-in-out infinite;
			}
			
			

			@keyframes shake {
				0% {
					transform: scaleY(1);
				}

				50% {
					transform: scaleY(1.1);
				}

				100% {
					transform: scaleY(1);
				}
			}

			@keyframes shake-top {
				0% {
					transform: rotate(0deg);
				}

				33% {
					transform: rotate(2deg);
				}

				66% {
					transform: rotate(-2deg);
				}

				100% {
					transform: rotate(0deg);
				}
			}

		}

	}
</style>
