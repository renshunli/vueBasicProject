// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MintUI from 'mint-ui';
import App from './App';
import store from './store.js';
import vueUtil from './util/vueUtil.js';
import axios from 'axios';
import router from './router';
import 'mint-ui/lib/style.css';
import './resources/rem.js';

// // 监控平台 js;
// import '../static/js/errorOnline.js';
// // 前端监控平台 (必须使用axios做ajax请求) 生产环境开启。
// // 初始化name 是项目名称 String类型，自定义或者使用 title默认确保绝对唯一;
// // 如果不需要直接注释;
// if (process.env.NODE_ENV === 'production') {
//     window.Vue = Vue;
//     window.axios = axios;
//     window.erOnline = new window.ErOnline({
//         name: window.document.title
//     });
// }

Vue.config.productionTip = false;
Vue.use(MintUI);
Vue.use(vueUtil);
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
