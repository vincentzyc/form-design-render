import { changeRem } from '@/utils/format/unit';
import { defineComponent } from 'vue'
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

    const wrapClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
    return () => (
      <div class={wrapClass} style={wgData.style}>
        <div class="wg-title" style={{ width: changeRem(wgData.label.labelWidth) }}>{wgData.label.labelTitle}</div>
        <div class="flex-auto">
          <input type="date" v-model={wgData.value} class="wg-input" id={wgData.key} />
        </div>
      </div>
    )
  }
})