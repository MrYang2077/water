<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
</script>

<template>
  <router-view></router-view>
</template>

<style>
html,body,#app,.common-layout,.el-container,.container{
  height: 100%;
}
.el-input__wrapper  {
    padding-right: 0px !important;
}
.el-input__wrapper.is-foucs  {
    outline: none;
}

</style>
<style lang="scss">
//   body .el-menu-item.is-active{
//     font-size: 16px;
//     color: #A5CDFF;
//     background-color: rgba(223, 36, 36,0.3);
// }
// body .el-menu-item:hover {
//  background-color: rgb(36, 173, 98);
// }
.el-pagination{
    display: flex;
    justify-content: center;
}
.el-pager{
  width: 160px;
}
#btn1{
  margin-left: 700px;
}
</style>
