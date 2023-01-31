export interface TypesCountDown {
  type: string, // "CountDown",
  name: string, //"倒计时",
  positionFixed: string, // 'auto', // auto--正常  top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮  sticky--吸顶悬浮
  endTime: number, //'', //倒计时结束时间 -- 时间戳
  endtime: Date, //'', //倒计时结束时间 -- Date类型字符串
  title: string, //'距离活动结束还剩：',
  countDownType: 'endTime' | 'dayLoop', // endTime -- 自定义结束时间;   dayLoop -- 自动按天循环 
  timeStyle: {
    backgroundColor: string, //'#e6e6e6',
    fontSize: string, //'16px',
    fontsize: number, //16,
    borderRadius: string, //'5px',
    borderradius: number, //5,
    color: string, //'#333',
  },
  unitStyle: {
    color: string, //"#333",
    fontSize: string, //'14px',
    fontsize: number, //14,
  },
  style: {
    padding: string, //"5px 5px 5px 5px",
    margin: string, //"10px 0px 10px 0px",
    color: string, //"#333",
    fontSize: string, //'14px',
    fontsize: number, //14,
    backgroundColor: string, //'rgba(255, 255, 255, 0)',
    backgroundImage: string, //''
  }
}