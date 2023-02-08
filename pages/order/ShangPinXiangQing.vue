<template>
  <view class="bg">
    <view class="topHeZi">
      <view class="arrowsBg" @click="navigateBack"></view>
      <view class="title">确认订单</view>
    </view>
    
    <!-- 第一个卡片盒子 -->
    <view class="card-box1" >
      <!-- <image src="../../static/img/community.png" mode="" class="imaeg"></image> -->
      <view class="imaegBox">
        <view class="imaeg"> </view>
      </view>
      
      <view class="qBOX">
        <text class="item2">&nbsp;&nbsp;17777k1177771111117</text>
      </view>
      
      
      <!-- 箭头 -->
      <text class="youJianTou" @click="btnTo(1)">></text>
      
    </view>
           <!-- 第一个卡片盒子 -->
       
                  <!-- 第二个卡片盒子 -->
                  <!-- 图片 -->
                  <view class="card-box2">
          <image src="../../static/img/clothing.png" class="image" mode=""></image>
          
          
          <view class="Msg-kuaidi">
            <text class="item1">快递</text>
            <text class="item2">包邮</text>
                     <text class="item3">订单备注</text>
                        <text class="item4">选填</text>
          </view>
          
          <view class="Msg-right">
            <text class="item1">美特司邦威羽绒服保暖冬季防风保暖...</text>
            <text class="item2">￥350.00</text>
            <text class="item3">￥350.00</text>
          </view>
          
          <text class="text-text">x1111</text>
                  </view>
                   <!-- 第二个卡片盒子 -->
       
   
                                                    
                                       <!-- 第五个卡片盒子 -->
                                       <view class="card-box5">
                                   <view class="item1">
                                     <text class="item1-1">总金额:</text>
                                     <text class="item1-2">￥11111</text>
                                   </view>
                                         <view class="button">
                                           <view class="button-button" style="color: #FFF1F1;">
                                                          提交订单
                                           </view>
                          
                                         </view> 
                              
                                       </view>
                                   <!-- 第五个卡片盒子 -->

  </view>
</template>
<script setup>
  import {
    reactive,
    ref,
    toRefs
  } from "vue";

  // 返回上一级
  function navigateBack() {
    wx.navigateBack({
      delta: 1
    })
  }
 
 // 箭头
 const btnTo=(id)=>{
   if(id){
     console.log('---------------');
   }
 }
 
 const showPayWay = ref(false)
 const list = ref([
 	{
 		value: '1',
 		label: '发货'
 	},
 	{
 		value: '2',
 		label: '自取'
 	}
 ])
 const payWayName = ref(list.value[0].label)
 const changePayWay = (list) => {
 	payWayName.value = list[0].label
 }
 
 
</script>
<style lang="scss" scoped>
  .bg {
    position: relative;
    width: 100%;
    height: 176rpx;
    background: #24743C;

    // position: relative;
    .topHeZi {
      display: flex;
      flex-direction: row;

      .title {
        height: 44rpx;
        font-size: 32rpx;
        font-weight: 800;
        color: #F5F5F5;
        margin-left: 256rpx;
        margin-top: 108rpx;
      }

      .arrowsBg {
        width: 25rpx;
        height: 48rpx;
        background: url("@/static/img/arrows.png") 100% no-repeat;
        background-size: 100% 100%;
        // text-align: center;
        margin-left: 34rpx;
        margin-top: 108rpx;
      }
    }


.card-box1{
  margin: 48rpx 0 0 32rpx;
  width: 686rpx;
  height: 150rpx;
  background: #FFFFFF;
  box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(0,0,0,0.16);
  border-radius: 16rpx 16rpx 16rpx 16rpx;
  opacity: 1;
  .imaeg{
    // margin-top: 46rpx;
    margin-left: 42rpx;
    width: 39rpx;
    height: 57rpx;
    background: #24743C;
    // opacity: 1;
    background: url("../../static/img/dizhi.png") 100% no-repeat;
    background-size: 100% 100%; // 控制图片大小的属性
  }
  
  .imaegBox{
    padding-top: 30rpx;
  }
  .address{
    margin: 20rpx 0 0 100rpx;
    font-weight: 400;
    color: #979797;
    font-size: 24rpx;
  }

  
  
}
.youJianTou{
  position: absolute;
  top: 240rpx;
  right: 64rpx;
    width: 35rpx;
    height: 35rpx;
    color:#111111;
    font-size:45rpx;
    // opacity: 1;
  }


.qBOX{
    font-size: 32rpx;
  width: 480rpx;
  height:100rpx;
  display: flex;
justify-content:flex-start;
position: absolute;
top: 245rpx;
    margin-left: 100rpx;

.item2{
height: 34rpx;
font-size: 24rpx;

font-weight: 400;
color: #616161;
}
}


.card-box2{
  margin-top: 26rpx;
  margin-left: 34rpx;
  width: 684rpx;
  height: 360rpx;
  background: #FFFFFF;
  box-shadow: 0rpx 8rpx 12rpx 2rpx rgba(0,0,0,0.12);
  border-radius: 20rpx 20rpx 20rpx 20rpx;
  opacity: 1;
  
  .image{
    width: 164rpx;
    height: 164rpx;
  margin:48rpx 0 0 30rpx ;
  }
  
  .Msg-kuaidi{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column;
    
    
    .item1{
      margin: 34rpx 0 0 40rpx;
      width: 48rpx;
      height: 34rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #000000;
    }
    .item2{
      margin:34rpx 0 0 78rpx;
      width: 448rpx;
      height: 34rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #CFCFCF;
    }
    
    .item3{
   margin:18rpx 0 0 40rpx;
   // width: 48rpx;
   height: 34rpx;
   font-size: 24rpx;
   font-weight: 400;
   color: #000000;   
   line-height: 34rpx;
    }
    .item4{
      margin:18rpx 0 0 32rpx;
      width: 448rpx;
      height: 34rpx;
         line-height: 34rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #CFCFCF;
    }
  }
  
  .Msg-right{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 418rpx;
    margin: 0 0 0 234rpx;
    .item1{
      width: 410rpx;
      height: 80rpx;
      font-size: 28rpx;
      font-weight: bold;
      color: #000000;
          padding-bottom:35rpx;
    }
    .item2{
 padding-bottom: 35rpx;
 height: 28rpx;
 font-size: 20rpx;
 font-weight: 400;
 color: #A8A8A8;
 line-height: 24rpx;
text-decoration:line-through; // 删除线

    }
        .item3{
          // width: 116rpx;
          height: 40rpx;
          font-size: 28rpx;
        
          font-weight: 800;
          color: #000000;
          line-height: 24rpx;
        }
  }
  
  .text-text{
    position: absolute;
    top: 506rpx;
    right:70rpx ;
    font-weight: 400;
    color: #A8A8A8;
    height: 28rpx;
    font-size: 20rpx;
  }
}


    
    .card-box5{
      // position: absolute;
      // top:762rpx;
      margin-top: 762rpx;
 position: relative;
      // margin-top: 282rpx;
      width: 750rpx;
      height: 166rpx;
      // background: #FFFFFF;
      opacity: 1;
      
      .item1{
             position:relative;
        margin: 42rpx 0 0  50rpx;
      height: 56rpx;
      font-size: 15rpx;
      // padding-bottom:720rpx ;
      width: 80rpx;

      
      .item1-2{
        position: absolute;
        top: -5rpx;
               margin: 0rpx 0 0  15rpx;                   
                  font-size: 35rpx;
        font-weight: 400;
        color: #CC0000;
      }
      }
      
      .button{
position: absolute;
bottom:110rpx;
// top: 1456rpx;
right: 32rpx;
width: 222rpx;
height: 80rpx;
background: #24743C;
border-radius: 16rpx 16rpx 16rpx 16rpx;
// opacity: 1;
padding:20rpx 0 0 40rpx;

  
      .button-button{
width: 140rpx;
height: 44rpx;
font-size: 32rpx;
// font-family: PingFang SC-Regular, PingFang SC;
font-weight: 400;
line-height: 44rpx;
text-align: center;

      }
          }
    }
    
  }
</style>
