import { defineComponent } from "vue"
import { changeRem } from "@/utils/format/unit"
import { useWgForm } from '@/composition/use-wgform'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    },
    // parentsWg: {
    //   type: Object,
    //   required: false,
    //   default: () => ({ type: 'window' })
    // }
  },
  setup(props) {
    const { wgData, formData } = useWgForm(props.item)
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
