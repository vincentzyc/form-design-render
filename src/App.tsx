import { defineComponent, reactive } from "vue"
import RenderPage from "@/components/RenderPage";
import { initScript } from "./utils";
import { useStore } from "vuex"
import { getSessionStorage, setSessionStorage } from "./utils/storage";
import { postMsgoOrigin, postMsgoUrl } from "./api";
import '@/assets/css/themes.styl';
import { formatStyle } from "./utils/format/unit";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore()
    let pageData = reactive({} as Record<string, any>)

    const initPage = async () => {
      if (!pageData) return;
      store.commit('setPageData', pageData);
      document.title = pageData.title;
      initScript(pageData.statsCode, 'initjscode');  //添加第三方统计代码
    }
    const getPageData = () => {
      // 获取数据优先级： url参数id > 本地 sessionStorage > postMessage监听

      // 获取url参数id（已经保存的页面）
      // let id = this.$util.getUrlParam('id');
      // 根据id调接口获取后台数据
      // console.log(id);

      // 本地 sessionStorage获取（实时预览的时候刷新页面）
      let sPageData = getSessionStorage("pageData");
      if (sPageData) {
        store.commit('setPageData', sPageData);
        return initPage();
      }

      // postMessage监听（实时预览）
      window.addEventListener('message', event => {
        if (event.origin !== postMsgoOrigin()) return;
        if (Object.prototype.toString.call(event.data) === '[object Object]') {
          if (event.data.list) {
            const sourceWin = event.source as Window
            sourceWin.postMessage('Received', postMsgoUrl());
            pageData = event.data
            initPage()
            return setSessionStorage("pageData", event.data);
          }
        }
      }, false);
    }

    getPageData()

    return () => {
      if (!pageData) return null;
      const wrapStyle = {
        ...formatStyle(pageData.style),
        backgroundImage: `url(${pageData.style.backgroundImage})`
      }
      return (
        <div
          class={['wrapper', pageData.theme]}
          style={wrapStyle}
        >
          <RenderPage
            list={pageData.list}
            fixedTop={pageData.fixedTop}
            fixedBottom={pageData.fixedBottom}
            fixedCustom={pageData.fixedCustom}
          />
        </div>
      )
    }
  }
})