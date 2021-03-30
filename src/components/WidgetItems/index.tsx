import { defineComponent, defineAsyncComponent, resolveDynamicComponent } from "vue"

// import WgPhone from "./wg-phone"
// import WgInput from "./wg-input"
// import WgCheckbox from "./wg-checkbox"
// import WgSelect from "./wg-select"
// import WgSwitch from "./wg-switch"
// import WgDate from "./wg-date"
// import WgImgShow from "./wg-imgshow"
// import WgStaticText from "./wg-statictext"
// import WgButton from "./WgButton"
// import wgSplitLine from "./wg-splitLine"
// import WgWechat from './wg-wechat'
// import WgMarquee from './wg-marquee'
// import WgAgreement from './wg-agreement'
// import WgMarqueeSingle from './wg-marquee-single'
// import WgVideoPlay from './wg-video-play'
// import WgRandomCode from './wg-random-code'


export default defineComponent({
  name: "WidgetItems",
  components: {
    WgButton: defineAsyncComponent(() => import("./WgButton"/* webpackChunkName: "WgButton" */))
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return () => {
      const Widget: any = resolveDynamicComponent('Wg' + props.item.type)

      return (
        <div class="widget-view">
          <Widget item={props.item} />
        </div>
      )
    }
  }
})