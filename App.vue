<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./uni_modules/vk-uview-ui/index.scss";
	// 在样式中设置文字的样式
	.uni-toast-text {
	  height: auto !important;
	  line-height: 1.5em !important;
	  padding: 10px 16px !important;
	  background-color: rgba(0, 0, 0, 0.7) !important;
	  color: #fff !important;
	  border-radius: 8px !important;
	  font-size: 32rpx !important;
	  letter-spacing: 2rpx !important;
	}
</style>
