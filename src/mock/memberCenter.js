import Mock from "mockjs";
const { data } = Mock.mock({
  "data|200": [
    {
      nickname: "@cname",
      "start|1-5": 5,
      "parent|1": ["张三", "李四", "王五"],
      "tel|5641846513511-5841846513511": 5641846513511,
      "recommend|1": ["荐1", "荐2", "荐3", "荐4"],
      "teacher|1": ["师1", "师2", "师3", "师4"],
    },
  ],
});
Mock.mock("/member", "post", (option) => {
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
export default Mock;
