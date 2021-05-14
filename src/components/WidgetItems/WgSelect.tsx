import { Picker } from 'vant';
import { changeRem } from "@/utils/format/unit"
import { useWgForm } from '@/composition/use-wgform';
import { ref } from 'vue';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showPicker: false
    }
  },
  setup(props) {
    const { wgData } = useWgForm(props.item)
    const showPicker = ref(false)
    const wrapClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle'];

    const openPicker = () => {
      showPicker.value = true
    }
    const closePicker = () => {
      showPicker.value = false
    }
    const onConfirm = (value: string) => {
      wgData.value = value;
      closePicker()
    }

    return () => (
      <div class={wrapClass} style={wgData.style}>
        <div
          class="wg-title"
          v-show={wgData.showLabel}
          style={{ width: changeRem(wgData.label.labelwidth) }}
        >{wgData.label.labelTitle}</div>
        <div class="flex-auto disabled-input" onClick={openPicker}>
          <input
            disabled
            id={wgData.key}
            v-model={wgData.value}
            placeholder={wgData.placeholder}
            class="wg-input" />
          <i class="cubeic-select"></i>
        </div>
        <van-popup v-model={[showPicker.value, 'show']} round position="bottom">
          <Picker
            show-toolbar
            columns={wgData.options}
            onCancel={closePicker}
            onConfirm={onConfirm}
          />
        </van-popup>
      </div>
    )
  }
}
