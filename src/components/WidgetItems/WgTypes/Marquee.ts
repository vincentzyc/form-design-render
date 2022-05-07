export interface TypesMarquee {
  key: string,
  type: string, // "Marquee",
  name: string, // "跑马灯",
  positionFixed: 'auto' | 'top' | 'bottom',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: number, // 0,
  direction: "up" | "left", //滚动方向 向左=left  向上=up
  durationTime: number, // 6, //滚动时长 单位秒
  isImgBtn: boolean, // false,
  imgUrl: string, // "",
  textList: string[], // '周先生 3分钟前 已报名'
  style: {
    backgroundColor: string, // "",
    Height: number, // 50,
    height: string, // '50px',
    overflow: string, // 'hidden',
    color: string, // "#333",
    fontsize: number, // 14,
    fontSize: string, // "14px",
    lineheight: number, // 28,
    lineHeight: string, // "28px",
    margin: string, // "0px 0px 0px 0px"
  }
}