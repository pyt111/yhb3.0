// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'whatwg-fetch' //兼容IE fetch
import 'babel-polyfill' //兼容手机端
import AwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './config/all.less'
import { dateFormat } from '@/tools/date'
import { threePointControl } from '@/tools/algorithm'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(AwesomeSwiper)

dateFormat() //给日期添加格式化方法
    /* eslint-disable no-new */
threePointControl() //三位分节制   
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})