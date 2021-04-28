import { defineComponent } from 'vue'
import createCode from './random-code'
import { changeRem, formatStyle } from "@/utils/format/unit";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const directionClass = props.item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle';
    const getCode = () => {
      let randomData = createCode()
      props.item.codeValue = randomData.code;
      props.item.style.btnStyle.fontFamily = randomData.font;
    }
    getCode()
    return () => (
      <div class="wg-random-code" style={formatStyle(props.item.style)}>
        <div class={['wg-item', directionClass]}>
          <div
            class="wg-title flex-none"
            v-show={props.item.showLabel}
            style={{ width: changeRem(props.item.label.labelWidth) }}
          >{props.item.label.labelTitle}</div>
          <div class="flex flex-auto align-middle">
            <input placeholder={props.item.placeholder} type="text" maxlength={4} v-model={[props.item.value, ['trim']]} class="wg-input flex-auto" />
            <button class="random-code flex-none" style={formatStyle(props.item.style.btnStyle)} onClick={getCode}>{props.item.codeValue}</button>
          </div>
        </div>
      </div>
    )
  }
})

