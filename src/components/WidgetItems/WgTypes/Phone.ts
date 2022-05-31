export interface TypesPhone {
  key: string,
  type: string, // "Phone",
  name: string, // "手机号",
  placeholder: string, // "请输入手机号",
  showLabel: boolean, //false,
  label: {
    labelTitle: string, // "手机号",
    labelPosition: "left" | "top",
    labelwidth: number, // 50,
    labelWidth: string, // "50px"
  },
  value: string, //  "",
  apiKey: string, // "phone",
  codeValue: string, // "",
  codeKey: string, // "verifyCode",
  showCode: boolean, //  true,
  style: {
    margin: string, // "0px 0px 0px 0px",
    btnStyle: {
      backgroundColor: string, // "#409EFF",
      color: string, //  "#fff",
      borderColor: string, // "#409EFF",
      borderRadius: string, // '5px',
      borderradius: number, // 5,
    }
  }
}