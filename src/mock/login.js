import Mock from "mockjs";

// 设置固定的账号密码
let userInfo = [
  {
    username: "zhu666",
    password: "666666",
    imgURL: "/src/views/assets/zhu666.jpeg",
    admin:'zhu'
  },
  {
    username: "fang666",
    password: "666666",
    imgURL: "/src/views/assets/fang666.jpg",
    admin:'fang'
  },
  {
    username: "yang666",
    password: "666666",
    imgURL: "/src/views/assets/yang666.jpg",
    admin:'yang'
  },
];

Mock.mock("/login", "post", (data) => {
  const req = JSON.parse(data.body);
  let res = {
    code: "200",
    msg: "登录成功",
  };
  console.log(req);
  for (let i = 0; i < userInfo.length; i++) {
    const item = userInfo[i];

    if (item.username == req.username) {
      if (item.password == req.password) {
        res.code = "200";
        res.msg = "登录成功";
        res.token = "123456789";
        res.image= item.imgURL;
        res.admin=item.admin;
        return res;
      } else {
        res.code = "2001";
        res.msg = "密码错误";
        return res;
      }
    } else {
      res.code = "2002";
      res.msg = "账号不存在";
    }
  }
  return res;
});
