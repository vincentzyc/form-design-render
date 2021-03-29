import { defineComponent } from "vue"
import { handleSubmit } from "@/validate/index"
import { formatStyle } from "@/utils/format/unit";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const wrapStyle = () => {
      if (!props.item.animation) return formatStyle(props.item.style)
      return formatStyle({
        ...props.item.style,
        ...props.item.animation
      })
    }
    const animteStyle = () => {
      if (!props.item.animation?.className) return { display: 'none' }
      return {
        ...props.item.animation,
        animationName: props.item.animation.className
      }
    }
    const wrapClass = () => {
      if (!props.item.animation) return 'flex flex-center'
      return `flex flex-center ${props.item.animation.className}`
    }

    const clickBtn = () => {
      switch (props.item.btnType) {
        case 'submit':
          handleSubmit()
          break;
        default:
          break;
      }
    }

    const getChildren = () => {
      return props.item.style.isImgBtn
        ? <img src={props.item.style.value} alt="图片按钮" width="100%" onClick={clickBtn} />
        : <button
          class="wg-button"
          style={formatStyle(props.item.style.btnStyle)}
          onClick={clickBtn}
        >{props.item.btnText}</button>
    }

    return () => (
      <div class={wrapClass()} style={wrapStyle()}>
        <span style={animteStyle()} class="animte-el"></span>
        {getChildren()}
      </div>
    )
  },
})

