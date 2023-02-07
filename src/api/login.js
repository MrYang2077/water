import ajax from '@/untils/request.js';
import '../mock/login';
//验证登录是否成功
export function loginFn(data){
    return ajax({
        url:'/login',
        method:'post',
        data
    })
}