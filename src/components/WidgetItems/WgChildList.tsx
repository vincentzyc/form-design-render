import { defineComponent, reactive } from "vue";
import WidgetItems from './index';

export default defineComponent({
  name: "WgChildList",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { item } = reactive(props)
    const listNode = () => item.list.length > 0 ?
      (item.list as Record<string, any>[]).map(childItem => <WidgetItems item={childItem} key={childItem.key} />) : []

    return () => listNode()
  }
})
