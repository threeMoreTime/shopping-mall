<template>
	<view class="bg">
		<view class="box">
			<view class="treeBg" @click="changeTreeClass" ref="treeClass"></view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const treeClass = ref(null)
	let timer = null
	const changeTreeClass = () => {
		console.log(treeClass.value.$el.className);
		if (timer) {
			treeClass.value.$el.className = 'treeBg treeBgAtt'
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			treeClass.value.$el.className = ' treeBg'
		}, 2000)


	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
		// background: url("@/static/img/farmGame.png") 100% no-repeat;
		// background-size: 100% 100%;
		position: relative;

		.box {
			width: 100%;
			height: 100%;
			position: relative;
			background: url("@/static/img/farmGame.png") 100% no-repeat;
			background-size: 100% 100%;

			.treeBg {
				width: 226rpx;
				height: 316rpx;
				// border: 1px solid red;
				position: relative;
				top: 70vh;
				left: 262rpx;
				background: url("@/static/img/treeBG1.png") 100% no-repeat;
				background-size: 100% 100%;
				transform-origin: center bottom;
				animation: shake-top 3s ease-in-out infinite;
			}

			.treeBgAtt {
				animation: shake 2s ease-in-out infinite;
			}

			@keyframes shake {
				0% {
					transform: scaleY(1);
				}

				33% {
					transform: scaleY(1.1);
				}

				66% {
					transform: scaleY(1.05);
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
					transform: rotate(3deg);
				}

				66% {
					transform: rotate(-3deg);
				}

				100% {
					transform: rotate(0deg);
				}
			}

		}

	}
</style>
