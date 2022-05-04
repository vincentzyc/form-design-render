export interface TypesVideoPlay {
  key: string,
  type: string, // VideoPlay
  name: string,  // 视频播放
  videoAttr: {
    src: string, // https://www.runoob.com/try/demo_source/movie.mp4
    poster: string, // https://www.runoob.com/images/logo.png
    autoplay: boolean, // false
    loop: boolean, // false
    controls: boolean //true
  },
  style: {
    width: string, // 100%
    pxHeight: number, // 200
    height: string, // 200px
    margin: string // 0px 0px 0px 0px
  }
}