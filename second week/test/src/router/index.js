import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: ()=>import('../views/MainView.vue'),
    children:[
      {
        path:'/',
        name:'home',
        component:()=>import('../views/Home/HomeView.vue')
      },
      {
        path:'/user',
        name:'user',
        component:()=>import('../views/User/UserManage.vue')
      },
      {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/Setting/SettingView.vue')
      },
      {
        path:'/page1',
        name:'page1',
        component:()=>import('../views/Other/PageOne.vue')
      },
      {
        path:'/page2',
        name:'page2',
        component:()=>import('../views/Other/PageTwo.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
