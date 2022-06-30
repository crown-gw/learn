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
            [1.3,4.5],
            [2.4,4.5],
            [2.6,3.7],
            [3.7,3.0],
            [3.3,2.5],
            [2.2,4.2],
            [4.2,2.3],
            [2.9,3.3],
            [5.4,4.9],
            [4.9,4.8],
            [5.3,5.5],
            [3.4,5.4],
            [5.4,3.3],
            [2.2,2.9],
        ]
        let option = {
            xAxis:{

            },
            yAxis:{

            },
            tooltip:{},
            series:{
                type:'scatter',
                data:data,
                color:{
                    type:'linear', //线性渐变
                    x:0,
                    y:0,
                    x2:1,
                    y2:1,
                    colorStops:[
                        {
                            offset:0,
                            color:'red',
                        },
                        {
                            offset:1,
                            color:'purple'
                        }
                    ]
                },
                emphasis:{
                    itemStyle:{
                        borderWidth:20,
                        borderColor:'rgba(234,108,123,0.5)'
                    }
                }
            }
        }
        
        myEcharts.setOption(option)
    }
    
}
</script>

<style>
    #demoDiv{
        width: 500px;
        height: 500px;
        border: 1px solid red;
    }
</style>

