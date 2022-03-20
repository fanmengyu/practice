<template>
  <div ref="echart"></div>
</template>
<script>
import * as echart from "echarts";
export default {
  props: {
    // 由于饼状图并没有xy轴，故定义一个属性进行区分是是否是饼状图
    isAxisChart: {
      type: Boolean,
      //默认值为true
      default: true,
    },
    chartData: {
      type: Object,
      default() {
        //设置默认值的原因是避免当组件不传当前属性时，组件的一个容错性
        return {
          xData: [],
          series:[]
        };
      },
    },
  },
  watch:{
      chartData:{
          handler:function(){
              this.initChart()
        
          },
          deep:true
      }
  },
  methods:{
      initChart(){
          this.initChartData()
          //先判断echart有没有渲染
          if(this.echart){
            //设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过setOption完成
              this.echart.setOption(this.options)
          }else{
              this.echart = echart.init(this.$refs.echart)
              this.echart.setOption(this.options)
          }
      },
      initChartData(){
          if(this.isAxisChart){
              this.axisOption.xAxis.data = this.chartData.xData
              this.axisOption.series = this.chartData.series
          }else{
              this.normalOption.series = this.chartData.series
          }
      }
  },
  data() {
    return {
      //折线图和柱状图 
      axisOption: {
        // 图例文字颜色
        textStyle: {
          color: "#333",
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
        ],
        series: [],
      },
      //饼状图
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      echart:null
    };
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
};
</script>
