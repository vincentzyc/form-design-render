export interface TypesCheckbox {
  key: string,
  type: string, // "Checkbox",
  name: string, // "选择框",
  value: string[], // [],
  apiKey: string, // "shootPlace",
  isRadio: boolean, // false,
  label: {
    labelTitle: string, // "旅拍城市",
    labelwidth: number, // 66,
    labelWidth: string, // "66px",
    labelPosition: "left" | "top"
  },
  fieldTypes: string, // "checkboxTypes",
  options: string[], // ["北京","三亚","丽江","巴厘岛","马尔代夫","威尼斯","其他"],
  style: {
    margin: string, // "0px 0px 0px 0px"
  }
}