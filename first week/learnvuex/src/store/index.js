import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state){
      // 变更状态
      state.count++
    },
    addN(state,step){
      state.count+=step
    },
    sub(state){
      state.count --
    },
    subN(state,step){
      state.count -= step
    }
  },
  actions:{
    addAsync(context){
      setTimeout(() => {
        // 在 actions 中，不能直接修改state的数据
        // 必须要通过context.commit 触发某个mutation才行
        context.commit('add')
      }, 1000);
    },
    addNAsync(context,step){
      setTimeout(() => {
        context.commit('addN',step)
      }, 1000);
    },
    subAsync(context){
      setTimeout(() => {
        context.commit("sub")
      }, 1000);
    },
    subNAsync(context,step){
      setTimeout(() => {
        context.commit('subN',step)
      }, 1000);
    }
  },
  getters: {
    showNum(state){
      return '当前最新数值为【'+ state.count +'】'
    }
  }
})

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
