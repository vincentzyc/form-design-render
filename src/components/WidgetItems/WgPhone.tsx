import { defineComponent, PropType } from "vue"
import { useWgFormList } from '@/composition/use-wgform'
import { changeRem, formatStyle } from "@/utils/format/unit"
import ValidateCodeBtn from '@/components/base/ValidateCodeBtn'
import { TypesPhone } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesPhone>,
      required: true
    }
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)

    const getPhone = () => {
      const phoneClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
      return (
        <div class={phoneClass}>
          <div
            v-show={wgData.showLabel}
            class="wg-title flex-none"
            style={{ width: changeRem(wgData.label.labelWidth) }}
          >{wgData.label.labelTitle}</div>
          <div class="flex-auto">
            <input
              id={wgData.key}
              class="wg-input"
              type="tel"
              maxlength={11}
              v-model={[formData[wgData.apiKey], ['trim']]}
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
            style={{ width: changeRem(wgData.label.labelWidth) }}
          >验证码</div>
          <div class="flex flex-auto flex-center">
            <input placeholder="验证码" type="tel" maxlength={6} v-model={[formData[wgData.codeKey], ['trim']]} class="wg-input flex-auto" />
            <ValidateCodeBtn phone={formData[wgData.apiKey]} style={formatStyle(wgData.style.btnStyle)} />
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
