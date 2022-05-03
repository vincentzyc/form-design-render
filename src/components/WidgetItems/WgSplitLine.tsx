import { defineComponent, PropType } from "vue"
import { TypesSplitLine } from "./WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesSplitLine>,
      default: () => ({})
    }
  },
  setup(props) {
    return () => (
      <div class="wg-splitLine wg-padding">
        <hr class="splitLine-hr" style={props.item.style} />
      </div>
    )
  }
})