import { defineComponent, defineAsyncComponent, resolveDynamicComponent } from "vue"

// import WgPhone from "./wg-phone"
// import WgInput from "./wg-input"
// import WgCheckbox from "./wg-checkbox"
// import WgSelect from "./wg-select"
// import WgSwitch from "./wg-switch"
// import WgDate from "./wg-date"
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
    WgSplitLine: WgSplitLine
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const test = () => {
      emit('update:item', {
        ...props.item,
        showPopup: true
      })
    }
    return () => {
      const Widget: any = resolveDynamicComponent('Wg' + props.item.type)

      return (
        <div class="widget-view">
          <p onClick={test}>{JSON.stringify(props.item)}</p>
          <Widget item={props.item} />
          {/* {...{ 'onUpdate:modelValue': onInput }} */}
        </div>
      )
    }
  }
})