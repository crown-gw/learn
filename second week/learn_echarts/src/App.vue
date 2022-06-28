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
        myEchart.setOption({
            // echarts标题
            title:{
                text:'hello world',
                // x:'center'
            },
            tooltip:{
              trigger:'item',
              axisPointer:{
                type:'cross'
              },
              showContent:true,
              // formatter(params){
              //   console.log(params)
              //   for(var i=0;i<params.length;i++){
              //     return "名字："+ params[i].name + "数量："+ params[i].data.value
              //   }
              // }
            },
            legend:{
              show:true,
              icon:'diamond',
              
            },
            xAxis:{
                data:['香蕉','苹果','橘子','梨子']
            },
            yAxis:{

            },
            // 系列，设置当前数据所能映射出的图形
            series:{
                // 这个系列的名字
                name:"销量",
                // 当前图表类型
                type:'bar',
                data:[
                  {"value":"3200","date":"2022-09-30"},
                  {"value":"2300","date":"2022-09-30"},
                  {"value":"5400","date":"2022-09-30"},
                  {"value":"4500","date":"2022-09-30"}
                  ]
            }

        })
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
