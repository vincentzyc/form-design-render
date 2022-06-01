export interface TypesRandomCode {
  key: string,
  type: string, // "RandomCode",
  name: string, // "随机码",
  placeholder: string, // "请输入验证码",
  showLabel: false,
  label: {
    labelTitle: string, // "验证码",
    labelPosition: "left" | "top",
    labelwidth: number, // 66,
    labelWidth: string, // "66px"
  },
  value: string, // "",
  apiKey: string, // "randomCode",
  codeValue: string, // ""
  getCode: () => void,
  style: {
    margin: string, // "0px 0px 0px 0px",
    btnStyle: {
      fontFamily: string, // 'Helvetica Neue',
      backgroundColor: string, // "#409EFF",
      color: string, // "#fff",
      fontSize: string, // "20px",
      fontsize: number, // 20,
      borderRadius: string, // '5px',
      borderradius: number, // 5,
    }
  }
}