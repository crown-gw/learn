<template>
    <div>
        <!-- <h3>当前值为：{{this.$store.state.count}}</h3> -->
        <!-- template下的this可以省略 -->
        <h3>{{$store.getters.showNum}}</h3>
        <button @click="handeladd">+1</button>
        <button @click="handeladdN">+N</button>
        <button @click="handeladdasync">+1 async</button>
        <button @click="handeladdNasync">+N async</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        handeladd(){
            // 触发mutation的第一种方式
            this.$store.commit('add')
        },
        handeladdN(){
            this.$store.commit('addN',3)
        },
        handeladdasync(){
            this.$store.dispatch('addAsync')
        },
        handeladdNasync(){
            this.$store.dispatch('addNAsync',4)
        }
    }
}
</script>