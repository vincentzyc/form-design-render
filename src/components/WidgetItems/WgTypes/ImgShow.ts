export interface TypesImgShow {
  type: string, //"ImgShow",
  name: string, // "图片展示",
  positionFixed: 'auto' | 'top' | 'bottom',
  fixedTypes: ['auto', 'top', 'bottom'], // auto--正常 top--顶部悬浮  custom--自定义位置悬浮  bottom--底部悬浮
  scrollHeight: number, // 0,
  styleType: string, // "col1",
  styleTypes: [{
    value: string, // "col1",
    label: string, // "单列"
  }, {
    value: string, // "col2",
    label: string, // "双列"
  }],
  imglist: [{
    img: string, // "",
    link: string, // ""
  }],
  style: {
    margin: string //"0px 0px 0px 0px"
  }
}