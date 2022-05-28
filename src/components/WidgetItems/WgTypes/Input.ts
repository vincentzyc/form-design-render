export interface TypesInput {
  key: string,
  type: string, // "Input",
  name: string, // "输入框",
  placeholder: string, //"请输入姓名",
  showLabel: boolean, // false,
  isTextarea: boolean, // false
  label: {
    labelTitle: string, // "姓名",
    labelPosition: "left" | "top",
    labelwidth: number, // 50,
    labelWidth: string, // "50px"
  },
  value: string, // "",
  apiKey: string, // "name",
  fieldTypes: string, // "inputTypes",
  style: {
    margin: string, // "0px 0px 0px 0px"
  }
}