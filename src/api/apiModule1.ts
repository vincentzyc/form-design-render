import { ApiModule } from "./types"

const apiModule1: ApiModule[] = [{
  name: "loginCheck", //方法名
  url: "LoginCheck.aspx" //接口路径
}, {
  name: "savePgae",
  url: "service/model/savePgae"
}, {
  name: "getModelDetail",
  url: "service/model/model_details"
}, {
  name: "getRecordDetail",
  url: "service/model/package_details"
}]

export default apiModule1