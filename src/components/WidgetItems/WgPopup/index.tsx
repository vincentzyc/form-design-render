import { defineComponent } from "vue"
import WidgetItems from "@/components/WidgetItems";
import './css/style.styl'

export default defineComponent({
  name: "CustomPopup",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const listNode = () => props.list.length > 0
      ? (props.list as Record<string, any>[]).map(item => <WidgetItems item={item} key={item.key} />)
      : []
    const close = () => {
      emit('update:modelValue', false)
    }
    return () => (
      <van-popup show={props.modelValue} {...{ 'onUpdate:show': (v: boolean) => emit('update:modelValue', v) }} class="custom-popup" style="max-width:576px; overflow: visible;">
        <svg class="close-icon" viewBox="0 0 1024 1024" onClick={close}><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m207.402667 676.437333a20.224 20.224 0 0 1-28.629334 0l-178.944-178.944-178.944 178.944a20.245333 20.245333 0 1 1-28.629333-28.629333l178.944-178.944-178.645333-178.645334a20.245333 20.245333 0 0 1 28.629333-28.629333l178.645333 178.645333 178.645334-178.645333a20.245333 20.245333 0 1 1 28.629333 28.629333l-178.645333 178.645334 178.944 178.944a20.224 20.224 0 0 1 0 28.629333z" fill="#ffffff"></path></svg>
        <div class="popup-wrap">
          {listNode()}
        </div>
      </van-popup>
    )
  }
})