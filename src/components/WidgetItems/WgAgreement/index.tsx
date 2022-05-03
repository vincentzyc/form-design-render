import { defineComponent, ref,PropType } from 'vue'
import { formatStyle } from '@/utils/format/unit'
import { Checkbox } from 'vant'
import AgreementPopup from './AgreementPopup'
import { useWgFormList } from '@/composition/use-wgform'
import { TypesAgreement } from "../WgTypes" 

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<TypesAgreement>,
      required: true
    }
  },
  setup(props) {
    const elAgreement = ref()
    const wgFormList = useWgFormList()
    const { wgData, formData } = wgFormList.useAddForm(props.item)

    const openAgreement = (text: string, event: MouseEvent) => {
      event.stopPropagation();
      elAgreement.value.open(text);
    }
    const getAgreementList = () => {
      return (
        <Checkbox v-model={formData[wgData.apiKey]} style={formatStyle(wgData.style)} shape="square">
          <p style={{ margin: 0, color: wgData.style.color }}>
            <span>{wgData.tipText}</span>
            {wgData.titleTexts.map((titleText, key: number) => (
              <span key={key}>
                {key > 0 && <span>和</span>}
                {titleText.title && (
                  <span
                    style={{ color: wgData.agreementColor }}
                    onClick={event => openAgreement(titleText.text, event)}
                  >{titleText.title}</span>
                )}
              </span>
            ))}
          </p>
        </Checkbox>
      )
    }
    return () => (
      <div class="wg-agreement clearfix wg-padding" id={wgData.key}>
        {getAgreementList()}
        <AgreementPopup ref={elAgreement} />
      </div>
    )
  }
})