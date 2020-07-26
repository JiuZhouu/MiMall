import Vue from 'vue'
import router from './router.js'//插件放上面
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueCookie from 'vue-cookie'
import store from './store'
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'   //样式一定要引入 是css哦
//import env from './env'   

//根据前端的跨域方式做调整
//axios.defaults.baseURL = 'http:'; 如果用前两种代理方式
axios.defaults.baseURL = '/api'; //用代理的方式
axios.defaults.timeout = 8000;  //设置操作时间

//axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e30e5d7efe660215074f47e/api';//第二种mock方案

//根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;

//接口错误拦截,对返回值response.data进行处理
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){   //0表示成功
    return res.data;
  }else if(res.status == 10)  //未登录跳转到登陆界面
  {
    if(path !='#/index')
    {window.locaion.href = '/#/login'}
    return Promise.reject(res);  //reject抛出异常、报错
  }else{
    //alert(res.msg);      //弹出信息
    Message.warning(res.msg);
    return Promise.reject(res);  //reject抛出异常、报错
  }
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App),
  ElementUI
}).$mount('#app')
