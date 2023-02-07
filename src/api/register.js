import ajax from '@/untils/request.js';
import '../mock/register';
//获取验证码
export function getCode(){
    return ajax({
        url:'/getCode',
        method:'post'
    })
}
//验证验证码
export function checkCode(data){
    return ajax({
        url:'/checkCode',
        method:'post',
        data
    })
}
//验证手机号是否已被注册
export function checkTel(data){
    return ajax({
        url:'/checkPhone',
        method:'post',
        data
    })
}