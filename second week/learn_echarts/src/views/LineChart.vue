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
        let data1 = [33,32,36,35,31,33,37]
        let data2 = [39,30,35,36,30,34,38]
        let data3 = [36,36,33,35,34,38,39]
        let data4 = [38,32,34,32,36,37,33]
        let option = {
            title:{
                text:'一周温度'
            },
            xAxis:{
                type:'category',
                data:xData
            },
            yAxis:{
                type:"value"
            },
            series:[
                {
                    name:'成都',
                    type:'line',
                    data:data1,
                    // stack:'num'
                    emphasis:{
                        focus:'series'
                    }
                },
                {
                    name:'深圳',
                    type:'line',
                    data:data2,
                    // stack:'num'
                },
                {
                    name:'广州',
                    type:'line',
                    data:data3,
                    // stack:'num'
                },
                {
                    name:'上海',
                    type:'line',
                    data:data4,
                    // stack:'num'
                }
                
            ]
        }
        myEcharts.setOption(option)

        window.addEventListener("resize",()=>{
            // console.log("窗口改变")
            myEcharts.resize()
        })
    }
    
}
</script>

<style>
    #demoDiv{
        width: 100%;
        height: 500px;
        border: 1px solid red;
    }
</style>

