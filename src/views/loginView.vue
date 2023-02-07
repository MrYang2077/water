<script>
import { loginFn } from '@/api/login.js'
export default {
  data() {
    return {
      userName: '',
      password: '',
      flag: false,
      checked: false
    }
  },
  methods: {
    reset() {
      this.password = ''
    },
    loginClick() {
      if (this.userName == '' || this.password == '') {
        ElMessage.error('账户名密码不能为空');
        return
      }
      if (this.userName.length < 6) {
        ElMessage.error('账户名长度必须大于6!');
        return
      }
      loginFn({
        username: this.userName,
        password: this.password
      }).then(res => {
        console.log(res);
        if(res.code == 2002){
          ElMessage.error('账号或密码有误！')
        }
        if(res.code == 2001){
          ElMessage.error('密码错误！')
        }
        if (res.code == 200) {
          localStorage.setItem('token', res.token)
          this.$store.commit('changeUserInfo',res)
          this.$router.push('/')
        }
      })
      // 点击登陆按钮，把用户名，密码和当前的时间戳存到缓存里面
      if (this.checked) {
        var date = new Date()
        localStorage.setItem('userName', this.userName)
        localStorage.setItem('password', this.password)
        localStorage.setItem('startTime', date.getTime())
      } else {
        localStorage.removeItem('password');
        // localStorage.removeItem('userName');
        this.password = '';
      }
    },
    //判断是否记住密码
    checkLocalStorage() {
      var date = new Date()
      var nowtimeStamp = date.getTime();//现在的时间戳
      var beforetimeStamp = localStorage.getItem('startTime');//上次存的时间戳
      var localUserName = localStorage.getItem('userName');//上次存的用户名
      var localPassword = localStorage.getItem('password');//上次存的密码
      //根据时间戳判断是否需要记住密码(保存一天)
      if (nowtimeStamp - beforetimeStamp >= 24 * 60 * 60 * 1000) {
        localStorage.clear()
      } else {
        this.userName = localUserName;
        this.password = localPassword;
      }

    }
  },
  mounted() {

  },
  created() {
    //进入页面就去判断是否记住密码
    this.checkLocalStorage();
    // this.checked=false
  }
}
</script>
<template>
  <div class="box">
    <div class="content">
      <div class="login-head">
        <img src="./assets/icon 111.png" alt="">
        <span>小天才早教</span>
      </div>
      <div class="login-main">
        <input type="text" class="input1" placeholder="请输入你的账户" v-model="userName">
        <input type="password" class="input2" placeholder="请输入你的密码" v-model="password" @keydown.enter="loginClick">
        <el-checkbox label="记住密码" size="large" v-model="checked" />
        <span class="login-icon">
          <router-link to="/register/registerStart" class="login-link">注册账户</router-link>
          <span class="login-link" @click="reset">重置密码</span>
        </span>
      </div>
      <div>
        <el-button @click="loginClick" :disabled="flag">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html,
body,
#app,
.box {
  width: 100%;
  height: 100%;
  background-color: orange;
  overflow: hidden;
  position: relative;
}

.box .content {
  width: 400px;
  height: 300px;
  background: #FFFFFF;
  border: 4px solid rgba(136, 136, 136, 0.3);
  border-radius: 10px;
  padding: 30px 50px 25px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
}

.login-head {
  width: 100%;
  height: 40px;
  text-align: center;
  margin-bottom: 28px;
}

.login-head img {
  height: 30px;
}

.login-head span {
  width: 131px;
  height: 25px;
  font-size: 25px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #A5CDFF;

}

.login-main {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
}

.login-main .input1 {
  width: 100%;
  height: 48px;
  border: 6px solid #EEEEEE;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid #EEEEEE;
  box-sizing: border-box;
}

.login-main .input2 {
  width: 100%;
  height: 48px;
  border: 6px solid #EEEEEE;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #EEEEEE;
  box-sizing: border-box;
}

input {
  outline: none;
  font-size: 18px;
  text-indent: 2rem;
}

input::placeholder {
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #EEEEEE;
  // line-height: 186px;
  text-indent: 2rem;
}

.el-checkbox {
  margin-top: 10px;
}

.login-icon {
  position: relative;
  left: 115px;
  top: -15px;
  display: flex;
  width: 60%;
  justify-content: space-between;


}

.login-link {
  text-decoration: none;
  color: #000;
  font-size: 14px;
  color: #aaa;
}

.el-button {
  width: 134px;
  height: 30px;
  background: #A5CDFF;
  border-radius: 15px;
  font-size: 15px;
  color: #FFFFFF;
  font-family: Microsoft YaHei;
  margin-right: 0px;
}
</style>
