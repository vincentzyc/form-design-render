import { useWgFormList } from "@/composition/use-wgform"
import { changeRem } from "@/utils/format/unit"
import { defineComponent, PropType } from "vue"
import { TypesSwitch } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesSwitch>,
      required: true
    }
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)
    const wrapClass = ['wg-item', 'wg-switch', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
    return () => (
      <div class={wrapClass} style={wgData.style}>
        <div class="wg-title" style={{ width: changeRem(wgData.label.labelWidth) }}>{wgData.label.labelTitle}</div>
        <label class="label" id={wgData.key}>
          <input type="checkbox" v-model={formData[wgData.apiKey]} class="wg-switch-input" style="display:none" />
          <span class="wg-switch-core"></span>
        </label>
      </div>
    )
  }
})