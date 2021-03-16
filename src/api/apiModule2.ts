import { ApiModule } from "./types"

export interface ApiModuleList2 {
  getProductList(param: unknown): Promise<void>,
  getBatchTaskList(param: unknown): Promise<void>,
  changeState(param: unknown): Promise<void>,
}

export const apiModule2: ApiModule[] = [{
  name: "getProductList", //方法名
  url: "service/model/product" //接口路径
}, {
  name: "getBatchTaskList",
  url: "service/model/batch_task/search"
}, {
  name: "changeState",
  url: "service/model/package_screening_status"
}]

export default apiModule2