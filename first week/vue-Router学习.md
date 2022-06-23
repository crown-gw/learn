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
没有定义的路径：
`{path:'*', redirect:'/'}`,都跳转到"/"

new Router中mode属性：

`mode:"hash"`:路径中带有#

`mode:"history"`：路径中不带#，但需要与后端一起部署，不然会报404错误

## 二级路由
```
{path:'/a', component:() => import('../components/a.vue'),
     children:[
        {
            path:"aa",component:() => import('../components/AaAa.vue')
        }
    ] },
```
注意需要在父组件中插入子组件，`a.vue`:
```
<template>
    <div>a组件
        <router-view></router-view>
    </div>
</template>
```

# 路由跳转
`<router-link></router-link>`本质是一个a标签

router-link的属性：

- to="/",跳转到哪一个页面
- tag="div",将这个a标签换成其他标签
- target="_blank",跳转并新打开一个窗口
- replace，不记录此次跳转

路由跳转的方式：

- 上述to属性，可以接受一个对象参数`<router-link :to="{name:'c'}"></router-link>`，并且给相应的路由定义一个name属性，`{path:'/c', component:() => import('../components/c.vue'),name:"c" }`
- button按钮跳转
  给button按钮绑定方法`<button @click="push">push</button>`，在method中定义此方法，
  ```
  methods:{
    push(){
      // this.$router.push('/a');
      // this.$router.push({path:'/a'});
      // this.$router.push({name:'c',replace:true});
      // this.$router.push({path:'/a', query:{value:2}});
      this.$router.push({name:'/a', params:{value:2}});
    },
  }
  ```

`this.$router.push({name:'/b', params:{value:2}});`

# 路由守卫
- `main.js`文件中控制的是全局路由:

跳转之前
```
router.beforeEach((to, from, next) =>{
  if(to.path == '/b'){
    alert("登录")
  }
  next()
})
```

跳转之后：
```
router.afterEach((to, from) =>{
  console.log(to,from)
  alert("跳转后")
})
```

- 组件中也可以控制
  
  在组件.vue文件中，srcipt标签下
  
  进入组件之前：
  ```
  beforeRouteEnter:((to, from, next) => {
        console.log(to,from)
        next(vm =>{
            console.log(vm)
        })
    })
  ```

  参数更新：
  ```
  beforeRouteUpdate:((to, from, next)=>{
    console.log(to,from)
    next()
  })
  ```

  跳转离开之前：
  ```
  beforeRouteLeave:((to, from, next) => {
        if(confirm("确定要离开吗？")){
            next()
        }else{
            next(false)
        }
    })
  ```

- index.js文件中，也可以使用方法
  ```
  {path:'/c', component:() => import('../components/c.vue'),name:"c", beforeEnter:(to,from,next)=>{
        alert("方法跳转之前")
        next()
    }
    }
  ```