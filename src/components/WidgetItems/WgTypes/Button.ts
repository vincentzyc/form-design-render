export interface TypesButton {
  type: string, // "Button",
  name: string, // "按钮",
  btnText: string, // "提交",
  btnType: string, // "submit",
  apiKey: string, // "",
  positionFixed: 'auto' | 'top' | 'bottom', // 'auto',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: number, //0,
  btnTypes: [{
    value: string, // "submit",
    label: string, // "提交"
  }],
  style: {
    margin: string, // "10px 10px 10px 10px",
    padding: string, // "0px 0px 0px 0px",
    isImgBtn: boolean, //false,
    value: string, // "",
    btnStyle: {
      borderRadius: string, //'20px',
      borderradius: number, // 20,
      backgroundColor: string, // "#409EFF",
      color: string, // "#fff"
    }
  },
  animation: {
    animationName: string, // "",
    animationduration: number, // 2,
    animationDuration: string, // "2s",
    animationIterationCount: string, // "infinite",
    animationTimingFunction: string, // "linear",
    className: string, // ""
  }
}