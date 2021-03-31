import { defineComponent } from "vue"
import { formatStyle } from "@/utils/format/unit";
import { isLink, jumpLink } from "@/utils/validate/link";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const imgWrapClass = (link: string) => ['flex', 'flex-center', isLink(link) ? 'cursor-pointer' : ''];

    return () => (
      <div style={formatStyle(props.item.style)}>
        {props.item.imglist && (
          <ul class="flex flex-wrap">
            {props.item.imglist.map((imgitem: Record<string, any>, index: number) => (
              <li key={index} class={[props.item.styleType === 'col1' ? 'col-12' : 'col-6']}>
                <div class={imgWrapClass(imgitem.link)} onClick={() => jumpLink(imgitem.link)}>
                  <img alt="图片" style="width:100%" v-lazy={imgitem.img} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
})
