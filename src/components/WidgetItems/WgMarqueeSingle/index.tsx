import { changeRem, formatStyle } from "@/utils/format/unit";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, PropType } from "vue";
import { TypesMarqueeSingle } from "../WgTypes";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesMarqueeSingle>,
      required: true
    }
  },
  setup(props) {
    const animate = ref(false),
      animateTimeId = ref(0),
      scrollTimeId = ref(0)

    const scrollList = ref<typeof props.item.textList>([])

    const getScroll = () => {
      const scrollStyle = formatStyle({ ...props.item.style, borderRadius: props.item.style.height })
      return (
        <ul class="scroll-wrapper" style={scrollStyle}>
          {scrollList.value.map((text, i: number) => (
            <li
              key={i}
              class={['flex', 'align-middle', 'scroll-item', { 'anim': animate.value && i === 0 }]}
              style={{ marginTop: animate.value && i === 0 ? `-${changeRem(props.item.style.height)}` : '' }}
            >
              <span
                class={['userimg', 'flex-none', text.sex === 'man' ? 'man' : 'woman']}
                style={formatStyle({ width: props.item.style.height })}
              ></span>
              <span class="scroll-text txtover">{text.text}</span>
            </li>
          ))}
        </ul>
      )
    }
    const scroll = () => {
      if (animate.value) return;
      clearTimeout(animateTimeId.value);
      animate.value = true;
      animateTimeId.value = setTimeout(() => {
        scrollList.value.push(scrollList.value[0]);
        scrollList.value.shift();
        animate.value = false;
      }, 500);
    }

    onBeforeUnmount(() => {
      clearInterval(scrollTimeId.value);
      clearTimeout(animateTimeId.value);
    })

    onMounted(async () => {
      await nextTick()
      setTimeout(() => {
        scrollList.value = props.item.textList
        scrollTimeId.value = setInterval(scroll, props.item.durationTime * 1000);
      }, 10);
    })

    return () => (
      <div class="wg-marquee-single flex flex-center">
        {getScroll()}
      </div>
    )
  }
})