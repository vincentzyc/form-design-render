import { defineComponent, ref } from 'vue'
import { formatStyle } from '@/utils/format/unit';
import { Checkbox } from 'vant';
import AgreementPopup from './AgreementPopup'
import { TitleText } from './types';
export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const elAgreement = ref()
    const openAgreement = (text: string, event: MouseEvent) => {
      event.stopPropagation();
      elAgreement.value.open(text);
    }
    const getAgreementList = () => {
      return (
        <Checkbox v-model={props.item.value} style={formatStyle(props.item.style)} shape="square">
          <p style={{ margin: 0, color: props.item.style.color }}>
            <span>{props.item.tipText}</span>
            {props.item.titleTexts.map((titleText: TitleText, key: number) => (
              <span key={key}>
                {key > 0 && <span>和</span>}
                {titleText.title && (
                  <span
                    style={{ color: props.item.agreementColor }}
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
      <div class="wg-agreement clearfix wg-padding" id={props.item.key}>
        {getAgreementList()}
        <AgreementPopup ref={elAgreement} />
      </div>
    )
  }
})