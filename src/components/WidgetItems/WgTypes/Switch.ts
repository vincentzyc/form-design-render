export interface TypesSwitch {
  key: string,
  type: string, // "Switch",
  name: string, // "开关",
  value: boolean, // false,
  label: {
    labelTitle: string, // "是否有信用卡",
    labelPosition: "left" | "top",
    labelwidth: number, // 100,
    labelWidth: string, // "100px"
  },
  fieldTypes: string, // "switchTypes",
  apiKey: string, // "creditCard",
  style: {
    margin: string, // "0px 0px 0px 0px"
  }
}