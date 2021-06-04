import { computed } from "vue"
import { useStore } from '@/store'



export function useWgForm(item: Record<string, any>) {
  const store = useStore()
  const formData = computed(() => store.state.formData)
  const wgForms = computed(() => store.state.wgForms)
  const index = wgForms.value.findIndex(v => v.key === item.key)
  index > -1 ? wgForms.value.splice(index, 1, item) : wgForms.value.push(item)
  if (item.apiKey) formData.value[item.apiKey] = item.value || ''
  if (item.codeKey) formData.value[item.codeKey] = item.value || ''
  return {
    formData: formData.value,
    wgForms: wgForms.value,
    wgData: item
  }
  // const store = useStore()
  // const wgForms = computed(() => store.state.wgForms)
  // const index = wgForms.value.findIndex((v: { key: string }) => v.key === item.key)
  // if (index > -1) {
  //   wgForms.value.splice(index, 1, item)
  //   return {
  //     wgData: wgForms.value[index],
  //     wgIndex: index
  //   }
  // } else {
  //   wgForms.value.push(item)
  //   const wgIndex = wgForms.value.length - 1
  //   return {
  //     wgData: wgForms.value[wgIndex],
  //     wgIndex: wgIndex
  //   }
  // }
}

// use 
// import { useWgForm } from '@/composition/use-wgform'
// const { wgData,formData } = useWgForm(props.item)