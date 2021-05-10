import { changeRem, formatStyle } from "@/utils/format/unit";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { ScrollItem } from "./types";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const animate = ref(false),
      animateTimeId = ref(0),
      scrollTimeId = ref(0)

    const getScroll = () => {
      const scrollStyle = formatStyle({ ...props.item.style, borderRadius: props.item.style.height })
      return (
        <ul class="scroll-wrapper" style={scrollStyle}>
          {props.item.textList.map((text: ScrollItem, i: number) => (
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
        props.item.textList.push(props.item.textList[0]);
        props.item.textList.shift();
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