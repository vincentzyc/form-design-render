import { defineComponent, defineAsyncComponent, resolveDynamicComponent, computed } from "vue"

import WgPhone from "./WgPhone"
import WgInput from "./WgInput"
import WgCheckbox from "./WgCheckbox"
import WgSelect from "./WgSelect"
import WgSwitch from "./WgSwitch"
import WgDatePicker from "./WgDatePicker"
import WgImgShow from "./WgImgShow"
import WgImgSlide from "./WgImgSlide"
import WgStaticText from "./WgStaticText"
import WgSplitLine from "./WgSplitLine"
import WgWechat from './WgWechat'
import WgMarquee from './WgMarquee'
import WgAgreement from './WgAgreement'
import WgMarqueeSingle from './WgMarqueeSingle'
import WgVideoPlay from './WgVideoPlay'
import WgRandomCode from './WgRandomCode'
import WgHPicker from './HPicker'
import WgChildList from './WgChildList'
import WgTabs from './WgTabs'
import WgCountDown from './WgCountDown'

export default defineComponent({
  name: "WidgetItems",
  components: {
    WgButton: defineAsyncComponent(() => import("./WgButton"/* webpackChunkName: "WgButton" */)),
    WgImgShow,
    WgImgSlide,
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
    WgMarqueeSingle,
    WgPhone,
    WgHPicker,
    WgChildList,
    WgTabs,
    WgCountDown
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    parentsWg: {
      type: Object,
      required: false,
      default: () => ({ type: 'window' })
    }
  },
  setup(props) {
    const Widget: any = resolveDynamicComponent('Wg' + props.item.type)

    const wgViewStyle = computed(() => {
      if (Array.isArray(props.item.list)) {
        return {
          ...props.item.style,
          backgroundImage: `url(${props.item.backgroundImage})`
        };
      }
      return {}
    })
    const wgViewClass = computed(() => props.item.wgClassName ? props.item.wgClassName : 'widget-view')

    return () => (
      <div class={wgViewClass.value} style={wgViewStyle.value}>
        <Widget item={props.item} parentsWg={props.parentsWg} />
      </div>
    )
  }
})