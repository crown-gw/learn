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
        // 初始化
        let myEchart = echarts.init(this.$refs.mychart)
        // 设置参数
        let xData = ["黄瓜","西兰花","西红柿","空心菜"]
        let yData = [12,34,56,78]
        let option = {
          title:{
            text:"主标题"
          },
          xAxis:{
            type:'value'
          },
          yAxis:{
            data:xData,
            type:"category"  // 坐标轴类型，“category”类目轴，“value”数据轴
          },
          series:[{
            name:'销量',
            type:'bar',
            data:yData,
            barWidth:20,
            itemStyle:{
              normal:{
                color:function(params){
                  let colorList = [
                    "#78f542",
                    "#4a4a4a",
                    "#23b245",
                    "f398f1"
                  ]
                  return colorList[params.dataIndex]
                }
              }
            },
            markPoint:{
              data:[
                {
                  type:'max',
                  name:'最大值'
                },
                {
                  type:'min',
                  name:'最小值'
                }
              ]
            },
            markLine:{
              data:[
                {
                  type:'average',
                  name:'平均值'
                }
              ]
            }
          }]
        }
        myEchart.setOption(option)
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

