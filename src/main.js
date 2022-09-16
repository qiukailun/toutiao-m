import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible' // 移动端自动适配
import Vant from 'vant'; // 引入Vant组件库
import './styles/index.less' // 加载全局样式
import 'vant/lib/index.css'; // 加载Vant组件库样式

import req from '@/utils/request'


Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
