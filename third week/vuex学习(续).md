# Action
用来处理异步操作

如果通过异步操作变更数据，必须通过Action，不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据。不能直接修改State中的数据，只有mutations中的函数才能修改state的数据

### 触发actions的第一种方式

- 定义action：
    ```
  export default new Vuex.Store({
  ………………
  mutations: {
    add(state){
      // 变更状态
      state.count++
    },
    ………………
  },
  actions:{
    addAsync(context){
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    }
  }
  })
    ```

- 触发action
  ```
  methods: {
        handeladdasync(){
            this.$store.dispatch('addAsync')
        }
    }
  ```

- 触发actions任务时携带参数：
  ```
  mutations: {
    addN(state,step){
      state.count+=step
    },
  }
  ```
  ```
  actions:{
    addNAsync(context,step){
      setTimeout(() => {
        context.commit('addN',step)
      }, 1000);
    }
  }
  ```
  ```
  methods: {
        handeladdNasync(){
            this.$store.dispatch('addNAsync',4)
        }
    }
  ```

### 触发actions的第二种方式
  1. 从vuex中按需导入mapActions函数
   ```
   import { mapActions } from 'vuex'
   ```
  2. 将指定的actions函数，映射为当前组件的methods方法
   ```
   methods: {
        ...mapActions(['subAsync']),
        handlesubasync(){
            this.subAsync()
        }
    }
   ```
  注：也可在按钮绑定事件里直接绑定subAsync函数，不再额外定义handlesubasync函数

# Getter
Getter用于对Store中数据进行加工处理形成新的数据，Getter不会修改Store中的原数据

类似vue的计算属性
Store中的数据发生变化，Getter的数据也会跟着变化

- 定义Getter
  ```
  export default new Vuex.Store({
  state: {
    count: 0
  },
  getters:{
    showNum(state){
      return '当前最新数值为【'+ state.count +'】'
    }
  }
  ```
### 使用Getter的第一种方式
  `this.$store.getters.名称`

### 使用Getter的第二种方式
```
import {mapGetters} from 'vuex'
```
```
computed: {
        ...mapGetters(['showNum'])
    },
```
