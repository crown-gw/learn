# 安装
`cnpm install vuex --save`
# Store
- 创建store：在store文件夹下index.js文件中写上如下内容

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
   
    // state中存放的就是全局共享的数据
  state: {
    count: 0
  },
})
```

```
new Vue({
  router,
  // 将store对象挂载到Vue实例中
  store,
  render: h => h(App)
}).$mount('#app')
```
- 通过 `store.state` 获取对象状态
- 通过 `store.commit` 方法触发状态变更

# State
- 组件访问state的第一种方式：
`this.$store.state.全局共享数据`
- 组件访问state的第二种方式：
  
  1. 从vuex中按需导入mapState函数：
   `import { mapState } from 'vuex'`

  2. 将全局数据，映射为当前组件的computed计算属性 
   ```
   computed:{
    ...mapState(['count'])
   }
   ```

# Mutation
Mutation用于变更store中数据，能监测到数据变化
- 定义mutation
```
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state){
      // 变更状态
      state.count++
    }
  }
})
```

- 触发mutation的第一种方式
  ```
  methods: {
        handeladd(){
            // 触发mutation的第一种方式
            this.$store.commit('add')
        }
    }
  ```

- 可以在触发mutation时传递参数
  ```
  // 定义mutation
  mutations: {
    addN(state,step){
      state.count+=step
    }
  }
  ```
  ```
  // 触发mutation
  methods: {
        handeladdN(){
            this.$store.commit('addN',3)
        }
    }
  ```

- 触发mutation的第二种方式
  
  1. 第一步，从vuex中按需导入mapMutations函数：
   `import { mapMutations } from vuex`
  2. 将指定的mutation函数，映射为当前组件的methods方法：
   ```
   methods:{
      ...mapMutations(['add','addN'])
   }
   ```
   
- 不能在mutation中进行异步操作
  


