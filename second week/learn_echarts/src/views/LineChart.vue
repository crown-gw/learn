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
        let xData = ['一','二','三','四','五','六','七']
        let data = [33,32,36,35,31,33,37]
        let option = {
            xAxis:{
                type:'category',
                data:xData
            },
            yAxis:{
                type:"value"
            },
            series:{
                type:'line',
                data:data
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

