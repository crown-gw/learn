<template>
    <div> C组件</div>
</template>
<script>
export default ({
    // beforeRouteEnter:((to, from, next) => {
    //     console.log(to,from)
    //     next(vm =>{
    //         console.log(vm)
    //     })
    // })

    // beforeRouteUpdate:((to, from, next)=>{
    //     console.log(to,from)
    //     next()
    // })

    beforeRouteLeave:((to, from, next) => {
        if(confirm("确定要离开吗？")){
            next()
        }else{
            next(false)
        }
    })
    
})
</script>
