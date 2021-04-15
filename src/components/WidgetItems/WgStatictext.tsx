import { defineComponent } from "vue"
import { changeRem, formatStyle } from '@/utils/format/unit';
import { jumpLink } from '@/utils/validate/link';
import { useWgList } from '@/composition/use-wglist'
import CustomPopup from './WgPopup'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { wgData } = useWgList(props.item)
    const domStyle = {
      backgroundColor: wgData.backgroundColor || '',
      backgroundImage: wgData.backgroundImage ? `url(${wgData.backgroundImage})` : ''
    }
    const handleClick = () => {
      if (wgData.link) return jumpLink(wgData.link)
      if (wgData.popupList?.length > 0) {
        wgData.showPopup = true
      }
    }
    return () => (
      <div class="wg-staticText clearfix" style={domStyle} >
        <p style={formatStyle(wgData.style)} innerHTML={changeRem(wgData.value)} onClick={handleClick}></p>
        <CustomPopup list={wgData.popupList || []} modelValue={wgData.showPopup} {...{ 'onUpdate:modelValue': (v: boolean) => wgData.showPopup = v }} />
      </div>
    )
  }
})