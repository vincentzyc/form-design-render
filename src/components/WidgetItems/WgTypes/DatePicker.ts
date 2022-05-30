export interface TypesDatePicker {
  key: string,
  type: string, // "DatePicker",
  name: string, // "日期选择器",
  label: {
    labelTitle: string, // "生日",
    labelwidth: number, // 50,
    labelWidth: string, // "50px",
    labelPosition: "left" | "top"
  },
  apiKey: string, // "birthday",
  value: string, // "",
  showLabel: boolean, // true,
  placeholder: string, // "请选择日期",
  fieldTypes: string, // "dateTypes",
  style: {
    margin: string, // "0px 0px 0px 0px"
  }
}