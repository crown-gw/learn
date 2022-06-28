import Vue from 'vue'
// import App from './App.vue'
// import App from './views/BarChart.vue'
// import App from './views/PieChart.vue'
import App from './views/LineChart.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
