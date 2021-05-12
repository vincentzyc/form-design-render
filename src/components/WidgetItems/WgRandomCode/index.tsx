import { defineComponent } from 'vue'
import createCode from './random-code'
import { changeRem, formatStyle } from "@/utils/format/unit";
import { useWgList } from '@/composition/use-wglist';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { wgData } = useWgList(props.item)

    const directionClass = wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle';
    const getCode = () => {
      const randomData = createCode()
      wgData.codeValue = randomData.code;
      wgData.style.btnStyle.fontFamily = randomData.font;
    }
    getCode()
    return () => (
      <div class="wg-random-code" style={formatStyle(wgData.style)}>
        <div class={['wg-item', directionClass]}>
          <div
            class="wg-title flex-none"
            v-show={wgData.showLabel}
            style={{ width: changeRem(wgData.label.labelWidth) }}
          >{wgData.label.labelTitle}</div>
          <div class="flex flex-auto align-middle">
            <input placeholder={wgData.placeholder} type="text" maxlength={4} v-model={[wgData.value, ['trim']]} class="wg-input flex-auto" />
            <button class="random-code flex-none" style={formatStyle(wgData.style.btnStyle)} onClick={getCode}>{wgData.codeValue}</button>
          </div>
        </div>
      </div>
    )
  }
})

