import {PickerOption} from 'vant'

export interface TypesSelect {
  key: string,
  type: string, // "Select",
  name: string, //  "下拉选择框",
  value: string, //  "",
  apiKey: string, //  "educationLevel",
  placeholder: string, //  "请选择教育程度",
  showLabel: boolean, //  true,
  label: {
    labelTitle: string, //  "教育程度",
    labelPosition: "left" | "top",
    labelwidth: number, //  66,
    labelWidth: string, //  "66px"
  },
  fieldTypes: string, //  "selectTypes",
  options: PickerOption[], // ["硕士及以上","本科","大专","中专/高中及以下"],
  style: {
    margin: string, //  "0px 0px 0px 0px"
  }
}