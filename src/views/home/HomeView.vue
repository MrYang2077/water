<script>
//引入logo
import logo from "../assets/icon 111.png";
import Aside from "../../components/Aside.vue";
import { RouterLink, RouterView } from 'vue-router';
import Breadcrumb from '@/components/Breadcrumb.vue';
export default {
  data() {
    return {
      url: logo,
      img: '',
    }
  },
  components: {
    Aside,
    logo
  },
  mounted() {
    if (!this.$store.state.userInfo.admin) {
      this.$router.push('/login');
    }
  },
  methods:{
    signOut(){
      this.$router.push('/login');
    }
  }
}
</script>
<template>
  <div class="common-layout">
    <el-container>

      <!-- 左侧 -->
      <el-aside width="200px">
        <div class="logo">
          <el-image :src="url"></el-image>
          <h1 class="manage-title">小天才早教</h1>
        </div>
        <div class="cebianlan">
          <el-col :span="12">
            <Aside></Aside>
          </el-col>
        </div>


      </el-aside>
      <el-container>
        <el-header>
          <div class="xiaotouxiang">
            <!-- {{ $store.state.userInfo }} -->
            <!-- <img :src="require($store.state.userInfo.image)" alt=""> -->
            <!-- <img src="../assets/zhu666.jpeg" alt=""> -->
            <img :src="$store.state.userInfo.image" alt="">
            <!-- <el-image :src="img"  /> -->
          </div>
          <span class="title1">最美最帅 {{ $store.state.userInfo.admin }}&emsp;<el-button type="warning"
              round @click="signOut">退出</el-button></span>
        </el-header>
        <el-main>
          <Breadcrumb />
          <!-- {{ $store.state.userInfo.image }} -->
          <!-- ../assets/zhu666.jpeg -->
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>
<!-- lang sass定义样式用sass写的 -->
<style lang="scss" scoped>
.el-container {
  background-color: #eee;
}

.el-aside {
  background-color: orange;
  width: 270px;
  color: white;
  overflow: scroll;
}

.el-header {
  background-color: white;
}

.el-image {
  width: 44px;
  height: 44px;
  margin-left: 32px;
  margin-top: 16.3px;
}

.manage-title {
  // width: 124px;
  line-height: 25px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #FFFFFF;
  text-align: left;
  margin-left: 8px;
  margin-top: 35px;
  // line-height: 186px;
}

.logo {
  display: flex;
  text-align: center;
  line-height: 30px;
}

.xiaotouxiang {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: pink;
  margin-right: 10px;
  margin-top: 6px;
}

.xiaotouxiang img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.el-header {
  display: flex;
  justify-content: end;
  line-height: 48px;
  font-size: 18px;
  font-weight: bolder;
  padding: 5px 20px;
}

.title1 {
  margin-right: 80px;
}

.el-aside {
  overflow-x: hidden;
}
</style>
