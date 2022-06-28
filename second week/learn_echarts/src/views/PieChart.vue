<template>
    <!-- echarts的容器默认宽高是0，如果不进行设置，页面不会显示 -->
  <div ref="mychart" id="demoDiv">
  </div>
</template>

<script>
// 引用Echarts
import * as echarts from 'echarts'
export default {
    name:'App',
    mounted () {
        let myEcharts = echarts.init(this.$refs.mychart)
        let data = [
            {value:54,name:'一年级'},
            {value:60,name:'二年级'},
            {value:30,name:'三年级'},
            {value:78,name:'四年级'},
            {value:40,name:'五年级'},
            {value:89,name:'六年级'},
        ]
        let option = {
            title:{
                text:'饼状图',
                left:'center'
            },
            legend:{
                left:'left',
                orient:"vertical"
            },
            tooltip:{

            },
            series:{
                name:"人数统计",
                type:'pie',
                data:data,
                radius:["40%","70%"],
                label:{
                    position:'inside'
                },
                roseType:"area",
            }
        }
        myEcharts.setOption(option)
    }
    
}
</script>

<style>
    #demoDiv{
        width: 600px;
        height: 600px;
        border: 1px solid red;
    }
</style>

