import { defineComponent,PropType } from "vue"
import { changeRem } from "@/utils/format/unit"
import { useWgFormList } from '@/composition/use-wgform'
import { TypesInput } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesInput>,
      required: true
    },
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)
    const wrapClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
    return () => (
      <div class={wrapClass} style={wgData.style}>
        <div
          class="wg-title"
          v-show={wgData.showLabel}
          style={{ width: changeRem(wgData.label.labelWidth) }}
        >{wgData.label.labelTitle}</div>
        <div class="flex-auto">
          <input v-model={formData[wgData.apiKey]} placeholder={wgData.placeholder} class="wg-input" id={wgData.key} />
        </div>
      </div>
    )
  }
})