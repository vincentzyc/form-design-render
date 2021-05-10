import { defineComponent } from 'vue'
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

    const wrapClass = ['wg-item', 'flex-wrap', 'wg-checkbox', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle'];
    return () => (
      <div class={wrapClass} style={formatStyle(wgData.style)}>
        <div class="wg-title" style={{ width: changeRem(wgData.label.labelWidth) }}>{wgData.label.labelTitle}</div>
        <div class="flex-auto" id={wgData.key}>
          {wgData.options.map((optionsItem: string, key: number) => (
            <label class="label" key={optionsItem + key}>
              <input
                class="wg-checkbox-input"
                type={wgData.isRadio ? 'radio' : 'checkbox'}
                value={optionsItem}
                v-model={wgData.value}
                style="display:none"
              />
              <span>{optionsItem}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }
})