import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

router.beforeEach((to, from, next) =>{
  if(to.path == '/b'){
    alert("登录")
  }
  next()
})

router.afterEach((to, from) =>{
  console.log(to,from)
  alert("跳转后")
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
