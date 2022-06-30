<template>
    <!-- echarts的容器默认宽高是0，如果不进行设置，页面不会显示 -->
  <div ref="mychart" id="demoDiv">
  </div>
</template>

<script>
// 引用Echarts
import * as echarts from 'echarts'
import axios from 'axios'
export default {
    name:'App',
    data(){
        return{
             echartdata:[]
        }
    },
    methods: {
      async linkData(){
        let data = await axios({url:"http://localhost:8888/one"})
        console.log(data)
        this.echartdata = data.data
      }
    },
    mounted () {
        let myEcharts = echarts.init(this.$refs.mychart)
        myEcharts.showLoading()
        this.linkData().then(()=>{
        myEcharts.hideLoading()
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
                data:this.echartdata,
                radius:["40%","70%"],
                label:{
                    position:'inside'
                },
                roseType:"area",
            }
        }
        myEcharts.setOption(option)
        })
        
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

