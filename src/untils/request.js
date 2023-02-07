// src/utils/request.js
import axios from 'axios'

// 封装 baseUrl

// 开发环境(写代码的阶段)       生产环境(代码已经部署服务器了)      测试环境(代码写好阶段)
// development                  production                      production
// npm run dev                  npm run build                    npm run build

// 获取当前环境，判断当前环境是否为开发环境
// const isDev = process.env.NODE_ENV == 'development'
/*
    开发阶段：192.168.1.111
    生产阶段：http://121.89.205.189
*/

const request = axios.create({
    // isDev 为真
    // baseURL: isDev ? '开发环境' : '生产环境'
    // baseURL: isDev ? 'http://121.89.205.189:3000/admin' : 'http://121.89.205.189:3000/admin'
    // baseURL 是用来配置基础路径用的，以后数据请求的时候不需要每次都写对应的地址了
    baseURL: '/',
    timeout: 60000
})

// 添加请求拦截器
request.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // 在发送请求前我们可以将公用的属性设置上
    // 比如可以在这里配置对应的 token
    // console.log(config);
    const token = localStorage.getItem('token');
    config.headers.token = token;
    console.log(config);
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function(response) {
    // 因为服务器响应的时候有两个 data,所以我这里 return response.data;
    // 让页面中需要一次 .data 即可

    return response.data;
}, function(error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 自定义各种数据请求的 axios
export default function ajax(config) {
    // 数据请求的时候我们需要什么参数
    // 1. 先获取到请求的一些必要参数
    const { url = '', method = 'GET', data = {}, headers = {} } = config

    // 2. 判断我们请求的类型 get  GET  GeT 
    switch (method.toUpperCase()) {
        case 'GET':
            return request.get(url, { params: data })
        case 'POST':
            // 1. 表单提交数据
            if (headers['content-type'] == 'application/x-www-form-url-encoded') {
                // 转换参数类型，格式化数据
                const obj = new URLSearchParams()
                for (const key in data) {
                    obj.append(key, data[key])
                }
                return request.post(url, obj, { headers })
            }

            // 2. 文件数据
            if (headers['content-type'] == 'multipart/form-data') {
                // 处理文件的对象
                const obj = new FormData()
                for (const key in data) {
                    obj.append(key, data[key])
                }
                return request.post(url, obj, { headers })
            }


            // 3. json 数据提交
            return request.post(url, data)

        case 'PUT':
            // 修改数据 --- 数据的更新

            return request.put(url, data)

        case 'DELETE':
            // 删除数据
            return request.delete(url, { data })

        case 'PATCH':
            // 更新局部资源
            return request.patch(url, data)
        default:
            // 如果前面全部都不是
            return request.request(config)
    }
}