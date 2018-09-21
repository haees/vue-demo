<template>
  <div class="dialog">
    <div id="chart_bar" class="echarts_bar">
    </div>
    <div class="table_div">
      <el-table :data="tableLists" max-height="250" stripe>
        <el-row>
          <el-table-column fixed prop="free_space" label="用户" width="80"></el-table-column>
          <el-table-column prop="sum_blocks" label="城市" width="80"></el-table-column>
          <el-table-column prop="sum_blocks" label="城市" width="80"></el-table-column>
          <el-table-column prop="sum_blocks" label="城市" width="80"></el-table-column>
          <el-table-column prop="sum_blocks" label="城市" width="80"></el-table-column>
          <el-table-column prop="tablespace_name" label="内容" width="80"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope,row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-row>
      </el-table>
    </div>
    <div id="mychart" class="echarts_pie">
    </div>
    <div class="loginPage">
      <h1>崇明岛农村分布式水处理综合监管平台</h1>
      <el-form>
        <el-form-item label="用户名">
          <el-input id="user" type="text" v-model="formName.user" @blur="inputBlur('user',formName.user)" placeholder="请输入用户名:"/>
          <p>{{formName.userError}}</p>
        </el-form-item>
        <el-form-item label="密码">
          <el-input id="password" type="password" v-model="formName.password" @blur="inputBlur('password',formName.password)" placeholder="请输入密码:"/>
          <p>{{formName.passwordError}}</p>
        </el-form-item>
        <el-button type="primary" @click="submit('formName')" v-bind="formName.beDisabled">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form>
    </div>
  </div>

</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入饼图组件
  require('echarts/lib/chart/pie')
  // 引入线性图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

    export default {
        name: "Login",
        data(){
          return{
            //表单中的参数
            columnList:["序号:","日期:","姓名:","省份:","市区:"],
            tableLists: [
              {
                "free_space": 2.94,
                "sum_blocks": 3080,
                "sum_space": 313.13,
                "tablespace_name": "EXAMPLE",
                "used_rate": 99.06,
                "used_space": 310.19
              },
              {
                "free_space": 9501,
                "sum_blocks": 2621440,
                "sum_space": 20480,
                "tablespace_name": "SLOB",
                "used_rate": 12.11,
                "used_space": 10979
              },
              {
                "free_space": 1205,
                "sum_blocks": 5445655,
                "sum_space": 15353,
                "tablespace_name": "teaB",
                "used_rate": 53.61,
                "used_space": 13959
              },
              {
                "free_space": 6225,
                "sum_blocks": 262789,
                "sum_space": 35888,
                "tablespace_name": "hahahaha",
                "used_rate": 2.61,
                "used_space": 16879
              },
              {
                "free_space": 7582,
                "sum_blocks": 94720,
                "sum_space": 740,
                "tablespace_name": "SYSAUX",
                "used_rate": 94.68,
                "used_space": 700.62
              },
              {
                "free_space": 6684,
                "sum_blocks": 85647,
                "sum_space": 510,
                "tablespace_name": "DFHTGJ",
                "used_rate": 85.28,
                "used_space": 582.14
              },
              {
                "free_space": 2855,
                "sum_blocks": 62487,
                "sum_space": 380,
                "tablespace_name": "HIASD",
                "used_rate": 68.24,
                "used_space": 358.56
              }
            ],
            formName:{
              user:'',
              userError:'',
              password:'',
              passwordError:'',
              beDisabled:true
            },
            beShow:false,//传值给父组件
            opinion:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
            opinionData:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
            ]
          }
        },
        methods:{
          handleClick(row){
            alert(row)
          },
          drawPie(id){
            let myChart = echarts.init(document.getElementById(id))
            myChart.setOption({
              title:{'text':'ddd'},
              tooltip: {
                trigger: 'item',
                //数据格式化
                formatter: '{a}<br/>{b}:{c} ({d}%)'
              },
              legend: {
                orient: 'vertical',
                left:'left',
                x: 'left',
                data:this.opinion
              },
              series: [
                {
                  name:'访问来源',
                  type:'pie',
                  radius:['40%','70%'],
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '30',
                        fontWeight: 'blod'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:this.opinionData
                }
              ]
            })
          },
          drawBar(id){
            let chartBar = echarts.init(document.getElementById(id))
            chartBar.setOption({
              title : {
                text: '某地区蒸发量和降水量',
                subtext: '纯属虚构'
              },
              tooltip : {
                trigger: 'axis'
              },
              legend: {
                data:['蒸发量','降水量']
              },
              toolbox: {
                show : true,
                feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
                }
              },
              calculable : true,
              xAxis : [
                {
                  type : 'category',
                  data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  name:'蒸发量',
                  type:'bar',
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  markPoint : {
                    data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name: '平均值'}
                    ]
                  }
                },
                {
                  name:'降水量',
                  type:'bar',
                  data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  markPoint : {
                    data : [
                      {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                      {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                  },
                  markLine : {
                    data : [
                      {type : 'average', name : '平均值'}
                    ]
                  }
                }
              ]
            })
          },
          resetForm:function(){
            this.formName.user = '';
            this.formName.userError = '';
            this.formName.password = '';
            this.formName.passwordError = '';
          },
          submit:function (formName) {
            var user = this.formName.user,
              password = this.formName.password;
            //网络请求
          },
          inputBlur:function (item,inputContent) {
            if (item === 'user'){
              if (inputContent === ''){
                this.formName.userError = '用户名不能为空';
              } else{
                this.formName.userError = '';
              }
            }else if (item === 'password') {
              if (inputContent === ''){
                this.formName.passwordError = '密码不能为空';
              } else{
                this.formName.passwordError = '';
              }
            }
            if (this.formName.user != '' && this.formName.password != '') {
              this.formName.beDisabled = false;
            }else {
              this.formName.beDisabled = true;
            }
          }
        },
        mounted(){
          this.$nextTick(function () {
            this.drawPie('mychart')
            this.drawBar('chart_bar')
          })
        }
    }
</script>

<style scoped>
  html,body{
    margin: 0;
    padding: 0;
    position: relative;
  }
  h1{
    color: #26a2ff;
    font-size: 18px;
    display: inline;
  }

  .dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.9);
  }
  .table{
    width: 100%;
    border-spacing: 0px 5px;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
  }

  .table_div{
    position: absolute;
    top: 0%;
    right: 0%;
    margin-right: 10px;
    width: 600px;
    height: 60%;
    margin: 10px 10px 10px;
    padding: 10px 10px 10px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #f2f6fc;
  }

  .echarts_pie{
    position: absolute;
    bottom: 0%;
    left: 0%;
    margin-left: 20px;
    width: 600px;
    height: 48%;
    margin: 10px 10px 10px;
    padding: 10px 10px 10px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #f2f6fc;
  }
  .echarts_bar{
    position: absolute;
    top: 0%;
    left: 0%;
    margin-top: 10px;
    margin-left: 10px;
    width: 600px;
    height: 48%;
    padding: 30px 20px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #f2f6fc;
  }
  .loginPage{
    position: absolute;
    bottom: 0%;
    right: 0%;
    margin-bottom: 10px;
    margin-right: 10px;
    width: 350px;
    min-height: 250px;
    padding: 10px 30px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .loginPage p{
    color: red;
    text-align: left;
  }
</style>

