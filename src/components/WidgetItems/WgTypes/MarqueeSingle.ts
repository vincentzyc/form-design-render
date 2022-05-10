export interface TypesMarqueeSingle {
  key: string,
  type: string, // "MarqueeSingle",
  name: string, // "跑马灯-单个",
  positionFixed: 'auto' | 'top' | 'bottom', // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  durationTime: number, // 2, //滚动间隔 单位秒
  textList: {
    text: string, // '李**34秒前已报名',
    sex: string, // 'man'
  }[],
  style: {
    width: string, // "200px",
    pxWidth: number, // 200,
    height: string, // '40px',
    pxHeight: number, // 40,
    backgroundColor: string, // "#333",
    color: string, // "#fff",
    fontsize: number, // 14,
    fontSize: string, // "14px",
    margin: string, // "0px 0px 0px 0px"
  }
}