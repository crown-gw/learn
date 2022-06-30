# 一、安装

`cnpm install echarts --save`

# 二、使用

## 1. 设置 echarts 容器

`<div ref="mychart" id="demoDiv">` // 注：echarts 的容器默认宽高是 0，如果不进行设置，页面不会显示

## 2. 引用

`import * as echarts from 'echarts'`

## 3. 初始化 Echarts

`let myEchart = echarts.init(this.$refs.mychart)`

## 4. 设置 chart 参数

```
myEchart.setOption({
            // echarts标题
            title:{
                text:'hello world'
            },
            // 配置X轴参数
            xAxis:{
                // 横坐标
                data:['一','二','三','四'],
                // 坐标轴类型，“category”类目轴，“value”数据轴
                type:"category"
            },
            // 配置Y轴参数
            yAxis:{

            },
            // 系列，设置当前数据所能映射出的图形
            series:{
                // 这个系列的名字
                name:"系列名字",
                // 当前图表类型，bar表示柱状图
                type:'bar',
                // 数据
                data:[3400,5600,2300,7800]
            }

        })
```

![](img/hello-world-echart.png)

# 三、配置项

## title

标题组件，包含主标题和副标题

- text：主标题文本

- link：主标题文本超链接

- target：'self' 当前窗口打开，'blank' 新窗口打开

- backgroundColor：标题背景色，默认透明

- `x:center`让标题居中

- subtext:副标题

- textStyle：color：主标题文字的颜色；fontSize：主标题文字大小；等

- subtextStyle：副标题文字样式，属性同 textStyle

## tooltip

提示框组件

若配置项 tooltip 中没有内容，鼠标移上时则会显示 series 的 name 和当前数据的 xAxis 的 data 以及数量。

![](img/empty_tooltip.png)

- trigger:触发类型。'item'：数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用;'none'：什么都不触发。

- axisPointer：坐标轴指示器配置项。

  - type：'line' 直线指示器；'shadow' 阴影指示器；'none' 无指示器；'cross' 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。

- showContent：是否显示提示框浮层，默认显示。
- backgroundColor：悬浮框背景颜色

- boderColor：悬浮框边框颜色

- textStyle：悬浮框文字样式等

- formatter：提示框浮层内容格式器，支持字符串模板和回调函数两种形式。

## legend

图例组件

- show：设置图例的开启或关闭

- icon：图例项的 icon。ECharts 提供的标记类型包括'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'

- top:距离 chart 顶部的高度

- itemWidth,itemHeight 设置图例宽高

- textStyle：图例文字样式

## 柱状图 series

- type:bar
- markPoint：图表标注。可以显示最大最小值
- markLine：图表标线。可以展示图表平均值
- barWidth:设置柱子宽度
- color:柱子颜色
- itemStyle：图形样式。单独设置每个柱子的颜色：
  ```
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
  ```

若要将竖直柱状图改为横向柱状图，则将 xAxis 与 yAxis 中的内容互换。

```
    xAxis:{
        data:xData,
        type:"category"  // 坐标轴类型，“category”类目轴，“value”数据轴
    },
    yAxis:{
        type:'value'
    },
```

更改为：

```
    xAxis:{
         type:'value'
    },
    yAxis:{
        data:xData,
        type:"category"  // 坐标轴类型，“category”类目轴，“value”数据轴
    },
```

## 饼状图 series

- type：pie
- radius：设置半径，`radius:["",""]`第一项内半径，第二项外半径
- label：饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。

  - show：是否显示标签
  - position：标签的位置，'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区；'inside'饼图扇区内部；'inner' 同 'inside'；'center'在饼图中心位置。

- roseType:`roseType:area`设置成南丁格尔图

## 折线图 series

- type:line
- smooth：是否平滑曲线显示.如果是 boolean 类型，则表示是否开启平滑处理。如果是 number 类型（取值范围 0 到 1），表示平滑程度，越小表示越接近折线段，反之则反。设为 true 时相当于设为 0.5。
- areaStyle：区域填充样式。设置后显示成区域面积图。
- 设置最大最小值：
  ```
  // 设置最大最小值
                markPoint:{
                    data:[
                        {type:'max', name:'最大值'},
                        {type:'min', name:'最小值'}
                    ]
                }
  ```
- 设置平均值
  ```
  markLine:{
                    data:[
                        {type:'average', name:'平均值'}
                    ]
                }
  ```
- 折线图堆叠(多条折线)
  ```
  series:[
                {
                    name:'成都',
                    type:'line',
                    data:data1,
                    stack:'num'
                },
                ......
            ]
  ```
- 选中高亮状态
  ```
  emphasis:{
    focus:"series"
  }
  ```
## 散点图series
- type：scatter
- data为平面坐标类型，如[1,2]
- symbolSize：散点大小
- color：散点颜色，若设置成渐变色，如下：
  ```
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
                }
  ```

## grid属性
- left：图表与容器边框左边的距离
- right：图表与容器边框右边的距离
- top：图表与容器边框上边的距离
- bottom：图表与容器边框下边的距离
- show：是否显示图表边框
- backgroundColor：图表填充颜色
- borderColor：图表边框颜色

等

# 四、地图展示
## 地图资源
https://datav.aliyun.com/portal/school/atlas/area_selector
## 保存至文件的静态资源文件中
## 引入地图资源
`import {mapData} from '../assets/mapdata.js'`
## 注册当前使用的地图名
`echarts.registerMap('ChinaMap',mapData)`第一项为给此地图取的名字，第二项为地图数据
## geo配置项

- geo:地理坐标组件

  - type:map         // 图表类型为地图
  - map:'ChinaMap'  // 使用的地图数据
  - roam:true       // 是否能平移或缩放
  - zoom:3          // 地图初始化的比例
  - center:[]       // 出现在图表中心位置的坐标点（如何寻找坐标点？1.打开百度地图；2.点击最下方的地图开放平台；3.点击开发文档；4.开发者工具 -> 坐标拾取器；5.选择地点复制坐标）
  - label

    - show:true    //显示地图地理位置信息
    - color:'red'  //设置文字颜色
    - fontSize:10  //设置文字大小

  - itemStyle

    - areaColor:'yellow'    //地图颜色
  
## 地图标记设置
- 散点标记
  ```
  {
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
            }
  ```

- 涟漪散点标记
  ```
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
                // 涟漪效果设置
                ripplEffect:{
                    number:2, //波纹数量
                    scale:4,
                },
                itemStyle:{
                    color:'red'
                }
            }
  ```

# 五、图表大小自适应
## 1. 监听页面大小改变
## 2. 使用echart的resize方法使图表自适应
```
window.addEventListener("resize",()=>{
          myEcharts.resize()
        })
```
# 六、图表加载动画效果
获取到数据之前的加载效果
`myEcharts.showLoading()`
`myEcharts.hideLoading()`

显示数据时的动画效果
- amination:true    // 是否开启动画
- aminationThreshold:5       //是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
- animationDuration:2000      //初始动画的时长，支持回调函数，可以通过每个数据返回不同的时长实现更戏剧的初始动画效果
- animationEasing:"linear"            //初始动画的缓动效果。
- animationDelay:2000         //初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。
  

