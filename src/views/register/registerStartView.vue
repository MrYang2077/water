<script>
import { getCode, checkCode, checkTel } from '@/api/register.js'
export default {
    data() {
        return {
            formData: {
                enterUserName: '',
                setUserName: '',
                setPassword: '',
                repeatPassword: '',
                enterTel: '',
                enterCode: '',
            },
            flag: true,
            value: null,
            Text: '点击获取验证码',
            timer: null,
            sign: false,
            codeSign: false,
            telSign: false
        }
    },
    methods: {
        //点击获取
        sendClick() {
            clearInterval(this.timer);
            if (!this.value || this.value == 0) {
                getCode().then(res => {
                    console.log(res);
                });
            }
            this.value = 60;
            this.flag = false;
            this.timer = setInterval(() => {
                if (this.value > 0) {
                    this.value--;
                    this.Text = this.value + '秒后重新获取'
                } else {
                    this.value = 0;
                    clearInterval(this.timer);
                    this.flag = true;
                    this.Text = '点击获取验证码'
                }
            }, 1000);
        },
        //点击校验验证码
        checkedClick() {
            if (this.formData.enterCode.length == 0) {
                ElMessage.error('验证码不能为空！');
                return
            }
            checkCode({ code: this.formData.enterCode }).then(res => {
                console.log(res);
                if (res.code == 200) {
                    this.codeSign = true
                    if (this.telSign == true && this.codeSign == true) {
                        ElMessage({
                            message: '注册成功！',
                            type: 'success',
                        });
                        this.$router.push('/register/registerFinish')
                    }
                }
            })
        },
        //点击判断手机号是否注册过
        checkTel() {
            if (this.formData.enterTel.length == 0) {
                ElMessage.error('手机号不能为空！');
                return
            }
            if (!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(this.formData.enterTel)) {
                ElMessage.error('手机号输入不符合规范!');
                return
            }
            checkTel({ tel: this.formData.enterTel }).then(res => {
                console.log(res);
                if (res.code == 200) {
                    this.telSign = true
                    if (this.telSign == true && this.codeSign == true) {
                        ElMessage({
                            message: '注册成功！',
                            type: 'success',
                        });
                        this.$router.push('/register/registerFinish')
                    }
                }
            })
        },
        //点击进行注册验证
        registerFn() {
            if (this.formData.enterUserName.length == 0) {
                ElMessage.error('账户名不能为空！');
                return
            }
            if (/^[\w-]{4,16}$/.test(this.formData.enterUserName)) {
                ElMessage.error('账户名不符合规范！');
                return
            }
            if (this.formData.setUserName.length == 0) {
                ElMessage.error('账户名字不能为空！');
                return
            }
            if (this.formData.setPassword.length == 0) {
                ElMessage.error('密码不能为空！');
                return
            }
            if (this.formData.repeatPassword.length == 0) {
                ElMessage.error('请在输入一次密码');
                return
            }
            if (this.formData.repeatPassword.length != this.formData.setPassword.length) {
                ElMessage.error('两次输入的密码不一致！');
                return
            }
            this.checkTel();
            this.checkedClick();
        }
    },
}
</script>
<template>
    <div class="box">
        <div class="content">
            <div class="register">
                <p class="title">用户注册</p>
                <div class="inp">
                    <el-input v-model="formData.enterUserName" placeholder="请输入账户名" />
                    <el-input v-model="formData.setUserName" placeholder="请设置账户名字" />
                    <el-input v-model="formData.setPassword" type="password" placeholder="请设置账户密码" />
                    <el-input v-model="formData.repeatPassword" type="password" placeholder="请重复账户密码" />
                    <el-input v-model="formData.enterTel" placeholder="请填写手机号码" />
                    <el-input v-model="formData.enterCode" placeholder="请输入手机验证码">
                        <template #suffix>
                            <div>
                                <el-button class="codeBtn" @click="sendClick" :disabled="!flag">{{ Text }}</el-button>
                            </div>
                        </template>
                    </el-input>
                </div>
                <el-button type="primary" round class="registerBtn" @click="registerFn">注册</el-button>
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
}

.box {
    position: relative;
}

.register {
    width: 400px;
    height: 450px;
    background: #FFFFFF;
    border: 4px solid rgba(136, 136, 136, 0.3);
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

// .register p {
//     width: 100%;
// }

.register .title {
    width: 100px;
    height: 24px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #888888;
    line-height: 93px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register .inp {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.register input {
    width: 300px;
    height: 40px;
    // border: 1px solid #EEEEEE;
    margin-bottom: 5px;
    outline: none;
    text-indent: 2em;
    font-size: 24px;
}

.register .el-input {
    width: 300px;
    height: 40px;
    // border: 1px solid #EEEEEE;
    margin-bottom: 10px;
    outline: none;
    text-indent: 2em;
    font-size: 12px;
}

.register input::placeholder {
    /*WebKit browsers*/
    // width: 143px;
    // height: 25px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #EEEEEE;
    line-height: 93px;
    text-indent: 2em;
}

.codeBtn {
    // width: 50px;
    height: 40px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #A5CDFF;
    line-height: 93px;
}

.registerBtn {
    width: 135px;
    height: 30px;
    background: #A5CDFF;
    border-radius: 15px;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 93px;
}
</style>