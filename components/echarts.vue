
<template>
  <div id="echarts">
    <div id="myChart"></div>
   <!-- <div id="myChart2"></div>-->
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Echarts',
    props:['name','dataList','dataList1','colorGroup'],
    data () {
      return {
      }
    },
    methods: {
      echartsInit () {
        // 找到容器
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 开始渲染
        myChart.setOption({
          grid:{
            x:5,
            y:25,
            x2:5,
            y2:25,
            borderWidth:1
          },
          title: {text: ''},
          //提示框
          tooltip: {
            show:false,
            showDelay : 0//显示延迟，添加显示延迟可以避免频繁切换，单位ms
          },
          xAxis: {
            data: this.name,
            axisLine: {show:false},//y轴去掉
            axisTick: {show:false},//
            axisLabel: {
             fontSize:15
            }
          },
          yAxis: {
            axisLine: {show:false},//y轴去掉
            axisTick: {show:false},//
            splitLine:{show:false},//背景线
            data:[],
          },
          series: [
            {
            name: '柱形图',
            type: 'bar',
            barWidth : 30,//柱图宽度
            barGap:'-50%',//柱图间距
            data: this.dataList,
            label: {//在柱形顶部显示数据
              normal: {
                show: true,
                formatter: '{c}',
                position: "top",
                textStyle: {
                  color: "#333", fontSize: 14,borderRadius:3,color:"#333",
                  padding:[6,10,5,10],margin:30,borderType : 'solid',
                  borderColor: '#9c221f',
                  borderWidth: 1
                }
              }
            },
            /*  grid:{
                show:false,                 //---是否显示直角坐标系网格
                top:80,                     //---相对位置，top\bottom\left\right
                containLabel:false,         //---grid 区域是否包含坐标轴的刻度标签
              },*/
              legend:{
                top: '0',
                bottom: '0'
              },
            //设置柱形样式
            itemStyle:{
              normal:{
                color: function (params){
                  let colorList = ['#586995','#9c221f','#9f3ed5','#009999']
                  return colorList[params.dataIndex];}
              }
            }
          },
            {
              name: '折线',
              type: 'line',
              itemStyle:{
                normal:{
                  color: "#586995",
                }
              },
              //symbol: 'circle',     //设定为实心点
              symbolSize: 5,   //设定实心点的大小
              data:this.dataList1
            }
          ]
        })
      },
    /*  echartsInit2 () {
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        myChart.setOption({
          title: {text: 'echarts 饼图'},
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data: [
                {value: 235, name: '视频广告'},
                {value: 274, name: '联盟广告'},
                {value: 310, name: '邮件营销'},
                {value: 335, name: '直接访问'},
                {value: 400, name: '搜索引擎'}
              ]
            }
          ]
        })
      }*/
    },
    mounted () {
      this.echartsInit()
     /* this.echartsInit2()*/
    }
  }
</script>
<style scoped lang="less">
  #myChart{
    width: 410px;
    height:260px;
   padding:0;margin:0;
    position: absolute;
    left:20px

  }
 /* #myChart2{
    width: 600px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    float: right;
  }*/
</style>
