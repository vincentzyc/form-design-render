import { computed, defineComponent, ref, Transition } from "vue"
import WidgetItems from "@/components/WidgetItems";
import '@/assets/css/widget.styl';
import { formatStyle } from "@/utils/format/unit";
import { isLink } from "@/utils/validate/link";
import { useStore } from '@/store'
import { hasKey } from "@/utils";

export default defineComponent({
  name: "renderPage",
  setup() {
    const store = useStore()
    const showFixedBottom = ref(true)
    const showFixedTop = ref(true)
    const backAlert = ref(false)

    const pageData = computed(() => store.state.pageData)

    const list = pageData.value ? pageData.value.list : []
    const fixedTop = pageData.value ? pageData.value.fixedTop : []
    const fixedBottom = pageData.value ? pageData.value.fixedBottom : []
    const fixedCustom = pageData.value ? pageData.value.fixedCustom : []

    const isHijack = computed(() => pageData.value?.hijackBack?.isHijack ? true : false)

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
      if (fixedBottom.length <= 0 && fixedTop.length <= 0) return
      const fbData = fixedBottom.length > 0 ? fixedBottom[0] as Record<string, any> : null;
      const ftData = fixedTop.length > 0 ? fixedTop[0] as Record<string, any> : null;
      if (hasKey(fbData, 'scrollHeight')) showFixedBottom.value = fbData?.scrollHeight === 0;
      if (hasKey(ftData, 'scrollHeight')) showFixedTop.value = ftData?.scrollHeight === 0;
      window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
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

    const fixedTopNode = () => fixedTop.length > 0 ?
      <Transition name="van-fade">
        <div v-show={showFixedTop.value} class="wg-fixed-top" style="max-width:640px">
          {(fixedTop as Record<string, any>[]).map(ftItem => <WidgetItems item={ftItem} key={ftItem.key} />)}
        </div>
      </Transition> : null

    const fixedCustomNode = () => fixedCustom.length > 0 ?
      <Transition name="van-fade">
        <div ref="fixedCustom" class="wg-fixed-custom" style="max-width:640px">
          {(fixedCustom as Record<string, any>[]).map(fcItem => <WidgetItems item={fcItem} key={fcItem.key} class="fixed-item" style={fixedCustomStyle(fcItem)} />)}
        </div>
      </Transition> : null

    const fixedBottomNode = () => fixedBottom.length > 0 ?
      <Transition name="van-fade">
        <div v-show={showFixedBottom.value} class="wg-fixed-bottom" style="max-width:640px">
          {(fixedBottom as Record<string, any>[]).map(fbItem => <WidgetItems item={fbItem} key={fbItem.key} />)}
        </div>
      </Transition> : null

    const listNode = () => list.length > 0 ?
      (list as Record<string, any>[]).map(item => <WidgetItems item={item} key={item.key} />) : []

    const backDialog = () => isHijack.value ?
      <van-dialog
        v-model={backAlert.value}
        get-container="body"
        showConfirmButton={false}
        style="{'background-color': 'transparent'}"
      >
        <img
          src={pageData.value?.hijackBack?.alertImg}
          alt="监听到返回"
          class="flex"
          width="100%"
          onClick={() => clickAlertImg(pageData.value?.hijackBack?.alertLink)}
        />
      </van-dialog> : null

    showFixed()
    if (isHijack.value) hijackBack()

    return () => (
      <div class="widget-list">
        {fixedTopNode()}
        {fixedCustomNode()}
        {listNode()}
        {fixedBottomNode()}
        {backDialog()}
      </div>
    )
  }
})