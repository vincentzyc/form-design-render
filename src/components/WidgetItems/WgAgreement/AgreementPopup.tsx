// 弹框组件（支持iframe嵌入页面）
// 使用例子： <AgreementPopup ref="agreement" />
// 打开弹框：this.$refs.agreement.open(text);
import { textBr } from '@/utils/format/string';
import { isLink } from '@/utils/validate/link';
import { defineComponent, ref } from 'vue';
import { useExpose } from "@/composition/use-expose"
import './css/style.styl'

export default defineComponent({
  name: "AgreementPopup",
  setup(props, { emit }) {
    const showAgreement = ref(false)
    const showText = ref('')
    const open = (text: string) => {
      showText.value = text || "";
      showAgreement.value = true;
    }
    const close = () => {
      showAgreement.value = false;
      emit('close')
    }
    useExpose({ open, close })
    return () => (
      <van-popup v-model={[showAgreement.value, 'show']} class="agreement-popup" style="max-width:576px;">
        <div class="agreement-wrap">
          {
            isLink(showText.value)
              ? <iframe src={showText.value} frameborder="0" style="width: 100%;height: 100%;"></iframe>
              : <p class="agreement-text" innerHTML={textBr(showText.value)}></p>
          }
        </div>
        <div class="agreement-confirm" onClick={close}>我知道了</div>
      </van-popup>
    )
  }
})