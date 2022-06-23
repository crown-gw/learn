<template>
    <div>a组件
        <router-view></router-view>
    </div>
</template>

<script>

export default ({
    created(){
        console.log(this.$router,this.$route)
    }
})
</script>
