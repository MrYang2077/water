import ajax from '@/untils/request.js';
import '../mock/index';
//验证登录是否成功
export function getNews(data){
    return ajax({
        url:'/news',
        method:'post',
        data
    })
}