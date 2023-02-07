<script  setup>
import { ref, reactive } from 'vue';
import { ElTable } from 'element-plus'
import { getNews } from "@/api/index.js";
const formData = reactive([]);
const tableData = ref(
    [
        {
            time: '9:00',
            Art1: 'L1 Luck',
            Play: '',
            M1: '',
            M2: '',
            Art2: '',
        },
        {
            time: '10:00',
            Art1: '',
            Play: 'L1 Luck',
            M1: '',
            M2: '',
            Art2: '',
        },
        {
            time: '11:00',
            Art1: '',
            Play: 'L1 Luck',
            M1: 'L1 Luck',
            M2: '',
            Art2: '',
        },
        {
            time: '14:00',
            Art1: '',
            Play: '',
            M1: '',
            M2: 'L1 Luck',
            Art2: '',
        },
        {
            time: '15:00',
            Art1: '',
            Play: '',
            M1: '',
            M2: '',
            Art2: 'L1 Luck',
        },
        {
            time: '16:00',
            Art1: '',
            Play: '',
            M1: '',
            M2: '',
            Art2: '',
        }
    ]
)
getNews().then(res => {
    res.list.forEach(item => {
        formData.push(item)
    });
}) 
</script>
<template>
    <div class="content">
        <div class="line1">
            <div class="brief">
                <div>
                    <img :src="$store.state.userInfo.image" alt="">
                    <div class="name">{{$store.state.userInfo.admin}}</div>
                    <div>中级指导师</div>
                    <div>中心金牌指导师</div>
                    <div>最受欢迎指导师</div>
                </div>
            </div>
            <div class="course">
                <div class="title">课程安排</div>
                <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%">
                    <el-table-column property="time" width="100" />
                    <el-table-column property="Art1" label="Art1" width="100" />
                    <el-table-column property="Play" label="Play" width="100" />
                    <el-table-column property="M1" label="M1" width="100" />
                    <el-table-column property="M2" label="M2" width="100" />
                    <el-table-column property="Art2" label="Art2" width="100" />
                </el-table>
            </div>
            <div class="beauty">
                <div class="title">最美指导员</div>
                <div class="content1">
                    <img src="https://img0.baidu.com/it/u=975104879,4082016667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=700"
                        alt="">
                    <div class="content2">
                        <div>LUCK</div>
                        <div>中心金牌指导师</div>
                    </div>
                </div>
                <div class="content1">
                    <img src="https://img1.baidu.com/it/u=2540431013,1612197775&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=700"
                        alt="">
                    <div class="content2">
                        <div>LUCK</div>
                        <div>中心金牌指导师</div>
                    </div>
                </div>
                <div class="content1">
                    <img src="https://img0.baidu.com/it/u=1686253209,4240691631&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666"
                        alt="">
                    <div class="content2">
                        <div>LUCK</div>
                        <div>中心金牌指导师</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="line2">
            <div class="news">
                <div class="title">最新消息</div>
                <el-table :data="formData" style="width: 480">
                    <el-table-column prop="title" label="标题" width="180" />
                    <el-table-column prop="type" label="类型" width="100" />
                    <el-table-column prop="state" label="状态" width="280" />
                    <el-table-column prop="time" label="发布时间" width="100" />
                </el-table>
            </div>
            <div class="daily">
                <div class="title">宝宝日常</div>
                <div class="content3">
                    <div class="img1">
                    </div>
                    <div class="flex">
                        <div class="img2"></div>
                        <div class="img3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.content {
    /* width: 98%;
    height: 95%; */
}

.line1 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
}

.brief {
    width: 382px;
    height: 370px;
    background-color: white;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.brief img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
}

.brief .name {
    font-weight: 600;
}

.brief div {
    text-align: center;
    margin-top: 5px;
}

.course {
    width: 780px;
    height: 370px;
    background-color: white;
    margin-right: 16px;
}

.beauty {
    width: 382px;
    height: 370px;
    background-color: white;
}

.line2 {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 36px;
}

.news {
    width: 880px;
    height: 370px;
    background-color: white;
    margin-right: 16px;
    overflow: hidden;
}

.daily {
    width: 681px;
    height: 370px;
    background-color: white;
}

.title {
    width: 98px;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #888888;
    margin-top: 16px;
    margin-left: 30px;
    position: relative;
}

.title::before {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: -8px;
    width: 6px;
    height: 20px;
    background: #FCAD59;
}

.beauty .content1 {
    display: flex;
    align-items: center;
}

.beauty .content1 img {
    width: 100px;
    height: 100px;
    margin-top: 8px;
    margin-left: 22px;
}

.beauty .content1 .content2 {
    text-align: center;
    margin-top: 30px;
    margin-left: 20px;
}

.daily .content3 {
    width: 500px;
    margin: 0 auto;
}

.daily .content3 .flex {
    width: 100%;
    display: flex;
}

.daily .content3 .img1 {
    width: 100%;
    height: 141px;
    margin-bottom: 16px;
    margin-top: 20px;
    overflow: hidden;
    background: url("https://img0.baidu.com/it/u=952129552,555937&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500") no-repeat;
    background-position: 10px -153px;
    background-size: cover;
}

.daily .content3 .img2 {
    width: 323px;
    height: 150px;
    margin-left: 11px;
    margin-right: 42px;
    overflow: hidden;
    background: url("https://img0.baidu.com/it/u=4230865783,826804281&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=474") no-repeat;
    background-position: 0px -26px;
    background-size: cover;
}

.daily .content3 .img3 {
    width: 206px;
    height: 150px;
    overflow: hidden;
    background: url("https://img2.baidu.com/it/u=231219322,1862558018&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=331") no-repeat;
    background-position: 0px -2px;
    background-size: cover;
}
</style>