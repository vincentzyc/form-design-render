export interface TypesHPicker {
  key: string,
  type: string, // "HPicker",
  name: string, // "横向滑动单选",
  value: string, // "20",
  options: string[], // ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
  label: {
    labelTitle: string, // "年龄",
    labelPosition: "left" | "top",
    labelwidth: number, // 50,
    labelWidth: string, // "50px"
  },
  fieldTypes: string, // "hPickerTypes",
  apiKey: string, // "age",
  itemWidth: number, // 50,
  showNumber: number, // 5,
  pickerStyle: {
    color: string, // "#409eff",
    fontsize: number, // 18,
    fontSize: string, // "18px"
  },
  style: {
    margin: string, // "0px 0px 0px 0px"
  }
}