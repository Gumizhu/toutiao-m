/*
 * @Author: Gumizhu
 * @Date: 2023-03-22 11:42:21
 * @Descripttion:
 * @LastEditors: Gumizhu
 * @LastEditTime: 2023-03-22 19:42:09
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 Vant 核心组件库
import Vant from 'vant'
// 加载 Vant 全局样式
import 'vant/lib/index.css'

// 引入全局样式表
import './styles/index.less'

// 注册使用 Vant组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
