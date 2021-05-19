import { computed, defineComponent, nextTick, onMounted, ref } from "vue"
import './style.styl'
// import { changeRem } from "@/utils/format/unit"
// import { useWgForm } from '@/composition/use-wgform'

const ITEM_WIDTH = 48;
const SHOW_NUMBER = 5;

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    pickerSlot: {
      type: Boolean,
      default: false
    },
    pickerStyle: {
      type: Object,
      default: () => {
        return {
          color: '#d68317'
        }
      }
    },
    itemWidth: {
      type: Number,
      default: ITEM_WIDTH
    },
    showNumber: {
      type: Number,
      default: SHOW_NUMBER
    },
    data: {
      type: Array,
      required: true
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit, slots }) {
    let bs: any = null
    const wgWrapper = ref(),
      currentIndex = ref(0),
      draging = ref(false),
      scrollEndTimer = ref(0),
      scrollX = ref(0)

    const currentValue = computed(() => props.data[currentIndex.value])

    const init = () => {
      bs = new window.BScroll(wgWrapper.value, {
        scrollX: true,
        probeType: 3 // listening scroll event
      })

      bs.on('touchEnd', pos => touchEnd(pos))

      bs.on('scrollEnd', pos => scrollEnd(pos))

      bs.on('beforeScrollStart', () => beforeScrollStart())

      bs.on('scrollCancel', () => scrollCancel())

      setDefaultIndex()

      // bs.on('scrollStart', () => {
      //   console.log('scrollStart-')
      // })
      // bs.on('scroll', ({ x }) => {
      //   console.log('scrolling-' + x)
      // })
      // bs.on('scrollEnd', () => {
      //   console.log('scrollingEnd')
      // })
    }
    const setCurrentIndex = (x) => {
      const scrollNewX = Math.abs(x) + props.itemWidth / 2;
      currentIndex.value = Math.floor(scrollNewX / props.itemWidth);

      console.log(currentIndex.value * props.itemWidth);

      scrollX.value = -currentIndex.value * props.itemWidth;

      bs.scrollTo(scrollX, 0, 200);

      emit('input', currentValue.value);
    }
    const touchEnd = (pos) => {
      draging.value = false;
      console.log('鼠标/手指离开', pos);
    }
    const scrollEnd = (pos) => {
      clearTimeout(scrollEndTimer.value);
      scrollEndTimer.value = setTimeout(() => {
        if (draging.value || scrollX.value === pos.x) return false;
        console.log('滑动结束', pos);
        draging.value = false;
        setCurrentIndex(pos.x);
      }, 50);
    }
    const beforeScrollStart = () => {
      draging.value = true;
      console.log('滑动开始之前');
    }
    const scrollCancel = () => {
      draging.value = false;
      console.log('滑动被取消');
    }

    const setDefaultIndex = () => {
      if (props.defaultIndex > 0) {
        currentIndex.value = props.defaultIndex;
        bs.scrollTo(-currentIndex.value * props.itemWidth, 0);
        emit('input', currentValue.value);
      }
    }

    const handClick = (key) => {
      if (currentIndex.value === key) return;
      currentIndex.value = key;
      scrollX.value = -currentIndex.value * props.itemWidth;
      bs.scrollTo(scrollX.value, 0, 150);
      emit('input', currentValue.value);
    }

    onMounted(async () => {
      await nextTick()
      init()
    })

    return () => (
      <div class="horizontal-container" style={{ width: props.itemWidth * props.showNumber + 'px' }}>
        <div class="scroll-wrapper" ref={wgWrapper} style={{ width: (props.data.length + props.showNumber - 1) * props.itemWidth + 'px' }}>
          <div class="scroll-content">
            <div class="scroll-item" style={{ width: props.itemWidth * (props.showNumber - 1) / 2 + 'px' }}></div>
            {props.data.map((item, key) => (
              <div
                class="scroll-item"
                key={key}
                style={[{ width: props.itemWidth + 'px' }, item === currentValue.value ? props.pickerStyle : {}]}
                onClick={() => handClick(key)}
              >
                {props.pickerSlot ? slots.default?.(item) : <span>{item}</span>}
              </div>
            ))}
            <div class="scroll-item" style={{ width: props.itemWidth * (props.showNumber - 1) / 2 + 'px' }}></div>
          </div>
        </div>
      </div>
    )
  }
})
