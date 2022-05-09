export interface TypesTabs {
  key: string,
  type: string, // Tabs
  name: string, // Tabs标签
  value: number, // 0
  activeTab: number, // 0
  wgClassName: "wg-formlist widget-active",
  list: {
    title: string, // 标签一
    list: Record<any, any>[]  // []
  }[],
  style: {
    margin: string // 0px 0px 0px 0px
  }
}