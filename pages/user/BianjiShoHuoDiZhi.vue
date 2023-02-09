<template>
	<view class="bg">
		<view class="tabs">
			<view class="arrowsBg" @click="navigateBack"></view>
			<view class="title">编辑收货地址</view>
			<view class=""></view>
		</view>

<!-- 表单		 -->
<view class="BiaoDan">

  <u-form :model="form" ref="uForm" class="box-box">
  		<u-form-item label="收货人" class="item" label-width="110" labelPosition="left" borderBottom="false">
        <u-input v-model="form.name"  class="item2" :customStyle="{'padding': '0 20rpx' ,'color': '#030303' }"/>
        </u-form-item>
  		<u-form-item label="手机号" class="item" label-width="110" labelPosition="left" borderBottom="false">
        <u-input v-model="form.ShoJi" class="item2"  :customStyle="{'padding': '0 20rpx' ,'color': '#030303'}"/>
        </u-form-item>
  		<u-form-item label="所在地址" class="item" label-width="130" labelPosition="left" borderBottom="false">
        <u-input v-model="form.diZhi"  class="item2"  :customStyle="{'padding': '0 15rpx' ,'color': '#030303' }"/>
        </u-form-item>
        <u-form-item label="详细地址" class="item" label-width="130" labelPosition="left" borderBottom="false">
          <u-input v-model="form.XiangXiDizhi" 
          :customStyle="{'color': '#030303'}"
          type="textarea"  height="200" backgroundColor="#F1F1F1" class="oooo"/>
 <!-- <   v-model="form.XiangXiDizhi"  class="aaaaaa"/> -->
          </u-form-item>
  	</u-form>
   <!-- 定位图标 -->
   <text class="tuBiao"></text>
      <!-- 定位图标 -->
</view>
<!-- 表单     -->


<!-- 保存按钮 -->
<view class="BOX-bottom">
  <text>保存</text>
</view>
<!-- 保存按钮 -->
	</view>
</template>

<script setup>
	
	import {computed,reactive,ref} from "vue";
	import {onLoad} from "@dcloudio/uni-app";

	// 返回上一级
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}
  // 表单
  const form=reactive({
              name: '熊大雪儿',
    				ShoJi: '11111111111',
    				diZhi: '广东xxxxxxx',
            XiangXiDizhi:'0000000000000000'
  })

  
  
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100vh;
    background: #FFFFFF;
		position: relative;
.oooo{
  padding-top: 10rpx ;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
}
.aaaaaa{
  width: 472rpx;
  height: 184rpx;
  background: #F1F1F1;
  border-radius: 16rpx 16rpx 16rpx 16rpx;

  // opacity: 1;
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
// width: 188rpx;
height: 44rpx;
font-size: 32rpx;

font-weight: 800;
color: #FFFFFF;
line-height: 24rpx;
			margin-bottom: 3rpx;
		}

		.arrowsBg {
			// transform: rotate(180deg);
			width: 25rpx;
			height: 48rpx;
			background: url("@/static/img/arrows.png") 100% no-repeat;
			background-size: 100% 100%;
		}
	}
  
  // 表单
  .BiaoDan{
    margin-top: 38rpx;
    margin-left: 32rpx;
    width: 686rpx;
    height: 616rpx;
    background: #FFFFFF;
    padding-left: 34rpx ;
  position: relative;
.box-box{
// padding: 0 0 0 50rpx;
      .item{
        font-size: 20rpx;
        font-weight: 800;
        color: #030303;
        line-height: 24rpx;
      }

    .item2{
      width: 472rpx;
      height: 86rpx;
      background: #F1F1F1;
line-height: 80rpx;

      border-radius: 16rpx 16rpx 16rpx 16rpx;
      // opacity: 1;
      
    }
  
  }
  
  .tuBiao{
    width: 30rpx;
    height: 43rpx;
    background: #24743C;
    opacity: 1;
    background:url('../../static/img/dizhi.png') 100% no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 275rpx;
    left: 620rpx;
    
  }
  }
  
  .BOX-bottom{
    // margin: 682rpx 0 0 
    position: absolute;
    bottom: 22rpx;
    left: 32rpx;
    width: 686rpx;
    height: 80rpx;
    background: #24743C;
    border-radius: 16rpx 16rpx 16rpx 16rpx;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text{
      font-weight: 400;
      color: #FFFFFF;
      line-height: 24rpx;
    }
  }
    }
</style>
