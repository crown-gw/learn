<template>
    <div>
        <h3>当前值为：{{count}}</h3>
        <button @click="handlesub">-1</button>
        <button @click="handlesubN">-N</button>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    computed: {
        // ...表示展开运算符，此处将count里面的数据映射为当前组件的计算属性
        ...mapState(['count'])
    },
    methods: {
        ...mapMutations(['sub','subN']),
        handlesub(){
            this.sub()
        },
        handlesubN(){
            this.subN(3)
        }
    }
}
</script>