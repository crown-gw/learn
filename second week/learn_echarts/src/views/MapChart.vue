<template>
    <div ref='myechart' id="demochart">

    </div>
</template>

<script>
import * as echarts from 'echarts'
import {mapData} from '../assets/mapdata.js'
export default {
    name:'App',
    mounted () {
        let mychart = echarts.init(this.$refs.myechart)
        echarts.registerMap('ChinaMap',mapData)
        let option = {
            // 地理坐标组件
            geo:{
                type:'map',
                map:'ChinaMap',
                roam:true ,
                zoom:3,
                center:[116.403694,39.916485],
                label:{
                    show:true
                },
                itemStyle:{
                    areaColor:'gray'
                },
            },
            series:[{
                type:'scatter',
                data:[{
                    name:'北京市',
                    value:[
                        116.46,
                        39.92
                    ]
                },
                ],
                coordinateSystem:'geo'
            },
            {
                type:'effectScatter',
                data:[{
                    name:'西安市',
                    value:[
                        108.95,
                        34.26
                    ]
                },
                ],
                coordinateSystem:'geo',
                ripplEffect:{
                    number:2, //波纹数量
                    scale:4,
                },
                itemStyle:{
                    color:'red'
                }
            }
            ]
        }
        mychart.setOption(option)
    }        
}
</script>

<style>
    #demochart{
        width:500px;
        height: 500px;
        border: 1px solid red;
    }
</style>