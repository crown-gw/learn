# Action
用来处理异步操作

如果通过异步操作变更数据，必须通过Action，不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据。

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