import { computed, defineComponent, nextTick, onMounted, ref } from "vue";
import { changeRem, formatStyle } from "@/utils/format/unit";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const wgMarquee = ref()
    const marqueeWidth = ref(0)

    const wrapClass = ['wg-marquee', { 'flex align-middle': props.item.direction === 'left' }];

    const imgStyle = computed(() => ({
      width: marqueeWidth.value + 'px',
      height: props.item.direction === 'left' ? changeRem(props.item.style.height) : 'auto'
    }))


    const inlineClass = computed(() => props.item.direction === 'left' ? ['wg-marquee-left', 'flex-inline'] : ['wg-marquee-up'])

    const inlineStyle = computed(() => ({
      animation: `marquee-${props.item.direction} ${props.item.durationTime}s 0.2s linear infinite`
    }))


    const getImgDom = () => {
      return props.item.imgUrl && (
        <div class={inlineClass.value} style={inlineStyle.value}>
          <img src={props.item.imgUrl} alt="图片" style={imgStyle.value} />
          <img src={props.item.imgUrl} alt="图片" style={imgStyle.value} />
        </div>
      )
    }
    const geTextDom = () => {
      return (
        <div class={inlineClass.value} style={inlineStyle.value}>{
          [...props.item.textList, ...props.item.textList].map((texts, key) => (
            <p key={key} class="flex space-around" style={{ width: marqueeWidth.value + 'px' }}
            >
              {texts.split(/\s+/).map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </p>
          ))}
        </div>
      )
    }
    onMounted(async () => {
      await nextTick()
      setTimeout(() => {
        marqueeWidth.value = wgMarquee.value.offsetWidth || wgMarquee.value.clientWidth;
      }, 10);
    })

    return () => (
      <div
        ref="wgMarquee"
        class={wrapClass}
        style={formatStyle(props.item.style)}
      >
        {props.item.isImgBtn ? getImgDom() : geTextDom()}
      </div >
    )
  }
})