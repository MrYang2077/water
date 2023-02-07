// 导入我们刚封装的axios
import ajax from "@/untils/request";

// 会员续费情况
export function getRenew() {
  return ajax({
    url: "/renew",
    method: "post"
  });
}

// 会员信息查询
export function getInfo() {
  return ajax({
    url: "/memberinfo",
    method:'post'
  });
}

// 会员人数排名
export function getRanking() {
  return ajax({
    url: "/ranking",
    method: "post",
  });
}