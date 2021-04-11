import { changeRem, formatStyle } from '@/utils/format/unit';
import { jumpLink } from '@/utils/validate/link';
import { defineComponent } from "vue"
// import CustomPopup from './wg-popup'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const domStyle = {
      backgroundColor: props.item.backgroundColor || '',
      backgroundImage: props.item.backgroundImage ? `url(${props.item.backgroundImage})` : ''
    }
    const handleClick = () => {
      if (props.item.link) return jumpLink(props.item.link)
//      if (props.item.popupList?.length > 0) {
//        emit('update:item', { ...props.item, showPopup: true })
//      }
    }
    return () => (
      <div class="wg-staticText clearfix" style={domStyle} >
        <p style={formatStyle(props.item.style)} innerHTML={changeRem(props.item.value)} onClick={handleClick}></p>
        {/* <CustomPopup list={props.item.popupList || []} vModel={props.item.showPopup} /> */}
      </div>
    )
  }
})