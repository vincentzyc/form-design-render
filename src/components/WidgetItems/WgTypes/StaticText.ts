export interface TypesStaticText {
  type: string, // StaticText
  name: string, // 文本描述
  value: string, // 这是一段文本
  link: string, // ""
  popupList: Record<any, any>[], // []
  showPopup: false, // false
  backgroundImage: string, // ""
  backgroundColor: string, // ""
  style: {
    margin: string // 0px 0px 0px 0px
  }
}