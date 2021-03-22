import { computed, defineComponent, ref } from "vue"
import WidgetItems from "@/components/widget-items/index";
import '@/assets/css/widget.styl';
import { formatStyle } from "@/utils/format/unit";
import { isLink } from "@/utils/validate/link";
import { useStore } from "vuex"
import { hasKey } from "@/utils";

export default defineComponent({
  name: "renderPage",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fixedTop: {
      type: Array,
      default: () => []
    },
    fixedCustom: {
      type: Array,
      default: () => []
    },
    fixedBottom: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const store = useStore()
    let showFixedBottom = ref(true)
    let showFixedTop = ref(true)
    let backAlert = ref(false)

    const pageData = computed(() => store.state.pageData)

    const isHijack = computed(() => pageData.value.hijackBack?.isHijack ? true : false)

    const fixedCustomStyle = (item: Record<string, any>) => {
      if (item.position) {
        return formatStyle({
          width: item.style.width,
          top: item.position.top + 'px',
          [item.position.side]: item.position[item.position.side] + '%'
        })
      }
    }
    const showFixed = () => {
      if (props.fixedBottom.length <= 0 && props.fixedTop.length <= 0) return
      let fbData = props.fixedBottom.length > 0 ? props.fixedBottom[0] as Record<string, any> : null;
      let ftData = props.fixedTop.length > 0 ? props.fixedTop[0] as Record<string, any> : null;
      if (hasKey(fbData, 'scrollHeight')) showFixedBottom.value = fbData?.scrollHeight === 0;
      if (hasKey(ftData, 'scrollHeight')) showFixedTop.value = ftData?.scrollHeight === 0;
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (hasKey(fbData, 'scrollHeight')) showFixedBottom.value = scrollTop >= fbData?.scrollHeight
        if (hasKey(ftData, 'scrollHeight')) showFixedTop.value = scrollTop >= ftData?.scrollHeight
      })
    }
    const clickAlertImg = (link: string) => {
      if (!isLink(link)) link = window.location.href;
      window.location.href = link;
    }
    const hijackBack = () => {
      if (window.history.pushState) {
        window.history.pushState(null, '', document.URL);
        window.addEventListener('popstate', handleBack, false);
      }
    }
    const handleBack = () => {
      backAlert.value = true;
      // console.log("点击了浏览器的返回按钮");
      // history.pushState(null, null, document.URL);
      // window.history.back();
    }

    const fixedTopNode = props.fixedTop.length > 0 ?
      <transition name="fade">
        <div v-show={showFixedTop} class="wg-fixed-top" style="max-width:640px">
          {(props.fixedTop as Record<string, any>[]).map(ftItem => <WidgetItems item={ftItem} key={ftItem.key} />)}
        </div>
      </transition> : null

    const fixedCustomNode = props.fixedCustom.length > 0 ?
      <transition name="fade">
        <div ref="fixedCustom" class="wg-fixed-custom" style="max-width:640px">
          {(props.fixedCustom as Record<string, any>[]).map(fcItem => <WidgetItems item={fcItem} key={fcItem.key} class="fixed-item" style={fixedCustomStyle(fcItem)} />)}
        </div>
      </transition> : null

    const fixedBottomNode = props.fixedBottom.length > 0 ?
      <transition name="fade">
        <div v-show={showFixedBottom} class="wg-fixed-bottom" style="max-width:640px">
          {(props.fixedBottom as Record<string, any>[]).map(fbItem => <WidgetItems item={fbItem} key={fbItem.key} />)}
        </div>
      </transition> : null


    const listNode = props.list.length > 0 ?
      (props.list as Record<string, any>[]).map(item => item.type === 'formList' ?
        <div
          key={item.key}
          class="widget-form-list"
          style={formatStyle(item.style)}
        >
          {(item.list as Record<string, any>[]).map(formItem => <WidgetItems ref="wgList" key={formItem.key} item={formItem} />)}
        </div>
        : <WidgetItems ref="wgList" item={item} key={item.key} />) : []

    const backDialog = isHijack ?
      <van-dialog
        vModel={backAlert.value}
        get-container="body"
        showConfirmButton={false}
        style="{'background-color': 'transparent'}"
      >
        <img
          src={pageData.value.hijackBack?.alertImg}
          alt="监听到返回"
          class="flex"
          width="100%"
          onClick={() => clickAlertImg(pageData.value.hijackBack?.alertLink)}
        />
      </van-dialog> : null

    showFixed()
    if (isHijack.value) hijackBack()

    return () => (
      <div class="widget-list">
        {fixedTopNode}
        {fixedCustomNode}
        {...listNode}
        {fixedBottomNode}
        {backDialog}
      </div>
    )
  }
})