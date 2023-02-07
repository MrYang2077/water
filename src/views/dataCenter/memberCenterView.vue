<script>
import * as echarts from 'echarts';
// import { watch } from 'vue';
import { getRenew, getInfo, getRanking } from '@/api/user';
export default {
    data() {
        return {
            // myChart: null
            list: [],
            newList: [],
            tableData: [],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            stripe: true,
            currentPage: 1,
            rankingData: [],
            arr: [],
            page: [{
                value: 1,
                label: "1行/页"
            }, {
                value: 2,
                label: "2行/页"
            }, {
                value: 3,
                label: "3行/页"
            }, {
                value: 4,
                label: "4行/页"
            }, {
                value: 5,
                label: "5行/页"
            }, {
                value: 6,
                label: "6行/页"
            }],
            rankingData: [],
            values:5
        }
    },
    computed: {
        tableDataChange() {
            return this.tableData.slice(
                (this.currentPage - 1) * this.values,
                (this.currentPage - 1) * this.values + this.values
            );
        },
        selected(){
            return this.values
        }
    },
    mounted() {
        getRenew().then(res => {
            // console.log(res.list)
            this.list = res.list
            this.newList = this.list.map((item) => {
                return item.renew
            })
            // var chartEle = document.getElementById('member-chart');
            // chartEle.removeAttribute('_echarts_instance_'); // 移除容器标签'_echarts_instance_' 实例属
            // console.log(newList);
            myChart.setOption({
                // title: {
                //     text:'会员续费情况'
                // },
                tooltip: {},
                xAxis: {
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: this.newList,
                        itemStyle: {
                            normal: {
                                //这里是重点
                                color: function (params) {
                                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                    var colorList = ['#FFA6FA', '#87FF84', '#FFEC93', '#80FFF8', '#7488FF', ' #FF7DB1', '#FFCC84', "#F2FFAC", "#8E96C7", "#E5A0A1", "#ffe600", "b7b2ca"];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    },
                ]
            });
        })
        // var chartEle = document.getElementById('member-chart');
        // chartEle.removeAttribute('_echarts_instance_'); // 移除容器标签'_echarts_instance_' 实例属性，使用echarts.init重新生成一个新的实例ID
        var myChart = echarts.init(document.getElementById('member-chart'));
        // 绘制图表
        // myChart.setOption({
        //     // title: {
        //     //     text:'会员续费情况'
        //     // },
        //     tooltip: {},
        //     xAxis: {
        //         data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月','11月','12月']
        //     },
        //     yAxis: {},
        //     series: [
        //         {
        //             name: '销量',
        //             type: 'bar',
        //             data: this.newList
        //         }
        //     ]
        // });
        getInfo().then(res => {
            // console.log(res.list)
            this.tableData = res.list


        })

        getRanking().then(res => {
            // console.log(res.list)
            this.rankingData = res.list
        })
    },
    methods: {
        resetClick() {
            this.value1 = '',
                this.value2 = '',
                this.value3 = '',
                this.value4 = '',
                getInfo().then(res => {
                    console.log(res.list)
                    this.tableData = res.list
                    // console.log(typeof this.tableData[0].guidance)


                })
            // this.tableData = 
        },
        find() {
            // console.log(this.tableData[0].babyName);
            // console.log(this.tableData[0].babyName)
            // if(this.value1 == this.tableData)
            // this.tableData.forEach((item) => {
            //     // console.log(item.babyName)
            //     // console.log(this.value1)
            //     this.arr=[]
            //     // if (this.value1 == item.babyName) {
            //     //     console.log(this.tableData);
            //     //     this.arr.push(item)
            //     //     this.tableData = this.arr
            //     // }
            //     // if (this.value2 == item.tel) {
            //     //     this.arr.push(item)
            //     //     this.tableData = this.arr
            //     // }
            //     // if (this.value3 == item.parentsName) {
            //     //     this.arr.push(item)
            //     //     this.tableData = this.arr
            //     // }
            //     if (this.value4 == item.guidance) {
            //         this.arr.push(item)

            //     }

            // })
            // this.tableData = this.arr
            this.arr = []
            for (let i = 0, j = this.tableData.length; i < j; i++) {

                if (!(this.value1 == this.tableData[i].babyName ||
                    this.value2 == this.tableData[i].tel ||
                    this.value3 == this.tableData[i].parentsName ||
                    this.value4 == this.tableData[i].guidance)) {
                } else {
                    this.arr.push(this.tableData[i])
                    // console.log(this.tableData[i].guidance);
                }
            }
            this.tableData = this.arr
            this.$forceUpdate()
        }
    },
}
</script>
<template>
    <div class="content">
        <!-- 左边 -->
        <div class="left">
            <!-- 上方图标 -->
            <div class="member1">
                <div class="renew">会员续费情况</div>
                <div id="member-chart"></div>
            </div>
            <!-- 下面图标 -->
            <div class="member-message">
                <div class="query">会员信息查询</div>
                <!-- 多选框 -->
                <div class="member-check">
                    <label for="">宝宝姓名：</label>
                    <el-select v-model="value1" class="m" placeholder="宝宝姓名" size="small" width="20">
                        <el-option v-for="item in tableData" :key="item.title" :label="item.babyName"
                            :value="item.babyName" />
                    </el-select>
                    <label for="">联系电话：</label>
                    <el-select v-model="value2" class="m" placeholder="联系电话" size="small">
                        <el-option v-for="item in tableData" :key="item.title" :label="item.tel" :value="item.tel" />
                    </el-select>

                    <label for="">联系人：</label>
                    <el-select v-model="value3" class="m" placeholder="联系人" size="small">
                        <el-option v-for="item in tableData" :key="item.title" :label="item.parentsName"
                            :value="item.parentsName" />
                    </el-select>
                    <label for="">指导老师：</label>
                    <!-- <el-select v-model="value3" class="m" placeholder="指导老师" size="small">
                        <template v-if="tableData.length">
                            <el-option v-for="item in 1" :key="item" :label="tableData[0].guidance"
                                :value="tableData[0].guidance" />
                        </template>
                    </el-select> -->
                    <el-select v-model="value4" class="m" placeholder="指导老师1" size="small">
                        <el-option v-for="item in tableData" :key="item.title" :label="item.guidance"
                            :value="item.guidance">11111</el-option>
                    </el-select>
                    <el-button type="primary" round size="small" color="#A5CDFF" @click="find">查询</el-button>
                    <el-button type="primary" round size="small" color="#A5CDFF" @click="resetClick">重置</el-button>
                </div>

                <!-- 输入框 -->
                <!-- <div class="member-check">
                    <el-form>
                    <label for="">宝宝姓名：</label>
                    <el-input v-model="input" placeholder="宝宝姓名" size="small" width="20px" />
                    <label for="">宝宝姓名：</label>
                    <el-input v-model="input" placeholder="宝宝姓名" size="small" width="20px" />
                    <label for="">宝宝姓名：</label>
                    <el-input v-model="input" placeholder="宝宝姓名" size="small" width="20px" />
                    <label for="">宝宝姓名：</label>
                    <el-input v-model="input" placeholder="宝宝姓名" size="small" width="20px" />
                    </el-form>
                </div>
                 -->
                <!-- 表格 -->
                <el-table height="250" :data="tableDataChange" style="width: 100%" stripe>
                    <el-table-column prop="babyName" label="姓名" />
                    <el-table-column prop="old" label="月龄" />
                    <el-table-column prop="parentsName" label="父母名字" />
                    <el-table-column prop="tel" label="电话" />
                    <el-table-column prop="recommend" label="推荐人" />
                    <el-table-column prop="guidance" label="指导老师" />
                </el-table>
                <div class="select">
                    <el-pagination layout="prev, pager, next" v-model:current-page="currentPage"
                        :total="tableData.length" v-model:page-size="values" />
                    <el-select v-model="values"  placeholder="Select" style="width: 120px;margin-right: 0px;margin-left: 0px;">
                        <el-option v-for="item in page" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                    <span>跳至<input type="text" v-model="currentPage"></span>
                </div>
            </div>
        </div>

        <!-- 右边 -->
        <div class="right">
            <div class="ranking">全国会员人数排名</div>
            <ol>
                <li v-for="item in rankingData" :key="item" class="rankdata">
                    <span> {{ item.province2 }}</span>
                    <span> {{ item.num }}</span>
                </li>
            </ol>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 100%;

    // background-color: #aaa;
}

.left {
    width: 70%;
    // height: 100%;
    // background-color: rgb(184, 234, 255);
    float: left;
}

.left #member-chart {
    width: 100%;
    height: 300px;
    background-color: #fff;
}

.right {
    width: 25%;
    background-color: #fff;
    float: right;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
}

.member1 {
    width: 100%;
    position: relative;
    margin-bottom: 20px;
}

.renew {
    z-index: 3;
    position: absolute;
    left: 20px;
    top: 10px;
}

.renew::before {
    content: "";
    width: 5px;
    height: 18px;
    background-color: orange;
    position: absolute;
    left: -10px;
    top: 0px;
}

.ranking {
    width: 100%;
    position: relative;
    margin-bottom: 40px;
}

.ranking::before {
    content: "";
    width: 5px;
    height: 18px;
    background-color: orange;
    position: absolute;
    left: -10px;
    top: 0px;
}

.member-message {
    width: 100%;
    // height: 300px;
    background-color: #fff;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
}

.query {
    position: relative;
}

.query::before {
    content: "";
    width: 5px;
    height: 18px;
    background-color: orange;
    position: absolute;
    left: -10px;
    top: 0px;
}

.member-check {
    width: 100%;
    padding-top: 10px;
    position: relative;
}

.member-check label {
    font-size: 14px;
    margin-left: 15px;
}

.m {
    width: 120px;
    margin-top: 5px;
}

.el-button {
    width: 80px;
    color: #fff;
    font-size: 12px;
    // position: absolute;
    margin-left: 200px;
    margin-top: 50px;
}

.hot {
    color: #00B5F8;
}

.el-table {
    width: 100%;
    margin-top: 20px;
}

.rankdata {
    height: 40px;
}

.rankdata span:nth-child(1) {
    width: 60px;
    margin-left: 10px;
    margin-right: 20px;
}

.select{
    display: flex;
    justify-content: right;
    align-items: center;
}
</style>
