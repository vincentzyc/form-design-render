export interface TypesAgreement {
  key: string,
  type: string, // "Agreement",
  name: string, // "用户协议",
  apiKey: string, // "agreement",
  value: boolean, // false,
  isRequired: boolean, // true,
  tipText: string, // "我已阅读并同意",
  titleTexts: [{
    title: string, // "《隐私权协议》",
    text: string, // ""
  }],
  style: {
    fontsize: number, // 12,
    fontSize: string, // "12px",
    color: string, // "#333333",
    margin: string, // "10px 0px 10px 0px"
  },
  agreementColor: string, // '#3b9cfd'
}