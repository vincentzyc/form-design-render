import { defineComponent, PropType } from 'vue'
import createCode from './random-code'
import { changeRem, formatStyle } from "@/utils/format/unit";
import { useWgFormList } from '@/composition/use-wgform';
import { TypesRandomCode } from "../WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesRandomCode>,
      required: true
    }
  },
  setup(props) {
    const getCode = () => {
      const randomData = createCode()
      wgData.codeValue = randomData.code;
      wgData.style.btnStyle.fontFamily = randomData.font;
    }
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)

    wgData.getCode = getCode
    const directionClass = wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle';

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
            <input placeholder={wgData.placeholder} type="text" maxlength={4} v-model={[formData[wgData.apiKey], ['trim']]} class="wg-input flex-auto" />
            <button class="random-code flex-none" style={formatStyle(wgData.style.btnStyle)} onClick={getCode}>{wgData.codeValue}</button>
          </div>
        </div>
      </div>
    )
  }
})

