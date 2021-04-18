import { defineComponent, defineAsyncComponent, resolveDynamicComponent } from "vue"

// import WgPhone from "./wg-phone"
import WgInput from "./WgInput"
// import WgCheckbox from "./wg-checkbox"
// import WgSelect from "./wg-select"
// import WgSwitch from "./wg-switch"
import WgDatePicker from "./WgDatePicker"
import WgImgShow from "./WgImgShow"
import WgStaticText from "./WgStaticText"
// import WgButton from "./WgButton"
import WgSplitLine from "./WgSplitLine"
// import WgWechat from './wg-wechat'
// import WgMarquee from './wg-marquee'
// import WgAgreement from './wg-agreement'
// import WgMarqueeSingle from './wg-marquee-single'
import WgVideoPlay from './WgVideoPlay'
// import WgRandomCode from './wg-random-code'


export default defineComponent({
  name: "WidgetItems",
  components: {
    WgButton: defineAsyncComponent(() => import("./WgButton"/* webpackChunkName: "WgButton" */)),
    WgImgShow: WgImgShow,
    WgVideoPlay: WgVideoPlay,
    WgStaticText: WgStaticText,
    WgSplitLine: WgSplitLine,
    WgInput: WgInput,
    WgDatePicker: WgDatePicker
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