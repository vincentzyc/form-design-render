import { defineComponent, reactive } from "vue";
import WidgetItems from './index';
import { Tabs, Tab } from 'vant';

interface TypeTabsItem {
  title: string,
  name: string,
  list: Record<any, any>[]
}

export default defineComponent({
  name: "WgTabs",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { item } = reactive(props)
    const listNode = () => item.list.length > 0 ?
      (item.list as TypeTabsItem[]).map(tabItem => (
        <Tab title={tabItem.title}>
          {tabItem.list.map(tab => (
            <WidgetItems item={tab} key={tab.key} />
          ))}
        </Tab>
      )) : []
    return () => (
      <div class="wg-tabs clearfix" style={item.style}>
        <Tabs v-model={[item.activeTab, 'active']}>
          {listNode()}
        </Tabs>
      </div >
    )
  }
})