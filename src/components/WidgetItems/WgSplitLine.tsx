import { defineComponent } from "vue"

export default defineComponent({
  props: {
    item: {
      type: Object,
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