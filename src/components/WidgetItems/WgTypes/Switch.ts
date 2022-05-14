export interface TypesSwitch {
  key: string,
  type: "Switch",
  name: "开关",
  value: false,
  label: {
    labelTitle: "是否有信用卡",
    labelPosition: "left" | "top",
    labelwidth: 100,
    labelWidth: "100px"
  },
  fieldTypes: "switchTypes",
  apiKey: "creditCard",
  style: {
    margin: "0px 0px 0px 0px"
  }
}