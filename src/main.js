import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import iview from 'iview'
import BaiduMap from 'vue-baidu-map'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(Viewer)
Vue.use(vueAwesomeSwiper)
Vue.use(iview)

Vue.use(BaiduMap, {
  ak: 'UjhyqCljlxVqzDQ8LzMuDEjYp0iOE90G'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
