import { defineComponent } from 'vue'
import { changeRem, formatStyle } from "@/utils/format/unit";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const wrapClass = ['wg-item', 'flex-wrap', 'wg-checkbox', props.item.label.labelPosition === 'top' ? 'flex-column' : 'align-middle'];
    return () => (
      <div class={wrapClass} style={formatStyle(props.item.style)}>
        <div class="wg-title" style={{ width: changeRem(props.item.label.labelWidth) }}>{props.item.label.labelTitle}</div>
        <div class="flex-auto" id={props.item.key}>
          {props.item.options.map((optionsItem: string, key: number) => (
            <label class="label" key={optionsItem + key}>
              <input
                class="wg-checkbox-input"
                type={props.item.isRadio ? 'radio' : 'checkbox'}
                value={optionsItem}
                v-model={props.item.value}
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