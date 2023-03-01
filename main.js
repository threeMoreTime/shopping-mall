import App from './App';
import uView from './uni_modules/vk-uview-ui';
import * as Pinia from 'pinia';

// import VConsole from 'vconsole';
// const vConsole = new VConsole()
// vConsole.destroy();


uni.$showMsg = function(title = '数据加载失败！', icon = 'none') {
  uni.showToast({
    title,
    duration: 1500,
    icon
  })
}
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  app.use(uView)
  return {
    app,
	Pinia
  }
}
// #endif