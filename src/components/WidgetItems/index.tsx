import { defineComponent, defineAsyncComponent, resolveDynamicComponent } from "vue"

// import WgPhone from "./wg-phone"
import WgInput from "./WgInput"
// import WgCheckbox from "./wg-checkbox"
import WgSelect from "./WgSelect"
import WgSwitch from "./WgSwitch"
import WgDatePicker from "./WgDatePicker"
import WgImgShow from "./WgImgShow"
import WgStaticText from "./WgStaticText"
// import WgButton from "./WgButton"
import WgSplitLine from "./WgSplitLine"
// import WgWechat from './wg-wechat'
// import WgMarquee from './wg-marquee'
import WgAgreement from './WgAgreement'
// import WgMarqueeSingle from './wg-marquee-single'
import WgVideoPlay from './WgVideoPlay'
import WgRandomCode from './WgRandomCode'

export default defineComponent({
  name: "WidgetItems",
  components: {
    WgButton: defineAsyncComponent(() => import("./WgButton"/* webpackChunkName: "WgButton" */)),
    WgImgShow,
    WgVideoPlay,
    WgStaticText,
    WgSplitLine,
    WgInput,
    WgDatePicker,
    WgSwitch,
    WgSelect,
    WgRandomCode,
    WgAgreement
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