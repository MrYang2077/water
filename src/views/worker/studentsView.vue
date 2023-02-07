<script >
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import "../../mock/student"
export default{
    data(){
        return{
            photolist:[],
            classphoto:[],
            title:''
        }
    },
    created(){
   axios.get("/photo",{}).then((res) => {
    this.photolist=res.data.photo
// console.log(this.photolist );
}) 
axios.get("/classphoto",{}).then((res) => {
// console.log(res.data.photo);
this.classphoto=res.data.photo
}) 
},
methods:{
    open4(){
    ElNotification({
    title: '查询不到！！！',
    message: '查不到！查不到！！查不到！！！',
    type: 'error',
  })
}
}
}
</script>

<template>
    <div class="content" >
        <div class="stu-head">
            <span>
                <label>班级: </label>
                <select name="" id="">
                    <option value="" disabled selected></option>
                    <option value="">0101班</option>
                    <option value="">0102班</option>
                    <option value="">0103班</option>
                    <option value="">0104班</option>
                </select>
            </span>
            <span>
                <label>学员姓名: </label>
                <select name="" id="">
                    <option value="" disabled selected></option>
                    <option value="">张 三</option>
                    <option value="">李 四</option>
                    <option value="">王 五</option>
                    <option value="">赵 六</option>
                </select>
            </span>
            <span>
                <label>指导老师: </label>
                <select name="" id="">
                    <option value="" disabled selected></option>
                    <option value="">刘玄德</option>
                    <option value="">关云长</option>
                    <option value="">张翼德</option>
                    <option value="">曹孟德</option>
                </select>
            </span>
            <el-button plain @click="open4"> 查询 </el-button>
            <!-- <el-button type="primary" round @click="search">查询</el-button> -->
        </div>

        <div class="stu-main">
           <div class="stu-title" >
               <p>每日最帅气小朋友</p>
               <p>每日最可爱小朋友</p>
               <p>每日最乖乖小朋友</p>
               <p>每日最友善小朋友</p>
            </div>
            <div class="stu-photo"  >
                <img v-for="item in photolist" :src="item.childrenphoto" alt="" >
            </div>
        </div>
<br>
<br>


        <h3>班级上课瞬间</h3>
        <br>
        <br>

        <div class="classph">
           <img v-for="item in classphoto" :src="item.classphoto" alt="" >
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width:100%;
   height: 800px;
    background-color: #fff;
    padding: 49px 102px;
    box-sizing: border-box;
    .stu-head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 12px;
        box-sizing: border-box;
        position: relative;
    }

    .stu-main{
        font-size: 12px;
        color: #aaa;
        width: 100%;
        // height: 50%;
    }  
}

.stu-head .el-button {
    position: relative;
    top: -5px;
    right: 0px;
}
.stu-title{
    display:flex ;
    justify-content: space-between;
    text-align: center;
    p{
        width: 150px;
    }
}
.stu-photo{
    display:flex ;
    justify-content: space-between; 
    img{
        height: 150px;
        width: 150px;

    }
}
.classph{
    display: flex;
    justify-content: space-between;
   
}
.classph>img{
        width: 400px;
        height:300px;
        background-color:green;
    }
</style>