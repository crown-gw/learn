import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {path:'/a', component:() => import('../components/a.vue'),
    name:'/a',
    meta:{title: "你好"},
     children:[
        {
            path:"aa",component:() => import('../components/AaAa.vue')
        }
    ] },
    {path:'/b', component:() => import('../components/b.vue') },
    {path:'/c', component:() => import('../components/c.vue'),name:"c", beforeEnter:(to,from,next)=>{
        alert("方法跳转之前")
        next()
    }
    },  
    {path:'/ele', component:() => import('../components/TestElementUi.vue') },  
    {
        path:'*', redirect:'/'
    }
]
const router = new Router(
    {
        routes,
        mode:"hash"//默认
    }
)
export default router