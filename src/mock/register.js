import Mock from "mockjs";
//制造数据
let code = Mock.mock({
  "code|100": [
    {
      "code|10000-99999": 99999,
    },
  ],
});
let tel = [];
console.log(code);
//声明数组的第几项
let index = 0;
//制作获取验证码接口
Mock.mock("/getCode", "post", (config) => {
  //声明数组的第几项
  index = Math.round(Math.random() * 100);
  let res = {
    code: code.code[index].code,
    Message: "获取验证码成功",
  };
  return res;
});
//制作验证验证码接口
Mock.mock("/checkCode", "post", (config) => {
  let res = {
    code: "10119",
    Message: "验证码错误",
  };
  let req = JSON.parse(config.body);
  console.log(req);
  if (code.code[index].code == req.code) {
    (res.code = "200"), (res.Message = "验证码通过");
  }
  return res;
});
//制作验证手机号是否已被注册接口
Mock.mock("/checkPhone", "post", (config) => {
  let res = {
    code: 200,
    Message: "手机号未被注册过",
  };
  let req = JSON.parse(config.body);
  console.log(tel);
  if (tel.includes(req.tel)) {
    (res.code = "10119"), (res.Message = "手机号已被注册过");
  } else {
    tel.push(req.tel);
  }
  return res;
});
