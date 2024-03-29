import { useWgFormList } from "@/composition/use-wgform";
import { changeRem } from "@/utils/format/unit";
import { defineComponent, PropType } from "vue"
import HPicker from './HPicker'
import { TypesHPicker } from "../WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesHPicker>,
      required: true
    }
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)

    const wrapClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']

    return () => (
      <div id={wgData.key} class={wrapClass} style={wgData.style}>
        <div class="wg-title flex-none" style={{ width: changeRem(wgData.label.labelWidth) }}>{wgData.label.labelTitle}</div>
        <div class="flex-auto" id={wgData.key}>
          <HPicker
            v-model={formData[wgData.apiKey]}
            data={wgData.options}
            pickerStyle={wgData.pickerStyle}
            itemWidth={wgData.itemWidth}
            showNumber={wgData.showNumber} />
        </div>
      </div>
    )
  }
})
