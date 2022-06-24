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
