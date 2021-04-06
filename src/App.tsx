import { computed, defineComponent } from "vue"
import RenderPage from "@/components/RenderPage";
import { useStore } from "vuex"
import { getSessionStorage, setSessionStorage } from "./utils/storage";
import { postMsgoOrigin, postMsgoUrl } from "./api";
import '@/assets/css/themes.styl';
import { formatStyle } from "./utils/format/unit";
import { initScript } from "./utils/dom";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore()
    const pageData = computed(() => store.state.pageData)

    const initPage = (pgData: Record<string, any>) => {
      if (!pgData) return;
      store.commit('setPageData', pgData);
      document.title = pgData.title;
      initScript(pgData.statsCode, 'initjscode');  //添加第三方统计代码
    }
    const getPageData = () => {
      // 获取数据优先级： url参数id > 本地 sessionStorage > postMessage监听

      // 获取url参数id（已经保存的页面）
      // let id = this.$util.getUrlParam('id');
      // 根据id调接口获取后台数据
      // console.log(id);

      // 本地 sessionStorage获取（实时预览的时候刷新页面）
      const sPageData = getSessionStorage("pageData");
      if (sPageData) {
        return initPage(sPageData);
      }

      // postMessage监听（实时预览）
      window.addEventListener('message', event => {
        if (event.origin !== postMsgoOrigin()) return;
        if (Object.prototype.toString.call(event.data) === '[object Object]') {
          if (event.data.list) {
            const sourceWin = event.source as Window
            sourceWin.postMessage('Received', postMsgoUrl());
            initPage(event.data)
            return setSessionStorage("pageData", event.data);
          }
        }
      }, false);
    }

    getPageData()

    return () => {
      if (!pageData.value) return null;
      const wrapStyle = {
        ...formatStyle(pageData.value.style),
        backgroundImage: `url(${pageData.value.style.backgroundImage})`
      }
      return (
        <div
          class={['wrapper', pageData.value.theme]}
          style={wrapStyle}
        >
          <RenderPage
            list={pageData.value.list}
            fixedTop={pageData.value.fixedTop}
            fixedBottom={pageData.value.fixedBottom}
            fixedCustom={pageData.value.fixedCustom}
          />
        </div>
      )
    }
  }
})