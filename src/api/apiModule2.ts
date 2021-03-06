import { ApiModule } from "./types"

const apiModule1: ApiModule[] = [{
  name: "getProductList", //方法名
  url: "service/model/product" //接口路径
}, {
  name: "getBatchTaskList",
  url: "service/model/batch_task/search"
}, {
  name: "changeState",
  url: "service/model/package_screening_status"
}]

export default apiModule1