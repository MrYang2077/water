import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
//导入首页界面
import HomeView from "../views/home/HomeView.vue";
//导入首页默认展示页面
import indexView from "../views/home/indexView.vue";
//导入工作台
import WorkView from "../views/worker/workerIndexView.vue";
import MessageView from "../views/worker/messageView.vue";
import StudentView from "../views/worker/studentsView.vue";
import TaskCenterView from "../views/worker/taskCenterView.vue";
//导入课程管理
import courseManagerView from "../views/courseManager/courseManagerIndex.vue";
import courseUploadView from "../views/courseManager/courseUploadView.vue";
import feedbackView from "../views/courseManager/feedbackView.vue";
import monthReviewView from "../views/courseManager/monthReviewView.vue";
import promotionReportView from "../views/courseManager/promotionReportView.vue";
import timetableView from "../views/courseManager/timetableView.vue";
import visitEvaluationView from "../views/courseManager/visitEvaluationView.vue";
//导入数据中心
import dataCenterView from "../views/dataCenter/dataCenterIndexView.vue";
import dailyActiveView from "../views/dataCenter/dailyActiveView.vue";
import memberCenterView from "../views/dataCenter/memberCenterView.vue";
import newMemberView from "../views/dataCenter/newMemberView.vue";
//导入客户
import customerView from "../views/customer/customerIndexView.vue";
import customerCenterView from "../views/customer/customerCenterView.vue";
import customerSearchView from "../views/customer/customerSearchView.vue";
import renewalView from "../views/customer/renewalView.vue";
//导入用户管理
import userManagerView from "../views/userManager/userManagerIndexView.vue";
import bindingUserView from "../views/userManager/bindingUserView.vue";
import dailyAttendanceView from "../views/userManager/dailyAttendanceView.vue";
export const routes = [
  {
    path: "/",
    name: "index",
    redirect:'/home',
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        component: indexView,
      },
      {
        // 工作台
        path: "/worker",
        name: "worker",
        label: "工作台",
        component: WorkView,
        children: [
          {
            path: "message",
            name: "message",
            label: "消息中心",
            component: MessageView,
          },
          {
            path: "student",
            name: "student",
            label: "学员风采",
            component: StudentView,
          },
          {
            path: "taskCenter",
            name: "taskCenter",
            label: "任务中心",
            component: TaskCenterView,
          },
        ],
      },
      {
        // 课程管理
        path: "/courseManager",
        name: "courseManager",
        label: "课程管理",
        component: courseManagerView,
        children: [
          {
            path: "courseUpload",
            name: "courseUpload",
            label: "课程上传",
            component: courseUploadView,
          },
          {
            path: "feedback",
            name: "feedback",
            label: "随堂反馈",
            component: feedbackView,
          },
          {
            path: "monthReview",
            name: "monthReview",
            label: "月度回顾管理",
            component: monthReviewView,
          },

          {
            path: "promotionReport",
            name: "promotionReport",
            label: "升班报告管理",
            component: promotionReportView,
          },
          {
            path: "timetable",
            name: "timetable",
            label: "课程表",
            component: timetableView,
          },
          {
            path: "visitEvaluation",
            name: "visitEvaluation",
            label: "到访测评",
            component: visitEvaluationView,
          },
        ],
      },
      {
        // 数据中心
        path: "/dataCenter",
        name: "dataCenter",
        label: "数据中心",
        component: dataCenterView,
        children: [
          {
            path: "dailyActive",
            name: "dailyActive",
            label: "日常活跃",
            component: dailyActiveView,
          },
          {
            path: "memberCenter",
            name: "memberCenter",
            label: "会员中心",
            component: memberCenterView,
          },

          {
            path: "newMember",
            name: "newMember",
            label: "每日加入会员",
            component: newMemberView,
          },
        ],
      },
      {
        // 客户
        path: "/customer",
        name: "customer",
        label: "客户",
        component: customerView,
        children: [
          {
            path: "customerCenter",
            name: "customerCenter",
            label: "客户中心",
            component: customerCenterView,
          },
          {
            path: "customerSearch",
            name: "customerSearch",
            label: "客户搜索",
            component: customerSearchView,
          },
          {
            path: "renewal",
            name: "renewal",
            label: "续费情况",
            component: renewalView,
          },
        ],
      },
      {
        // 用户管理
        path: "/userManager",
        name: "userManager",
        label: "用户管理",
        component: userManagerView,
        children: [
          {
            path: "bindingUser",
            name: "bindingUser",
            label: "绑定账户",
            component: bindingUserView,
          },
          {
            path: "dailyAttendance",
            name: "dailyAttendance",
            label: "日常考勤",
            component: dailyAttendanceView,
          },
        ],
      },
    ],
  },
  {
    // 登陆
    path: "/login",
    name: "login",
    label: "登录",
    component: () => import("../views/loginView.vue"),
  },
  ,
  {
    // 注册
    path: "/register",
    name: "register",
    label: "注册",
    component: () => import("../views/register/indexView.vue"),
    children: [
      {
        path: "registerFinish",
        name: "registerFinish",
        label: "注册完成",
        component: () => import("../views/register/registerFinishView.vue"),
      },
      {
        path: "registerStart",
        name: "registerStart",
        label: "注册页面",
        component: () => import("../views/register/registerStartView.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
