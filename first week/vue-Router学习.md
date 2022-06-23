# 创建路由
- 在components文件夹下，新建`.vue`文件
- 在router文件夹下，创建index.js文件

```
import Vue from 'vue' 
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {path:'/', component:() => import('../components/a.vue') },
    {path:'/b', component:() => import('../components/b.vue') },
    {path:'/c', component:() => import('../components/c.vue') },   
]
const router = new Router(
    {
        routes
    }
)
export default router
```

- `main.js`文件中引入路由下的文件`import router from './router/index.js'`
- `App.vue`文件中，插入路由
```
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
```
# 路由配置
