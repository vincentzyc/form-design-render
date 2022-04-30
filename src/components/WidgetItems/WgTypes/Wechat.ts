export interface TypesWechat {
  type: string, // "Wechat",
  name: string, // "微信关注",
  value: string, // "微信账号",
  wechatName: string, // "",
  btnText: string, // "+  关注",
  logo: string, // "",
  showName: boolean, // true,
  showLogo: boolean, // true,
  backgroundColor: string, // "",
  positionFixed: 'auto' | 'top' | 'bottom',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: number, // 0,
  style: {
    isImgBtn: boolean, // false,
    value: string, // "",
    margin: string, // "0px 0px 0px 0px",
    color: string, // "#333",
    fontsize: number, // 14,
    fontSize: string, // "14px",
    btnStyle: {
      borderRadius: string, // '20px',
      borderradius: number, // 20,
      backgroundColor: string, // "#01cd0d",
      color: string, // "#fff",
      fontsize: number, // 14,
      fontSize: string, // "14px"
    }
  }
}