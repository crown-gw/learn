<template>
    <div>
        <!-- <h3>当前值为：{{count}}</h3> -->
        <h3>{{showNum}}</h3>
        <button @click="handlesub">-1</button>
        <button @click="handlesubN">-N</button>
        <button @click="handlesubasync">-1 async</button>
        <button @click="subNAsync(5)">-N async</button>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    computed: {
        // ...表示展开运算符，此处将count里面的数据映射为当前组件的计算属性
        ...mapState(['count']),
        ...mapGetters(['showNum'])
    },
    methods: {
        ...mapMutations(['sub','subN']),
        ...mapActions(['subAsync','subNAsync']),
        handlesub(){
            this.sub()
        },
        handlesubN(){
            this.subN(3)
        },
        handlesubasync(){
            this.subAsync()
        },
        
    }
}
</script>