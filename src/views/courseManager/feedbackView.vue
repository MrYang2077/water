<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

import axios from 'axios'
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { memoize } from 'lodash'
const language = ref('zh-cn')
const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
const value = ref('')
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

let masktf = ref(false)
    let info = ref({})
    let type = ref("")

    function close(row) {
        masktf.value = !masktf.value
        info.value = row
            // console.log(info.value);
    }
</script>
<script>
export default {
  data(){
    return{
  list:[],
  datatotal:0,
  pageindex:0,
  pagesize:8,
  elpagesize:8,
  page:1,
  pagejump:1,
  detailsopshow:false,
  tableData:[],
  theme:'',
  object:'',
  state:'',
  launch:'',
  implement:'',
  task:'',
  task2:'',

  address:'',
  class1:'',
  adress:'',
  sponsor:'',

}
  },
computed:{
  detailheight(){
    return this.detailsopshow ? '400px':'0px'
  }
},

  methods:{
    pagesizechange(){
      console.log(this.pagesize);
      axios.get("/api/get/MessageCenter",
      {params:{
    pageindex:1,
    pagesize:this.pagesize
   }}
   ).then((res) => {
    
    this.list=res.data.list
    this.datatotal=res.data.main.length
    this.pageindex=1
    this.elpagesize=Number(this.pagesize) 
    this.tableData=this.list

})},
pagenumclick(){
  axios.get("/api/get/MessageCenter",
      {params:{
    pageindex:this.page,
    pagesize:this.pagesize
   }}
   ).then((res) => {
    this.list=res.data.list
    this.datatotal=res.data.main.length
    this.pageindex=res.data.pageindex
    this.elpagesize=Number(this.pagesize) 
    this.tableData=this.list
})
},
pagejumpblur(){
  if(this.pagejump<1){
    this.pagejump=1
  }
  if(this.pagejump>(this.datatotal/this.elpagesize)){
  console.log((this.datatotal/this.elpagesize));
    this.pagejump=Math.ceil(this.datatotal/this.elpagesize)
  }
  axios.get("/api/get/MessageCenter",
      {params:{
    pageindex:this.pagejump,
    pagesize:this.pagesize
   }}
   ).then((res) => {
    // console.log(res.data);
    this.list=res.data.list
    this.datatotal=res.data.main.length
    this.pageindex=res.data.pageindex
    this.elpagesize=Number(this.pagesize) 
    this.page= Number( this.pagejump)
    this.tableData=this.list

})},
query(){
  this.pagesize=100,
  axios.get("/api/get/query2",
      {params:{
        theme:this.theme,
        address:this.address,
        state:this.state,
        launch:this.launch,
        implement:this.implement,
        pageindex:this.page,
        class:this.class1,
        pagesize:300
   }}
   ).then((res) => {
    this.list=res.data.list
    this.datatotal=res.data.list.length
    this.tableData=this.list
    this.elpagesize=300
    console.log(res)
 

})
},
reset(){
  this.theme='',
  this.object='',
  this.state='',
  this.launch='',
  this.implement=''
  this.task=''  
  this.task2=''  

  this.address='',
  this.sponsor=''
  this.class1=''
},
  },
  created(){
   axios.get("/api/get/MessageCenter",
   {params:{
    pageindex:1,
    pagesize:this.pagesize
   }}
   ).then((res) => {
    this.list=res.data.list
    this.datatotal=res.data.main.length
    this.pageindex=res.data.pageindex
    this.tableData=this.list

}) 

},
  mounted(){

    
  }


}
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
</style>

<template>
 
    <form action=""> 
        <div class="fill">
<p class="fillp" >宝宝姓名：  <input type="text" style="width:200px" v-model="address"></p>
<p class="fillp">点评INS  &nbsp;&nbsp; <select  style="width:200px"  v-model="launch">
        <option value="" disabled selected></option>
        <option value="杨" >杨</option>
        <option value="祝" >祝</option>
        <option value="方" >方</option>

       </select> </p>

<p class="fillp">点评状态：  &nbsp;&nbsp; <select  style="width:200px" v-model="state">
        <option value="" disabled selected></option>
        <option value="完成">完成</option>
        <option value="未完成">未完成</option>

       </select> </p>


       <p class="fillp" >课程代码： <input type="text" style="width:200px" v-model="class1"> </p>

  
    <p class="time">
    <div class="demo-date-picker">
    <div class="block">
      <p style="font-weight:bolder">点评时间：<el-date-picker
        v-model="task"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
      /></p>
    </div>
  </div></p>
  <p class="time2">
    <div class="demo-date-picker">
    <div class="block">
      <p style="font-weight:bolder">课程时间：<el-date-picker
        v-model="task2"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"

      /></p>
    </div>
  </div></p>
 <div class="search">
  <el-button type="primary" @click="query">查询</el-button>
    <el-button type="primary" @click="reset">重置</el-button>
 </div>


</div>
    </form>

  <div class="message">
   
  <el-table :data="tableData"  highlight-current-row:true>
    <el-table-column fixed prop="index" label="序号" width="60" />
    <el-table-column prop="class" label="课程代表" width="100" />
    <el-table-column prop="address" label="宝宝名字" width="100" />
    <el-table-column prop="tasktime" label="点评时间" width="150" />
    <el-table-column prop="completetime" label="课程时间" width="150" />
    <el-table-column prop="sponsor" label="点评INS" width="100" />
    <el-table-column prop="executor" label="主教" width="100" />
    <el-table-column prop="state" label="任务状态" width="100" />
    <el-table-column prop="theme" label="类型" width="140" />
    <el-table-column prop="play" label="操作" width="100"  >
              <template #default="scope">
                  <el-button type="primary"  @click="close(scope.row)" round>查看</el-button>
    </template></el-table-column>
  </el-table>

  <br>
  <div class="bottom">
    <p class="total">共{{datatotal}}条数据，第{{ pageindex }}页</p>

<div class="page">
  <el-pagination 
  small
    :page-size=elpagesize
    layout="prev, pager, next"
    :total=datatotal
    v-model:current-page="page"
    @click="pagenumclick"
    />
<select name="" id="pageselect" class="pageselect" v-model="pagesize" @click="pagesizechange" >
  <option value="8">8行/页</option>
  <option value="16">16行/页</option> 
  <option value="24">24行/页</option> 
  <option value="100">100行/页</option> 
</select>
<p>跳转 <input type="Number" oninput="value=value.replace(/[^\d]/g,'')" class="pagesinput" v-model="pagejump"   @change="pagejumpblur"> 
  <!-- <button @click="pagejumpblur" >转至</button>-->

  </p> 
</div>
  </div>

  </div>

 
<div class="mask" v-show="masktf">
    <div class="table">
        <div class="tabletop">
            <span>查看随堂反馈:</span>
            <span @click="close" class="quxiao">X</span>
        </div>
        <div class="content">
            <div class="conclass">
                <span>上课类型 : {{ info.class }}</span>
                <span>课程代码 : {{ info.type1 }}</span>
            </div>
            <div class="conclass">
                <span>宝宝姓名 : {{ info.address}}</span>
                <span>点评INS : {{ info.sponsor }}</span>
            </div>
            <div class="conclass">
                <span>上课时间 : {{ info.completetime}}</span>
                <span>点评时间 : {{ info.tasktime }}</span>
            </div>
            <div class="conclass">
                <span>主教 : {{ info.executor }}</span>
                <span>助教 : {{ info.executor }}</span>
            </div>
            <div class="conbtoom">
                <span>点评INS</span>
                <div class="dianp"></div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
// .................................
.mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(0, 0, 0, .3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
    
    .mask .table {
        width: 700px;
        height: 400px;
        border-radius: 20px;
        background-color: rgb(255, 255, 255);
        padding: 20px;
        box-sizing: border-box;
    }
    
    .mask .table .tabletop {
        display: flex;
        justify-content: space-between
    }
    
    .mask .table .content {
        width: 650px;
        height: 300px;
        border: 1px solid rgb(206, 206, 206);
        margin: 10px auto;
    }
      
    .content .conclass {
        padding-left: 20px;
        box-sizing: border-box;
        height: 40px;
        border-bottom: 1px solid rgb(206, 206, 206);
    }
    
    .content .conclass span {
        display: inline-block;
        width: 50%;
        line-height: 40px;
        text-align: left;
    }
    
    .conbtoom {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .conbtoom .dianp {
        width: 400px;
        flex: 1;
        height: 100px;
        border: 1px solid rgb(206, 206, 206);
    }
    
    .conbtoom span {
        display: flex;
     text-align: left;
    }
    
    .quxiao {
        cursor: pointer;
    }
//........................





.details{
    
  /* opacity:v-bind(detailsopshow) ; */
  /* display: none; */
  overflow: hidden;
  width: 800px;
/* height: 0; */
  position: absolute;

  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.details{
height: v-bind(detailheight);
text-align: left;
}
</style>
<style>
body{
  position: relative;
}

table{
  text-align: center;
margin-left: 40px;
}
td{
  padding: 10px 20px;
  /* border: 1px solid rgb(216, 216, 216); */
}
input{
    border:1px solid rgb(199, 197, 197);
}
select{
    border:1px solid rgb(199, 197, 197);
}
.time{
    margin-left: 5%;
    margin-top: 0px;
    display: flex;
    flex-wrap: nowrap;

}
.time2{
  margin-left: 5%;
  margin-top: 0px;
  display: flex;
  /* padding-top: 0; */
}
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.fill{
    margin-top: 25px;
    height: 30%;
    width: 100%;
    background-color: white;
    border-radius: 1%;
    position: relative;
}
.message{
    /* height: 280px; */
    width: 100%;
    background-color: white;
    margin-top: 40px;
    border-radius: 1%;
    /* position: relative; */
}
option{
    text-align: center;
}
option:hover{
background-color: skyblue;
}
select{
    width: 200px;
    text-align: center;
    background-color: transparent;
    border:1px solid black;
}
.fillp{font-weight: bolder;
    margin-left: 5%;
    margin-top: 50px;
}
.fill{
    display: flex;
    flex-wrap: wrap;
}
.search{
position: absolute;
right: 20px;
bottom: 10px;
}
.tableQuery{
  background-color: #A5CDFF;
  border: 0px solid;
  border-radius: 5px;
  color: white;
}
.total{
  font-size: 12px;
  color: rgb(140, 140, 140);
  /* position: absolute; */
  bottom: 0px;
  left: 20px;
}
.page{
  display: flex;
  /* position: absolute; */

  bottom: 5px;
  right: 10px; 
}
.pageselect{
  margin-top: 17px;
  margin-left: 50px;
  margin-right: 20px;
  width: 100px;
  border-radius: 10px;
  height: 20px;
}
.pagesinput{
  width: 80px;
  margin-right: 50px;
}
.bottom{
  width: 100%;
  display: flex;
  justify-content: space-around
}
</style>