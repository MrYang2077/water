<script>
import {
    House, MessageBox, CoffeeCup, UserFilled, Avatar, HomeFilled
} from "@element-plus/icons-vue";
import { mapState } from "vuex";
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['currentPath'])
    },
    components: {
        House, MessageBox, CoffeeCup, UserFilled, Avatar, HomeFilled
    }
}
</script>


<template>
    <div class="cebian">
        <el-menu :default-active="currentPath" :router="true" class="el-menu-vertical-demo" background-color="orange"
            text-color="white" active-text-color="#A5CDFF" hover-bg-color="#A5CDFF" :unique-opened=true>

            <el-menu-item index="/" id="home">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                首页
            </el-menu-item>
            <el-sub-menu index="/worker">
                <template #title>
                    <el-icon>
                        <House />
                    </el-icon>
                    <span>工作台</span>
                </template>
                <el-menu-item index="/worker/taskCenter">任务中心</el-menu-item>
                <el-menu-item index="/worker/student">学员风采</el-menu-item>
                <el-menu-item index="/worker/message">消息中心</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/courseManager">
                <template #title>
                    <el-icon>
                        <MessageBox />
                    </el-icon>
                    <span>课程管理</span>
                </template>
                <el-menu-item index="/courseManager/timetable">课程表</el-menu-item>
                <el-menu-item index="/courseManager/feedback">随堂反馈</el-menu-item>
                <el-menu-item index="/courseManager/visitEvaluation">到访评测</el-menu-item>
                <el-menu-item index="/courseManager/monthReview">月度回顾管理</el-menu-item>
                <el-menu-item index="/courseManager/promotionReport">升班报告管理</el-menu-item>
                <el-menu-item index="/courseManager/courseUpload">课程上传</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/dataCenter">
                <template #title>
                    <el-icon>
                        <CoffeeCup />
                    </el-icon>
                    <span>数据中心</span>
                </template>
                <el-menu-item index="/dataCenter/memberCenter">会员中心</el-menu-item>
                <el-menu-item index="/dataCenter/dailyActive">日常活跃</el-menu-item>
                <el-menu-item index="/dataCenter/newMember">每日加入会员</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="/customer">
                <template #title>
                    <el-icon>
                        <UserFilled />
                    </el-icon>
                    <span>客户</span>
                </template>
                <el-menu-item index="/customer/customerCenter">客户中心</el-menu-item>
                <el-menu-item index="/customer/customerSearch">客户搜索</el-menu-item>
                <el-menu-item index="/customer/renewal">续费情况</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/userManager">
                <template #title>
                    <el-icon>
                        <Avatar />
                    </el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/userManager/bindingUser">日常考勤</el-menu-item>
                <el-menu-item index="/userManager/dailyAttendance">绑定账户</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<style lang="scss">
.el-menu {
    font-weight: 900;
}

ul {
    width: 330px;
}

span {
    text-align: center;
}

.el-col-12 {
    max-width: 100%;
}

.el-sub-menu {
    border-bottom: 1px white dashed;
}

#home {
    border-bottom: 1px white dashed;
}
</style>