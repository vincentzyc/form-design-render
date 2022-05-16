export interface TypesCheckbox {
  key: string,
  type: "Checkbox",
  name: "选择框",
  value: [],
  apiKey: "shootPlace",
  isRadio: false,
  label: {
    labelTitle: "旅拍城市",
    labelwidth: 66,
    labelWidth: "66px",
    labelPosition: "left" | "top"
  },
  fieldTypes: "checkboxTypes",
  options: [
    "北京",
    "三亚",
    "丽江",
    "巴厘岛",
    "马尔代夫",
    "威尼斯",
    "其他"
  ],
  style: {
    margin: "0px 0px 0px 0px"
  }
}