import { ApiModule } from "./types"

export interface ApiModuleList1 {
  getVerifyCode(param: unknown): Promise<void>,
  savePgae(param: unknown): Promise<void>,
  getModelDetail(param: unknown): Promise<void>,
  getRecordDetail(param: unknown): Promise<void>,
}

export const apiModule1: ApiModule[] = [{
  name: "getVerifyCode", //方法名
  url: "/service/model/getVerifyCode" //接口路径
}, {
  name: "savePgae",
  url: "/service/model/savePgae"
}, {
  name: "getModelDetail",
  url: "/service/model/model_details"
}, {
  name: "getRecordDetail",
  url: "/service/model/package_details"
}]

export default apiModule1