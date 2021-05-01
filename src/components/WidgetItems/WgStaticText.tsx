import { defineComponent, ref } from "vue"
import { changeRem, formatStyle } from '@/utils/format/unit';
import { jumpLink } from '@/utils/validate/link';
import CustomPopup from './WgPopup'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const elCustomPopup = ref()
    const domStyle = {
      backgroundColor: props.item.backgroundColor || '',
      backgroundImage: props.item.backgroundImage ? `url(${props.item.backgroundImage})` : ''
    }
    const handleClick = () => {
      if (props.item.link) return jumpLink(props.item.link)
      if (props.item.popupList?.length > 0) {
        elCustomPopup.value.open()
      }
    }
    return () => (
      <div class="wg-staticText clearfix" style={domStyle} >
        <p style={formatStyle(props.item.style)} innerHTML={changeRem(props.item.value)} onClick={handleClick}></p>
        <CustomPopup ref={elCustomPopup} list={props.item.popupList || []} show={props.item.showPopup} v-model={[props.item.showPopup, 'show']} />
      </div>
    )
  }
})