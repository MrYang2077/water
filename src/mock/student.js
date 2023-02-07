import Mock from "mockjs";
const { data } = Mock.mock({
  "data|80": [
    {
      img: "@image('150x150','@color')",
      "start|1-5": 5,
      nickname: "@cname",
      "student|1": ["帅气", "可爱", "友善", "乖乖"],
      "title|1": [
        "每日最帅气小朋友",
        "每日最可爱小朋友",
        "每日最友善小朋友",
        "每日最乖乖小朋友",
      ],
    },
  ],
});
Mock.mock("/student", "post", (option) => {
  const { currentPage, pageSize } = JSON.parse(option.body);
  let result = [];
  let total = 0;
  result = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  total = data.length;
  console.log(result);
  return {
    result: result,
    status: 0,
    total: total,
  };
});
const { Data } = Mock.mock({
  "Data|80": [
    {
      img: "@image('150x150','@color')",
      "start|1-5": 5,
      nickname: "@cname",
      "student|1": ["帅气", "可爱", "友善", "乖乖"],
      "title|1": [
        "每日最帅气小朋友",
        "每日最可爱小朋友",
        "每日最友善小朋友",
        "每日最乖乖小朋友",
      ],
    },
  ],
});
Mock.mock("/students", "post", (option) => {
  const { currentPage, pageSize } = JSON.parse(option.body);
  let result = [];
  let total = 0;
  result = Data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  total = Data.length;
  console.log(result);
  return {
    result: result,
    status: 0,
    total: total,
  };
});
export default Mock;
