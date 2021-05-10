import { defineComponent } from "vue"
import { useWgList } from '@/composition/use-wglist'
import { changeRem, formatStyle } from "@/utils/format/unit"
import ValidateCodeBtn from '@/components/base/ValidateCodeBtn'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { wgData } = useWgList(props.item)

    const getPhone = () => {
      const phoneClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
      return (
        <div class={phoneClass}>
          <div
            v-show={wgData.showLabel}
            class="wg-title flex-none"
            style={{ width: changeRem(wgData.label.labelwidth) }}
          >{wgData.label.labelTitle}</div>
          <div class="flex-auto">
            <input
              id={wgData.key}
              class="wg-input"
              type="tel"
              maxlength={11}
              v-model={[wgData.value, ['trim']]}
              placeholder={wgData.placeholder}
            />
          </div>
        </div>
      )
    }
    const getValidateCode = () => {
      const codeClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
      return wgData.showCode && (
        <div class={codeClass}>
          <div
            v-show={wgData.showLabel}
            class="wg-title flex-none"
            style={{ width: changeRem(wgData.label.labelwidth) }}
          >验证码</div>
          <div class="flex flex-auto flex-center">
            <input placeholder="验证码" type="tel" maxlength={6} v-model={[wgData.codeValue, ['trim']]} class="wg-input flex-auto" />
            <ValidateCodeBtn phone={wgData.value} style={formatStyle(wgData.style.btnStyle)} />
          </div>
        </div>
      )
    }

    return () => (
      <div class="wg-phone" style={formatStyle(wgData.style)}>
        {getPhone()}
        {getValidateCode()}
      </div>
    )
  }
})