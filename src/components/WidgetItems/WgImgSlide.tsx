import { changeRem } from '@/utils/format/unit';
import { Swipe, SwipeItem } from 'vant';
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const wrapSlideStyle = { margin: props.item.style.margin },
      slideContentStyle = { width: '100%', maxWidth: '640px', height: changeRem(props.item.style.height + 'px') };
    const vantSwipeItem = props.item.value.map((v: Record<string, any>, i: number) => (
      <SwipeItem key={i}>
        <a href={v.url}>
          <img src={v.image} width="100%" height="100%" />
        </a>
      </SwipeItem>
    ))
    return () => (
      <div class="wg-imgslide">
        <div style={wrapSlideStyle}>
          <Swipe autoplay={props.item.interval} style={slideContentStyle}>
            {vantSwipeItem}
          </Swipe>
        </div>
      </div>
    )
  }
})