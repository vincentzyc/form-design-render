import { defineComponent, defineAsyncComponent, resolveDynamicComponent } from "vue"

// import WgPhone from "./wg-phone"
import WgInput from "./WgInput"
import WgCheckbox from "./WgCheckbox"
import WgSelect from "./WgSelect"
import WgSwitch from "./WgSwitch"
import WgDatePicker from "./WgDatePicker"
import WgImgShow from "./WgImgShow"
import WgStaticText from "./WgStaticText"
import WgSplitLine from "./WgSplitLine"
import WgWechat from './WgWechat'
import WgMarquee from './WgMarquee'
import WgAgreement from './WgAgreement'
import WgMarqueeSingle from './WgMarqueeSingle'
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
    WgAgreement,
    WgWechat,
    WgCheckbox,
    WgMarquee,
    WgMarqueeSingle
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