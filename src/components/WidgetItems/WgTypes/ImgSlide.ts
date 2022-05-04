export interface TypesImgSlide {
  key: string,
  type: string, // "ImgSlide",
  name: string, // "图片轮播",
  value: [{
    url: string, // "https://www.baidu.com",
    image: string, // "static/img/theme1.jpg"
  }],
  interval: number, // 3000,
  style: {
    margin: string, // "0px 0px 0px 0px",
    height: number, // 250
  }
}