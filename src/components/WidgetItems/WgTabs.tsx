import { defineComponent, PropType, reactive } from "vue";
import WidgetItems from './index';
import { Tabs, Tab } from 'vant';
import { useWgFormList } from '@/composition/use-wgform'
import { TypesTabs } from "./WgTypes";

// interface TypeTabsItem {
//   title: string,
//   name: string,
//   list: Record<any, any>[]
// }

export default defineComponent({
  name: "WgTabs",
  props: {
    item: {
      type: Object as PropType<TypesTabs>,
      required: true
    }
  },
  setup(props) {
    const { item } = reactive(props)
    const wgFormList = useWgFormList()

    const onClickTab = (v: number) => {
      const list = item.list[v].list
      wgFormList.useRemoveForm(list);
    }

    const listNode = () => item.list.length > 0 ?
      item.list.map(tabItem => (
        <Tab title={tabItem.title}>
          {tabItem.list.map(tab => (
            <WidgetItems item={tab} key={tab.key} parentsWg={props.item} />
          ))}
        </Tab>
      )) : []
    return () => (
      <div class="wg-tabs clearfix" style={item.style}>
        <Tabs v-model={[item.activeTab, 'active']} onClick={onClickTab}>
          {listNode()}
        </Tabs>
      </div >
    )
  }
})