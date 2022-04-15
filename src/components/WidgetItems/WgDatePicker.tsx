import { defineComponent, ref } from 'vue';
import { DatetimePicker } from 'vant';
import { changeRem, formatStyle } from "@/utils/format/unit";
import { useWgFormList } from '@/composition/use-wgform';

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)

    const minDate = new Date(1920, 0, 1)
    const maxDate = new Date(2120, 12, 31)

    const showPicker = ref(false)
    const currentDate = ref(new Date())

    const formatDate = (Date: Date) => {
      const year = Date.getFullYear(),
        month = Date.getMonth() + 1,
        date = Date.getDate();
      return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`
    }

    const open = () => showPicker.value = true;

    const close = () => showPicker.value = false;

    const cancel = () => {
      close()
    }

    const confirm = (value: Date) => {
      formData[wgData.apiKey] = formatDate(value);
      close()
    }

    const wrapClass = ['wg-item', wgData.label.labelPosition === 'top' ? 'flex-column' : 'align-middle']
    return () => (
      <div>
        <div
          class={wrapClass}
          style={formatStyle(wgData.style)}
        >
          <div
            class="wg-title"
            v-show={wgData.showLabel}
            style={{ width: changeRem(wgData.label.labelWidth) }}
          >{wgData.label.labelTitle}</div>
          <div class="flex-auto disabled-input" onClick={open}>
            <input
              disabled
              id={wgData.key}
              v-model={formData[wgData.apiKey]}
              placeholder={wgData.placeholder}
              class="wg-input" />
          </div>
        </div>
        <van-popup position="bottom" v-model={[showPicker.value, 'show']} teleport="body">
          <DatetimePicker
            v-model={currentDate.value}
            type="date"
            title="选择年月日"
            min-date={minDate}
            max-date={maxDate}
            onCancel={cancel}
            onConfirm={confirm}
          />
        </van-popup>
      </div>
    )
  }
})
