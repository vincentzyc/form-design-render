import { computed } from "vue"
import { useStore } from 'vuex';

export function useWgForm(item: Record<string, any>): Record<string, any> {
  const store = useStore()
  const formData = computed(() => store.state.formData)
  if (item.apiKey) {
    formData.value[item.apiKey] = item.value || ''
  }
  return {
    formData: formData.value,
    wgData: item
  }
  // const store = useStore()
  // const wgList = computed(() => store.state.wgList)
  // const index = wgList.value.findIndex((v: { key: string }) => v.key === item.key)
  // if (index > -1) {
  //   wgList.value.splice(index, 1, item)
  //   return {
  //     wgData: wgList.value[index],
  //     wgIndex: index
  //   }
  // } else {
  //   wgList.value.push(item)
  //   const wgIndex = wgList.value.length - 1
  //   return {
  //     wgData: wgList.value[wgIndex],
  //     wgIndex: wgIndex
  //   }
  // }
}

// use 
// import { useWgForm } from '@/composition/use-wgform'
// const { wgData,formData } = useWgForm(props.item)