<template>
    <div class="box">
        <div class="content">
            <div class="registerOver">
                <p class="title">注册完成</p>
                <p class="overContent">
                    恭喜您注册成功，并成功
                    绑定手机号，您可以通过
                    手机号或者账户登陆。
                </p>
                <el-button type="primary" round class="overBtn" @click="$router.push('/login')">返回登录</el-button>
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

.registerOver {
    width: 400px;
    height: 400px;
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
}

.registerOver .title {
    // width: 86px;
    padding-top: 30px;
    height: 30px;
    font-size: 24px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #888888;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
}

.overContent {
    width: 133px;
    height: 60px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #888888;
    line-height: 24px;
    margin-bottom: 60px;
}

.overBtn {
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